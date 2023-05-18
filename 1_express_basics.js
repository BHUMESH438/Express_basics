const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('hello im home');
});
app.get('/about', (req, res) => {
  res.status(200).send('hello im about');
});
app.all('*', (req, res) => {
  res.status(400).send('resource no... <h1>not found</h1>');
});
app.listen(5000, () => console.log('port listening to 5000'));
//WE can set the status
//it uses 4 method get put post delete with app. and app.use is for using middlewere and app.all will do all the fun of above methods
//by this method all the methods are done seperately to see the differnce see the https
