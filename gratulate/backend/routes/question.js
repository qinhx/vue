var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

var db = mongoose.createConnection('mongodb://www.qinhx.cn:27017/wx',{useNewUrlParser: true });
var question = db.model('question',{
    question:String,
    answer:String
})
router.route('').delete((req,res,next)=>{
    question.remove({},(err,data)=>{
        if(err) res.send(err)
        else res.send(data)
    })
}).get((req,res,next)=>{
    question.find({},(err,data)=>{
        if(err) res.send(err);
        else res.send(data)
    })
}).put((req,res,next)=>{
    question.create(req.body,(err,result)=>{
        if(err) res.send(err);
        else res.send(result)
    })
}).patch((req,res,next)=>{
    var query = req.query;
    question.update({},query,(err,result)=>{
        if(err) res.send(err);
        else res.send(result)
    })
}).post((req,res,next)=>{
    question.create(req.query,(err,data)=>{
        if(err) res.send(err);
        else res.send(data)
    })
})
module.exports = router;