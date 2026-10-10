---
title: "The Poisson Distribution"
lessonNumber: "3.5"
topic: "Probability"
topicSlug: "03-probability"
order: 35
minutes: 15
prerequisites: ['3.3']
summary: "Use the Poisson formula to find the probability of a number of events in a fixed
interval.
Shape Order of the three averages
Negatively skewed (tail on the left) mean < median < mode
Normal (no skew) mean = median = mode
Positively skewed (tail on the right) mode < median < mean"
mlUse: "Count data, such as visits, accidents or arrivals, is
modelled with the Poisson distribution, and it appears again in models that predict
counts."
---

Goal: Use the Poisson formula to find the probability of a number of events in a fixed
interval.
Shape Order of the three averages
Negatively skewed (tail on the left) mean < median < mode
Normal (no skew) mean = median = mode
Positively skewed (tail on the right) mode < median < mean
The idea in plain words The Poisson distribution is a probability distribution that
measures how many times an event is likely to occur within a specified period of time. It is
used for independent events that occur at a constant rate within a given interval of time.
Examples
The number of accidents occurring in a city from 6 pm to 10 pm.
The number of patients arriving in an emergency room between 10 pm and 12 pm.
How many views your blog gets in a day.
The formula
P(x) = \frac{e^{-\lambda}\,\lambda^{x}}{x!}
x: the number of times the event occurs.
P(x): the probability of exactly x events.
λ  (lambda): the mean (average) number of events in the interval.
x!: the factorial of x, for example 4! = 4 × 3 × 2 × 1 = 24, and 0! = 1.
e: Euler's number, about 2.71828.
Worked example. An emergency room receives on average λ  = 3 patients per hour. What
is the probability that exactly 2 arrive in the next hour?
P(2) = e⁻³ × 3² / 2! = 0.0498 × 9 / 2 = 0.224
So there is about a 22.4 percent chance. The whole distribution for λ  = 3:
{"type":"bars","xLabel":"x = patients arriving in one 
hour","yLabel":"P(x)","labels":
["0","1","2","3","4","5","6","7","8"],"series":[{"name":"lambda = 
3","values":
[0.0498,0.1494,0.224,0.224,0.168,0.1008,0.0504,0.0216,0.0081],"color":"accent
"}],"checkpoints":[["2",0.224],["3",0.224],["4",0.168]],"caption":"Poisson 
distribution with an average of 3 events per interval. The most likely counts 
are 2 and 3."}
x 0 1 2 3 4 5 6 7 8
P(x) 0.0498 0.1494 0.2240 0.2240 0.1680 0.1008 0.0504 0.0216 0.0081
How λ  changes the shape. Compare λ  = 1, 5 and 10 (for example the average number of
accidents occurring in an interval). As λ  grows, the peak moves to the right, becomes
lower, and the curve spreads out and looks more like a bell.
{"type":"bars","style":"lines","xLabel":"x = number of events 
occurring","yLabel":"P(x)","labels":
["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],"series":[{"name":"lambda = 1","values":
[0.3679,0.3679,0.1839,0.0613,0.0153,0.0031,0.0005,0.0001,0,0,0,0,0,0,0,0],"color":"accent"},{"name":"lambda = 5","values":
[0.0067,0.0337,0.0842,0.1404,0.1755,0.1755,0.1462,0.1044,0.0653,0.0363,0.0181
,0.0082,0.0034,0.0013,0.0005,0.0002],"color":"accent2"},{"name":"lambda = 
10","values":
[0,0.0005,0.0023,0.0076,0.0189,0.0378,0.0631,0.0901,0.1126,0.1251,0.1251,0.1137,0.0948,0.0729,0.0521,0.0347],"color":"text"}],"checkpoints":
[["1",0.3679,"lambda = 1"],["5",0.1755,"lambda = 5"],["10",0.1251,"lambda = 
10"]],"caption":"Poisson curves for averages of 1, 5 and 10 events. The peaks 
are about 0.37 at x = 1, 0.18 at x = 5, and 0.13 at x = 10."}
Application in data science. Poisson counts are used to model the number of accidents
occurring in a particular region or area, so that busy and quiet areas can be compared.
from scipy.stats import poisson
print(poisson.pmf(2, 3))   # 0.2240...
Key rules
Use Poisson for counting independent events at a constant average rate in a fixed
interval.
P(x) = e^(- λ ) × λ ^x / x!, where λ  is the average number of events.
Practice
Q1. Cars pass a point at an average of 2 per minute. What is the probability that none
pass in a minute?
A1. P(0) = e⁻² × 2⁰ / 0! = e⁻² ≈ 0.135.
Q2. What does λ  stand for?
A2. The average number of events in the interval.
Q3. Is the number of emails you receive per hour a good fit for the Poisson distribution?
A3. Usually yes, because the emails are counted events arriving at a roughly constant
rate.
Where this is used in machine learning: Count data, such as visits, accidents or arrivals, is
modelled with the Poisson distribution, and it appears again in models that predict
counts.
