---
title: "Cross Product and Projection"
lessonNumber: "1.5"
topic: "Linear Algebra"
topicSlug: "01-linear-algebra"
order: 15
minutes: 12
prerequisites: ['1.4']
summary: "Calculate a cross product and a projection, and say what kind of answer each one
gives."
mlUse: "Projection is the idea behind finding a best fit
line and behind squeezing many features into fewer ones. The course returns to it when
models are built from scratch."
---

Goal: Calculate a cross product and a projection, and say what kind of answer each one
gives.
The idea in plain words There are two ways to multiply vectors. The dot product gives a
scalar. The cross product gives a vector. For two 3D vectors, the cross product is a new
vector that stands at right angles to both of them, and its length is |a| |b| sin θ .
a \times b = |a|\,|b|\sin\theta\;\hat{n}
To calculate it, use a determinant with the unit vectors i, j and k:
a \times b = \begin{vmatrix} i & j & k \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 
\end{vmatrix} = i(a_2 b_3 - a_3 b_2) - j(a_1 b_3 - a_3 b_1) + k(a_1 b_2 - a_2 
b_1)
Worked example. Take the same pair as the last lesson, with a third component of 0: a =
(2, 3, 0) and b = (4, 4, 0).
\begin{vmatrix} i & j & k \\ 2 & 3 & 0 \\ 4 & 4 & 0 \end{vmatrix} = i(3 \cdot 
0 - 0 \cdot 4) - j(2 \cdot 0 - 0 \cdot 4) + k(2 \cdot 4 - 3 \cdot 4) = -4k
The answer is the vector (0, 0, -4). It points along the z-axis, at right angles to the flat page
where a and b lie. Check its length: |a| |b| sin θ  = 3.606 × 5.657 × sin 11.31° ≈ 4, which
matches.
import numpy as np
a = np.array([2, 3, 0])
b = np.array([4, 4, 0])
print(np.cross(a, b))   # [ 0  0 -4]
Projection of a vector. The projection of a on b is the shadow that a casts onto the
direction of b. The result is a vector that points along b.
\text{proj}_{b}\,a = \frac{a \cdot b}{|b|^2}\; b
For a = (2, 3) and b = (4, 4): a · b = 20 and |b|² = 32, so the factor is 20 / 32 = 0.625. The
projection is 0.625 × (4, 4) = (2.5, 2.5).
{"type":"plot","xDomain":[-1,5],"yDomain":[-1,5],"vectors":[{"from":
[0,0],"to":[2,3],"label":"a = (2, 3)","color":"accent"},{"from":[0,0],"to":
[4,4],"label":"b = (4, 4)","color":"accent2"},{"from":[0,0],"to":
[2.5,2.5],"label":"projection of a on b = (2.5, 2.5)","color":"text"},
{"from":[2,3],"to":
[2.5,2.5],"label":"","color":"muted","dashed":true}],"checkpoints":[[2,3],
[4,4],[2.5,2.5]],"caption":"The shadow of a = (2, 3) on b = (4, 4) is the 
vector (2.5, 2.5). The dashed line from the tip of a meets b at a right 
angle."}
Key rules
Dot product gives a scalar. Cross product gives a vector.
The cross product of two 3D vectors is at right angles to both.
Projection of a on b = (a · b / |b|²) × b, and it is a vector along b.
Practice
Q1. Which product gives a single number, the dot product or the cross product?
A1. The dot product.
Q2. Find the projection of a = (3, 4) on b = (1, 0).
A2. a · b = 3 and |b|² = 1, so the projection is 3 × (1, 0) = (3, 0).
Q3. Find the cross product of (1, 0, 0) and (0, 1, 0).
A3. i(0·0 - 0·1) - j(1·0 - 0·0) + k(1·1 - 0·0) = k, which is (0, 0, 1).
Where this is used in machine learning: Projection is the idea behind finding a best fit
line and behind squeezing many features into fewer ones. The course returns to it when
models are built from scratch.
