const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

app.use([logger, authorize]);

app.get('/', (req, res) => {
  //express will do middlewere as a function
  res.send('<h1>Home</h1>');
});
app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});

// //a1
// app.get('/about', [logger, authorize], (req, res) => {
//   // console.log(req.user);
//   res.send('<h1>About</h1>');
// });
app.listen(5000, () => console.log('port listening to 5000'));

//we can use the middleware function for multiple req
//we can give the middlewere function in the middle of the method
//to make the middleware function file not fat we must put our middlewere in some other file and export it
//and now if we want to use it in all methods morethan 10 or 5 we can use the app.use method
//in express orders matter so it use the app.use above the methods and according to the use case
//if we give the /route in the middle were then it will take the all the route behind it and will work in it so the logger will work for about and not for home
//in that [] used to store multiple values
//middleware must be in order if order change result will come according to that order
//want to define the next,req,res in middleware or it will show error
//if we passed the req.parameter/: in url then use req.params
//if we passed the req.query/? in url then use req.query

//authorization - a1
//1.if authourization we need for a specific route use it in the middle of it and not in the app.use
//1-express - own/express/thirdparty
//3-thir party lib like morgan, use.app(morgan) it will give the log details of the page
