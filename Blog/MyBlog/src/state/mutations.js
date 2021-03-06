import axios from 'axios'
export default{
    getdetail(state){
        axios.get('/api/detial').then(res=>{
           state.detail = res.data
        }).catch(err=>{
            console.log(err)
        });
        axios.get('/api/categories').then(res=>{
            state.category = res.data[0].category
        }).catch(err=>{
            console.log(err)
        })
    },
    getCategory(state,category){
        if(category=="back"){
            category = category+"end";
        }else{
            category= category
        }
        axios.get('/api/cateItem', {
            params:{
             cate:category
            }
        }).then(res=>{
            state.cateItem = res.data;
        }).catch(err=>{
            return err
        });
    }

}