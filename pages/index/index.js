//index.js
//获取应用实例
var app = getApp();

Page({
  data: {
    currentTab: 0,
    isChecked: app.globalData.isChecked,
    live:[
      { pic: "/imgs/1.jpg", msg: "小丸子啊小丸子" },
      { pic: "/imgs/3.jpg", msg: "萌萌哒丸啊小丸子" }, 
      { pic: "/imgs/4.jpg", msg: "小丸子啊哈哈小丸子fdsfdsfe" }, 
      { pic: "/imgs/5.jpg", msg: "小丸子asf啊小丸子" }, 
      { pic: "/imgs/1.jpg", msg: "小丸子啊小丸子" }
    ],
    life:[
      { pic: "/imgs/img01.jpg", msg: "徐云龙征订" }, 
      { pic: "/imgs/img02.jpg", msg: "徐云龙hahahahahhahah征订" },
      { pic: "/imgs/img01.jpg", msg: "徐云龙征订" },
      { pic: "/imgs/img02.jpg", msg: "徐云龙hahahahahhahah征订" }

    ],
    girls:[
      { pic: "/imgs/1.jpg", msg: "小丸子啊小丸子" },
      { pic: "/imgs/3.jpg", msg: "萌萌哒丸啊小丸子" }
    ]

  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function (options) {
    console.log(options)
  },
  //点击切换
  switchNav(e){
    this.setData({
      currentTab: e.target.dataset.current-0
    })
  },
  //滑动切换
  changeNav({detail}){
    this.setData({
      currentTab:detail.current
    })
  },
  check(e){
    console.log(e.currentTarget.dataset.curr)
    // isChecked=e.currentTarget.dataset.curr;
    this.setData({
      isChecked: e.currentTarget.dataset.curr
    })
    console.log(this.data.isChecked)
  }

})
