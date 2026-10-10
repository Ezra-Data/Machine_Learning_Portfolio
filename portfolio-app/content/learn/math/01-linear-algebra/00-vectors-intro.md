---
title: "Introduction to Linear Algebra and Vectors"
lessonNumber: "1.0"
topic: "Linear Algebra"
topicSlug: "01-linear-algebra"
order: 10
minutes: 7
prerequisites: ['0.1']
summary: "Understand why linear algebra is the foundational language of AI, why vectors are everywhere in machine learning, and how coordinates represent real world data."
mlUse: "Every single training sample, row in a dataset, image pixel grid, and token embedding in LLMs is represented as vectors and matrices. Without linear algebra, computers cannot process machine learning operations."
---

## Goal
Understand why linear algebra is the foundational language of AI, why vectors are everywhere in machine learning, and how numbers turn into intelligence.

## The Core Concept in Plain Words
Computers cannot understand raw concepts like "a happy customer", "a picture of a cat", or "the price of a house". Computers only understand numbers.

**Linear Algebra** is the mathematics of arranging and manipulating numbers in grids, rows, and columns.

- **A single number** is a scalar (for example, the temperature $24^\circ\text{C}$).
- **A row or column of numbers** is a vector (for example, a customer's age, account balance, and monthly transactions $[34, 1200, 15]$).
- **A table of rows and columns** is a matrix (for example, an entire dataset of 1,000 customers).

## Why Machine Learning Depends on Vectors
When a machine learning model learns:
1. It receives an input vector $\mathbf{x} = [x_1, x_2, \dots, x_n]$.
2. It multiplies that input by a weight vector $\mathbf{w}$ using a **dot product** (Lesson 1.4).
3. It adds a bias term $b$.
4. It computes a prediction: $\hat{y} = \mathbf{w} \cdot \mathbf{x} + b$.

Every deep neural network, from computer vision to ChatGPT, is simply billions of vector and matrix multiplications calculated at high speed.

```python
import numpy as np

# A house represented as a vector: [square_footage, bedrooms, bathrooms]
house = np.array([1500, 3, 2])

# Learned model weights for price prediction
weights = np.array([200, 15000, 10000])
bias = 50000

# Prediction via dot product
estimated_price = np.dot(house, weights) + bias
print(f"Estimated Price: ${estimated_price:,.2f}")
```

## Key Rules to Remember
1. **Vectors store samples:** Every row in your dataframe is a vector in mathematical space.
2. **Dimension:** The dimension of a vector is simply the count of numbers inside it. A 5-feature dataset lives in 5-dimensional vector space.
3. **Geometry and Direction:** Vectors are not just numbers, they represent arrows pointing in space, allowing models to measure similarity and angles between data points.

## Practice Questions
**Q1. Why cannot machine learning models learn directly from raw English words or images?**
**A1.** Machine learning algorithms run mathematical calculations (addition, multiplication, calculus). Words and images must first be converted into lists of numbers (vectors) before algorithms can process them.

**Q2. If an e-commerce user is described by $[25, 4, 120.50]$ representing age, items viewed, and money spent, what is the dimension of this vector?**
**A2.** The dimension is 3, because it contains 3 numerical components.
