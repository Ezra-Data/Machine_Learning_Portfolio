---
title: 'Putting It Together: Predictions as a Matrix Times a Vector'
lessonNumber: '1.9'
topic: Linear Algebra
topicSlug: 01-linear-algebra
order: 19
minutes: 8
prerequisites:
- '1.8'
summary: See how one matrix multiplication produces predictions for many examples
  at once.
mlUse: This is the core of linear regression, including a house price predictor like
  the one in the portfolio.
---


Goal: See how one matrix multiplication produces predictions for many examples at once.
The idea in plain words Suppose a simple model predicts a house price (in thousands) as
10 + 2 × size, where size is in square metres. The numbers 10 and 2 are the model's
weights, written as the vector w = (10, 2). Put each house into a row of a matrix X. The first
column is always 1, so the 10 acts as a starting price. The second column is the size. Two
houses, of 50 and 80 square metres, give:
X w = \begin{bmatrix} 1 & 50 \\ 1 & 80 \end{bmatrix} \begin{bmatrix} 10 \\ 2 
\end{bmatrix} = \begin{bmatrix} 1 \cdot 10 + 50 \cdot 2 \\ 1 \cdot 10 + 80 
\cdot 2 \end{bmatrix} = \begin{bmatrix} 110 \\ 170 \end{bmatrix}
The shapes fit the rule: (2 × 2) times (2 × 1) gives (2 × 1), one predicted price per house.
Each answer is the dot product of one house's vector with the weights.
import numpy as np
X = np.array([[1, 50], [1, 80]])
w = np.array([10, 2])
print(X @ w)   # [110 170]
Key rules
Predictions for many examples at once = X × w.
Each row of X is one example. The vector w holds the weights the model has learned.
Training means finding the weights w that make the predictions close to the true
values. Lesson 4.4 shows how.
Practice
Q1. X has shape 3 × 2 and w has shape 2 × 1. What shape is the result?
A1. 3 × 1, one prediction for each of the 3 examples.
Q2. Use the same weights for a house of 100 square metres. What is the predicted
price?
A2. 10 + 2 × 100 = 210.
Q3. Why does the first column of X contain only ones?
A3. So that the first weight, 10, is added to every prediction as a starting value.
Where this is used in machine learning: This is the core of linear regression, including a
house price predictor like the one in the portfolio.
