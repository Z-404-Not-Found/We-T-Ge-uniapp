"use strict";
const uni_modules_uviewPlus_libs_vue = require("../../libs/vue.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    // 图标类名
    name: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.name
    },
    // 图标颜色，可接受主题色
    color: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.color
    },
    // 字体大小，单位px
    size: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.size
    },
    // 是否显示粗体
    bold: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.bold
    },
    // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
    index: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.index
    },
    // 触摸图标时的类名
    hoverClass: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.hoverClass
    },
    // 自定义扩展前缀，方便用户扩展自己的图标库
    customPrefix: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.customPrefix
    },
    // 图标右边或者下面的文字
    label: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.label
    },
    // label的位置，只能右边或者下边
    labelPos: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.labelPos
    },
    // label的大小
    labelSize: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.labelSize
    },
    // label的颜色
    labelColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.labelColor
    },
    // label与图标的距离
    space: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.space
    },
    // 图片的mode
    imgMode: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.imgMode
    },
    // 用于显示图片小图标时，图片的宽度
    width: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.width
    },
    // 用于显示图片小图标时，图片的高度
    height: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.height
    },
    // 用于解决某些情况下，让图标垂直居中的用途
    top: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.top
    },
    // 是否阻止事件传播
    stop: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.icon.stop
    }
  }
});
exports.props = props;
