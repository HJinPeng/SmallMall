const TOKEN = 'token'
App({
  globalData:{
    token:''
  },
  onLaunch: function () {
    // 1. 先从缓存中取出token
    const token = wx.getStorageSync(TOKEN);
    // 2.判断token是否有值
    if(token && token.length !== 0){
      //已经有token
      this.checkToken(token);
    }else{
      this.login();
    }
    
  },
  login(){
    console.log('执行了登录操作');
    wx.login({
      //code只有5分钟有效期
      success: res=>{
        console.log(res);
        const code = res.code;
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data:{
            code
          },
          success: res=>{
            console.log(res);
            const token = res.data.token;
            this.globalData.token =token;
            console.log(this.globalData.token);
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  },
  checkToken(token){
    console.log('执行了验证操作');
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header:{
        token
      },
      success: res=>{
        console.log(res);
        if(!res.data.errCode) {
          console.log('token有效');
          this.globalData.token = token;
        }else{
          console.log('token无效，重新登录');
          this.login();
        }
      }
    })
  }
})
