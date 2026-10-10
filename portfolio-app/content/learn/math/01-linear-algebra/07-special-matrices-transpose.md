---
title: "Special Matrices and the Transpose"
lessonNumber: "1.7"
topic: "Linear Algebra"
topicSlug: "01-linear-algebra"
order: 17
minutes: 8
prerequisites: ['1.6']
summary: "Recognise a null matrix and an identity matrix, and flip a matrix with the transpose."
mlUse: "Transposes are used to line up shapes before
multiplying matrices. The identity matrix acts like the number 1: it leaves a matrix
unchanged when you multiply by it."
---

Goal: Recognise a null matrix and an identity matrix, and flip a matrix with the transpose.
The idea in plain words Null matrix (zero matrix). Every entry is 0. It can be any shape.
\begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix} \qquad \begin{bmatrix} 0 & 0 & 0 
\\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}
Identity matrix. All the values on the main diagonal (top left to bottom right) are 1 and
every other value is 0. It is always square.
\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \qquad \begin{bmatrix} 1 & 0 & 0 
\\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}
Transpose. The transpose of a matrix is formed by turning all its rows into columns, and
the columns into rows. It is written with a small T.
A = \begin{bmatrix} 2 & 5 \\ 4 & 8 \end{bmatrix} \qquad A^T = \begin{bmatrix} 
2 & 4 \\ 5 & 8 \end{bmatrix}
B = \begin{bmatrix} 8 & 6 & 1 \\ 2 & 9 & 2 \\ 3 & 4 & 3 \end{bmatrix} \qquad 
B^T = \begin{bmatrix} 8 & 2 & 3 \\ 6 & 9 & 4 \\ 1 & 2 & 3 \end{bmatrix}
If A is m × n, then its transpose is n × m.
import numpy as np
print(np.zeros((2, 2)))   # null matrix
print(np.eye(3))          # 3 x 3 identity matrix
A = np.array([[2, 5], [4, 8]])
print(A.T)                # [[2 4] [5 8]]
Key rules
Null matrix: all zeros. Identity matrix: ones on the main diagonal, zeros elsewhere.
Transpose: rows become columns and columns become rows. An m × n matrix
becomes n × m.
Practice
Q1. Write the transpose of the row vector [1, 2, 3].
A1. The column with entries 1, 2 and 3 (a 3 × 1 matrix).
Q2. If A has shape 3 × 2, what is the shape of its transpose?
A2. 2 × 3.
Q3. Write the 2 × 2 identity matrix.
A3. The matrix with rows [1, 0] and [0, 1].
Where this is used in machine learning: Transposes are used to line up shapes before
multiplying matrices. The identity matrix acts like the number 1: it leaves a matrix
unchanged when you multiply by it.
