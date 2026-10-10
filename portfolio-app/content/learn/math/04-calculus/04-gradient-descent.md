---
title: "Gradient Descent From Scratch"
lessonNumber: "4.4"
topic: "Calculus"
topicSlug: "04-calculus"
order: 44
minutes: 15
prerequisites: ['4.2', '3.1', '1.3']
summary: "Train a one weight model by hand with gradient descent, and see what the learning
rate does."
mlUse: "This is what training means. Almost every model,
from linear regression to deep networks, is trained by repeating this step on many
weights at once."
---

Goal: Train a one weight model by hand with gradient descent, and see what the learning
rate does.
The idea in plain words Training means adjusting the model until its loss is small. Gradient
descent does it with one repeated step: find the slope of the loss, then move the weight a
little in the downhill direction.
w_{\text{new}} = w - \eta \cdot \frac{dL}{dw}
Here w is the weight, L is the loss, and η  (eta) is the learning rate, the size of each step.
Worked example. A model predicts ŷ = w × x. The data is x = 1, 2, 3 and the true answers
are y = 2, 4, 6, so the best weight is w = 2. Use the loss from Lesson 3.1, the average
squared error:
L(w) = \frac{1}{3}\left[(2 - w)^2 + (4 - 2w)^2 + (6 - 3w)^2\right] = 
\frac{14}{3}(2 - w)^2
By the power and chain rules, the slope of the loss is:
\frac{dL}{dw} = \frac{28}{3}(w - 2)
Start at w = 0 with a learning rate of η  = 0.1:
The weight races toward 2 and the loss toward 0. Each step shrinks the distance to the
answer by the same factor, 1 - 0.1 × 28/3 ≈ 0.067.
Step w Loss L(w) Slope dL/dw Next w = w - 0.1 × slope
0 0 18.667 -18.667 1.867
1 1.867 0.083 -1.244 1.991
2 1.991 0.0004 -0.083 1.999
{"type":"plot","xDomain":[-0.5,4.5],"yDomain":[-1,30],"functions":
[{"fn":"4.6667*(2-x)^2","label":"loss L(w)","color":"accent"}],"points":
[{"at":[0,18.667],"label":"start: w = 0"},{"at":[1.867,0.083],"label":"after 
1 step"},{"at":[2,0],"label":"minimum: w = 2"}],"checkpoints":[[0,18.667],
[1.867,0.083],[2,0]],"caption":"The loss curve L(w). Gradient descent starts 
at w = 0 on the steep left side and slides down to the minimum at w = 2 in a 
few steps."}
import numpy as np
x = np.array([1, 2, 3])
y = np.array([2, 4, 6])
w, lr = 0.0, 0.1
for step in range(4):
    grad = np.mean(-2 * x * (y - w * x))   # derivative of the loss
    w = w - lr * grad
    print(step + 1, round(w, 4))
# prints 1.8667, 1.9911, 1.9994, 2.0
The learning rate matters
For this problem, each step multiplies the distance to 2 by 1 - η  × 28/3. At η  = 0.25 that
factor is -1.33, so the error grows every step instead of shrinking.
Key rules
Gradient descent: new weight = weight - learning rate × slope of the loss.
A negative slope makes the weight go up. A positive slope makes it go down.
The learning rate must be small enough to avoid overshooting.
Practice
Q1. Write the gradient descent update rule in words.
A1. The new weight is the old weight minus the learning rate times the slope of the loss.
Learning rate What happens
Very small, such as 0.001 Safe but very slow
Well chosen, such as 0.1 here Fast and steady
Too large, such as 0.25 here Each step overshoots by more than before, and the
weight flies away from 2
Q2. The slope of the loss at the current weight is negative. Does the weight go up or
down?
A2. Up, because we subtract a negative number.
Q3. What can happen if the learning rate is too large?
A3. The steps overshoot the minimum and the loss can grow instead of shrinking.
Where this is used in machine learning: This is what training means. Almost every model,
from linear regression to deep networks, is trained by repeating this step on many
weights at once.
