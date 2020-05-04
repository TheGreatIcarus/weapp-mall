"use strict";

var _index = require("../../request/index.js");

var _runtime = _interopRequireDefault(require("../../lib/runtime/runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// pages/goods_detail/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {}
  },
  GoodsInfo: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    var goods_id = options.goods_id;
    this.getGoodsDetail(goods_id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {},

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
  onShareAppMessage: function onShareAppMessage() {},
  getGoodsDetail: function getGoodsDetail(goods_id) {
    var goodsObj;
    return _runtime["default"].async(function getGoodsDetail$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _runtime["default"].awrap((0, _index.request)({
              url: "/goods/detail",
              data: {
                goods_id: goods_id
              }
            }));

          case 2:
            goodsObj = _context.sent;
            this.GoodsInfo = goodsObj;
            this.setData({
              goodsObj: {
                goods_name: goodsObj.goods_name,
                goods_price: goodsObj.goods_price,
                goods_introduce: goodsObj.goods_introduce.replace(/\.webp/g, '.jpg'),
                pics: goodsObj.pics
              }
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  },
  handlePreviewImage: function handlePreviewImage(e) {
    var urls = this.GoodsInfo.pics.map(function (v) {
      return v.pics_mid;
    });
    var current = e.currentTarget.dataset.url;
    wx.previewImage({
      current: current,
      urls: urls
    });
  },
  handleCartAdd: function handleCartAdd() {
    var _this = this;

    var cart = wx.getStorageSync("cart") || [];
    var index = cart.findIndex(function (v) {
      return v.goods_id === _this.GoodsInfo.goods_id;
    });

    if (index === -1) {
      this.GoodsInfo.num = 1;
      this.GoodsInfo.checked = true;
      cart.push(this.GoodsInfo);
    } else {
      cart[index].num++;
    }

    wx.setStorageSync("cart", cart);
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      image: '',
      duration: 1500,
      mask: true,
      success: function success(result) {},
      fail: function fail() {},
      complete: function complete() {}
    });
  }
});