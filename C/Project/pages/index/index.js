let vm = new Vue({
    el:".header-container",
    data: {
        isLessonActive:true,
        isMyActive:false,
        choicesDisplay:"none",
        choices:[]
    },
    methods:{
        lessonClick:function(){
            this.isLessonActive=true
            this.isMyActive=false
        },
        myClick:function(){
            this.isMyActive=true
            this.isLessonActive=false
        },
        chooseLesson:function(index){
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
        lessons:[{
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