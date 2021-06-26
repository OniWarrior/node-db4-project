const express = require('express');
const helpers = require('./model')

const router = express.Router();

router.get('/recipes', (req, res, next) => {
    helpers.find()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(next); 
});

module.exports = router