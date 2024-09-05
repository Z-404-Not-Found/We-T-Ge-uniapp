"use strict";
const uni_modules_uviewPlus_libs_vue = require("../vue.js");
const mpMixin = uni_modules_uviewPlus_libs_vue.defineMixin({
  // 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用flex属性
  options: {
    virtualHost: true
  }
});
exports.mpMixin = mpMixin;
