var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

var db = mongoose.createConnection('mongodb://localhost:27017/blog',{useNewUrlParser: true });
var blog = db.model('blog',new mongoose.Schema({
  id:String,
  title:String,
  date:String,
  article:String,
  tag:Array
}));
router.route('/insert').post((req,res,next)=>{
  var query = req.body;
  blog.create(query,(err,da)=>{
    if(err) {
      console.log('this is error when insert into db')
      res.send('插入失败')
      }
    res.send(da)
  })
})
router.route('/update').post((req,res,next)=>{
    blog.updateOne({id:"1"},req.query,(err,raw)=>{
      if(err) {console.log(err); 
        res.send(false)
      }
      res.send(true)
    })
})
router.route('/remove').get((req,res,next)=>{
    blog.remove(req.query,(err,any)=>{
      if(err) {
        console.log(err)
        res.send('remove fail')
      }else{
        res.send(any);
      }
    })
})
router.route('/getdata').get((req,res,next)=>{
    blog.find(req.query,(err,data)=>{
      res.send(data)
    })
})
router.route('/getById').get((req,res,next)=>{
    var id = mongoose.Types.ObjectId(req.query.id)
    blog.find({"_id":id},(err,da)=>{
      if(err) res.send('err')
      res.send(da) 
    })
})
var mydata = [
  {
    title:'leetcode 1001',
    date: '2019.3.2',
    article:'# Hello world',
    tag:[
     {
       value:'java',
       beginColor:"red",
     }
    ]
  },
  {
    title:'leetcode 103',
    date: '2019.3.2',
    article:'# I love it',
    tag:[
      {
        value:'leetcode',
        beginColor:"red",
      }
    ]
  },
  {
    title:'leetcode 不知道',
    date: '2019.3.2',
    article:'# Good',
    tag:[
      {
        value:'leetcode',
        beginColor:"red",
      },
      {
        value:'css',
        beginColor:"green",
      }
    ]
  }
]
router.route('/').get((req,res,next)=>{
  blog.insertMany(mydata,(err,any)=>{
    if(err) res.send(err);
    res.send(any)
  })
})


module.exports = router;
