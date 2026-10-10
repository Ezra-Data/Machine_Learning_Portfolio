---
title: "Vector Operations: Add, Subtract and Scale"
lessonNumber: "1.3"
topic: "Linear Algebra"
topicSlug: "01-linear-algebra"
order: 13
minutes: 10
prerequisites: ['1.2']
summary: "Add, subtract and scale vectors, and see what each does on a graph."
mlUse: "Models combine data by adding vectors and
rescale it by multiplying by numbers. Training itself is a long series of small vector
additions, as Lesson 4.4 shows."
---

Goal: Add, subtract and scale vectors, and see what each does on a graph.
The idea in plain words Three operations change vectors: adding two vectors, subtracting
two vectors, and multiplying a vector by a scalar (a single number). Adding or subtracting
two vectors always gives a vector.
Addition. Add the matching components. For a = (2, 1) and b = (1, 3):
a + b = (2 + 1, 1 + 3) = (3, 4)
On the graph, place the tail of b at the tip of a. The arrow from the origin to the end of b is
a + b.
{"type":"plot","xDomain":[-1,5],"yDomain":[-1,5],"vectors":[{"from":
[0,0],"to":[2,1],"label":"a = (2, 1)","color":"accent"},{"from":[0,0],"to":
[1,3],"label":"b = (1, 3)","color":"accent2"},{"from":[2,1],"to":
[3,4],"label":"b moved to the tip of a","color":"accent2","dashed":true},
{"from":[0,0],"to":[3,4],"label":"a + b = (3, 
4)","color":"text"}],"checkpoints":[[2,1],[1,3],[3,4]],"caption":"Adding 
vectors tip to tail. Vector a is (2, 1), vector b is (1, 3), and their sum is 
(3, 4)."}
Subtraction. Subtract the matching components. Subtracting b is the same as adding the
opposite arrow: a - b = a + (-b). Example:
(5, 3) - (3, 2) = (5 - 3, 3 - 2) = (2, 1)
Multiplying a vector by a scalar. Multiply every component by the number. Take v = (3, 3):
2 × v = (6, 6). Same direction, twice as long.
0.5 × v = (1.5, 1.5). Same direction, half as long.
-0.5 × v = (-1.5, -1.5). Half as long, and the direction is flipped.
import numpy as np
a = np.array([2, 1])
b = np.array([1, 3])
print(a + b)      # [3 4]
print(a - b)      # [ 1 -2]
print(-0.5 * np.array([3, 3]))   # [-1.5 -1.5]
Key rules
Add or subtract two vectors by combining matching components. Both vectors must
have the same number of components.
A scalar larger than 1 stretches a vector. A scalar between 0 and 1 shrinks it. A negative
scalar flips its direction.
Practice
Q1. Work out (4, 1) + (2, 5).
A1. (6, 6).
Q2. Work out (7, 4) - (3, 4).
A2. (4, 0).
Q3. Work out 3 × (1, -2).
A3. (3, -6).
Where this is used in machine learning: Models combine data by adding vectors and
rescale it by multiplying by numbers. Training itself is a long series of small vector
additions, as Lesson 4.4 shows.
