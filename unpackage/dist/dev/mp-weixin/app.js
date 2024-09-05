"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const uni_modules_uviewPlus_index = require("./uni_modules/uview-plus/index.js");
const uni_modules_piniaPluginUnistorage_index = require("./uni_modules/pinia-plugin-unistorage/index.js");
if (!Math) {
  "./pages/chatList/chatList.js";
  "./pages/personalCenter/personalCenter.js";
  "./pages/chat/chat.js";
  "./pages/addRole/addRole.js";
  "./pages/roleCenter/roleCenter.js";
  "./pages/userCenter/userCenter.js";
  "./pages/about/about.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(uni_modules_uviewPlus_index.uviewPlus);
  const store = common_vendor.createPinia();
  store.use(uni_modules_piniaPluginUnistorage_index.createUnistorage());
  app.use(store);
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
function rpxToPx(rpx) {
  let deviceWidth = common_vendor.wx$1.getSystemInfoSync().windowWidth;
  let px = deviceWidth / 750 * Number(rpx);
  return Math.floor(px);
}
function pxToRpx(px) {
  let deviceWidth = common_vendor.wx$1.getSystemInfoSync().windowWidth;
  let rpx = 750 / deviceWidth * Number(px);
  return Math.floor(rpx);
}
createApp().app.mount("#app");
exports.createApp = createApp;
exports.pxToRpx = pxToRpx;
exports.rpxToPx = rpxToPx;
