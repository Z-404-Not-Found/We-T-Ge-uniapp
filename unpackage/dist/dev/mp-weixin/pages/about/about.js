"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_navbar2 = common_vendor.resolveComponent("up-navbar");
  const _easycom_up_image2 = common_vendor.resolveComponent("up-image");
  const _easycom_up_text2 = common_vendor.resolveComponent("up-text");
  (_easycom_up_navbar2 + _easycom_up_image2 + _easycom_up_text2)();
}
const _easycom_up_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_up_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_up_text = () => "../../uni_modules/uview-plus/components/u-text/u-text.js";
if (!Math) {
  (_easycom_up_navbar + _easycom_up_image + _easycom_up_text)();
}
const _sfc_main = {
  __name: "about",
  setup(__props) {
    const dateNow = common_vendor.ref("");
    const windowHeight = common_vendor.ref();
    windowHeight.value = common_vendor.index.getSystemInfoSync().screenHeight;
    common_vendor.onReady(() => {
      dateNow.value = (/* @__PURE__ */ new Date()).toLocaleString();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "关于",
          border: true,
          fixed: true,
          placeholder: true,
          autoBack: true,
          bgColor: "#ededed"
        }),
        b: common_vendor.p({
          duration: "100",
          src: "/static/头像.jpg",
          shape: "square",
          radius: "0",
          width: "240rpx",
          height: "240rpx"
        }),
        c: common_vendor.t(dateNow.value),
        d: common_vendor.p({
          size: "24rpx",
          mode: "link",
          text: "Go to uview-plus docs",
          href: "https://www.uviewui.com"
        }),
        e: windowHeight.value + "px"
      };
    };
  }
};
wx.createPage(_sfc_main);
