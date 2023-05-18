const express = require('express');
const app = express();
const peopleRoute = require('./routes/people');
const authRoute = require('./routes/auth');

app.use(express.static('./methods-public'));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/api/people', peopleRoute);
app.use('/login', authRoute);

app.listen(5000, () => console.log('running on port 5000'));
