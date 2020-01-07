// pages/home/home.js
const app = getApp();
const name = app.globalData.name;
const age = app.globalData.age;
// console.log(name);
// console.log(age);

// 注册一个页面
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  // },
  onLoad(){
    // console.log('onload');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('onReady');
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

  // 监听wxml中的事件
  handleGetUserInfo(event){
    // console.log(event);
  },
  clickItem(){
    // console.log("haha");
  },

  // 监听其他事件
  // 监听页面滚动
  onPageScroll(obj){
    // console.log(obj);
  },

  // 监听页面滚动到底部
  onReachBottom(){
    // console.log();
  }


})