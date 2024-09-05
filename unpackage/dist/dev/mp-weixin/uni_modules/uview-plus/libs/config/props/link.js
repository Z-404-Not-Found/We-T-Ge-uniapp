"use strict";
const uni_modules_uviewPlus_libs_config_config = require("../config.js");
const {
  color
} = uni_modules_uviewPlus_libs_config_config.config;
const Link = {
  // link超链接组件props参数
  link: {
    color: color["u-primary"],
    fontSize: 15,
    underLine: false,
    href: "",
    mpTips: "链接已复制，请在浏览器打开",
    lineColor: "",
    text: ""
  }
};
exports.Link = Link;
