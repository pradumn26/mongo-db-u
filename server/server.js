const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose-db');
var {Todo} = require('./models/Todo')
var {User} = require('./models/User')

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then((doc) => {res.send(doc)}).catch((e) => {res.status(400).send(e)});
});

app.listen(3000, () => console.log("app is deployed to port 3000"));