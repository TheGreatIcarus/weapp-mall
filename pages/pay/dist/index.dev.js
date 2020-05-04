"use strict";

var _asyncWx = require("../../utils/asyncWx.js");

var _runtime = _interopRequireDefault(require("../../lib/runtime/runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Page({
  // 商品全选

  /**
  * 页面的初始数据
  */
  data: {
    data: {
      address: {},
      cart: [],
      totalPrice: 0,
      totalNum: 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    var address = wx.getStorageSync("address");
    var cart = wx.getStorageSync("cart") || []; // const allChecked=cart.length?cart.every(v=>v.checked):false;

    cart = cart.filter(function (v) {
      return v.checked;
    });
    var totalPrice = 0;
    var totalNum = 0;
    cart.forEach(function (v) {
      totalPrice += v.num * v.goods_price;
      totalNum += v.num;
    });
    this.setData({
      cart: cart,
      totalPrice: totalPrice,
      totalNum: totalNum,
      address: address
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function onShareAppMessage() {}
});