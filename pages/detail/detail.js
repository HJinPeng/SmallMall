// pages/detail/detail.js
import {
  getDetail,
  getRecommends,
  GoodsBaseInfo,
  ShopInfo,
  ParamInfo
} from '../../service/detail'

Page({
  data: {
    iid: '',//1m7c6iu
    topImages: [],
    baseInfo: {},
    shopInfo: {},
    detailInfo: {},
    paramInfo: {},
    commentInfo: {},
    recommends: {}
  },
  //-------------------------------生命周期----------------------
  onLoad: function (options) {
    this.setData({
      iid: options.iid
    })

    // 请求商品详情数据
    this._getDetail();

    // 请求推荐数据
    this._getRecommends();
  },

  //--------------------------------网络请求----------------------
  _getDetail(){
    const iid = this.data.iid;
    getDetail(iid).then(res=>{
      console.log(res);
      const data = res.data.result;
      // 1. 轮播图
      const topImages = data.itemInfo.topImages;
      // 2. 创建基本信息
      const baseInfo = new GoodsBaseInfo(data.itemInfo,data.columns,data.shopInfo.services);
      // 3. 创建商店信息
      const shopInfo = new ShopInfo(data.shopInfo);
      // 4. 获取细节详情信息
      const detailInfo = data.detailInfo;
      // 5. 获取参数信息
      const paramInfo = new ParamInfo(data.itemParams.info,data.itemParams.rule);
      // 6. 获取评论信息
      let commentInfo = {};
      if(data.rate && data.rate.cRate > 0){
        commentInfo = data.rate.list[0];
      }
      this.setData({
        topImages,
        baseInfo,
        shopInfo,
        detailInfo,
        paramInfo,
        commentInfo
      })
    })
  },

  _getRecommends(){
    getRecommends().then(res=>{
      console.log(res);
      this.setData({
        recommends: res.data.data.list
      })
    })
  }







  //------------------------------事件监听------------------------
})