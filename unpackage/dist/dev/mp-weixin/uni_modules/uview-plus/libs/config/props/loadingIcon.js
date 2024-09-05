"use strict";
const uni_modules_uviewPlus_libs_config_config = require("../config.js");
const {
  color
} = uni_modules_uviewPlus_libs_config_config.config;
const LoadingIcon = {
  // loading-icon加载中图标组件
  loadingIcon: {
    show: true,
    color: color["u-tips-color"],
    textColor: color["u-tips-color"],
    vertical: false,
    mode: "spinner",
    size: 24,
    textSize: 15,
    text: "",
    timingFunction: "ease-in-out",
    duration: 1200,
    inactiveColor: ""
  }
};
exports.LoadingIcon = LoadingIcon;
