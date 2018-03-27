const express = require('express');
const route = express.Router();

/* GET users listing. */
route.get('/', (req, res, next) => {
  res.send('welcome!!');
});

/* GET user profile. */
route.get('/profile', (req, res, next) => {    
    res.send(req.user);
});

module.exports = route;

