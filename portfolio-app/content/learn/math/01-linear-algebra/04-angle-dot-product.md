---
title: "Angle Between Vectors and the Dot Product"
lessonNumber: "1.4"
topic: "Linear Algebra"
topicSlug: "01-linear-algebra"
order: 14
minutes: 12
prerequisites: ['1.3']
summary: "Calculate a dot product and use it to find the angle between two vectors."
mlUse: "Cosine similarity compares two items by
direction. Recommendation systems, such as a movie recommender, and text matching
tools often rely on it."
---

Goal: Calculate a dot product and use it to find the angle between two vectors.
The idea in plain words When the angle between two vectors is very small, the vectors
point almost the same way, so they are similar. This idea is called cosine similarity. Data
points that sit close together in direction share similar properties.
The dot product. Multiply the matching components and add the results. The answer is a
scalar, not a vector. For a = (2, 3) and b = (4, 4):
a · b = (2 × 4) + (3 × 4) = 8 + 12 = 20
Finding the angle. The dot product is also equal to
a \cdot b = |a|\,|b|\cos\theta
where θ  is the angle between the two vectors. Work through it:
|a| = √(2² + 3²) = √13 ≈ 3.606
|b| = √(4² + 4²) = √32 ≈ 5.657
cos θ  = 20 / (3.606 × 5.657) = 20 / 20.396 ≈ 0.9806
θ  = cos⁻¹(0.9806) ≈ 11.31°
The angle is small, so a and b are very similar in direction.
{"type":"plot","xDomain":[-1,5],"yDomain":[-1,5],"vectors":[{"from":
[0,0],"to":[2,3],"label":"a = (2, 3)","color":"accent"},{"from":[0,0],"to":
[4,4],"label":"b = (4, 4)","color":"accent2"}],"checkpoints":[[2,3],
[4,4]],"caption":"Vectors a = (2, 3) and b = (4, 4) from the origin. The 
angle between them is about 11.31 degrees."}
import numpy as np
a = np.array([2, 3])
b = np.array([4, 4])
print(np.dot(a, b))                      # 20, a single value
cos_theta = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))
print(np.degrees(np.arccos(cos_theta)))  # about 11.31
To draw a vector with matplotlib use plt.quiver(0, 0, x, y, angles='xy',
scale_units='xy', scale=1) .
Key rules
Dot product: multiply matching components, then add. The result is a scalar.
a · b = |a| |b| cos θ .
Cosine similarity is cos θ . It is 1 when the vectors point the same way, 0 when they are
at 90 degrees, and -1 when they point opposite ways.
Practice
Q1. Work out (1, 2) · (3, 4).
A1. 1 × 3 + 2 × 4 = 11.
Q2. Work out (1, 0) · (0, 1). What does the answer say about the angle?
A2. It is 0, so the angle is 90 degrees.
Q3. If the angle between two vectors is very small, are they similar or different?
A3. Similar.
Where this is used in machine learning: Cosine similarity compares two items by
direction. Recommendation systems, such as a movie recommender, and text matching
tools often rely on it.
