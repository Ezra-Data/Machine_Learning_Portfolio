---
title: "Percentiles and Quantiles"
lessonNumber: "2.7"
topic: "Statistics"
topicSlug: "02-statistics"
order: 27
minutes: 12
prerequisites: ['2.5']
summary: "Read a percentile, find the quartiles of a dataset, and say how a percentile differs
from a percentage."
mlUse: "Percentiles and quartiles help spot unusually
large or small values (outliers) in a column before a model is trained."
---

Goal: Read a percentile, find the quartiles of a dataset, and say how a percentile differs
from a percentage.
The idea in plain words These measures show how the data points are distributed in a
dataset, for example age, annual income or height.
Percentile. A percentile is a value on a scale of 100 that shows the percent of the data
that is equal to or below it. If 190 cm is the 80th percentile in a group of 15 people, then 80
percent of the heights are at or below 190 cm. Note that a percentile is different from a
percentage. A percentage is a part out of 100, like scoring 80 percent in a test. A
percentile is a position within the data.
Quantile. A quantile is a measure that tells how many values in a dataset are above or
below a certain limit. It divides the dataset into equally sized subgroups. The most
common quantiles are the quartiles:
Q1, the 25th percentile.
Q2, the 50th percentile, which is the median.
Q3, the 75th percentile.
Worked example. The heights, in cm, of 15 people, sorted:
150, 152, 155, 158, 160, 162, 165, 168, 170, 172, 175, 190, 192, 195, 198
Percentile of 190: 12 of the 15 values are at or below 190, and 12 / 15 = 80 percent. So 190
is the 80th percentile.
Median (Q2): the middle, 8th value, which is 168.
Q1: the first value with at least 25 percent of the data at or below it. The 4th value, 158,
has 4 / 15 ≈ 27 percent.
Q3: the first value with at least 75 percent at or below it. The 12th value, 190, has 80
percent. The 11th value, 175, has only 73 percent.
{"type":"plot","xDomain":[145,205],"yDomain":[-1,2],"points":[{"at":
[150,0],"label":""},{"at":[152,0],"label":""},{"at":[155,0],"label":""},
{"at":[158,0],"label":""},{"at":[160,0],"label":""},{"at":
[162,0],"label":""},{"at":[165,0],"label":""},{"at":[168,0],"label":""},
{"at":[170,0],"label":""},{"at":[172,0],"label":""},{"at":
[175,0],"label":""},{"at":[190,0],"label":""},{"at":[192,0],"label":""},
{"at":[195,0],"label":""},{"at":[198,0],"label":""}],"vlines":
[{"x":158,"label":"Q1 = 158"},{"x":168,"label":"median = 168"},
{"x":190,"label":"Q3 = 190"}],"checkpoints":[[150,0],[168,0],[190,0],
[198,0]],"caption":"Fifteen heights on a number line with the quartiles 
marked: Q1 at 158, the median at 168 and Q3 at 190."}
import numpy as np
heights = [150,152,155,158,160,162,165,168,170,172,175,190,192,195,198]
print(np.percentile(heights, [25, 50, 75]))   # [159.  168.  182.5]
Note Python gives 159 and 182.5 for Q1 and Q3 because it blends the two neighbouring
values. Different tools use slightly different rules for quartiles, so small differences are
normal.
Key rules
The kth percentile is the value with k percent of the data at or below it.
Quartiles split the data into four equal parts: Q1 is the 25th percentile, Q2 the median,
Q3 the 75th.
Percentile is a position in the data. Percentage is a part out of 100.
Practice
Q1. In a set of 80 values, 60 are at or below x. What percentile is x?
A1. 60 / 80 = 75 percent, so the 75th percentile.
Q2. Which percentile is the median?
A2. The 50th.
Q3. Into how many equal parts do quartiles divide a dataset?
A3. Four.
Where this is used in machine learning: Percentiles and quartiles help spot unusually
large or small values (outliers) in a column before a model is trained.
