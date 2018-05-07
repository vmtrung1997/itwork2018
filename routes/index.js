var express     = require('express');
var router      = express.Router();
var Job     = require('../model/Job');
var Category     = require('../model/Category');
var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost:27017/itwork2018');

/* GET home page. */
router.get('/', function(req, res, next) {
    Job.find().then(function(jobs) {
        var data = []
        new Promise((resolve)=>{
            var list = []
            jobs.forEach(function(job,i) {
                new Promise ((resolve)=>{
                    var name = []
                    job.category_id.forEach(cat=>{
                        name.push(cat.category);
                    })    
                    Category.find(
                        {'_id' : {$in : name}}
                    ).select({name : true})
                    .exec((err,result)=>{
                        resolve(result);
                    })
                }).then((result)=>{
                    var kq ={
                        name: job.name,
                        salary: job.salary,
                        position: job.position,
                        description_job: job.description_job,
                        category_id: result
                    }
                    data.push(kq);
                    if(data.length == jobs.length)
                        resolve(data)
                })
            })
        }).then((data)=>{
            jobs = data;
            console.log(data);
            
            res.render('index',{jobs : jobs}) 
        })
    });
});

module.exports = router;