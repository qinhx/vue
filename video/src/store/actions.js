export default {
        getResult({commit}){
          commit('getResult')
        },
		getUrl({commit},url){
			commit('getUrl',url)
		}
}
