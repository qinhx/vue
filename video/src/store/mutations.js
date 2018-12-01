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
}

/*
					<section class="c_14"><h4>广告</h4></section>
					<section class="c_36"><h4>生活</h4></section>
					<section class="c_10"><h4>动画</h4></section>
					<section class="c_28"><h4>搞笑</h4></section>
					<section class="c_4"><h4>开胃</h4></section>
					<section class="c_2"><h4>创意</h4></section>
					<section class="c_18"><h4>运动</h4></section>
					<section class="c_20"><h4>音乐</h4></section>
					<section class="c_26"><h4>萌宠</h4></section>
					<section class="c_12"><h4>剧情</h4></section>
					<section class="c_32"><h4>科技</h4></section>
					<section class="c_6"><h4>旅行</h4></section>
					<section class="c_8"><h4>影视</h4></section>
					<section class="c_22"><h4>记录</h4></section>
					<section class="c_30"><h4>游戏</h4></section>
					<section class="c_38"><h4>综艺</h4></section>
					<section class="c_24"><h4>时尚</h4></section>
*/					