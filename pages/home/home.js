// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '你好啊',
      duration: 3000,
      icon: 'loading',
      mask: true,
      success: ()=>{
        console.log('success');
      },
      fail:()=>{
        console.log('fail');
      },
      complete:()=>{
        console.log('complete');
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content:'我是内容',
      cancelText:'退出',
      cancelColor: 'red',
      // showCancel: false,
      success:(res)=>{
        console.log(res);
        if(res.cancel) {
          console.log('点击了取消');
        }else{
          console.log('点击了确定');
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
      mask: true
    })
    setTimeout(()=>{
      wx.hideLoading({
        complete: (res) => {},
      })
    },1000)

  },
  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      success: (res)=>{
        console.log(res);
        switch (res.tapIndex){
          case 0 :
            console.log('0');
            break;
          case 1:
            console.log('1');
            break;
          default:
            break;
        }
      }
    })
  }
})