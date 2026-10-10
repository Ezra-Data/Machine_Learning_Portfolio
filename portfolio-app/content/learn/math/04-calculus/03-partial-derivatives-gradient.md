---
title: "Partial Derivatives and the Gradient"
lessonNumber: "4.3"
topic: "Calculus"
topicSlug: "04-calculus"
order: 43
minutes: 10
prerequisites: ['4.2', '1.2']
summary: "Take a partial derivative, build a gradient vector, and say which way it points."
mlUse: "The loss depends on many weights at once. The
gradient tells us, for every weight, how to change it to reduce the loss."
---

Goal: Take a partial derivative, build a gradient vector, and say which way it points.
The idea in plain words A real model has many numbers to adjust, not one. A function of
several variables, such as f(x, y), has one slope for each variable. A partial derivative
differentiates with respect to one variable and treats the others as constants.
For f(x, y) = x² + 3y:
The partial derivative with respect to x is 2x. (The 3y part is treated as a constant, so it
disappears.)
The partial derivative with respect to y is 3.
The gradient collects all the partial derivatives into one vector, written ∇ f:
\nabla f = \left(\frac{\partial f}{\partial x},\ \frac{\partial f}{\partial 
y}\right)
At the point (2, 1), the gradient of x² + 3y is (4, 3).
The key fact. The gradient points in the direction in which the function increases fastest.
Walking in the opposite direction, along minus the gradient, goes downhill fastest.
Worked example. For f(x, y) = x² + y², the gradient is (2x, 2y). At the point (3, 4) it is (6, 8),
which has magnitude 10 and points away from the lowest point, the origin. Minus the
gradient, (-6, -8), points back toward the origin.
{"type":"plot","xDomain":[-5,7],"yDomain":[-5,9],"vectors":[{"from":
[3,4],"to":[6,8],"label":"gradient (6, 8): uphill","color":"accent"},{"from":
[3,4],"to":[-3,-4],"label":"minus gradient (-6, -8): 
downhill","color":"accent2"}],"points":[{"at":[3,4],"label":"(3, 4)"},{"at":
[0,0],"label":"lowest point (0, 0)"}],"checkpoints":[[6,8],[-3,-4],
[0,0]],"caption":"For f(x, y) = x² + y² at the point (3, 4), the gradient (6, 
8) points uphill and its opposite points downhill, through the lowest point 
at the origin."}
Key rules
A partial derivative treats every other variable as a constant.
The gradient is the vector of all partial derivatives.
The gradient points uphill. Minus the gradient points downhill.
Practice
Q1. Find the partial derivative of x²y with respect to x.
A1. 2xy.
Q2. Find the gradient of x² + y² at (1, 2).
A2. (2, 4).
Q3. To make f smaller, should we move along the gradient or against it?
A3. Against it.
Where this is used in machine learning: The loss depends on many weights at once. The
gradient tells us, for every weight, how to change it to reduce the loss.
