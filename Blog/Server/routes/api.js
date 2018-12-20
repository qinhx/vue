exports.note = (req,res,next)=>{
        req.collections.note.insert(req.body,(err,result)=>{
                if(err){
                        res.send('Err')
                }else{
                        res.render('admin')
                }
        })
}
exports.noteList = (req,res,next)=>{
        req.collections.note.find({}).toArray((err,result)=>{
                if(err) return next(new Error('No Note List'))
                else{
                        res.send(result)
                }
        })
}
exports.category =  (req,res,next)=>{
        req.collections.categories.insert(req.body,(err,result)=>{
                console.log(req.body)
                if(err) return next(new Error('No message'))
                else{
                       return next(res.redirect('/category'));
                }
        })
}
exports.cateList = (req,res,next)=>{
        req.collections.categories.find({}).toArray((err,result)=>{
                if(err) return next(new Error('cate Find Err'))
                else{
                        res.send(result)
                }
        })
}
exports.archive =  (req,res,next)=>{
        req.collections.archives.insert(req.body,(err,result)=>{
                if(err) return next(new Error('No message'))
                else{
                        res.redirect('/admin');
                        next();
                }               
        })
}
exports.archiveList = (req,res,next)=>{
        req.collections.archives.find({}).toArray((err,result)=>{
                if(err) return next(new Error('cate Find Err'))
                else{
                        res.send(result)
                        next()
                }               
        })
}
exports.detail = (req,res,next)=>{
        req.collections.agent.find({}).toArray((err,result)=>{
                if(err) return next(new Error('no data'))
                else{
                        res.send(result);
                        next()
                }
        })
}