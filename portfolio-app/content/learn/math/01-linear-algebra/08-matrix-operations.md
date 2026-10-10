---
title: "Matrix Operations: Add, Subtract, Scale and Multiply"
lessonNumber: "1.8"
topic: "Linear Algebra"
topicSlug: "01-linear-algebra"
order: 18
minutes: 15
prerequisites: ['1.7']
summary: "Add, subtract, scale and multiply matrices, and check whether an operation is
allowed before doing it."
mlUse: "Every prediction a model makes is a matrix
multiplication. Lesson 1.9 shows it."
---

Goal: Add, subtract, scale and multiply matrices, and check whether an operation is
allowed before doing it.
The idea in plain words There are four matrix operations. Two of them have a strict rule
about shape.
1. Addition. Two matrices can be added only if they have the same shape, meaning the
same number of rows and the same number of columns. Add matching entries.
\begin{bmatrix} 2 & 3 \\ 10 & 5 \end{bmatrix} + \begin{bmatrix} 10 & 5 \\ 20 
& 4 \end{bmatrix} = \begin{bmatrix} 12 & 8 \\ 30 & 9 \end{bmatrix} \qquad (2 
\times 2) + (2 \times 2) = (2 \times 2)
\begin{bmatrix} 2 & 1 \\ 4 & 2 \\ 6 & 3 \end{bmatrix} + \begin{bmatrix} 3 & 2 
\\ 3 & 6 \\ 2 & 5 \end{bmatrix} = \begin{bmatrix} 5 & 3 \\ 7 & 8 \\ 8 & 8 
\end{bmatrix} \qquad (3 \times 2) + (3 \times 2) = (3 \times 2)
2. Subtraction. The same rule: both matrices must have the same shape. Subtract
matching entries.
\begin{bmatrix} 2 & 3 \\ 10 & 5 \end{bmatrix} - \begin{bmatrix} 10 & 5 \\ 20 
& 4 \end{bmatrix} = \begin{bmatrix} -8 & -2 \\ -10 & 1 \end{bmatrix}
3. Multiplying by a scalar. Multiply every entry by the number. This works for vectors too,
because a vector is a matrix with one row or one column.
5 \times \begin{bmatrix} 2 \\ 4 \\ 6 \end{bmatrix} = \begin{bmatrix} 10 \\ 20 
\\ 30 \end{bmatrix} \qquad 5 \times \begin{bmatrix} 2 & 1 \\ 4 & 2 \\ 6 & 3 
\end{bmatrix} = \begin{bmatrix} 10 & 5 \\ 20 & 10 \\ 30 & 15 \end{bmatrix}
4. Multiplying two matrices. The rule: the number of columns in the first matrix must
equal the number of rows in the second. The answer has the same number of rows as the
first matrix and the same number of columns as the second.
(m \times n)\,(n \times p) = (m \times p)
For 2 × 2 matrices the general pattern is:
\begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} e & f \\ g & h 
\end{bmatrix} = \begin{bmatrix} ae + bg & af + bh \\ ce + dg & cf + dh 
\end{bmatrix}
Each entry is a dot product of a row from the first matrix with a column from the second.
Worked example:
\begin{bmatrix} 2 & 3 \\ 1 & 5 \end{bmatrix} \begin{bmatrix} 10 & 5 \\ 2 & 4 
\end{bmatrix} = \begin{bmatrix} 2 \cdot 10 + 3 \cdot 2 & 2 \cdot 5 + 3 \cdot 
4 \\ 1 \cdot 10 + 5 \cdot 2 & 1 \cdot 5 + 5 \cdot 4 \end{bmatrix} = 
\begin{bmatrix} 26 & 22 \\ 20 & 25 \end{bmatrix}
When it is not allowed. A 3 × 2 matrix times another 3 × 2 matrix cannot be multiplied,
because the first has 2 columns and the second has 3 rows, and 2 is not equal to 3.
Order matters. Multiplying in the other order gives a different answer. Using the same
two matrices, the second one times the first gives the matrix with rows [25, 55] and [8,
26], which is not the same as [26, 22] and [20, 25].
import numpy as np
A = np.array([[2, 3], [1, 5]])
B = np.array([[10, 5], [2, 4]])
print(A + B)
print(A - B)
print(5 * A)
print(A @ B)     # [[26 22] [20 25]]
print(B @ A)     # [[25 55] [ 8 26]]
Key rules
Add or subtract: the two matrices must have the same shape.
Scalar multiplication: multiply every entry.
Matrix multiplication: columns of the first must equal rows of the second. The result
has the rows of the first and the columns of the second.
A × B is usually not the same as B × A.
Practice
Q1. Can a 2 × 3 matrix be added to a 3 × 2 matrix?
A1. No, because the shapes are different.
Q2. A is 2 × 3 and B is 3 × 4. What is the shape of A × B?
A2. 2 × 4.
Q3. Work out 3 times the matrix with rows [1, 2] and [0, -1].
A3. The matrix with rows [3, 6] and [0, -3].
Where this is used in machine learning: Every prediction a model makes is a matrix
multiplication. Lesson 1.9 shows it.
