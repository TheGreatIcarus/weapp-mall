"use strict";var _index=require("../../request/index.js"),_runtime=_interopRequireDefault(require("../../lib/runtime/runtime"));function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}Page({data:{goodsObj:{}},GoodsInfo:{},onLoad:function(o){var e=o.goods_id;this.getGoodsDetail(e)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},getGoodsDetail:function(e){var n;return _runtime.default.async(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,_runtime.default.awrap((0,_index.request)({url:"/goods/detail",data:{goods_id:e}}));case 2:n=o.sent,this.GoodsInfo=n,this.setData({goodsObj:{goods_name:n.goods_name,goods_price:n.goods_price,goods_introduce:n.goods_introduce.replace(/\.webp/g,".jpg"),pics:n.pics}});case 5:case"end":return o.stop()}},null,this)},handlePreviewImage:function(o){var e=this.GoodsInfo.pics.map(function(o){return o.pics_mid}),n=o.currentTarget.dataset.url;wx.previewImage({current:n,urls:e})},handleCartAdd:function(){var e=this,o=wx.getStorageSync("cart")||[],n=o.findIndex(function(o){return o.goods_id===e.GoodsInfo.goods_id});-1===n?(this.GoodsInfo.num=1,this.GoodsInfo.checked=!0,o.push(this.GoodsInfo)):o[n].num++,wx.setStorageSync("cart",o),wx.showToast({title:"加入成功",icon:"success",image:"",duration:1500,mask:!0,success:function(){},fail:function(){},complete:function(){}})}});