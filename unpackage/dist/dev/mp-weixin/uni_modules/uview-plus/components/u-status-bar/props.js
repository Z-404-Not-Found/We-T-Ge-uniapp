"use strict";
const uni_modules_uviewPlus_libs_vue = require("../../libs/vue.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    bgColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.statusBar.bgColor
    }
  }
});
exports.props = props;
