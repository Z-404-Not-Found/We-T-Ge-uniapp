"use strict";
const uni_modules_uviewPlus_libs_vue = require("../../libs/vue.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const props = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    // 是否展示modal
    show: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.show
    },
    // 标题
    title: {
      type: [String],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.title
    },
    // 弹窗内容
    content: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.content
    },
    // 确认文案
    confirmText: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.confirmText
    },
    // 取消文案
    cancelText: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.cancelText
    },
    // 是否显示确认按钮
    showConfirmButton: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.showConfirmButton
    },
    // 是否显示取消按钮
    showCancelButton: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.showCancelButton
    },
    // 确认按钮颜色
    confirmColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.confirmColor
    },
    // 取消文字颜色
    cancelColor: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.cancelColor
    },
    // 对调确认和取消的位置
    buttonReverse: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.buttonReverse
    },
    // 是否开启缩放效果
    zoom: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.zoom
    },
    // 是否异步关闭，只对确定按钮有效
    asyncClose: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.asyncClose
    },
    // 是否允许点击遮罩关闭modal
    closeOnClickOverlay: {
      type: Boolean,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.closeOnClickOverlay
    },
    // 给一个负的margin-top，往上偏移，避免和键盘重合的情况
    negativeTop: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.negativeTop
    },
    // modal宽度，不支持百分比，可以数值，px，rpx单位
    width: {
      type: [String, Number],
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.width
    },
    // 确认按钮的样式，circle-圆形，square-方形，如设置，将不会显示取消按钮
    confirmButtonShape: {
      type: String,
      default: () => uni_modules_uviewPlus_libs_config_props.defProps.modal.confirmButtonShape
    }
  }
});
exports.props = props;
