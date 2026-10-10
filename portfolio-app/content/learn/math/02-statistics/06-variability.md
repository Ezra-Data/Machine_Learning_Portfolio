---
title: "Measures of Variability: Range, Variance and Standard Deviation"
lessonNumber: "2.6"
topic: "Statistics"
topicSlug: "02-statistics"
order: 26
minutes: 15
prerequisites: ['2.5']
summary: "Calculate the range, variance and standard deviation, and explain why the mean
alone can mislead."
mlUse: "Spread tells you whether a feature carries useful
variety. It is also used to rescale features so that all of them have a similar size before a
model learns from them."
---

Goal: Calculate the range, variance and standard deviation, and explain why the mean
alone can mislead.
The idea in plain words Measures of variability tell you how the data is spread out in a
dataset.
Range: the difference between the largest and the smallest value. It gives a rough idea
of the spread.
Variance: a measure of how far each number in the set is from the mean, and therefore
from every other number in the set.
Standard deviation: the square root of the variance. It shows how spread out a group
of numbers is from the mean.
\text{Range} = \text{Max value} - \text{Min value} \qquad \sigma^2 = 
\frac{\sum (x - \mu)^2}{N} \qquad \sigma = \sqrt{\sigma^2}
Worked example. Two datasets:
A: -5, 0, 5, 10, 15
B: 3, 4, 5, 6, 7
Step 1: Mean. A: (-5 + 0 + 5 + 10 + 15) / 5 = 25 / 5 = 5. B: (3 + 4 + 5 + 6 + 7) / 5 = 25 / 5 = 5. Both
means are 5.
Step 2: Range. A: 15 - (-5) = 20. B: 7 - 3 = 4.
Step 3: Variance.
A: [(-5-5)² + (0-5)² + (5-5)² + (10-5)² + (15-5)²] / 5 = (100 + 25 + 0 + 25 + 100) / 5 = 250 / 5 =
50
B: [(3-5)² + (4-5)² + (5-5)² + (6-5)² + (7-5)²] / 5 = (4 + 1 + 0 + 1 + 4) / 5 = 10 / 5 = 2
Step 4: Standard deviation. A: √50 ≈ 7.07. B: √2 ≈ 1.41.
Both datasets have the same mean, 5, but A is far more spread out than B. The mean alone
hides this.
{"type":"plot","xDomain":[-8,18],"yDomain":[0,3],"points":[{"at":
[-5,2],"label":"A"},{"at":[0,2],"label":""},{"at":[5,2],"label":""},{"at":
[10,2],"label":""},{"at":[15,2],"label":""},{"at":[3,1],"label":"B"},{"at":
[4,1],"label":""},{"at":[5,1],"label":""},{"at":[6,1],"label":""},{"at":
[7,1],"label":""}],"vlines":[{"x":5,"label":"mean = 5"}],"checkpoints":
[[-5,2],[15,2],[3,1],[7,1]],"caption":"Dataset A (top row) is spread from -5 
to 15. Dataset B (bottom row) is bunched between 3 and 7. Both have a mean of 
5."}
Note These formulas divide by N, the number of values, as in the notes. When data is a
sample of a bigger population, many books divide by N - 1 instead. The course returns to
this when models are built.
import numpy as np
A = np.array([-5, 0, 5, 10, 15])
B = np.array([3, 4, 5, 6, 7])
print(A.max() - A.min(), np.var(A), np.std(A))   # 20 50.0 7.07...
print(B.max() - B.min(), np.var(B), np.std(B))   # 4 2.0 1.41...
Key rules
Range = largest - smallest.
Variance = the average of the squared distances from the mean.
Standard deviation = √variance, in the same units as the data.
A small standard deviation means the data is bunched near the mean. A large one
means it is spread out.
Practice
Q1. Find the range of 4, 9, 15.
A1. 15 - 4 = 11.
Q2. Find the variance of 2, 4, 6.
A2. The mean is 4. (4 + 0 + 4) / 3 = 8 / 3 ≈ 2.67.
Q3. A dataset has a variance of 25. What is its standard deviation?
A3. √25 = 5.
Where this is used in machine learning: Spread tells you whether a feature carries useful
variety. It is also used to rescale features so that all of them have a similar size before a
model learns from them.
