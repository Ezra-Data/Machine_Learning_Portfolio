---
title: "Random Variables"
lessonNumber: "3.2"
topic: "Probability"
topicSlug: "03-probability"
order: 32
minutes: 10
prerequisites: ['3.1']
summary: "Explain what a random variable is, and tell discrete from continuous ones."
mlUse: "Every feature and every target in a dataset, such
as house price, can be treated as a random variable.
Random event Value of X
Head 0
Tail 1"
---

Goal: Explain what a random variable is, and tell discrete from continuous ones.
The idea in plain words A random variable is a numerical description of the outcomes of
random events. In other words, a random variable maps the outcomes of random events
to numerical values.
Example: tossing a coin. Call the random variable X. The random events are Head and Tail,
and X turns them into numbers:
Written compactly, X = 0 if the toss is a head, and X = 1 if it is a tail.
Example: weight. Let Y be the weight of a random person in a class. We can then ask a
probability question in numbers: what is the probability that the weight of a random
person in the class is less than 60 kg? This is written P(Y < 60).
Application. An insurance company can use a random variable for the chance of a claim
over a given time period.
Types of random variables
Discrete: takes only distinct values. Example: the number shown when a die is rolled,
or the number of heads in some coin tosses.
Continuous: takes any value in a given range. Example: the weight of a random person
in a class.
Key rules
A random variable gives a number to every outcome of a random event.
Discrete: separate values. Continuous: any value in a range.
Practice
Q1. For a coin toss with X = 0 for Head and X = 1 for Tail, what is the value of X when the
toss is a tail?
A1. 1.
Q2. Is the weight of a person a discrete or a continuous random variable?
A2. Continuous.
Q3. How do you write the probability that a person weighs less than 60 kg?
A3. P(Y < 60).
Where this is used in machine learning: Every feature and every target in a dataset, such
as house price, can be treated as a random variable.
Random event Value of X
Head 0
Tail 1
