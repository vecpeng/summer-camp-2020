let vm = new Vue({
  el: "#main",
  data: {
    comment: {
      avatar: "../../image/avatar.png",
      username: "匿名用户",
      time: "2020年8月4号",
      content: "这个老师不错这个老师不错这个老师不错这个老师不错",
      thumbupNum: 2,
      replyNum: 2,
    },
    replys: [
      {
        avatar: "../../image/user_avatar.png",
        username: "匿名用户",
        time: "2020-8-7",
        replys: [
          {
            avatar: "../../image/user_avatar.png",
            name: "匿名用户",
            replyto: "二级评论者",
            content: "老师讲得真好,老师讲得真好",
          },
          {
            avatar: "../../image/user_avatar.png",
            name: "匿名用户",
            replyto: "二级评论者",
            content: "老师讲得真好",
          },
        ],
        content: "老师讲得真好",
      },
    ],
  },
});
