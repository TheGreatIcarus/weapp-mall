//Page Object
import { request  } from "../../request/index.js";
Page({
  data: {
    swiperList:[],
    catesList:[]
  },
  //options(Object)
  onLoad: function(options){
    // var reqTask = wx.request({
    //   url: 'https://api.it120.cc/kotoba/banner/list',
    //   success: (result)=>{
    //     this.setData({
    //       swiperList:result.data.data
          
    //     })
    //   },
    //   fail: ()=>{},
    //   complete: ()=>{}
    // });
   
    this.getSwiperList();

    this.getCatesList();

    
   
  },

  getSwiperList(){
    request({url:"/home/swiperdata"})
    .then(result=>{
      this.setData({
               swiperList:result
              
             })
    })
  },


  getCatesList(){
    request({url:"/home/catitems" })
    .then(result=>{
      this.setData({
               catesList:result
              
             })
    })
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});