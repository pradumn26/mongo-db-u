const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://pradumn.26:spearbyedge1@ds113915.mlab.com:13915/todo-app');

exports = module.exports = {
    mongoose: mongoose
}