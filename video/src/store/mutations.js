import axios from 'axios'

export default {
      getResult(state){
        axios.get('/api/videoHomeTab').then(res=>{
          state.result =res.data.result
		

        }).catch(err=>(console.log(err)));
        axios.get('/api/todayVideo').then(res=>{
					let count = 0;
          res.data.result.forEach(function(item,index){
						if(item.data.content !==undefined){
							let tmp  =item.data.content;
							if(count < 5){
								state.recommend.push(tmp.data)
								count++
							}
						}
					});
					
        }).catch(err=>(console.log(err)))
      
	  let arr = [[14,"广告"],[36,"生活"],[10,"动画"],[28,"搞笑"],
				[4,"开胃"],[2,"创意"],[18,"运动"],	
				[20,"音乐"],[26,"萌宠"],[12,"剧情"],
				[32,"科技"],[6,"旅行"],[8,"影视"],
	  [22,"记录"],[30,"游戏"],[38,"综艺"],[24,"时尚"]];
	  arr.forEach(([item,name])=>{
		  axios.get('/api/videoCategoryDetails',{
		  	params:{
		  		id:item
		  	}
		  })
		  .then(res=>{
			  state.mainDetail.push([name, res.data.result])
		  } )
		  .catch(err=>(console.log(err)))
	  })
		
	  }
			
			,
			getUrl(state,url){
				state.playUrl = url;
				console.log(url)
			}
}
				