---
title: Probability Rules and Bayes' Theorem
lessonNumber: '3.6'
topic: Probability
topicSlug: 03-probability
order: 36
minutes: 12
prerequisites:
- '3.1'
summary: Use the basic probability rules and Bayes' theorem on a medical test example.
mlUse: Bayes' theorem is the basis of the Naive Bayes classifier, which is often used
  for spam filtering.
---


Goal: Use the basic probability rules and Bayes' theorem on a medical test example.
The idea in plain words The complement rule. The chance that an event does not happen
is 1 minus the chance that it does. P(not A) = 1 - P(A). On a die, P(not 6) = 1 - 1/6 = 5/6.
Independent events. If one event does not affect the other, multiply their probabilities.
Two heads in a row: P = 1/2 × 1/2 = 1/4. Three heads in a row: 1/8 = 0.125, which matches the
3-coin table in Lesson 3.3.
Either of two events. If two events cannot both happen, add their probabilities. P(die
shows 1 or 2) = 1/6 + 1/6 = 2/6.
Conditional probability. P(A given B) is the probability of A once we know B has
happened:
P(A \mid B) = \frac{P(A \text{ and } B)}{P(B)}
Bayes' theorem turns a conditional probability around:
P(A \mid B) = \frac{P(B \mid A)\,P(A)}{P(B)}
Worked example. Does a person have diabetes or not? Suppose 1 percent of people have
diabetes. A test is positive for 90 percent of people who have it, and also positive for 5
percent of people who do not. A person tests positive. What is the chance they really
have diabetes?
P(positive) = 0.90 × 0.01 + 0.05 × 0.99 = 0.009 + 0.0495 = 0.0585
P(diabetes given positive) = 0.009 / 0.0585 ≈ 0.154
The answer is only about 15.4 percent. The disease is rare, so most positive results come
from the large healthy group. Probability helps you avoid the trap of reading a positive
test as a certainty.
Key rules
P(not A) = 1 - P(A).
Independent events: multiply. Events that cannot both happen: add.
Bayes: P(A given B) = P(B given A) × P(A) / P(B).
Practice
Q1. What is the probability of not rolling a 6?
A1. 5 / 6.
Q2. What is the probability of rolling two sixes in a row?
A2. 1/6 × 1/6 = 1/36.
Q3. Two events are independent, with probabilities 0.5 and 0.2. What is the chance of
both?
A3. 0.5 × 0.2 = 0.1.
Where this is used in machine learning: Bayes' theorem is the basis of the Naive Bayes
classifier, which is often used for spam filtering.
