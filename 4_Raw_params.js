const express = require('express');
const app = express();
const { products } = require('./data');
// 1.const data = require('./data'); two methods of importing obj from the module by desrtucturing and by obj.notation
// 2.console.log('test>>>>>>', data.products);

app.get('/', (req, res) => {
  res.send('<h1>Home<ul><li><a href=/api/products>Products</a></li><li><a href=/api/product>Product</a></li></ul></h1>'); //single quotation only used
});

//##type 1 - filtering all the request

//**filtering all the products */
app.get('/api/products/', (req, res) => {
  // 3.const filteredProducts = data.products.map(product => {
  const filteredProducts = products.map(product => {
    const { id, name, image } = product; // we are declaring it because we should return id,name and image in json format
    return { id, name, image };
  });
  res.json(filteredProducts);
});

//##type 2 - filtering particular id

app.get('/api/product/:productID', (req, res) => {
  console.log(req.params.productID); //******* what erver params we used in the url it will come back only in the form of string so remember to convert it to a number if it is a number.

  const singleProduct = products.find(product => product.id === Number(req.params.productID));
  //error page
  !singleProduct ? res.status(404).send('<h1>Product does not exist</h1>') : res.json(singleProduct);
});

//##type 3 - filtering multiple routing parameters

app.get('/api/product/:id/test/:number', (req, res) => {
  res.send(`<h1>hi ${Number(req.params.id)} and ${Number(req.params.number)}</h1>`);
});

app.listen(5000, () => console.log('port listening to server 5000'));

//here res.status is not necessary as it inbuiltly set as default option
// in api we will return the json format and in ssr we will return the pug template format
