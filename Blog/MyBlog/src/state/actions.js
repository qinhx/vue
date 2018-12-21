export default{
    getDetail({commit}){
        commit('getdetail')
    },
    getCategory({commit},cate){
        commit('getCategory',cate)
    }
}