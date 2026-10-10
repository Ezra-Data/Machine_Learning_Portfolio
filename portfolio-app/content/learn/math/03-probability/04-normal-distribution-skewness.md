---
title: "The Normal Distribution and Skewness"
lessonNumber: "3.4"
topic: "Probability"
topicSlug: "03-probability"
order: 34
minutes: 15
prerequisites: ['3.3', '2.5']
summary: "Describe the normal distribution, use the 68-95-99.7 rule, and recognise positive and
negative skew."
mlUse: "Many models assume that errors or features are
roughly normal. Checking for skew tells you whether a feature needs to be transformed,
and which average to use for missing values."
---

Goal: Describe the normal distribution, use the 68-95-99.7 rule, and recognise positive and
negative skew.
The idea in plain words A normal distribution is an arrangement of a dataset in which
most of the data points lie in the middle range, and the rest taper off symmetrically
toward either extreme. It is also known as the Gaussian distribution, or the bell shaped
curve. Heights of people are a classic example.
{"type":"plot","xDomain":[-4,4],"yDomain":[0,0.45],"functions":[{"fn":"exp(-
x^2/2)/2.5066","label":"normal curve","color":"accent"}],"areas":
[{"fn":"exp(-x^2/2)/2.5066","from":-1,"to":1}],"vlines":[{"x":-1,"label":"μ - 
σ "},{"x":0,"label":"μ"},{"x":1,"label":"μ + σ "}],"checkpoints":[[0,0.3989],
[1,0.242],[2,0.054]],"caption":"The normal curve is symmetric around the mean 
μ. The shaded area between μ - σ  and μ + σ  holds about 68 percent of the 
data."}
The 68-95-99.7 rule. Measure distance from the mean μ  in steps of the standard deviation
σ :
Worked example. Suppose adult heights have a mean of 160 cm and a standard deviation
of 10 cm. About 68 percent of people are between 150 and 170 cm. About 95 percent are
between 140 and 180 cm. About 99.7 percent are between 130 and 190 cm.
Skewness. Data is considered skewed when its distribution curve looks distorted, pulled
to the left or to the right. Here are the three shapes:
{"type":"plot","xDomain":[0,8],"yDomain":[0,0.45],"functions":[{"fn":"(8-
x)*exp(-(8-x))","label":"negatively skewed","color":"accent2"}],"vlines":
[{"x":6,"label":"mean"},{"x":6.32,"label":"median"},
{"x":7,"label":"mode"}],"checkpoints":[[7,0.3679]],"caption":"Negatively 
skewed data. The long tail is on the left, and the order from left to right 
is mean, median, mode."}
{"type":"plot","xDomain":[0,8],"yDomain":[0,0.45],"functions":[{"fn":"x*exp(-
x)","label":"positively skewed","color":"accent2"}],"vlines":
[{"x":1,"label":"mode"},{"x":1.68,"label":"median"},
{"x":2,"label":"mean"}],"checkpoints":[[1,0.3679]],"caption":"Positively 
skewed data. The long tail is on the right, and the order from left to right 
is mode, median, mean."}
Range Share of the data
μ  - σ  to μ  + σ about 68% (34.1% on each side of the mean)
μ  - 2 σ  to μ  + 2 σ about 95% (another 13.6% on each side)
μ  - 3 σ  to μ  + 3 σ about 99.7% (another 2.1% on each side)
Example. Average income of people in different cities is positively skewed: most people
earn moderate incomes, but a few very high earners stretch the tail to the right and pull
the mean upwards. That is why the median is the better average to use for skewed data,
as Lesson 2.5 said.
Key rules
Normal distribution: bell shaped, symmetric, mean = median = mode.
68 percent of the data lies within 1 σ  of the mean, 95 percent within 2 σ , and 99.7
percent within 3 σ .
Skew is named after the side the long tail is on.
Practice
Q1. In a normal distribution, how do the mean, median and mode compare?
A1. They are all equal.
Q2. Incomes in a city are positively skewed. Which is larger, the mean or the median?
A2. The mean.
Q3. About what percent of a normal distribution lies within 2 standard deviations of
the mean?
A3. About 95 percent.
Where this is used in machine learning: Many models assume that errors or features are
roughly normal. Checking for skew tells you whether a feature needs to be transformed,
and which average to use for missing values.
