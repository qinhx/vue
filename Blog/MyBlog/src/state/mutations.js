import axios from 'axios'
export default{
    getdetail(state){
        axios.get('/api/detial').then(res=>{
           state.detail = res.data
        }).catch(err=>{

        })
    }
}