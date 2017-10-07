const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err)
        return console.log(err);
    console.log("Succesfully connected to db");

    db.collection('Todos').findOneAndUpdate({_id: new ObjectID("59d8d8cc2cd9f51c263b9041")}, {
        $set: {done: true}
    }, {returnOriginal: false}).then((res) => console.log(JSON.stringify(res, undefined, 2)));
})