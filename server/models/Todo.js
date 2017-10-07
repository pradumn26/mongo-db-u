const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    done: {
        type: Boolean
    },
    completedOn: {
        type: Number
    }
});

exports = module.exports = {
    Todo: Todo
}