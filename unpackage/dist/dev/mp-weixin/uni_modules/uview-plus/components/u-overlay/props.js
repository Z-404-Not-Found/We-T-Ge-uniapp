"use strict";
const uni_modules_uviewPlus_libs_vue = require("../../libs/vue.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    // 是否显示遮罩
    show: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.overlay.show
    },
    // 层级z-index
    zIndex: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.overlay.zIndex
    },
    // 遮罩的过渡时间，单位为ms
    duration: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.overlay.duration
    },
    // 不透明度值，当做rgba的第四个参数
    opacity: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.overlay.opacity
    }
  }
});
exports.props = props;
