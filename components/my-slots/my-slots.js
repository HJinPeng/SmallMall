// components/my-slots/my-slots.js
Component({
  //配置多个插槽，样式共享...
  options:{
    multipleSlots: true,
    styleIsolation: 'isolate'
  },
  // 样式共享的类名
  externalClasses:[],

  // 监听数据改变
  observers:{
    sum: function(newVal){

    }
  },

  // 生命周期
  // 1. 监听组件所在页面的生命周期
  pageLifetimes:{
    // show(){
    //   console.log("监听组件所在页面显示出来时")
    // },
    // hide(){
    //   console.log("监听组件所在页面隐藏时");
    // },
    // resize(){
    //   console.log("监听组件所在页面尺寸的变化");
    // }
  },

  // 2. 监听组件本身的生命周期
  lifetimes:{
    created(){
      console.log("组件被创建时");
    },
    attached(){
      console.log("组件被添加到页面/组件");
    },
    ready(){
      console.log("组件被渲染出来时");
    },
    moved(){
      console.log("组件被移动");
    },
    detached(){
      console.log("组件被隐藏");
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
      value: 'this is a text',
      observers:function(newVal,oldVal){

      }
    },
    sum: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
