const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err)
        return console.log('Unable to connect to the db', err);
    console.log("Succesfully connected to db");

    // db.collection('Todos').find({done: false}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log("unable to fetch todos", err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(count);
    // }, (err) => {
    //     console.log(err)
    // });

    db.collection('Users').find({name: 'Pradumn Bansal'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch((err) => {
        console.log(err);
    })
});