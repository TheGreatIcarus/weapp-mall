"use strict";

var _asyncWx = require("../../utils/asyncWx.js");

var _runtime = _interopRequireDefault(require("../../lib/runtime/runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// pages/cart/index.js
Page({
  // 获取收获地址
  handleChooseAddress: function handleChooseAddress() {
    var res1, scopeAddress, address;
    return _runtime["default"].async(function handleChooseAddress$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _runtime["default"].awrap((0, _asyncWx.getSetting)());

          case 3:
            res1 = _context.sent;
            scopeAddress = res1.authSetting["scope.address"];

            if (!(scopeAddress === false)) {
              _context.next = 8;
              break;
            }

            _context.next = 8;
            return _runtime["default"].awrap((0, _asyncWx.openSetting)());

          case 8:
            _context.next = 10;
            return _runtime["default"].awrap((0, _asyncWx.chooseAddress)());

          case 10:
            address = _context.sent;
            address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo;
            wx.setStorageSync("address", address);
            _context.next = 17;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 15]]);
  },
  handleItemChange: function handleItemChange(e) {
    var goods_id = e.currentTarget.dataset.id;
    var cart = this.data.cart;
    var index = cart.findIndex(function (v) {
      return v.goods_id === goods_id;
    });
    cart[index].checked = !cart[index].checked;
    this.setCart(cart);
  },
  setCart: function setCart(cart) {
    var allChecked = true;
    var totalPrice = 0;
    var totalNum = 0;
    cart.forEach(function (v) {
      if (v.checked) {
        totalPrice += v.num * v.goods_price;
        totalNum += v.num;
      } else {
        allChecked = false;
      }
    });
    allChecked = cart.length != 0 ? allChecked : false;
    this.setData({
      cart: cart,
      totalPrice: totalPrice,
      totalNum: totalNum,
      allChecked: allChecked
    });
    wx.setStorageSync("cart", cart);
  },
  // 商品全选
  handleItemAllCheck: function handleItemAllCheck() {
    var _this$data = this.data,
        cart = _this$data.cart,
        allChecked = _this$data.allChecked;
    allChecked = !allChecked;
    cart.forEach(function (v) {
      return v.checked = allChecked;
    });
    this.setCart(cart);
  },
  handleItemNumEdit: function handleItemNumEdit(e) {
    var _e$currentTarget$data, operation, id, cart, index, result;

    return _runtime["default"].async(function handleItemNumEdit$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _e$currentTarget$data = e.currentTarget.dataset, operation = _e$currentTarget$data.operation, id = _e$currentTarget$data.id;
            cart = this.data.cart;
            index = cart.findIndex(function (v) {
              return v.goods_id === id;
            });

            if (!(cart[index].num === 1 && operation === -1)) {
              _context2.next = 10;
              break;
            }

            _context2.next = 6;
            return _runtime["default"].awrap((0, _asyncWx.showModal)({
              content: "您是否要删除？"
            }));

          case 6:
            result = _context2.sent;

            if (result.confirm) {
              cart.splice(index, 1);
              this.setCart(cart);
            }

            _context2.next = 12;
            break;

          case 10:
            cart[index].num += operation;
            this.setCart(cart);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, null, this);
  },
  handlePay: function handlePay() {
    var _this$data2, address, totalNum;

    return _runtime["default"].async(function handlePay$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _this$data2 = this.data, address = _this$data2.address, totalNum = _this$data2.totalNum;

            if (address.userName) {
              _context3.next = 5;
              break;
            }

            _context3.next = 4;
            return _runtime["default"].awrap((0, _asyncWx.showToast)({
              title: "您还没选择收获地址"
            }));

          case 4:
            return _context3.abrupt("return");

          case 5:
            if (!(totalNum === 0)) {
              _context3.next = 9;
              break;
            }

            _context3.next = 8;
            return _runtime["default"].awrap((0, _asyncWx.showToast)({
              title: "您还没有选购商品"
            }));

          case 8:
            return _context3.abrupt("return");

          case 9:
            wx.navigateTo({
              url: '/pages/pay/index',
              success: function success(result) {},
              fail: function fail() {},
              complete: function complete() {}
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, null, this);
  },

  /**
  * 页面的初始数据
  */
  data: {
    data: {
      address: {},
      cart: [],
      allChecked: false,
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

    this.setData({
      address: address
    });
    this.setCart(cart);
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