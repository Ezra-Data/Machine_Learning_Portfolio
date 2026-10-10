---
title: "Vectors on a Graph: Magnitude and Direction"
lessonNumber: "1.2"
topic: "Linear Algebra"
topicSlug: "01-linear-algebra"
order: 12
minutes: 10
prerequisites: ['1.1']
summary: "Draw a 2D vector, then calculate its magnitude and its direction."
mlUse: "The magnitude of a data vector measures its
distance from the origin. Distance is the heart of methods that group similar data points,
such as clustering."
---

Goal: Draw a 2D vector, then calculate its magnitude and its direction.
The idea in plain words Every vector has two properties: magnitude (its length) and
direction (the angle it points at). On a graph, a vector starts at the origin and ends at the
point given by its components. The vector (2, 2) goes 2 steps right and 2 steps up. It can
also be written 2i + 2j, where i = (1, 0) and j = (0, 1) are one step arrows along the x-axis and
y-axis.
{"type":"plot","xDomain":[-4,4],"yDomain":[-1,4],"vectors":[{"from":
[0,0],"to":[2,2],"label":"(2, 2)","color":"accent"},{"from":[0,0],"to":
[-3,2],"label":"(-3, 2)","color":"accent2"}],"checkpoints":[[2,2],
[-3,2]],"caption":"Two vectors drawn from the origin. (2, 2) points up and to 
the right. (-3, 2) points up and to the left."}
Step 1: Magnitude. Use Pythagoras. For a vector with components a1 and a2:
|v| = \sqrt{a_1^2 + a_2^2}
For (2, 2): |v| = √(2² + 2²) = √8 ≈ 2.83.
Step 2: Direction. Draw the right angled triangle under the vector. The side along the x-
axis (adjacent) is 2, the side going up (opposite) is 2, and the vector itself is the
hypotenuse. Remember SOH CAH TOA:
\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}} \qquad \cos\theta = 
\frac{\text{adjacent}}{\text{hypotenuse}} \qquad \tan\theta = 
\frac{\text{opposite}}{\text{adjacent}}
Here tan θ  = 2 / 2 = 1, so θ  = tan⁻¹(1) = 45°. The direction of (2, 2) is 45 degrees.
A second example. For (-3, 2), the magnitude is √((-3)² + 2²) = √13 ≈ 3.61. The triangle angle
is tan⁻¹(2 / 3) ≈ 33.69°. Because the arrow points up and to the left, its direction measured
from the positive x-axis is 180° - 33.69° = 146.31°.
Key rules
Magnitude: |v| = √(a1² + a2²).
Direction: θ  = tan⁻¹(a2 / a1), adjusted for the quadrant the arrow is in.
A vector is fully described by its magnitude and direction, or by its components.
Practice
Q1. What is the magnitude of (3, 4)?
A1. √(9 + 16) = √25 = 5.
Q2. What is the direction of (1, 1)?
A2. tan θ  = 1, so 45 degrees.
Q3. What is the magnitude of (0, 5), and which way does it point?
A3. The magnitude is 5. It points straight up, at 90 degrees.
Where this is used in machine learning: The magnitude of a data vector measures its
distance from the origin. Distance is the heart of methods that group similar data points,
such as clustering.
