let vm = new Vue({
    el:".header-container",
    data: {
        isCourseActive:false,
        isMyActive:true,
        choicesDisplay:"none",
        choices:[]
    },
    methods:{
        courseClick:function(){
            this.isCourseActive=true
            this.isMyActive=false
            window.location="http://localhost:3000/pages/index/index.html"
        },
        myClick:function(){
            this.isMyActive=true
            this.isCourseActive=false
            window.location="http://localhost:3000/pages/my/my.html"
        },
        chooseCourse:function(index){
            if(this.choicesDisplay =='')
            {
                this.choicesDisplay="none"
            }else{
                this.choicesDisplay=''
            }
    }
}
})

let main = new Vue({
    el:"#main",
    data: {
        isEvaluate:true,
        isInform:false,
        userAvatar:"../../image/user_avatar.png",
        username:"fsdfsf",
        comments:[{
            content:"这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论这是一条评论",
            courseName:"精神情感活动的神经生物学",
            teacherName:"张育红"
        }]
    }
})