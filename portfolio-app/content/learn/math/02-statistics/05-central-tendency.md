---
title: "Measures of Central Tendency: Mean, Median and Mode"
lessonNumber: "2.5"
topic: "Statistics"
topicSlug: "02-statistics"
order: 25
minutes: 12
prerequisites: ['2.2']
summary: "Calculate the mean, median and mode, and use them to fill in missing values."
mlUse: "Real datasets almost always have gaps. Filling
them with the right measure of central tendency keeps the model from being misled."
---

Goal: Calculate the mean, median and mode, and use them to fill in missing values.
The idea in plain words A measure of central tendency is a value that represents the
centre point, or typical value, of a dataset. It summarises the data with one number. There
are three: the mean, the median and the mode.
Mean (arithmetic mean). The sum of the values divided by the number of values.
\mu = \frac{\sum x}{N}
Example. Five heights in cm: 160, 172, 165, 168, 174.
μ  = (160 + 172 + 165 + 168 + 174) / 5 = 839 / 5 = 167.8
Median. The middle value of the list. To find it, first sort the numbers from smallest to
largest.
Odd number of values: sorted list 160, 165, 168, 172, 174. The middle value is 168.
Even number of values: add a sixth height, 176, so the sorted list is 160, 165, 168, 172, 174,
176. There are two middle values, 168 and 172, so the median is their average: (168 + 172)
/ 2 = 170.
Mode. The value that occurs most often. In 2, 3, 3, 5, 7 the mode is 3. If no number in the
list is repeated, there is no mode.
Using central tendency to fill in missing values. Data preprocessing means preparing
the data before feeding it into a machine learning model. Measures of central tendency
are very useful for handling missing values in a dataset.
Mean: replace a missing value with the mean if the data is uniformly distributed,
meaning almost all the data points are spread in a similar way (a symmetric, bell-
shaped spread).
Median: replace a missing value with the median if the data is skewed (lopsided).
Mode: replace a missing value with the mode for categorical values, and also when the
data is skewed.
import pandas as pd
heights = pd.Series([160, 172, None, 168, 174])
heights = heights.fillna(heights.mean())   # fills the gap with the mean, 
168.5
print(heights.mean(), heights.median())
Note In this small code example the known values are 160, 172, 168 and 174, so their mean
is 168.5. That is the number used to fill the gap.
Key rules
Mean = sum divided by count. Median = middle value of the sorted list. Mode = most
frequent value.
Symmetric data: use the mean. Skewed data: use the median. Categorical data: use the
mode.
Practice
Q1. Find the mean of 2, 4, 6, 8.
A1. 20 / 4 = 5.
Q2. Find the median of 3, 9, 1, 7, 5.
A2. Sorted: 1, 3, 5, 7, 9. The median is 5.
Q3. Which measure would you use to fill a missing value in a very skewed income
column?
A3. The median.
Where this is used in machine learning: Real datasets almost always have gaps. Filling
them with the right measure of central tendency keeps the model from being misled.
