"use strict";
const uni_modules_uviewPlus_libs_vue = require("../../libs/vue.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    // 是否展示组件
    show: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.transition.show
    },
    // 使用的动画模式
    mode: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.transition.mode
    },
    // 动画的执行时间，单位ms
    duration: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.transition.duration
    },
    // 使用的动画过渡函数
    timingFunction: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.transition.timingFunction
    }
  }
});
exports.props = props;
