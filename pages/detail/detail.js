// pages/detail/detail.js
Page({
  data: {
  },
  onLoad: function (options) {
    console.log(options);
  },
  onUnload(){
    console.log('页面退出');
    // 1.获取首页的全局对象
    // getCurrentPages当前所有栈的页面，活跃页面
    const pages = getCurrentPages();
    const home = pages[pages.length - 2];
    home.setData({
      title: '呵呵'
    })
    console.log(pages);
  },
  handleBack(){
    wx.navigateBack({
      delta: 1
    })
  }
})