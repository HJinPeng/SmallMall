import request from './network'

// 请求banners,recommends
export function getMultiData(){
  return request({
    url: '/home/multidata'
  })
}

// 请求商品数据
export function getGoodsData(type, page) {
  return request({
    url: '/home/data',
    data:{
      type,
      page
    }
  })
}