"use strict";
const uni_modules_uviewPlus_libs_vue = require("../../libs/vue.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    // input的label提示语
    label: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.formItem.label
    },
    // 绑定的值
    prop: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.formItem.prop
    },
    // 绑定的规则
    rule: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.formItem.rule
    },
    // 是否显示表单域的下划线边框
    borderBottom: {
      type: [String, Boolean],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.formItem.borderBottom
    },
    // label的位置，left-左边，top-上边
    labelPosition: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.formItem.labelPosition
    },
    // label的宽度，单位px
    labelWidth: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.formItem.labelWidth
    },
    // 右侧图标
    rightIcon: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.formItem.rightIcon
    },
    // 左侧图标
    leftIcon: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.formItem.leftIcon
    },
    // 是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置
    required: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.formItem.required
    },
    leftIconStyle: {
      type: [String, Object],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.formItem.leftIconStyle
    }
  }
});
exports.props = props;
