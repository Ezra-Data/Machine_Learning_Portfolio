---
title: "Functions, Graphs and Slope"
lessonNumber: "4.1"
topic: "Calculus"
topicSlug: "04-calculus"
order: 41
minutes: 10
prerequisites: ['0.1']
summary: "Read a function as a rule, calculate a slope, and see why a curve needs smaller and
smaller steps."
mlUse: "A model is a function. The slope tells us how
much the prediction changes when we nudge an input or a weight."
---

Goal: Read a function as a rule, calculate a slope, and see why a curve needs smaller and
smaller steps.
The idea in plain words A function is a rule that takes an input x and gives an output,
written f(x). For example f(x) = x² squares its input. A machine learning model is a
function: data goes in and a prediction comes out.
The slope tells how fast the output changes when the input changes:
\text{slope} = \frac{\text{change in } y}{\text{change in } x} = 
\frac{\text{rise}}{\text{run}}
For a straight line the slope is the same everywhere. The line through (1, 3) and (3, 7) has
slope (7 - 3) / (3 - 1) = 2.
A curve is different, because its slope keeps changing. Take f(x) = x² and ask for the slope
at x = 1. Measure it over smaller and smaller steps:
The slopes approach 2 as the step shrinks. Splitting into tiny pieces and watching the
change is exactly what differential calculus does. The slope at one single point is called
the derivative, the subject of the next lesson.
{"type":"plot","xDomain":[-1,3],"yDomain":[-1,6],"functions":
[{"fn":"x^2","label":"f(x) = x²","color":"accent"},{"fn":"2*x-
1","label":"slope 2 at x = 1","color":"accent2"}],"points":[{"at":
[1,1],"label":"(1, 1)"},{"at":[2,4],"label":"(2, 4)"}],"checkpoints":[[1,1],
[2,4],[0,-1],[2,3]],"caption":"The curve y = x² and its tangent line y = 2x - 
1 at the point (1, 1). The tangent has slope 2, the slope of the curve at 
that point."}
Key rules
Slope = change in y divided by change in x.
A straight line has one slope. A curve has a different slope at every point.
Shrinking the step gives the slope at a single point.
Practice
Q1. Find the slope of the line through (0, 1) and (2, 5).
A1. (5 - 1) / (2 - 0) = 2.
Q2. What is the slope of the line y = 3x + 2?
A2. 3.
Q3. For y = x², find the slope between x = 2 and x = 3.
A3. (9 - 4) / 1 = 5.
Step from x = 1 to Slope = change in x² / change in x
2 (4 - 1) / 1 = 3
1.1 (1.21 - 1) / 0.1 = 2.1
1.01 (1.0201 - 1) / 0.01 = 2.01
Where this is used in machine learning: A model is a function. The slope tells us how
much the prediction changes when we nudge an input or a weight.
