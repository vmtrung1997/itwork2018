var express     = require('express');
var router      = express.Router();
var Job     = require('../model/Job');
var Category     = require('../model/Category');
var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost:27017/itwork2018');

/* GET home page. */
router.get('/:jobId', function(req, res, next) {
    const id = req.params.jobId;
    Job.findById(id)
    .exec()
    .then(job =>{
        res.render('single',{ job : job});
    })
    .catch(err=>{
        res.status(500).json({err: err})
    })
});

router.get('/', function(req, res, next) {
    Job.find().limit(10).then(function(jobs) {
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
                        _id: job._id,
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
            res.render('index',{jobs : jobs});
        })
    });
});


module.exports = router;