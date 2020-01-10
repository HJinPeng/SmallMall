// pages/category/childCpns/h-menu/h-menu.js
Component({
  properties: {
    categories:{
      type: Array,
      value: []
    }
  },

  data: {
    currentIndex: 0
  },

  methods: {
    // 点击分类
    onItemClick(event){
      const currentIndex = event.currentTarget.dataset.index;
      this.setData({
        currentIndex  
      })
      //将最新的currentIndex传递到category页面
      this.triggerEvent('menuClick',{currentIndex},{})
    }
  }
})
