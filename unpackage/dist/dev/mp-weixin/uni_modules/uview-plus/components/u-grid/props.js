"use strict";
const uni_modules_uviewPlus_libs_vue = require("../../libs/vue.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    // 分成几列
    col: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.grid.col
    },
    // 是否显示边框
    border: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.grid.border
    },
    // 宫格对齐方式，表现为数量少的时候，靠左，居中，还是靠右
    align: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.grid.align
    }
  }
});
exports.props = props;
