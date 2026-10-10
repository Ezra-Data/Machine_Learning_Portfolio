---
title: "Integrals and Area Under a Curve"
lessonNumber: "4.5"
topic: "Calculus"
topicSlug: "04-calculus"
order: 45
minutes: 10
prerequisites: ['4.2', '3.4']
summary: "Explain an integral as an area, and connect it to probability."
mlUse: "Integrals turn probability curves into
probabilities. For example, the chance that a person's height is between two values is the
area under the height curve between them."
---

Goal: Explain an integral as an area, and connect it to probability.
The idea in plain words Integral calculus adds many small pieces together into one large
whole. The most common picture is the area under a curve: cut the area into thin strips,
find each strip's area, and add them up. The thinner the strips, the better the answer.
Worked example. The area under y = x² from x = 0 to x = 2. With 4 strips of width 0.5,
using the height at the right hand end of each strip: heights 0.25, 1, 2.25, 4. The area is
about 0.5 × (0.25 + 1 + 2.25 + 4) = 3.75. That overestimates. With more and more strips it
settles at the exact value, written as an integral:
\int_0^2 x^2\,dx = \left[\frac{x^3}{3}\right]_0^2 = \frac{8}{3} \approx 2.67
The rule used is that the integral of x^n is x^(n+1) / (n + 1). Integrals and derivatives are
opposites: differentiating x³ / 3 gives back x².
{"type":"plot","xDomain":[-0.5,3],"yDomain":[-0.5,6],"functions":
[{"fn":"x^2","label":"y = x²","color":"accent"}],"areas":
[{"fn":"x^2","from":0,"to":2}],"points":[{"at":[2,4],"label":"(2, 
4)"}],"checkpoints":[[1,1],[2,4]],"caption":"The shaded area under y = x² 
between x = 0 and x = 2 equals 8/3, about 2.67."}
Link to probability. For a continuous random variable, such as height, probability is an
area under its curve. The total area under any probability curve is 1. The area under the
normal curve between μ  - σ  and μ  + σ  is about 0.683, which is the 68 percent from Lesson
3.4. For a discrete variable, such as the Poisson counts, we add up bar heights instead of
finding an area.
Key rules
An integral adds many small pieces into a whole, often the area under a curve.
The integral of x^n is x^(n+1) / (n + 1), plus a constant when no limits are given.
Total area under a probability curve = 1.
Practice
Q1. Find the integral of 2x from 0 to 3.
A1. x² evaluated from 0 to 3 is 9.
Q2. What is the integral of x² without limits?
A2. x³ / 3 + C.
Q3. What is the total area under any probability curve?
A3. 1.
Where this is used in machine learning: Integrals turn probability curves into
probabilities. For example, the chance that a person's height is between two values is the
area under the height curve between them.
