---
title: "The Derivative and Its Rules"
lessonNumber: "4.2"
topic: "Calculus"
topicSlug: "04-calculus"
order: 42
minutes: 12
prerequisites: ['4.1']
summary: "Differentiate simple functions with the standard rules, and use the derivative to
find a minimum."
mlUse: "Training searches for the lowest point of the loss.
The derivative tells which way is downhill and where the bottom is."
---

Goal: Differentiate simple functions with the standard rules, and use the derivative to
find a minimum.
The idea in plain words The derivative of f at x is the slope of the curve at that point. It is
what the slope over a step h settles to as the step shrinks to zero:
f'(x) = \lim_{h \to 0}\frac{f(x+h) - f(x)}{h}
It is also written df/dx. Check it for f(x) = x²: (x + h)² - x² = 2xh + h², and dividing by h gives
2x + h. As h shrinks to 0 this becomes 2x. So f'(x) = 2x, and at x = 1 the slope is 2, just as
the last lesson found.
The rules you need
Worked examples
f(x) = 3x² + 2x + 5 gives f'(x) = 6x + 2.
f(x) = (2x + 1)². By the chain rule, f'(x) = 2(2x + 1) × 2 = 8x + 4. Check by expanding: (2x
+ 1)² = 4x² + 4x + 1, and its derivative is 8x + 4.
Rule Statement Example
Constant the derivative of a constant is
0
derivative of 7 is 0
Power d/dx of x^n is n × x^(n-1) d/dx of x³ is 3x²
Constant
multiple
d/dx of c × f is c × f' d/dx of 5x² is 10x
Sum (f + g)' = f' + g' d/dx of (x² + x) is 2x + 1
Chain d/dx of f(g(x)) is f'(g(x)) ×
g'(x)
d/dx of (2x + 1)² is 2(2x + 1) × 2 = 8x +
4
Finding a minimum. At the lowest point of a smooth curve the slope is 0. Take f(x) = (x -
3)². Then f'(x) = 2(x - 3). Setting it to 0 gives x = 3, where f(3) = 0, the minimum. To the left
of 3 the slope is negative (the curve falls), for example f'(1) = -4. To the right it is positive
(the curve rises), for example f'(5) = 4.
{"type":"plot","xDomain":[0,6],"yDomain":[-1,10],"functions":[{"fn":"(x-
3)^2","label":"f(x) = (x - 3)²","color":"accent"}],"points":[{"at":
[3,0],"label":"minimum: slope 0"},{"at":[1,4],"label":"slope -4"},{"at":
[5,4],"label":"slope +4"}],"checkpoints":[[3,0],[1,4],[5,4]],"caption":"The 
curve y = (x - 3)². The slope is negative on the left of the minimum, zero at 
x = 3, and positive on the right."}
Key rules
The derivative is the slope of the curve at a point.
Power rule: x^n becomes n × x^(n-1). Constants disappear. Sums are differentiated
term by term.
Where the derivative is 0, the curve is flat: that is where a minimum or maximum can
be.
Practice
Q1. Find the derivative of x³.
A1. 3x².
Q2. Find the derivative of 5x² - x.
A2. 10x - 1.
Q3. At which x does (x - 2)² reach its minimum?
A3. At x = 2, because the derivative 2(x - 2) is 0 there.
Where this is used in machine learning: Training searches for the lowest point of the loss.
The derivative tells which way is downhill and where the bottom is.
