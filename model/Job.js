var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var JobSchema = new mongoose.Schema({
    name: String,
    salary : Number,
    position: String,
    description_job: String,
    company_id :{type:ObjectId, ref : 'Company'},
    category_id: [
        {
            category: { type:ObjectId, ref: 'Category'},
            category_name: String
        }
    ],
    createdOn: { type: Date, 'default': Date.now }
});

module.exports = mongoose.model('Job', JobSchema);