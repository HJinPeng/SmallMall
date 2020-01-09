// pages/home/home.js
import request from '../../util/request.js';
Page({
  onLoad(){
    this.getData();
    // wx.request({
    //   url: 'https://www.baidu.com/',
    //   method:'post',
    //   data:{},
    //   success: res => {
    //     console.log(res);
    //   },
    //   fail: err => {

    //   },
    //   // 成功失败都会执行
    //   complete: res => {

    //   }
    // })
  },
  getData(){
    request({
      url:'https://www.baidu.com/'
    }).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }
})