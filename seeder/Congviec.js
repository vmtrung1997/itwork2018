var mongoose      = require('mongoose');
mongoose.Promise  = require('bluebird');
const seeder      = require('mongoose-seed');
const async       = require('async');
const PhanloaiCV    = require('../model/PhanLoaiCV');
const TTCongTy     = require('../model/TTCongTy');
const _           = require('lodash');
var faker         = require('faker');

new Promise((resolve) => {
    mongoose.connect('mongodb://quan:12345678@ds117540.mlab.com:17540/itjob', {
        promiseLibrary: require('bluebird')
    });
    async.parallel([
        (callback) => {
            PhanloaiCV.find({})
            .exec((err, phanloai) => {
                callback(null, phanloai);
            }); 
        },
        (callback) => {
            TTCongTy.find({}, {_id : true})
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
                    Ten: faker.random.words(3,5),
                    Luong : faker.random.number(100,10000),
                    Vitri: faker.address.streetAddress(),
                    Mota: faker.lorem.paragraphs(2,4),
                    id_Congty : _.sample(results[1]),
                    id_PhanloaiCV : [
                        {id : list_category[0]._id, Ten: list_category[0].Ten},
                        {id : list_category[1]._id, Ten: list_category[1].Ten},
                        {id : list_category[2]._id, Ten: list_category[2].Ten},
                    ]
                }
            );
        }
        resolve(items);
    });
}).then((items) => {
    seeder.connect('mongodb://localhost:27017/itwork2018', function() {
        let data = [{
            'model': 'Congviec',
            'documents': items
        }]
        seeder.loadModels([
            '../model/Congviec'
        ]);
            seeder.clearModels(['Congviec'], function() {
            seeder.populateModels(data, function() {
            seeder.disconnect();
            });
        });
     });
});