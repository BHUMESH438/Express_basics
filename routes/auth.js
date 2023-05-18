const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  req.body.name !== '' ? res.status(200).json(`<h1>hello ${req.body.name}</h1>`) : res.status(401).send(`<h1>client side error</h1>`);
  res.send('post');
});

module.exports = router;
