'use client';

import React, { useId } from 'react';

export interface GraphSpec {
  type: 'plot' | 'scatter' | 'bars';
  caption: string;
  xDomain?: [number, number];
  yDomain?: [number, number];
  xLabel?: string;
  yLabel?: string;
  style?: 'lines';
  functions?: Array<{
    fn: string;
    label?: string;
    color?: string;
  }>;
  vectors?: Array<{
    from: [number, number];
    to: [number, number];
    label?: string;
    color?: string;
    dashed?: boolean;
  }>;
  points?: Array<{
    at: [number, number];
    label?: string;
  }>;
  areas?: Array<{
    fn: string;
    from: number;
    to: number;
  }>;
  vlines?: Array<{
    x: number;
    label?: string;
  }>;
  line?: {
    slope: number;
    intercept: number;
  };
  labels?: string[];
  series?: Array<{
    name: string;
    values: number[];
    color?: string;
  }>;
  checkpoints?: any[];
}

function resolveColor(c?: string): string {
  if (!c) return 'var(--accent, #2DD4BF)';
  if (c === 'accent') return 'var(--accent, #2DD4BF)';
  if (c === 'accent2') return 'var(--accent-2, #8B5CF6)';
  if (c === 'text') return 'var(--text, #e8ecf4)';
  if (c === 'muted') return 'var(--muted, #64748b)';
  return c;
}

// Evaluates mathematical expression safely with given x
function evalMath(fn: string, x: number): number {
  try {
    const expr = fn
      .replace(/\^/g, '**')
      .replace(/exp\(([^)]+)\)/g, 'Math.exp($1)')
      .replace(/sin\(([^)]+)\)/g, 'Math.sin($1)')
      .replace(/cos\(([^)]+)\)/g, 'Math.cos($1)')
      .replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)')
      .replace(/(\d+)\*x/g, '$1*x')
      .replace(/(\d+)x/g, '$1*x');

    const fnRunner = new Function('x', 'Math', `return (${expr});`);
    const val = fnRunner(x, Math);
    return isFinite(val) ? val : 0;
  } catch {
    return 0;
  }
}

