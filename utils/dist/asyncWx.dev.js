"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showToast = exports.showModal = exports.openSetting = exports.chooseAddress = exports.getSetting = void 0;

var getSetting = function getSetting() {
  return new Promise(function (resolve, reject) {
    wx.getSetting({
      success: function success(result) {
        resolve(result);
      },
      fail: function fail(err) {
        reject(err);
      },
      complete: function complete() {}
    });
  });
};

exports.getSetting = getSetting;

var chooseAddress = function chooseAddress() {
  return new Promise(function (resolve, reject) {
    wx.chooseAddress({
      success: function success(result) {
        resolve(result);
      },
      fail: function fail(err) {
        reject(err);
      },
      complete: function complete() {}
    });
  });
};

exports.chooseAddress = chooseAddress;

var openSetting = function openSetting() {
  return new Promise(function (resolve, reject) {
    wx.openSetting({
      success: function success(result) {
        resolve(result);
      },
      fail: function fail(err) {
        reject(err);
      },
      complete: function complete() {}
    });
  });
};

exports.openSetting = openSetting;

var showModal = function showModal(_ref) {
  var content = _ref.content;
  return new Promise(function (resolve, reject) {
    wx.showModal({
      title: '提示',
      content: content,
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
};

exports.showModal = showModal;

var showToast = function showToast(_ref2) {
  var title = _ref2.title;
  return new Promise(function (resolve, reject) {
    wx.showToast({
      title: title,
      icon: 'none',
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
};

exports.showToast = showToast;