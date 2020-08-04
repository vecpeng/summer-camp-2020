let vm = new Vue({
    el:"#main",
    data:{
        courseDetail:{
            name:"晚清历史人物研究",
            type:"历史与文化",
            credit:2,
            object:"全校本科生",
            locations:["东十二楼302","西十二楼302"],
            times:["7-15周","7-15周"],
            goodNum:27,
            commonNum:7,
            tags:["点名","签到"],
            badNum:3
        },
        
        comments:[{
            avatar:"../../image/avatar.png",
            username:"匿名用户",
            time:"2020年8月4号",
            comment:"这个老师不错这个老师不错这个老师不错",
            thumbupNum:2,
            replyNum:2
        }]
    }
})