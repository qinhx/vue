exports.user=(req,res,next)=>{
  res.send('Hello')
}
exports.admin=(req,res,next)=>{
  res.render('admin')
}
exports.archives = (req,res,next)=>{
  res.render('archive')
}
exports.note = (req,res,next)=>{
  // console.log(req.body)
  res.render('note')
  // req.collections.note.insert(req.body,(err,result)=>{
  //   if(err) {
  //     res.send('fail to insert into mongo db')
  //   }else{
  //     res.render('note')
  //   }
  // })
}
exports.categories = (req,res,next)=>{
  res.render('category')
}
exports.done = (req,res,next)=>{
  res.send('Hello')
}