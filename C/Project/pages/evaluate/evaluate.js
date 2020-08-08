let vm=new Vue({
    el:"#container",
    data:{
        chooseTest:[true,false,false],
        chooseSignin:[true,false,false]
    },
    methods:{
        chooseTestClick:function(index){
            let chooseTest = [true,false,false]
            for(let i=0;i<chooseTest.length;i++){
                if(index==i){
                    chooseTest[index] = true
                }else{
                    chooseTest[i] = false
                }
            }
            console.log(chooseTest)
            this.chooseTest = chooseTest
        },
        chooseSigninClick:function(index){
            let chooseTest = [true,false,false]
            for(let i=0;i<chooseTest.length;i++){
                if(index==i){
                    chooseTest[index] = true
                }else{
                    chooseTest[i] = false
                }
            }
            console.log(chooseTest)
            this.chooseSignin = chooseTest
        }
    }
})