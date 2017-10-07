const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err)
        return console.log("Unable to connect to the database", err);
    console.log("Succesfully connected to the database");

    db.collection('Todos').deleteMany({text: 'eat lunch'});
});