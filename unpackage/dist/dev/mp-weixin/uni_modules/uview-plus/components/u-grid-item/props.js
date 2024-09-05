"use strict";
const uni_modules_uviewPlus_libs_vue = require("../../libs/vue.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    // 宫格的name
    name: {
      type: [String, Number, null],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.gridItem.name
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.gridItem.bgColor
    }
  }
});
exports.props = props;
