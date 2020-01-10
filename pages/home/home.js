// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home'

const types = ['pop','new','sell']
const TOP_DISTANCE = 1000;
Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行','新款','精选'],
    goods:{
      'pop':{ page: 0, list: [] },
      'new':{ page: 0, list: [] },
      'sell':{ page: 0, list: [] }
    },
    currentType: 'pop',
    showBackTop: false,
    isTabFixed: false,
    tabScrollTop: -100
  },
  
  onLoad: function (options) {
    // 1. 获取banners,recommend
    this._getMultiData();
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');
  },

  // ---------------------------网络请求--------------------
  _getMultiData(){
    getMultiData().then(res=>{
      // console.log(res);
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners,
        recommends
      })
    })
  },

  _getGoodsData(type){
    // 1.获取页码
    const page = this.data.goods[type].page+1;
    getGoodsData(type,page).then(res=>{
      // console.log(res);
      const list = res.data.data.list;
      const oldList = this.data.goods[type].list;
      oldList.push(...list);
      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`;
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    })
  },


  //----------------------------------事件监听----------------------
  // 切换tab
  handleTabClick(event){
    // console.log(event);
    const index = event.detail.index;
    this.setData({
      currentType: types[index]
    })
    // console.log(index);
  },

  // 页面滚动到底部
  onReachBottom(){
    // console.log('滚动到底部');
    this._getGoodsData(this.data.currentType)
  },

  // 监听页面滚动
  onPageScroll(options){
    // console.log(options);
    const scrollTop = options.scrollTop;
    const flag = scrollTop >= TOP_DISTANCE;
    if(flag != this.data.showBackTop){
      this.setData({
        showBackTop: flag
      })
    }
    //修改tabScrollTop
    const flag2 = scrollTop >= this.data.tabScrollTop;
    if(flag2 != this.data.isTabFixed){
      this.setData({
        isTabFixed : flag2
      })
    }
  },

  // 监听recommend图片加载完毕
  handleImageLoad(){
    // console.log('图片加载完成');
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      // console.log(rect);
      this.data.tabScrollTop = rect.top;
    }).exec()
  }
})