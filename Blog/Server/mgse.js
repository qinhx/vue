var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog')
var Book = mongoose.model('Book',{name:String});
var practicalBook = new Book({name:'Node.js'})
practicalBook.save((err,res)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Saved',res);
        process.exit(0)
    }
})