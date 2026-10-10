---
title: Hypothesis Testing
lessonNumber: '2.9'
topic: Statistics
topicSlug: 02-statistics
order: 29
minutes: 15
prerequisites:
- '2.6'
summary: State a null and an alternative hypothesis, and explain how data is used
  to decide between them.
mlUse: Hypothesis testing is used to decide whether a new model is really better than
  an old one, or whether a difference in results could be just chance.
---


Goal: State a null and an alternative hypothesis, and explain how data is used to decide
between them.
The idea in plain words A hypothesis is an assumption made based on the observations
of an experiment. Hypothesis testing is a method used to test the assumptions made in
the experiment.
The two hypotheses
Null hypothesis (H0): the commonly accepted fact.
Alternative hypothesis (Ha): the opposite of the null hypothesis. It challenges the null
hypothesis.
A historical example. Ptolemy proposed that the sun and the other planets revolve
around the earth. That was the commonly accepted fact, so it plays the role of H0.
Aryabhata proposed that the earth and the other planets revolve around the sun. That
challenges it, so it plays the role of Ha.
A medical example. A pharmaceutical company has two drugs, Drug A and Drug B, for a
headache. Group 1 takes Drug A and group 2 takes Drug B. The time taken for relief, in
minutes:
Drug A: 12, 8, 13, 10, 7. The average is 50 / 5 = 10 minutes.
Drug B: 15, 12, 18, 16, 14. The average is 75 / 5 = 15 minutes.
Drug A takes 10 minutes on average and Drug B takes 15, so Drug A looks quicker. In the
notes, the claim that Drug A is quicker than Drug B is written as the null hypothesis, and
the claim that Drug B is quicker is the alternative.
{"type":"bars","xLabel":"Drug","yLabel":"Average minutes to relief","labels":
["Drug A","Drug B"],"series":[{"name":"Average time","values":
[10,15],"color":"accent"}],"checkpoints":[["Drug A",10],["Drug 
B",15]],"caption":"Average time to headache relief: Drug A takes 10 minutes 
and Drug B takes 15 minutes."}
Possible outcomes of a test. There are only two:
Reject the null hypothesis, or
Fail to reject the null hypothesis.
Note Many textbooks write the null hypothesis as no difference (both drugs take the
same time on average) and the alternative as there is a difference. The idea is the same in
both versions. H0 is the starting claim, Ha challenges it, and the data decides. The next
steps use that standard form.
How the decision is made. Compare the gap between the averages, here 5 minutes, with
the natural variation in the data. A statistical test turns this into a p-value: the probability
of seeing a gap this large if H0 were true. A common rule is to reject H0 when the p-value
is below 0.05. For these numbers, a two sample t-test gives a p-value of about 0.01, which
is below 0.05, so we reject the null hypothesis of no difference. The data supports that the
drugs differ, and Drug A is faster.
from scipy import stats
a = [12, 8, 13, 10, 7]
b = [15, 12, 18, 16, 14]
t, p = stats.ttest_ind(a, b)
print(p)    # about 0.01
Key rules
H0 is the claim we start with. Ha challenges it.
A test ends in one of two ways: reject H0, or fail to reject H0.
A small p-value (below 0.05 is common) is evidence against H0.
Practice
Q1. What are the two possible outcomes of a hypothesis test?
A1. Reject the null hypothesis, or fail to reject the null hypothesis.
Q2. Which hypothesis is the commonly accepted fact?
A2. The null hypothesis.
Q3. A test gives a p-value of 0.30. With the 0.05 rule, do we reject H0?
A3. No. 0.30 is larger than 0.05, so we fail to reject H0.
Where this is used in machine learning: Hypothesis testing is used to decide whether a
new model is really better than an old one, or whether a difference in results could be just
chance.
