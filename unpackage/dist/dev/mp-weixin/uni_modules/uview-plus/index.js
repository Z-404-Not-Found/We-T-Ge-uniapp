"use strict";
const common_vendor = require("../../common/vendor.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("./libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("./libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_luchRequest_core_Request = require("./libs/luch-request/core/Request.js");
const uni_modules_uviewPlus_libs_util_route = require("./libs/util/route.js");
const uni_modules_uviewPlus_libs_function_colorGradient = require("./libs/function/colorGradient.js");
const uni_modules_uviewPlus_libs_function_test = require("./libs/function/test.js");
const uni_modules_uviewPlus_libs_function_debounce = require("./libs/function/debounce.js");
const uni_modules_uviewPlus_libs_function_throttle = require("./libs/function/throttle.js");
const uni_modules_uviewPlus_libs_function_index = require("./libs/function/index.js");
const uni_modules_uviewPlus_libs_config_config = require("./libs/config/config.js");
const uni_modules_uviewPlus_libs_config_props = require("./libs/config/props.js");
const uni_modules_uviewPlus_libs_config_zIndex = require("./libs/config/zIndex.js");
const uni_modules_uviewPlus_libs_config_color = require("./libs/config/color.js");
const uni_modules_uviewPlus_libs_function_platform = require("./libs/function/platform.js");
const http = new uni_modules_uviewPlus_libs_luchRequest_core_Request.Request();
let themeType = ["primary", "success", "error", "warning", "info"];
function setConfig(configs) {
  uni_modules_uviewPlus_libs_function_index.index.shallowMerge(uni_modules_uviewPlus_libs_config_config.config, configs.config || {});
  uni_modules_uviewPlus_libs_function_index.index.shallowMerge(uni_modules_uviewPlus_libs_config_props.defProps, configs.props || {});
  uni_modules_uviewPlus_libs_function_index.index.shallowMerge(uni_modules_uviewPlus_libs_config_color.color, configs.color || {});
  uni_modules_uviewPlus_libs_function_index.index.shallowMerge(uni_modules_uviewPlus_libs_config_zIndex.zIndex, configs.zIndex || {});
}
uni_modules_uviewPlus_libs_function_index.index.setConfig = setConfig;
const $u = {
  route: uni_modules_uviewPlus_libs_util_route.route,
  date: uni_modules_uviewPlus_libs_function_index.index.timeFormat,
  // 另名date
  colorGradient: uni_modules_uviewPlus_libs_function_colorGradient.colorGradient.colorGradient,
  hexToRgb: uni_modules_uviewPlus_libs_function_colorGradient.colorGradient.hexToRgb,
  rgbToHex: uni_modules_uviewPlus_libs_function_colorGradient.colorGradient.rgbToHex,
  colorToRgba: uni_modules_uviewPlus_libs_function_colorGradient.colorGradient.colorToRgba,
  test: uni_modules_uviewPlus_libs_function_test.test,
  type: themeType,
  http,
  config: uni_modules_uviewPlus_libs_config_config.config,
  // uview-plus配置信息相关，比如版本号
  zIndex: uni_modules_uviewPlus_libs_config_zIndex.zIndex,
  debounce: uni_modules_uviewPlus_libs_function_debounce.debounce,
  throttle: uni_modules_uviewPlus_libs_function_throttle.throttle,
  mixin: uni_modules_uviewPlus_libs_mixin_mixin.mixin,
  mpMixin: uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin,
  props: uni_modules_uviewPlus_libs_config_props.defProps,
  ...uni_modules_uviewPlus_libs_function_index.index,
  color: uni_modules_uviewPlus_libs_config_color.color,
  platform: uni_modules_uviewPlus_libs_function_platform.platform
};
common_vendor.index.$u = $u;
const install = (Vue) => {
  Vue.config.globalProperties.$u = $u;
  Vue.mixin(uni_modules_uviewPlus_libs_mixin_mixin.mixin);
};
const uviewPlus = {
  install
};
exports.uviewPlus = uviewPlus;
