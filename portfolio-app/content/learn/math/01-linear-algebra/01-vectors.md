---
title: "Vectors: Three Ways to See Them"
lessonNumber: "1.1"
topic: "Linear Algebra"
topicSlug: "01-linear-algebra"
order: 11
minutes: 8
prerequisites: ['0.1']
summary: "Explain what a vector is from the physics, mathematics and computer science
points of view, and tell a scalar from a vector."
mlUse: "Data is stored as vectors. One house can be the
vector [1450, 3, 12] for area, bedrooms and age. A whole dataset is many such vectors
stacked together, which is a matrix (Lesson 1.6)."
---

Goal: Explain what a vector is from the physics, mathematics and computer science
points of view, and tell a scalar from a vector.
The idea in plain words A vector can be seen in three ways. All three describe the same
thing.
1. The physics view. Some quantities have only a size. Speed is one: 60 km/h is a scalar.
Some quantities have a size and a direction. Velocity is one: 60 km/h north is a vector. A
scalar is simply one number.
2. The mathematics view. A vector is an arrow drawn on a graph. It has a magnitude (how
long the arrow is) and a direction (where it points). The next lesson draws these.
3. The computer science view. A vector is a list of numbers, like an array in Python. It can
be written as a row or as a column:
[\,2,\ -8,\ 7\,] \qquad \begin{bmatrix} 2 \\ -8 \\ 7 \end{bmatrix}
Worked example. Work experience and salary. Each person becomes one vector of two
numbers, [years of experience, salary]. One person is [5, 50000] and another is [10,
100000].
import numpy as np
person_1 = np.array([5, 50000])
person_2 = np.array([10, 100000])
print(person_1)
Key rules
A scalar is a single number. A vector is a list of numbers, or an arrow with size and
direction.
A vector can be a row or a column. Its numbers are called components.
The number of components is the dimension. [2, -8, 7] has 3 components.
Practice
Q1. Is a temperature of 25 degrees Celsius a scalar or a vector?
A1. A scalar, because it has size only.
Q2. Is a wind of 20 km/h blowing east a scalar or a vector?
A2. A vector, because it has size and direction.
Q3. How many components does [5, 50000] have?
A3. Two.
Where this is used in machine learning: Data is stored as vectors. One house can be the
vector [1450, 3, 12] for area, bedrooms and age. A whole dataset is many such vectors
stacked together, which is a matrix (Lesson 1.6).
