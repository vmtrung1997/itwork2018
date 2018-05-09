var express     = require('express');
var router      = express.Router();
var Job     = require('../model/Job');
var Category     = require('../model/Category');
var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost:27017/itwork2018');

/* GET home page. */
router.get('/jobs', function(req, res, next) {
    Job.find()
    .limit(10)
    .exec()
    .then(jobs =>{
        res.render('home/index',{ jobs : jobs});
    })
    .catch(err=>{
        res.status(500).json({err: err})
    })
});
router.get('/company', function(req, res, next) {
    Company.find()
    .limit(10)
    .exec()
    .then(company =>{
        res.render('company',{ company : company});
    })
    .catch(err=>{
        res.status(500).json({err: err})
    })
});
router.get('/jobs/:jobId', function(req, res, next) {
    const id = req.params.jobId;
    Job.findById(id)
    .exec()
    .then(job =>{
        res.render('single/single',{ job : job});
    })
    .catch(err=>{
        res.status(500).json({err: err})
    })
});

router.get('/', function(req, res, next) {
    Job.find()
    .limit(10)
    .then(function(jobs) {
        res.render('home/index',{jobs : jobs});
    });
});
module.exports = router;