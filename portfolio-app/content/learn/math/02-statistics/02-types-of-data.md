---
title: "Types of Data"
lessonNumber: "2.2"
topic: "Statistics"
topicSlug: "02-statistics"
order: 22
minutes: 8
prerequisites: ['2.1']
summary: "Classify any column of data as nominal, ordinal, discrete or continuous."
mlUse: "The type of a column decides how it is prepared.
Labels are converted to numbers, and continuous numbers are often rescaled, before a
model can use them."
---

Goal: Classify any column of data as nominal, ordinal, discrete or continuous.
The idea in plain words Data comes in two main kinds, and each splits in two:
Note The build agent draws this as a tree. The top box is Data. Under it are Categorical and
Numerical. Under Categorical are Nominal and Ordinal. Under Numerical are Discrete and
Continuous.
The main difference between nominal and ordinal data is that ordinal data has a natural
order or ranking, and nominal data does not. Blue and brown eyes cannot be ranked.
Satisfaction levels such as poor, fair and good can.
Discrete versus continuous. Discrete data can only take certain values. Continuous data
can take almost any numeric value and, unlike discrete data, can have decimal values.
Key rules
Categorical data names groups. Numerical data measures or counts.
Nominal has no order. Ordinal has an order.
Discrete has separate values. Continuous has any value in a range.
Practice
Q1. What type of data is blood group?
A1. Categorical, nominal.
Q2. What type of data is education level (primary, secondary, university)?
A2. Categorical, ordinal, because the levels have a natural order.
Q3. What type of data is a weight of 62.5 kg?
A3. Numerical, continuous.
Kind Type Meaning Examples
Categorical Nominal Labels with no natural order.
Used purely for naming or
labelling
Eye colour (blue, brown),
marital status (single,
married), blood type (A, B, AB,
O), male or female, ball colours
Categorical Ordinal Labels that follow a natural
order or ranking
Rating of a phone's quality,
satisfaction level, education
level, competition results (1st,
2nd, 3rd), socio-economic
status
Numerical Discrete Numbers that can take only
certain separate values
Number of children, number of
goals
Numerical Continuous Numbers that can take
almost any value, including
decimals
Height (167.8 cm), temperature
(36.6 degrees)
Where this is used in machine learning: The type of a column decides how it is prepared.
Labels are converted to numbers, and continuous numbers are often rescaled, before a
model can use them.
