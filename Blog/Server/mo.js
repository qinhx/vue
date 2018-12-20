var superagent = require('superagent')
var cheerio = require('cheerio')
var url =  require('url')
var express =  require('express')

var app = express();
app.get('/',(req,res,next)=>{
    superagent.get('https://www.zhihu.com/search').query({tyepe:'type'}).query({q:'前端'})
        .end((err,data)=>{
            if(err) return next(new Error('?????'))
            var $ = cheerio.load(data.text)
            var items = [];
            $('..SearchResult-Card').each((index,item)=>{
                var $ = $(item)
                $('.SearchMain .Avatar').each((inidex.data)=>{
                    
                })
            })
            console.log(items);
            res.send('good')
        })
})
app.listen(3000,()=>{
    console.log('begin listening 3000')
})