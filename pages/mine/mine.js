// pages/mine/mine.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isChecked: app.globalData.isChecked,
    photo:0,
    care:0,
    fans:0,
    currentTab:0
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  //点击切换
  switchNav(e) {
    this.setData({
      currentTab: e.target.dataset.current - 0
    })
  },
  //滑动切换
  changeNav({ detail }) {
    this.setData({
      currentTab: detail.current
    })
  },
  check(e) {
    console.log(e.currentTarget.dataset.curr)
    this.setData({
      isChecked: e.currentTarget.dataset.curr
    })
    console.log(this.data.isChecked)
  }
})