const http = require('http');
const fs = require('fs');
const homePage = fs.readFileSync('./navbar-app/index.html');
const homeStyle = fs.readFileSync('./navbar-app/styles.css');
const homeImage = fs.readFileSync('./navbar-app/logo.svg');
const homeLogic = fs.readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
  console.log('url.>>>>>>>>>>>>>>', req.url);
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  } else if (req.url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>about page</h1>');
    res.end();
  } else if (req.url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homeStyle);
    res.end();
  } else if (req.url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(homeImage);
    res.end();
  } else if (req.url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(400, { 'content-type': 'text/html' });
    res.write('<h1>Oops no content</h1>');
    res.end();
  }
});
server.listen(5000);
//1-1024 port are already in use
//if no res is send then the page will rotate automatically and continuously
//in every res we should end it by res.end() as the communcation is over
//in write head we can give the status and also status message additionally
//write method body can be passed and we cant end the res without end()
