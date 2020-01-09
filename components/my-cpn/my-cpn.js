// components/my-cpn/my-cpn.js
Component({
  options: {
    // 样式相互影响，默认值：isolated 相互隔离 ,apply-shared对组件影响，shared对页面也影响
    styleIsolation: 'apply-shared', 
  },
  properties: {
    content: String,
    title: String,
    item: {
      type: String,
      value: '我是默认值',
      observer: function(newVal,oldVal){
        console.log(newVal, oldVal);
      }
    }
  },
  externalClasses: ["contentclass"]
})
