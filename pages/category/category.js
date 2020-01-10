// pages/category/category.js
import {
  getCategory,
  getSubCategory,
  getCategoryDetail
} from '../../service/category'
Page({
  data: {
    categories: [],
    categoryData: {},
    currentIndex: 0
  },

  // -------------------------生命周期函数---------------
  onLoad: function (options) {
    // 1. 请求分类种类
    this._getCategory();
    
  },

  //-----------------------------请求数据--------------
  // 请求分类
  _getCategory(){
    getCategory().then(res=>{
      // 1. 获取categories
      const categories = res.data.data.category.list;
      // 2. 初始化每个类别的子数据
      const categoryData = {};
      for(let i = 0 ; i < categories.length; i++){
        categoryData[i]={
          subCategories:[],
          categoryDetail:[]
        }
      }
      this.setData({
        categories: res.data.data.category.list,
        categoryData:categoryData
      })
      // 请求第一个分类中的内容
      this._getSubCategory(0);
      // 请求第一个种类细节
      this._getCategoryDetail(0,'pop')
    })
  },

  // 请求分类中的内容
  _getSubCategory(currentIndex){
    const maitKey = this.data.categories[currentIndex].maitKey;
    getSubCategory(maitKey).then(res=>{
      const tempCategoryData = this.data.categoryData;
      tempCategoryData[currentIndex].subCategories = res.data.data.list;
      this.setData({
        categoryData: tempCategoryData
      })
      // console.log(res);
    })
  },

  // 获取种类细节
  _getCategoryDetail(index,type){
    const miniWallKey = this.data.categories[index].miniWallkey;
    getCategoryDetail(miniWallKey,type).then(res=>{
      const categoryData = this.data.categoryData;
      categoryData[index].categoryDetail = res.data;
      this.setData({
        categoryData: categoryData
      })
      console.log(res);
    })
  },
  // ----------------------------------事件监听-------------------------
  menuClick(e){
    const currentIndex = e.detail.currentIndex;
    this.setData({
      currentIndex
    })
    // 请求对应种类的数据
    this._getSubCategory(currentIndex);
    // 请求对应种类的细节
    this._getCategoryDetail(currentIndex,'pop')
  }


})