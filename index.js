const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

// Endpoint 1: Calculate the Returns of the Stocks added
// http://localhost:3000/calculate-returns?boughtAt=300&marketPrice=400&quantity=2

function calculateReturns(boughtAt, marketPrice, quantity) {
  let returns = (marketPrice - boughtAt) * quantity;
  return returns;
}

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);
  let results = calculateReturns(boughtAt, marketPrice, quantity);
  return res.status(200).json({ results.toString() });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
