---
title: "Population, Sample and Sampling Techniques"
lessonNumber: "2.4"
topic: "Statistics"
topicSlug: "02-statistics"
order: 24
minutes: 12
prerequisites: ['2.3']
summary: "Explain population and sample, and choose between the four probability sampling
techniques."
mlUse: "Datasets are samples. When a dataset has very
few examples of one class, such as fraud cases among normal payments, stratified
sampling keeps the same proportion of each class in the training and test sets."
---

Goal: Explain population and sample, and choose between the four probability sampling
techniques.
The idea in plain words The population is the whole group you want to know about. A
sample is a smaller part of it, chosen to represent it. To find the average blood sugar level
of a whole population, you measure a sample and use it to estimate the answer.
Sampling techniques come in two families. In probability sampling, the members of the
population have an equal chance of being chosen. In non-probability sampling they do
not. The four probability techniques are:
1. Simple random sampling. The sample is picked at random from a large population, so
every data point has an equal probability of being selected. Example: an employee survey
in a company.
Pros: no sample bias, an unbiased sample, a simple method, and it needs less domain
knowledge.
Cons: the population size should be large, and it sometimes cannot represent the
population well.
2. Systematic sampling. The sample is picked from the population at regular intervals. It is
used when the population is homogeneous and the data points are uniformly distributed.
Example: select every 10th member of a population of 10,000. That gives a sample of 1,000.
Pros: quick and easy, less bias, even distribution of data.
Cons: risk of data manipulation, it needs randomness in the data, and the population
should not have patterns.
3. Stratified random sampling. The population is divided into smaller groups called strata,
and samples are taken randomly from all of them. Example: smartphone sales in all the
states.
Pros: it captures the important characteristics of the population, and precision is high
when the strata differ a lot from each other.
Cons: it cannot be used on a population that cannot be sorted into groups, and data
points may overlap between groups.
4. Cluster sampling. It is used when the population has inherent groups. The population is
divided into clusters, and then random clusters are taken as the sample. Example:
smartphone sales in randomly selected states.
Pros: it needs fewer resources and reduces variability.
Cons: it cannot be used on a population without natural groups, data points may
overlap, and it may give only a general insight into the whole population.
Stratified versus cluster. Stratified sampling takes some members from every group.
Cluster sampling takes whole groups, but only some of them.
Key rules
Population is the whole. A sample is the part used to represent it.
Probability sampling gives every member an equal chance of selection.
Four techniques: simple random, systematic, stratified, cluster.
Practice
Q1. Which technique selects every 10th member of a list?
A1. Systematic sampling.
Q2. A population of 10,000 is sampled systematically at every 10th member. How big is
the sample?
A2. 1,000.
Q3. What is the difference between stratified and cluster sampling?
A3. Stratified takes a random part from every group. Cluster takes all of some
randomly chosen groups.
Where this is used in machine learning: Datasets are samples. When a dataset has very
few examples of one class, such as fraud cases among normal payments, stratified
sampling keeps the same proportion of each class in the training and test sets.
