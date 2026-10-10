---
title: "Probability Distribution of a Random Variable"
lessonNumber: "3.3"
topic: "Probability"
topicSlug: "03-probability"
order: 33
minutes: 12
prerequisites: ['3.2']
summary: "Build the probability distribution of a simple random variable and check that it is
valid."
mlUse: "A classifier's output is a probability distribution
over the possible classes, such as spam and not spam."
---

Goal: Build the probability distribution of a simple random variable and check that it is
valid.
The idea in plain words The probability distribution of a random variable describes how
the probabilities are distributed over the values of the random variable.
Example: tossing 3 coins. Let X be the number of heads when three coins are tossed. List
all 8 equally likely outcomes:
Now count how many outcomes give each value, and divide by 8. This is the distribution,
shown as a table:
Outcome Heads X
HHH 3 3
HHT 2 2
HTH 2 2
THH 2 2
HTT 1 1
THT 1 1
TTH 1 1
TTT 0 0
X (number of heads) P(X = x) as a fraction P(X = x) as a decimal
0 1/8 0.125
1 3/8 0.375
2 3/8 0.375
3 1/8 0.125
{"type":"bars","xLabel":"X = number of heads","yLabel":"P(X = x)","labels":
["0","1","2","3"],"series":[{"name":"Probability","values":
[0.125,0.375,0.375,0.125],"color":"accent"}],"checkpoints":[["0",0.125],
["1",0.375],["2",0.375],["3",0.125]],"caption":"Probability distribution for 
the number of heads in three coin tosses. Two heads and one head are the most 
likely, each with probability 0.375."}
Check the distribution. The probabilities add up to 0.125 + 0.375 + 0.375 + 0.125 = 1. They
must always add up to 1, because one of the outcomes is certain to happen.
Key rules
A probability distribution lists every value of the random variable with its probability.
Every probability is between 0 and 1, and all of them add up to exactly 1.
Practice
Q1. In the 3-coin example, what is P(X = 0)?
A1. 1 / 8 = 0.125.
Q2. What is P(X is at least 2)?
A2. 0.375 + 0.125 = 0.5.
Q3. Two coins are tossed and X is the number of heads. Give the distribution.
A3. X = 0 has 0.25, X = 1 has 0.5, X = 2 has 0.25.
Where this is used in machine learning: A classifier's output is a probability distribution
over the possible classes, such as spam and not spam.
