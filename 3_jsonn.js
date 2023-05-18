const express = require('express');
const app = express();

const data = require('./data');

app.get('/', (req, res) => {
  res.json(data.products);
});

app.listen(5000, () => console.log('port listening to server 5000'));

//here res.status is not necessary as it inbuiltly set as default option
