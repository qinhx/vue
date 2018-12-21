var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var stylus = require('stylus');
var http= require('http')
var indexRouter = require('./routes/index');
var api = require('./routes/api')
var app = express();
var mongoskin = require('mongoskin')
const dbUrl = process.env.MONGOHQ_URL || 'mongodb://@localhost:27017/blog'
const db =  mongoskin.db(dbUrl)
const collections = {
  note: db.collection('note'),
  archives: db.collection('archives'),
  category: db.collection('category'),
  agent:db.collection('agent')//包含所有的
};
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port',process.env.PORT || 3000)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
  // if(!collections.note || !collections.archives || !collections.categories){
  //   return next(console.log('no collections'))
  // }
  req.collections = collections;
  return  next();
})
 

app.get('/api/detial',api.detail) // has been used to the home pages
app.get('/api/categories',api.category)
app.get('/api/cateItem',api.categoryItem)
// app.get('/api/')
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log('is listening at 3000')
http.createServer(app).listen(process.env.PORT || 3000)

