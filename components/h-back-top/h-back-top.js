// components/h-back-top/h-back-top.js
Component({
  properties: {

  },
  data: {

  },

  methods: {
    handleBackTop(){
      console.log('click');
      wx.pageScrollTo({
        scrollTop: 0
      })
    }
  }
})
