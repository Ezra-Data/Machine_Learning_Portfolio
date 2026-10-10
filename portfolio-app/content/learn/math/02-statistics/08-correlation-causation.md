---
title: "Correlation and Causation"
lessonNumber: "2.8"
topic: "Statistics"
topicSlug: "02-statistics"
order: 28
minutes: 12
prerequisites: ['2.3']
summary: "Read a scatter plot to tell positive and negative correlation, and explain why
correlation does not prove causation."
mlUse: "A correlation heatmap shows which features
move with the target, such as house price. Strongly related features make good model
inputs, but a link in the data does not prove a cause."
---

Goal: Read a scatter plot to tell positive and negative correlation, and explain why
correlation does not prove causation.
The idea in plain words Correlation is a measure of how strongly two variables are related
in a dataset. It describes the relationship between features. But it does not mean that one
event is the cause of the other.
Types of correlation
Positive correlation: the two variables move together, so one rises when the other
rises (directly proportional). Example: house price and number of rooms.
Negative correlation: the variables move in opposite directions, so one falls when the
other rises (inversely proportional). Example: house price and crime rate.
{"type":"scatter","xDomain":[0,6],"yDomain":[50,400],"xLabel":"Number of 
rooms","yLabel":"House price (thousands)","points":[[1,100],[2,150],[2,170],
[3,200],[3,230],[4,260],[4,280],[5,330]],"line":
{"slope":56.67,"intercept":45},"checkpoints":[[1,100],[3,200],
[5,330]],"caption":"Positive correlation. Houses with more rooms tend to cost 
more, so the points rise from left to right."}
{"type":"scatter","xDomain":[0,8],"yDomain":[100,400],"xLabel":"Crime 
rate","yLabel":"House price (thousands)","points":[[1,320],[2,300],[3,270],
[4,240],[5,200],[6,190],[7,150]],"line":
{"slope":-28.57,"intercept":352.86},"checkpoints":[[1,320],[4,240],
[7,150]],"caption":"Negative correlation. Where the crime rate is higher, 
house prices tend to be lower, so the points fall from left to right."}
Causation. In statistics, causation means that one event causes the other. It is a cause-
and effect relationship between two variables in a dataset.
Example: ice cream and temperature. How are ice cream sales affected by temperature?
Sales rise as the temperature rises, and here the weather really does drive the sales.
{"type":"scatter","xDomain":[18,34],"yDomain":[0,110],"xLabel":"Temperature 
(degrees Celsius)","yLabel":"Ice cream sales (units)","points":[[20,30],
[22,40],[24,45],[26,60],[28,70],[30,85],[32,95]],"line":
{"slope":5.536,"intercept":-83.2},"checkpoints":[[20,30],[26,60],
[32,95]],"caption":"Ice cream sales rise with temperature, a positive 
correlation."}
Why correlation is not causation. Ice cream sales and sunburn cases both rise in summer,
so they are correlated. But ice cream does not cause sunburn. Hot weather causes both.
Always ask whether a third factor could explain the link.
Key rules
Correlation measures how two variables move together. Its value, called r, runs from -1
(perfect negative) through 0 (none) to +1 (perfect positive).
Correlation does not prove causation.
Practice
Q1. As study hours go up, exam scores go up. Is this positive or negative correlation?
A1. Positive.
Q2. As the price of a product goes up, the number sold goes down. Which type is this?
A2. Negative correlation.
Q3. Ice cream sales and drowning cases both rise in summer. Does ice cream cause
drowning?
A3. No. Hot weather increases both. They are correlated, not causal.
Where this is used in machine learning: A correlation heatmap shows which features
move with the target, such as house price. Strongly related features make good model
inputs, but a link in the data does not prove a cause.
