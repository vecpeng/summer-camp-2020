let vm = new Vue({
  el: ".header-container",
  data: {
    isCourseActive: true,
    isMyActive: false,
    choicesDisplay: "none",
    choices: [],
    isClick: [false, false, false, false, false],
    chooseColor: [false,false,false,false,false,false,false],
  },
  methods: {
    courseClick: function () {
      this.isCourseActive = true;
      this.isMyActive = false;
      window.location = "http://localhost:3000/pages/index/index.html";
    },
    myClick: function () {
      this.isMyActive = true;
      this.isCourseActive = false;
      window.location = "http://localhost:3000/pages/my/my.html";
    },
    chooseCourse: function (index) {
      console.log(this.isClick);
      let isClick = this.isClick;
      for (let i = 0; i < isClick.length; i++) {
        if (i == index) {
          isClick[i] = !isClick[i];
          if (isClick[i] == true) {
            this.choicesDisplay = "block";
          } else {
            this.choicesDisplay = "none";
          }
          let choices = [
            [
              "沟通与管理",
              "沟通与管理",
              "沟通与管理",
              "沟通与管理",
              "沟通与管理",
              "沟通与管理",
            ],
            ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            ["东区", "西区"],
            ["点名", "签到", "不点名不签到"],
            ["论文", "考试", "其他"],
          ];
          this.choices = choices[i];
        } else {
          isClick[i] = false;
        }
      }
      let chooseColor=[]
      for(let j=0;j<this.choices.length;j++){
              chooseColor[j]=true
    }
    this.chooseColor=chooseColor
      this.isClick = isClick;
    },
    choose: function (index) {
        console.log(index)
        let chooseColor = this.chooseColor;
      chooseColor[index] = !chooseColor[index]
      this.chooseColor=chooseColor
      console.log(this.chooseColor)
    },
    navigateToSearch:function(){
        window.location="../search/search.html"
    },
  },
});

let main = new Vue({
  el: "#main",
  data: {
    courses: [
      {
        name: "中国历代王朝兴衰史及其启示",
        teacher: "汤黎",
        type: "历史与文化",
        tags: ["周日", "东区", "2学分", "点名", "考试"],
      },
      {
        name: "中国历代王朝兴衰史及其启示",
        teacher: "汤黎",
        type: "历史与文化",
        tags: ["周日", "东区", "2学分", "点名", "考试"],
      },
      {
        name: "中国历代王朝兴衰史及其启示",
        teacher: "汤黎",
        type: "历史与文化",
        tags: ["周日", "东区", "2学分", "点名", "考试"],
      },
    ],
  },
  methods:{
    navigateToDetail:function(){
        window.location="../detail/detail.html"
    }
  }
});
