const express = require('express');
const routes = require('./Routes/routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;

if(process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost/muber');
}



app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {  
    res.status(422).send({ error: err.message});
});

module.exports = app;

