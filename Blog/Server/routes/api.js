exports.category =  (req,res,next)=>{
        req.collections.category.find({}).toArray((err,result)=>{
                if(err){
                        res.send("err")
                }else{
                        res.send(result)
                        next()
                }
        })
}

exports.detail = (req,res,next)=>{
        req.collections.agent.find({}).limit(20).toArray((err,result)=>{
                if(err) return next(new Error('no data'))
                else{
                        res.send(result);
                        next()
                }
        })
}
exports.categoryItem= (req,res,next)=>{
        req.collections.agent.find({categopry:req.query.cate}).toArray((err,result)=>{
                if(err) return next(new Error('no data'))
                else{
                        res.send(result);
                        next()
                }
        })
}