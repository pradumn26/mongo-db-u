const express = require('express');
const bodyParser = require('body-parser');

var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose-db');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then((doc) => {res.send(doc)}).catch((e) => {res.status(400).send(e)});
});

app.get('/todos', (req, res) => {
    Todo.find().then((todosArray) => {res.send({todosArray: todosArray})}).catch((e) => {res.status(400).send(e)})
});

app.get('/todo/:id', (req, res) => {
    if(ObjectID.isValid(req.params.id))
        Todo.findById(req.params.id).then((doc) => {
            if(doc) {
                res.send({doc})
            }
            else
                res.send("doc not present")
        }).catch((e) => res.send(e));
    else
        res.send("ID is invalid");
});

app.listen(process.env.PORT || 3000, () => console.log("app is deployed to port 3000"));