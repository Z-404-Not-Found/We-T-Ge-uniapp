"use strict";
const uni_modules_uviewPlus_components_uFormItem_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_config_props = require("../../libs/config/props.js");
const uni_modules_uviewPlus_libs_config_color = require("../../libs/config/color.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-form-item",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uFormItem_props.props],
  data() {
    return {
      // 错误提示语
      message: "",
      parentData: {
        // 提示文本的位置
        labelPosition: "left",
        // 提示文本对齐方式
        labelAlign: "left",
        // 提示文本的样式
        labelStyle: {},
        // 提示文本的宽度
        labelWidth: 45,
        // 错误提示方式
        errorType: "message"
      },
      color: uni_modules_uviewPlus_libs_config_color.color
    };
  },
  // 组件创建完成时，将当前实例保存到u-form中
  computed: {
    propsLine() {
      return uni_modules_uviewPlus_libs_config_props.defProps.line;
    }
  },
  mounted() {
    this.init();
  },
  emits: ["click"],
  methods: {
    addStyle: uni_modules_uviewPlus_libs_function_index.addStyle,
    addUnit: uni_modules_uviewPlus_libs_function_index.addUnit,
    init() {
      this.updateParentData();
      if (!this.parent) {
        uni_modules_uviewPlus_libs_function_index.error("u-form-item需要结合u-form组件使用");
      }
    },
    // 获取父组件的参数
    updateParentData() {
      this.getParentData("u-form");
    },
    // 移除u-form-item的校验结果
    clearValidate() {
      this.message = null;
    },
    // 清空当前的组件的校验结果，并重置为初始值
    resetField() {
      const value = uni_modules_uviewPlus_libs_function_index.getProperty(this.parent.originalModel, this.prop);
      uni_modules_uviewPlus_libs_function_index.setProperty(this.parent.model, this.prop, value);
      this.message = null;
    },
    // 点击组件
    clickHandler() {
      this.$emit("click");
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_line2 = common_vendor.resolveComponent("u-line");
  (_easycom_u_icon2 + _easycom_u_line2)();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u_line = () => "../u-line/u-line.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_line)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.required || _ctx.leftIcon || _ctx.label
  }, _ctx.required || _ctx.leftIcon || _ctx.label ? common_vendor.e({
    b: _ctx.required
  }, _ctx.required ? {} : {}, {
    c: _ctx.leftIcon
  }, _ctx.leftIcon ? {
    d: common_vendor.p({
      name: _ctx.leftIcon,
      ["custom-style"]: _ctx.leftIconStyle
    })
  } : {}, {
    e: common_vendor.t(_ctx.label),
    f: common_vendor.s($data.parentData.labelStyle),
    g: common_vendor.s({
      justifyContent: $data.parentData.labelAlign === "left" ? "flex-start" : $data.parentData.labelAlign === "center" ? "center" : "flex-end"
    }),
    h: $options.addUnit(_ctx.labelWidth || $data.parentData.labelWidth),
    i: $data.parentData.labelPosition === "left" ? 0 : "5px"
  }) : {}, {
    j: _ctx.$slots.right
  }, _ctx.$slots.right ? {} : {}, {
    k: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args)),
    l: common_vendor.s($options.addStyle(_ctx.customStyle)),
    m: common_vendor.s({
      flexDirection: (_ctx.labelPosition || $data.parentData.labelPosition) === "left" ? "row" : "column"
    }),
    n: !!$data.message && $data.parentData.errorType === "message"
  }, !!$data.message && $data.parentData.errorType === "message" ? {
    o: common_vendor.t($data.message),
    p: $options.addUnit($data.parentData.labelPosition === "top" ? 0 : _ctx.labelWidth || $data.parentData.labelWidth)
  } : {}, {
    q: _ctx.borderBottom
  }, _ctx.borderBottom ? {
    r: common_vendor.p({
      color: $data.message && $data.parentData.errorType === "border-bottom" ? $data.color.error : $options.propsLine.color,
      customStyle: `margin-top: ${$data.message && $data.parentData.errorType === "message" ? "5px" : 0}`
    })
  } : {}, {
    s: !!$data.message && $data.parentData.errorType === "message" ? 1 : ""
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-42bac3de"]]);
wx.createComponent(Component);
