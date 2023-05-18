const express = require('express');
const app = express();
const { people } = require('./data');

//inbuilt middlewere and setting the method is public
//static assert
app.use(express.static('./methods-public'));
//1.if the req.body gets undefined then we should use the body-parser or
//from node verion 8.0 body-parser is made inbuilt so there is no need of body-parser

/*const http = require('http');

if (parseInt(process.versions.node.split('.')[0]) >= 8) {
  console.log('Built-in support for parsing request bodies is available.');
} else {
  console.log('Built-in support for parsing request bodies is not available.');
}*/
//parse from data
app.use(express.urlencoded({ extended: false }));
//for normal form req it can be used

//get method - from client side the data is called from axios.get and through the same url we can send the data from the server to the client side

app.use(express.json());
//here we didnt handle the incoming jason data from the client

app.get('/api/people', (req, res) => {
  res.status(200).json({ status: true, resultpunda: people });
});
//here we handle the incoming json data from the js forms
app.post('/api/people', (req, res) => {
  const { name } = req.body;
  console.log('>>>>>', name);
  !name ? res.status(400).json({ success: false, msg: 'please provide name value' }) : res.status(201).json({ success: true, person: name });
});

//adding along with the newly added data
app.post('/api/people/postman', (req, res) => {
  const { name } = req.body;
  !name ? res.status(400).json({ success: false, msg: 'please provide name value' }) : res.status(201).json({ success: true, data: [...people, name] });
});

app.post('/login', (req, res) => {
  req.body.name !== '' ? res.status(200).json(`<h1>hello ${req.body.name}</h1>`) : res.status(401).send(`<h1>client side error</h1>`);
  res.send('post');
});

//adding along with the newly added data
app.put('/api/people/:id', (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const person = people.find(person => person.id === Number(id)); //findin the number id
  const newPeple = people.map(person => {
    // map will give the total array of values
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  //if id is not then use this or ther use this
  !person ? res.status(404).json({ success: false, msg: `no person with id ${id} in the list` }) : res.status(201).json({ success: true, data: newPeple });
});

//for deleting we use filter and match to return the unmatched data back
//for updating/put we use the map to match and return the updated value
//for get all data we use the whole data of array in the data json
app.delete('/api/people/:id', (req, res) => {
  const person = people.find(({ id }) => id === Number(req.params.id));
  const newPerson = people.filter(({ id }) => id !== Number(req.params.id));
  !person ? res.status(404).json({ success: false, msg: `no person with id ${req.params.id} in the list` }) : res.status(200).json({ success: true, data: newPerson });
});

app.listen(5000, () => console.log('running on port 5000'));

//form action=where to send  the data , method = post,get... , name attribute in form is the key and the value we enter is the value if we see in the payload
//200-ok,401-client side error
//in inspect url-encoded in req.headers content type will be differ from form to js
//if we created the content body in postman/forms in frontend while using axios content-type: application json created automatically and if empty body provided then the content type will change to null
