var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CategorySchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('Category', CategorySchema);