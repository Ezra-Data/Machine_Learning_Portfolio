---
title: "What Is Probability and Why Machine Learning Needs It"
lessonNumber: "3.1"
topic: "Probability"
topicSlug: "03-probability"
order: 31
minutes: 12
prerequisites: ['0.1']
summary: "Calculate the probability of simple events, place it on the 0 to 1 scale, and see two
ways machine learning uses it."
mlUse: "A spam filter or a fraud detector does not just say
yes or no. It first produces a probability, and then a cutoff turns it into a decision."
---

Goal: Calculate the probability of simple events, place it on the 0 to 1 scale, and see two
ways machine learning uses it.
The idea in plain words Probability is a branch of mathematics that deals with calculating
the likelihood of a given event to occur. Simple examples: rolling a die, tossing a coin, and
picking from a bag that contains balls of different colours.
P(\text{event}) = \frac{\text{number of ways the event can occur}}
{\text{total number of outcomes}}
Coin. Heads or tails, so 2 outcomes. P(Head) = 1 / 2 = 0.5.
Die. The possible outcomes are 1, 2, 3, 4, 5, 6. P(5) = 1 / 6 ≈ 0.17. For an even number there
are three ways (2, 4, 6) out of 6, so P(even) = 3 / 6 = 1 / 2 = 0.5.
The probability scale. A probability value always lies between 0 and 1.
Examples with a die. What is the probability of getting a number less than 10? Every face
is below 10, so the answer is 1. What is the probability of getting a number less than 1? No
face is below 1, so the answer is 0.
Why probability matters in machine learning. Two main aspects:
1. The model's output. Some models, such as logistic regression, turn any number into a
probability between 0 and 1 using an S-shaped curve.
{"type":"plot","xDomain":[-6,6],"yDomain":[-0.1,1.1],"functions":
[{"fn":"1/(1+exp(-x))","label":"S-shaped (logistic) 
curve","color":"accent"}],"checkpoints":[[0,0.5],[2,0.8808],[-2,0.1192],
[4,0.982]],"caption":"The logistic curve. Whatever number goes in, the output 
stays between 0 and 1, so it can be read as a probability. At 0 the output is 
0.5."}
2. The loss function. A model is judged by how far its predictions are from the truth. For
house prices, y is the true price and ŷ (read y-hat) is the predicted price. The loss
averages the squared distances over n houses:
Value Meaning
0 Impossible (0 percent)
0.5, or 1/2 Half chance (50 percent)
1 Certain (100 percent)
\text{Loss} = \frac{1}{n}\sum_{i=1}^{n}\left(y_i - \hat{y}_i\right)^2
The smaller the loss, the closer the predictions are to the true values. Lesson 4.4 shows
how a model reduces it.
What comes next in the course. The notes list further probability topics: maximum
likelihood, Bayes' theorem, information theory, and cross entropy with information gain.
These are taught inside the ML course while models are built from scratch.
Key rules
P(event) = ways the event can happen / total outcomes.
Probability is always between 0 and 1. 0 is impossible, 1 is certain.
Machine learning uses probability in model outputs and in loss functions.
Practice
Q1. What is the probability of rolling a 3 on a fair die?
A1. 1 / 6 ≈ 0.17.
Q2. What is the probability of rolling an odd number?
A2. 3 / 6 = 0.5.
Q3. What is the probability of an impossible event?
A3. 0.
Where this is used in machine learning: A spam filter or a fraud detector does not just say
yes or no. It first produces a probability, and then a cutoff turns it into a decision.
