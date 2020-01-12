// pages/cart/cart.js
const app = getApp();

Page({
  data: {
    cartList: [],
    isSelectAll: true,
    totalPrice: 0,
    totalCounter: 0
  },
  onLoad: function (options) {
    this.setData({
      cartList: app.globalData.cartList
    })

    // 设置修改某个商品的回调
    app.changeGoodsState = (index,goods)=>{
      this.setData({
        [`cartList[${index}]`] : goods
      })
      // 设置全选状态
      const selectAll = !this.data.cartList.find(item=>!item.checked);
      this.setData({
        isSelectAll: selectAll
      })
      
      this.changeData();
    }
    
    // addToCartCallback回调函数，点击添加购物车，在detail.js中
    app.addToCartCallback = ()=>{
      this.setData({
        cartList: app.globalData.cartList
      })
      this.changeData();
    }
  },
  
  onShow(){
    wx.setNavigationBarTitle({
      title: `购物车(${this.data.cartList.length})`,
    })
    this.changeData();
  },

  changeData(){
    let totalPrice = 0;
    let counter = 0;

    for(let item of this.data.cartList){
      if(item.checked){
        counter++;
        totalPrice+=item.price*item.count
      }
    }

    this.setData({
      totalCounter: counter,
      totalPrice: totalPrice
    })
  },
  
  //-------------------------事件监听-----------------
  handleSelectAll(){
    // 1. 如果全部选中，点击则都不选中
    if(this.data.isSelectAll){
      this.data.cartList.forEach(item=>{
        item.checked = false;
      });
      this.setData({
        cartList: this.data.cartList,
        isSelectAll: false,
        totalPrice: 0,
        totalCounter: 0
      })
    }else{
      // 2. 如果是部分选中或都没选中，点击则全部选中
      let totalPrice = 0;
      this.data.cartList.forEach(item=>{
        item.checked = true;
        totalPrice+=item.price * item.count;
      });
      this.setData({
        cartList: this.data.cartList,
        isSelectAll: true,
        totalPrice,
        totalCounter:this.data.cartList.length
      })
    }
    
    


  
  }
})