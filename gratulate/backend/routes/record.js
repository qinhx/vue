var express = require('express');
var router=  express.Router();
var mongoose = require('mongoose');
var events = require('../events')
var db = mongoose.createConnection('mongodb://www.qinhx.cn:27017/wx',{useNewUrlParser:true});
var getopenid = require('../public/javascripts/requetP')
var eventEmitter = events
var record = db.model('record',{
    openid:String,
    days:String,
    payOrNot:String,
    hours:String,
    cost:String,
    LP:Array,
    money:String,
    dateIn:String,
    dateOut:String
})
router.route('').get((req,res,next)=>{
    record.findById(req.query.id,(err,data)=>{
        if(err) res.send(err);
        res.send(data)
    })
}).post((req,res,next)=>{
    getopenid(req.body.code).then(data=>{
        options = { upsert: true,new:true,useFindAndModify:false};
        record.findOneAndUpdate({
            "openid":data
        },{
            "openid":data
        },
        options,
        (err,raw)=>{
            if(err) {
                res.send(err);
            }
            else {
                
                var obj = {
                    days:raw.days,
                    id: raw._id,
                    payOrNot:raw.payOrNot,
                    hours: raw.hours,
                    cost:raw.cost,
                    LP:raw.LP,
                    money:raw.money
                }
                res.send(obj)
            }
        })
    }).catch(err=>{
        res.send(err)
    })
}).delete((req,res,next)=>{
    record.remove({},(err,raw)=>{
        res.send(raw)
    })
}).put((req,res,next)=>{
    var options = {overwrite :false,new:true,useFindAndModify:false}
    record.findOneAndUpdate(
        {"_id":mongoose.Types.ObjectId(req.body.id)}
        ,req.body,options,(err,raw)=>{
        if(err) res.send(err);
        else {
            var obj = {
                days:raw.days,
                id: raw._id,
                payOrNot:raw.payOrNot,
                hours: raw.hours,
                cost:raw.cost,
                LP:raw.LP,
                money:raw.money,
                dateIn:raw.dateIn,
                dateOut:raw.dateOut
            }
            if(obj.dateIn) {
                eventEmitter.emit("dataChanged",obj.id)
            }
            res.send(obj) 
        }
    })
})
module.exports = router;