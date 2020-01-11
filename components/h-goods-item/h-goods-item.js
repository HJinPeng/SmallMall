// components/h-goods-item/h-goods-item.js
Component({
  properties: {
    item:{
      type: Object,
      value: {}
    }
  },
  data: {

  },
  methods:{
    itemClick(){
      const iid = this.data.item.iid;
      wx.navigateTo({
        url: '/pages/detail/detail?iid='+iid
      })
    }
  }
})
