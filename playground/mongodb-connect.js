const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log("unable to connect to mongo server");
    }
    console.log("succesfully connected to mongo server");

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     done: false
    // }, (err, res) => {
    //     if(err)
    //         return console.log('Unable to connect')
    //
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Mehul',
        age: 21,
        location: 'Delhi, India'
    }, (err, res) => {
        if(err)
            return console.log('Unable to create doc', err);

        console.log(JSON.stringify(res.ops, undefined, 2));
    });

    db.close();
});