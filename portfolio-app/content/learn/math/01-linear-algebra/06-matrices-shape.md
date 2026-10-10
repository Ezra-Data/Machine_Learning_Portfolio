---
title: "Matrices: Scalar, Vector, Matrix and Shape"
lessonNumber: "1.6"
topic: "Linear Algebra"
topicSlug: "01-linear-algebra"
order: 16
minutes: 10
prerequisites: ['1.1']
summary: "Tell a scalar, a vector and a matrix apart, and read the shape of a matrix."
mlUse: "A dataset is a matrix. Every row is one record,
such as one house, and every column is one feature, such as area or age. In pandas,
house_data.head()  shows the first 5 rows of that matrix."
---

Goal: Tell a scalar, a vector and a matrix apart, and read the shape of a matrix.
The idea in plain words There are three kinds of data holders. A scalar is a single number,
such as 24. A vector is a list of numbers, either a row or a column. A matrix is a table with
several rows and several columns.
[\,2,\ -8,\ 7\,] \qquad \begin{bmatrix} -4 \\ -4 \\ 27 \end{bmatrix} \qquad 
\begin{bmatrix} 1 & 4 & 5 \\ 2 & 7 & 3 \\ 8 & -3 & 1 \end{bmatrix}
The first is a row vector, the second is a column vector and the third is a matrix.
Shape of a matrix. The shape is written rows × columns. Read it as: number of rows first,
then number of columns.
\begin{bmatrix} 2 & 5 \\ 4 & 8 \end{bmatrix} \text{ is } 2 \times 2 \qquad 
\begin{bmatrix} 8 & 6 & 1 \\ 2 & 9 & 2 \\ 3 & 4 & 3 \end{bmatrix} \text{ is } 
3 \times 3 \qquad \begin{bmatrix} 2 & 5 \\ 4 & 8 \\ 6 & 1 \end{bmatrix} 
\text{ is } 3 \times 2
A matrix does not have to be square. It can have a different number of rows and columns.
A vector is a special matrix with only one row or only one column.
General notation. The entry in row i and column j is written a(i, j). A matrix with m rows
and n columns is an m × n matrix.
\begin{bmatrix} a_{1,1} & a_{1,2} & a_{1,3} & \cdots \\ a_{2,1} & a_{2,2} & 
a_{2,3} & \cdots \\ a_{3,1} & a_{3,2} & a_{3,3} & \cdots \\ \vdots & \vdots & 
\vdots & \ddots \end{bmatrix}
import numpy as np
M = np.array([[1, 4, 5], [2, 7, 3], [8, -3, 1]])
print(M.shape)                  # (3, 3)
R = np.random.rand(3, 3)        # a random 3 x 3 matrix
Key rules
Scalar: one number. Vector: one row or one column. Matrix: rows and columns.
Shape = rows × columns.
In a(i, j), i is the row and j is the column.
Practice
Q1. What is the shape of the matrix with rows [1, 4, 5] and [2, 7, 3]?
A1. 2 × 3, because it has 2 rows and 3 columns.
Q2. In a(2, 3), which row and which column is meant?
A2. Row 2 and column 3.
Q3. The vector [2, -8, 7] is also a matrix. What is its shape?
A3. 1 × 3, one row and three columns.
Where this is used in machine learning: A dataset is a matrix. Every row is one record,
such as one house, and every column is one feature, such as area or age. In pandas,
house_data.head()  shows the first 5 rows of that matrix.
