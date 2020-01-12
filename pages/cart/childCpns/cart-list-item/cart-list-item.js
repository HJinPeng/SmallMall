// pages/cart/cart-list-item/cart-list-item.js
const app = getApp();

Component({
  properties: {
    goods:{
      type: Object,
      value: {}
    },
    index: {
      type: Number
    }
  },
  data: {

  },
  methods: {
    // 点击icon
    onCheckClick(e){
      // 找到对应的商品
      const goods = app.globalData.cartList.find(item=>item.iid == this.properties.goods.iid)
      goods.checked = !goods.checked;

      const index = e.currentTarget.dataset.index;
      app.changeGoodsState(index,goods);
    }
  }
})
