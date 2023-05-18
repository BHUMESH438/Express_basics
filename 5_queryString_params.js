const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>Home<ul><li><a href=/api/products>Products</a></li><li><a href=/api/product>Product</a></li></ul></h1>');
});

app.get('/api/products/', (req, res) => {
  const filteredProducts = products.map(product => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(filteredProducts);
});

app.get('/api/product/:productID', (req, res) => {
  console.log(req.params.productID);
  const singleProduct = products.find(product => product.id === Number(req.params.productID));
  !singleProduct ? res.status(404).send('<h1>Product does not exist</h1>') : res.json(singleProduct);
});

app.get('/api/product/:id/test/:number', (req, res) => {
  res.send(`<h1>hi ${Number(req.params.id)} and ${Number(req.params.number)}</h1>`);
});

app.get('/api/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedPorduct = [...products];
  if (search) {
    sortedPorduct = sortedPorduct.filter(product => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedPorduct = sortedPorduct.slice(0, Number(limit));
  }

  if (sortedPorduct.length < 1) {
    // res.status(200).send(`<h1>etnter valid input</h1>`);
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedPorduct);
});
app.listen(5000, () => console.log('port listening to server 5000'));

//always remember that querry strings will return values only in the string format
//for a req we should send only one data and if two data are send then error occurs
