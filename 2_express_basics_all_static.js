const express = require('express');
const path = require('path');
const app = express();
//here we use this method as static asset as we put the asset once and in server side it wont render and in the browser side it will render. so in node it is equalent to / == readfilesunc and storing the values in variable and callin that variable in res.write() in create server http module.
app.use(express.static('./public'));
//if you want to add only single page application in server and it has no rendering then just dumb all those files in a public and use middleware as static and it takes index as root and other files from the public
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });
app.get('/about', (req, res) => {
  res.status(200).send('<h1>welcome about</h1>');
});
app.all('*', (req, res) => {
  res.status(404).send('<h1>welcome error</h1>');
});

app.listen(5000, () => {
  console.log('port listening to 5000');
});

//res.send sends the data  rawly and sendfile sends the data from the file
