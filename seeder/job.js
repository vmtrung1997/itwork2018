var mongoose      = require('mongoose');
mongoose.Promise  = require('bluebird');
const seeder      = require('mongoose-seed');
const async       = require('async');
const Category    = require('../model/Category');
const Company     = require('../model/Company');
const _           = require('lodash');
var faker         = require('faker');

new Promise((resolve) => {
    mongoose.connect('mongodb://localhost:27017/itwork2018', {
        promiseLibrary: require('bluebird')
    });
    async.parallel([
        (callback) => {
            Category.find({},{ _id: true})
            .exec((err, category_ids) => {
                callback(null, category_ids);
            }); 
        },
        (callback) => {
            Company.find({}, {_id : true})
            .exec((err, company_ids) => {
                callback(null, company_ids);
            });
        }
    ], 
    (err, results) => {
        resolve(results);
        mongoose.connection.close();
    });
}).then((results) => {
    return new Promise((resolve) => {
        let items = [];
        let status = [1, 2]
        for(i=0; i< 30; i++){
           var  list_category  = []
                list_category = _.sampleSize(results[0],3);
            items.push(
                { 
                    name: faker.random.words(3,5),
                    salary : faker.random.number(100,10000),
                    position: faker.address.streetAddress(),
                    description_job: faker.lorem.paragraphs(2,4),
                    company_id : _.sample(results[1]),
                    category_id : [
                        {category : list_category[0]},
                        {category : list_category[1]},
                        {category : list_category[2]}
                    ]
                }
            );
        }
        resolve(items);
    });
}).then((items) => {
    seeder.connect('mongodb://localhost:27017/itwork2018', function() {
        let data = [{
            'model': 'Job',
            'documents': items
        }]
        seeder.loadModels([
            '../model/Job'
        ]);
        seeder.clearModels(['Job'], function() {
            seeder.populateModels(data, function() {
            seeder.disconnect();
            });
        });
     });
});