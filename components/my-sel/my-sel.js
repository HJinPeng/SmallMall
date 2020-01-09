// components/my-sel/my-sel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    incrementCount(num){
      this.setData({
        count: this.data.count+num
      })
    }
  }
})
