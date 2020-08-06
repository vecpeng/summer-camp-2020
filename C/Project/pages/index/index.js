let vm = new Vue({
    el:".header-container",
    data: {
        isCourseActive:true,
        isMyActive:false,
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
        courses:[{
            name:"中国历代王朝兴衰史及其启示",
            teacher:"汤黎",
            type:"历史与文化",
            tags:["周日","东区","2学分","点名","考试"]
        },{
            name:"中国历代王朝兴衰史及其启示",
            teacher:"汤黎",
            type:"历史与文化",
            tags:["周日","东区","2学分","点名","考试"]
        },{
            name:"中国历代王朝兴衰史及其启示",
            teacher:"汤黎",
            type:"历史与文化",
            tags:["周日","东区","2学分","点名","考试"]
        }]
    }
})