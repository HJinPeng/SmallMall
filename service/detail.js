import request from './network'

export function getDetail(iid) {
  return request({
    url: '/detail',
    data:{
      iid
    }
  })
}

export function getRecommends(){
  return request({
    url: '/recommend'
  })
}

// 商品基本信息
export class GoodsBaseInfo{
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.realPrice = itemInfo.lowNowPrice;   //最低价
    this.oldPrice = itemInfo.oldPrice;   
    this.discount = itemInfo.discountDesc;   // 几折
    this.columns = columns;    // 销量..收藏..默认快递
    this.services = services;  // 7天无理由退货...
  }
}

// 店铺信息
export class ShopInfo{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;  // 描述相符4.6，价格合理5...
    this.goodsCount = shopInfo.cGoods;  // 全部宝贝数量
  }
}

// 参数详情
export class ParamInfo{
  constructor(info,rule){
    this.image = info.images ? info.images[0]:'';
    this.infos = info.set; //厚薄 颜色 厂址
    this.sizes = rule? rule.tables:[]; //  尺码说明
  }
}