export default function MathGraph({ spec }: { spec: GraphSpec }) {
  const markerId = useId().replace(/:/g, '');
  const width = 640;
  const height = 360;
  const padding = { top: 30, right: 35, bottom: 45, left: 60 };

  const plotW = width - padding.left - padding.right;
  const plotH = height - padding.top - padding.bottom;

  // 1. PLOT & SCATTER coordinate transforms
  const xDomain = spec.xDomain || [0, 10];
  const yDomain = spec.yDomain || [0, 10];

  const scaleX = (x: number) => padding.left + ((x - xDomain[0]) / (xDomain[1] - xDomain[0])) * plotW;
  const scaleY = (y: number) => padding.top + plotH - ((y - yDomain[0]) / (yDomain[1] - yDomain[0])) * plotH;

  // Generate axes grid ticks
  const xTicks = 6;
  const yTicks = 5;
  const xStep = (xDomain[1] - xDomain[0]) / (xTicks - 1);
  const yStep = (yDomain[1] - yDomain[0]) / (yTicks - 1);

  return (
    <div className="math-graph-container my-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
      <div className="relative overflow-hidden rounded-xl bg-[var(--bg)] p-2">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto max-h-[380px] select-none text-xs"
          role="img"
          aria-label={spec.caption}
        >
          <defs>
            <marker
              id={`arrow-${markerId}`}
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 10 5 L 0 9 z" fill="currentColor" />
            </marker>
          </defs>

          {spec.type === 'bars' ? (
            // ── BARS & LINES ──
            <g>
              {(() => {
                const labels = spec.labels || [];
                const series = spec.series || [];
                const allVals = series.flatMap(s => s.values);
                const maxVal = Math.max(...allVals, 1) * 1.15;
                const minVal = 0;

                const bScaleY = (v: number) =>
                  padding.top + plotH - ((v - minVal) / (maxVal - minVal)) * plotH;

                return (
                  <>
                    {/* Y Grid lines */}
                    {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
                      const v = minVal + pct * (maxVal - minVal);
                      const y = bScaleY(v);
                      return (
                        <g key={i}>
                          <line
                            x1={padding.left}
                            x2={width - padding.right}
                            y1={y}
                            y2={y}
                            stroke="var(--border)"
                            strokeDasharray="4 4"
                          />
                          <text
                            x={padding.left - 10}
                            y={y + 4}
                            textAnchor="end"
                            fill="var(--muted)"
                            fontSize="10"
                          >
                            {v < 1 ? v.toFixed(3) : Math.round(v)}
                          </text>
                        </g>
                      );
                    })}

                    {/* Y Axis Label */}
                    {spec.yLabel && (
                      <text
                        x={-(height / 2)}
                        y={18}
                        transform="rotate(-90)"
                        textAnchor="middle"
                        fill="var(--muted)"
                        fontSize="11"
                      >
                        {spec.yLabel}
                      </text>
                    )}

                    {spec.style === 'lines' ? (
                      // Line series
                      <>
                        {series.map((s, sIdx) => {
                          const pts = s.values.map((v, i) => {
                            const x = padding.left + (i / Math.max(1, labels.length - 1)) * plotW;
                            const y = bScaleY(v);
                            return `${x},${y}`;
                          });
                          const color = resolveColor(s.color || (sIdx === 0 ? 'accent' : 'accent2'));

                          return (
                            <g key={sIdx}>
                              <polyline
                                fill="none"
                                stroke={color}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                points={pts.join(' ')}
                              />
                              {s.values.map((v, i) => {
                                const x = padding.left + (i / Math.max(1, labels.length - 1)) * plotW;
                                const y = bScaleY(v);
                                return (
                                  <circle
                                    key={i}
                                    cx={x}
                                    cy={y}
                                    r="3.5"
                                    fill={color}
                                  />
                                );
                              })}
                            </g>
                          );
                        })}
                      </>
                    ) : (
                      // Bar columns
                      <>
                        {labels.map((lbl, i) => {
                          const groupW = plotW / labels.length;
                          const barW = (groupW * 0.6) / Math.max(1, series.length);
                          const startX = padding.left + i * groupW + groupW * 0.2;

                          return (
                            <g key={i}>
                              {series.map((s, sIdx) => {
                                const v = s.values[i] ?? 0;
                                const y = bScaleY(v);
                                const bH = plotH + padding.top - y;
                                const bx = startX + sIdx * barW;
                                const color = resolveColor(s.color || (sIdx === 0 ? 'accent' : 'accent2'));

                                return (
                                  <g key={sIdx}>
                                    <rect
                                      x={bx}
                                      y={y}
                                      width={Math.max(2, barW - 3)}
                                      height={Math.max(0, bH)}
                                      fill={color}
                                      rx="3"
                                      opacity="0.9"
                                    />
                                    <text
                                      x={bx + barW / 2 - 1}
                                      y={y - 6}
                                      textAnchor="middle"
                                      fill={color}
                                      fontSize="10"
                                      fontWeight="600"
                                    >
                                      {v < 1 ? v.toFixed(3) : v}
                                    </text>
                                  </g>
                                );
                              })}
                              {/* X Axis Label */}
                              <text
                                x={startX + (series.length * barW) / 2}
                                y={height - padding.bottom + 18}
                                textAnchor="middle"
                                fill="var(--text-secondary)"
                                fontSize="11"
                              >
                                {lbl}
                              </text>
                            </g>
                          );
                        })}
                      </>
                    )}

                    {/* X Axis Title */}
                    {spec.xLabel && (
                      <text
                        x={padding.left + plotW / 2}
                        y={height - 10}
                        textAnchor="middle"
                        fill="var(--muted)"
                        fontSize="11"
                      >
                        {spec.xLabel}
                      </text>
                    )}

                    {/* Series Legend */}
                    {series.length > 1 && (
                      <g transform={`translate(${width - padding.right - 120}, ${padding.top})`}>
                        {series.map((s, idx) => (
                          <g key={idx} transform={`translate(0, ${idx * 16})`}>
                            <rect
                              width="12"
                              height="4"
                              y="3"
                              fill={resolveColor(s.color || (idx === 0 ? 'accent' : 'accent2'))}
                              rx="2"
                            />
                            <text x="18" y="8" fill="var(--muted)" fontSize="10">
                              {s.name}
                            </text>
                          </g>
                        ))}
                      </g>
                    )}
                  </>
                );
              })()}
            </g>
          ) : (
            // ── PLOT & SCATTER ──
            <g>
              {/* Grid Lines */}
              {Array.from({ length: yTicks }).map((_, i) => {
                const yVal = yDomain[0] + i * yStep;
                const y = scaleY(yVal);
                return (
                  <g key={`y-${i}`}>
                    <line
                      x1={padding.left}
                      x2={width - padding.right}
                      y1={y}
                      y2={y}
                      stroke="var(--border)"
                      strokeDasharray="4 4"
                    />
                    <text
                      x={padding.left - 10}
                      y={y + 4}
                      textAnchor="end"
                      fill="var(--muted)"
                      fontSize="10"
                    >
                      {Number.isInteger(yVal) ? yVal : yVal.toFixed(1)}
                    </text>
                  </g>
                );
              })}

              {Array.from({ length: xTicks }).map((_, i) => {
                const xVal = xDomain[0] + i * xStep;
                const x = scaleX(xVal);
                return (
                  <g key={`x-${i}`}>
                    <line
                      x1={x}
                      x2={x}
                      y1={padding.top}
                      y2={height - padding.bottom}
                      stroke="var(--border)"
                      strokeDasharray="4 4"
                    />
                    <text
                      x={x}
                      y={height - padding.bottom + 18}
                      textAnchor="middle"
                      fill="var(--muted)"
                      fontSize="10"
                    >
                      {Number.isInteger(xVal) ? xVal : xVal.toFixed(1)}
                    </text>
                  </g>
                );
              })}

              {/* Zero axes if in domain */}
              {yDomain[0] <= 0 && yDomain[1] >= 0 && (
                <line
                  x1={padding.left}
                  x2={width - padding.right}
                  y1={scaleY(0)}
                  y2={scaleY(0)}
                  stroke="var(--text-secondary)"
                  strokeWidth="1.2"
                />
              )}
              {xDomain[0] <= 0 && xDomain[1] >= 0 && (
                <line
                  x1={scaleX(0)}
                  x2={scaleX(0)}
                  y1={padding.top}
                  y2={height - padding.bottom}
                  stroke="var(--text-secondary)"
                  strokeWidth="1.2"
                />
              )}

              {/* Shaded Areas */}
              {spec.areas?.map((a, idx) => {
                const steps = 60;
                const step = (a.to - a.from) / steps;
                const pts: string[] = [];
                for (let i = 0; i <= steps; i++) {
                  const x = a.from + i * step;
                  const y = evalMath(a.fn, x);
                  pts.push(`${scaleX(x)},${scaleY(y)}`);
                }
                pts.push(`${scaleX(a.to)},${scaleY(0)}`);
                pts.push(`${scaleX(a.from)},${scaleY(0)}`);

                return (
                  <polygon
                    key={idx}
                    points={pts.join(' ')}
                    fill="var(--accent)"
                    opacity="0.18"
                  />
                );
              })}

              {/* Continuous Functions */}
              {spec.functions?.map((f, idx) => {
                const steps = 100;
                const step = (xDomain[1] - xDomain[0]) / steps;
                const pts: string[] = [];
                for (let i = 0; i <= steps; i++) {
                  const x = xDomain[0] + i * step;
                  const y = evalMath(f.fn, x);
                  if (y >= yDomain[0] - 2 && y <= yDomain[1] + 2) {
                    pts.push(`${scaleX(x)},${scaleY(y)}`);
                  }
                }
                const color = resolveColor(f.color);
                return (
                  <g key={idx}>
                    <polyline
                      fill="none"
                      stroke={color}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      points={pts.join(' ')}
                    />
                    {f.label && (
                      <text
                        x={scaleX(xDomain[0] + (xDomain[1] - xDomain[0]) * 0.7)}
                        y={padding.top + 18 + idx * 16}
                        fill={color}
                        fontSize="11"
                        fontWeight="600"
                      >
                        {f.label}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Vertical Lines */}
              {spec.vlines?.map((vl, idx) => {
                const x = scaleX(vl.x);
                return (
                  <g key={idx}>
                    <line
                      x1={x}
                      x2={x}
                      y1={padding.top}
                      y2={height - padding.bottom}
                      stroke="var(--accent-2)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    {vl.label && (
                      <text
                        x={x + 5}
                        y={padding.top + 20 + (idx % 3) * 16}
                        fill="var(--accent-2)"
                        fontSize="10"
                        fontWeight="600"
                      >
                        {vl.label}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Scatter Points & Fit Line */}
              {spec.type === 'scatter' && (
                <>
                  {spec.points?.map(([xVal, yVal]: any, idx: number) => (
                    <circle
                      key={idx}
                      cx={scaleX(xVal)}
                      cy={scaleY(yVal)}
                      r="4.5"
                      fill="var(--accent)"
                      stroke="var(--bg)"
                      strokeWidth="1"
                    />
                  ))}
                  {spec.line && (
                    <line
                      x1={scaleX(xDomain[0])}
                      y1={scaleY(spec.line.slope * xDomain[0] + spec.line.intercept)}
                      x2={scaleX(xDomain[1])}
                      y2={scaleY(spec.line.slope * xDomain[1] + spec.line.intercept)}
                      stroke="var(--accent-2)"
                      strokeWidth="2"
                      strokeDasharray="4 3"
                    />
                  )}
                </>
              )}

              {/* Points with labels */}
              {spec.points?.map((pt: any, idx: number) => {
                if (Array.isArray(pt)) return null;
                const x = scaleX(pt.at[0]);
                const y = scaleY(pt.at[1]);
                return (
                  <g key={idx}>
                    <circle cx={x} cy={y} r="4" fill="var(--text)" />
                    {pt.label && (
                      <text
                        x={x + 6}
                        y={y - 6}
                        fill="var(--text)"
                        fontSize="10"
                        fontWeight="600"
                      >
                        {pt.label}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Vectors */}
              {spec.vectors?.map((vec, idx) => {
                const x1 = scaleX(vec.from[0]);
                const y1 = scaleY(vec.from[1]);
                const x2 = scaleX(vec.to[0]);
                const y2 = scaleY(vec.to[1]);
                const color = resolveColor(vec.color);

                return (
                  <g key={idx} style={{ color }}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={color}
                      strokeWidth="2.2"
                      strokeDasharray={vec.dashed ? '4 4' : undefined}
                      markerEnd={!vec.dashed ? `url(#arrow-${markerId})` : undefined}
                    />
                    {vec.label && (
                      <text
                        x={(x1 + x2) / 2 + 8}
                        y={(y1 + y2) / 2 - 6}
                        fill={color}
                        fontSize="10"
                        fontWeight="600"
                      >
                        {vec.label}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* X & Y Axis Labels */}
              {spec.xLabel && (
                <text
                  x={padding.left + plotW / 2}
                  y={height - 10}
                  textAnchor="middle"
                  fill="var(--muted)"
                  fontSize="11"
                >
                  {spec.xLabel}
                </text>
              )}
              {spec.yLabel && (
                <text
                  x={-(height / 2)}
                  y={18}
                  transform="rotate(-90)"
                  textAnchor="middle"
                  fill="var(--muted)"
                  fontSize="11"
                >
                  {spec.yLabel}
                </text>
              )}
            </g>
          )}
        </svg>
      </div>
      <p className="mt-3 text-center text-xs text-[var(--text-secondary)] italic">
        {spec.caption}
      </p>
    </div>
  );
}
