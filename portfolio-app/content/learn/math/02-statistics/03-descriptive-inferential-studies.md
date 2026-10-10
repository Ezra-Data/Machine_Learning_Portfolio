---
title: "Descriptive and Inferential Statistics, and Types of Study"
lessonNumber: "2.3"
topic: "Statistics"
topicSlug: "02-statistics"
order: 23
minutes: 10
prerequisites: ['2.2']
summary: "Tell descriptive statistics from inferential statistics, and name the three types of
statistical study."
mlUse: "Describing a dataset is descriptive statistics.
Training a model on a sample and expecting it to work on new data is inferential statistics."
---

Goal: Tell descriptive statistics from inferential statistics, and name the three types of
statistical study.
The idea in plain words There are two types of statistics.
Types of statistical study. There are three.
Sample study: a study carried out on a sample that represents the whole population.
Example: find the average blood sugar level of a population by measuring a sample.
Observational study: we only collect and analyse data. We do not inject any change.
We just observe and look for relationships in the data.
Experimental study: a study in which the variables are controlled and manipulated by
the experimenter.
Observational example. Record people's physical activity and their body weight. More
activity goes with lower weight. That is a negative correlation. Nothing was changed, we
only observed.
Descriptive statistics Inferential statistics
What it
does
Describes the data Gets inferences about the data
Related to Data analysis Data science
How Gives simple summaries of a sample,
using measures such as mean,
median and mode
Draws data from a sample, then
makes inferences and predictions
about the larger population the
sample came from
Main tools Measures of central tendency (mean,
median, mode) and measures of
variability (range, standard deviation,
variance)
Correlation between variables,
shown for example as a heatmap
{"type":"scatter","xDomain":[0,8],"yDomain":[60,100],"xLabel":"Physical 
activity (hours per week)","yLabel":"Body weight (kg)","points":[[1,95],
[2,92],[3,88],[4,85],[5,80],[6,78],[7,72]],"line":
{"slope":-3.75,"intercept":99.29},"checkpoints":[[1,95],[4,85],
[7,72]],"caption":"Body weight falls as weekly physical activity rises. The 
points slope downwards, which is a negative correlation."}
Experimental example. Split people into two groups. Group 1 follows healthy habits and
does regular activity. Group 2 does not and is the control group. The goal is to find the
optimum blood sugar level. A clinical trial of a medicine works the same way: one group
receives the medicine and the control group does not.
Key rules
Descriptive statistics describes a dataset. Inferential statistics draws conclusions
about a population from a sample.
Observational study: observe only. Experimental study: the experimenter changes the
variable and uses a control group.
Practice
Q1. Which type of statistics predicts something about a whole population from a
sample?
A1. Inferential statistics.
Q2. A researcher records the weight and the daily steps of 200 people without
changing anything. What type of study is this?
A2. An observational study.
Q3. Why does an experimental study need a control group?
A3. To compare against people who did not get the change, so the effect can be seen.
Where this is used in machine learning: Describing a dataset is descriptive statistics.
Training a model on a sample and expecting it to work on new data is inferential statistics.
