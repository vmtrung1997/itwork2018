var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CompanySchema = new mongoose.Schema({
    name: String,
    logo: String,
    position: String,
    description: String,
    createdOn: { type: Date, 'default': Date.now }
});

module.exports = mongoose.model('Company', CompanySchema);