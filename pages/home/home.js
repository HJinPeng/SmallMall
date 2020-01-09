// pages/home/home.js
Page({
  data: {
    isShow: true,
    score: 40,
    price: 25.666,
    colors:['red','yellow','blue'],
    count: 0,
    text:''
  },
  onLoad(){
   console.log('onload')
  },
  onShow(){
    console.log('onShow')
  },
  onReady(){
    console.log('onReady');
  },
  handleIncrement(){
    this.setData({
      score: this.data.score+10
    })
  },
  handleItem(event){
    console.log(event);
    var dataset = event.currentTarget.dataset;
    console.log(dataset);
  },
  handleIncrement(event){
    console.log(event);
    this.setData({
      count: this.data.count+1
    })
  },
  handleTabClick(event){
    console.log(event);
  },
  handleIncrementCpn(){
    const my_sel = this.selectComponent('.sel-class');
    console.log(my_sel);
    my_sel.incrementCount(10)
    //不推荐
    // my_sel.setData({
    //   count: my_sel.data.count +20
    // })
  }
})