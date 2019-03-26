var request =  require('request');
var out = function(code){
    return new Promise((resolve,reject)=>{
        var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx1c44088536b00f12&secret=4df92e57d86f30ffd8ba9807b4f38e63&grant_type=authorization_code&js_code='+code;
        request(url,function(err,response){
            var str  = JSON.parse(response.body)
            if(str.errcode) reject(str);
            else resolve(str.openid);
        })
    })
}
module.exports = out
