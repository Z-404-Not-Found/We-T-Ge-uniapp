"use strict";
const uni_modules_uviewPlus_components_uCell_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewPlus_libs_function_test = require("../../libs/function/test.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-cell",
  data() {
    return {};
  },
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uCell_props.props],
  computed: {
    titleTextStyle() {
      return uni_modules_uviewPlus_libs_function_index.addStyle(this.titleStyle);
    }
  },
  emits: ["click"],
  methods: {
    addStyle: uni_modules_uviewPlus_libs_function_index.addStyle,
    testEmpty: uni_modules_uviewPlus_libs_function_test.test.empty,
    // 点击cell
    clickHandler(e) {
      if (this.disabled)
        return;
      this.$emit("click", {
        name: this.name
      });
      this.openPage();
      this.stop && this.preventEvent(e);
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
    a: _ctx.$slots.icon || _ctx.icon
  }, _ctx.$slots.icon || _ctx.icon ? common_vendor.e({
    b: _ctx.$slots.icon
  }, _ctx.$slots.icon ? {} : {
    c: common_vendor.p({
      name: _ctx.icon,
      ["custom-style"]: _ctx.iconStyle,
      size: _ctx.size === "large" ? 22 : 18
    })
  }) : {}, {
    d: _ctx.$slots.title || !_ctx.title
  }, _ctx.$slots.title || !_ctx.title ? {} : {
    e: common_vendor.t(_ctx.title),
    f: common_vendor.s($options.titleTextStyle),
    g: common_vendor.n(_ctx.required && "u-cell--required"),
    h: common_vendor.n(_ctx.disabled && "u-cell--disabled"),
    i: common_vendor.n(_ctx.size === "large" && "u-cell__title-text--large")
  }, {
    j: _ctx.label
  }, _ctx.label ? {
    k: common_vendor.t(_ctx.label),
    l: common_vendor.n(_ctx.disabled && "u-cell--disabled"),
    m: common_vendor.n(_ctx.size === "large" && "u-cell__label--large")
  } : {}, {
    n: !$options.testEmpty(_ctx.value)
  }, !$options.testEmpty(_ctx.value) ? {
    o: common_vendor.t(_ctx.value),
    p: common_vendor.n(_ctx.disabled && "u-cell--disabled"),
    q: common_vendor.n(_ctx.size === "large" && "u-cell__value--large")
  } : {}, {
    r: _ctx.$slots["right-icon"] || _ctx.isLink
  }, _ctx.$slots["right-icon"] || _ctx.isLink ? common_vendor.e({
    s: _ctx.rightIcon && !_ctx.$slots["right-icon"]
  }, _ctx.rightIcon && !_ctx.$slots["right-icon"] ? {
    t: common_vendor.p({
      name: _ctx.rightIcon,
      ["custom-style"]: _ctx.rightIconStyle,
      color: _ctx.disabled ? "#c8c9cc" : "info",
      size: _ctx.size === "large" ? 18 : 16
    })
  } : {}, {
    v: common_vendor.n(`u-cell__right-icon-wrap--${_ctx.arrowDirection}`)
  }) : {}, {
    w: _ctx.$slots["righticon"]
  }, _ctx.$slots["righticon"] ? {
    x: common_vendor.n(`u-cell__right-icon-wrap--${_ctx.arrowDirection}`)
  } : {}, {
    y: common_vendor.n(_ctx.center && "u-cell--center"),
    z: common_vendor.n(_ctx.size === "large" && "u-cell__body--large"),
    A: _ctx.border
  }, _ctx.border ? {} : {}, {
    B: common_vendor.n(_ctx.customClass),
    C: common_vendor.s($options.addStyle(_ctx.customStyle)),
    D: !_ctx.disabled && (_ctx.clickable || _ctx.isLink) ? "u-cell--clickable" : "",
    E: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3fd6feca"]]);
wx.createComponent(Component);
