new Vue({
    el:"#container",
    data:{
        hotSearch:["建筑史概论","建筑史","建筑史","建筑史","建筑史","建筑史"],
        searchHistory:["建筑史概论","建筑史概论"]
    },
    methods:{
        deleteHistory:function(index){
           this.searchHistory = this.searchHistory.splice(index,1)
        },
        closeSearch:function(){
            window.location="../index/index.html"
        }
    }
})