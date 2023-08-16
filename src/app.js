// const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Helper function to check for underflow and overflow conditions
function checkBounds(num) {
  if (num < -1000000) {
    return "Underflow";
  } else if (num > 1000000) {
    return "Overflow";
  }
  return null;
}

// POST endpoint for addition
app.post('/add', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  const result = num1 + num2;
  const boundsCheck = checkBounds(result);
  if (boundsCheck) {
    return res.status(400).json({ status: 'error', message: boundsCheck });
  }

  return res.json({ result });
});

// POST endpoint for subtraction
app.post('/subtract', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  const result = num1 - num2;
  const boundsCheck = checkBounds(result);
  if (boundsCheck) {
    return res.status(400).json({ status: 'error', message: boundsCheck });
  }

  return res.json({ result });
});

// POST endpoint for multiplication
app.post('/multiply', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  const result = num1 * num2;
  const boundsCheck = checkBounds(result);
  if (boundsCheck) {
    return res.status(400).json({ status: 'error', message: boundsCheck });
  }

  return res.json({ result });
});

// POST endpoint for division
app.post('/divide', (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  if (num2 === 0) {
    return res.status(400).json({ status: 'error', message: 'Cannot divide by zero' });
  }

  const result = num1 / num2;
  const boundsCheck = checkBounds(result);
  if (boundsCheck) {
    return res.status(400).json({ status: 'error', message: boundsCheck });
  }

  return res.json({ result });
});

const server = app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});

module.exports = app;