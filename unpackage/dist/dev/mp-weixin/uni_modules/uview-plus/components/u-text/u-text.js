"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_components_uText_props = require("./props.js");
const uni_modules_uviewPlus_components_uText_value = require("./value.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_mixin_button = require("../../libs/mixin/button.js");
const uni_modules_uviewPlus_libs_mixin_openType = require("../../libs/mixin/openType.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const _sfc_main = {
  name: "up-text",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uText_value.value, uni_modules_uviewPlus_libs_mixin_button.buttonMixin, uni_modules_uviewPlus_libs_mixin_openType.openType, uni_modules_uviewPlus_components_uText_props.props],
  emits: ["click"],
  computed: {
    valueStyle() {
      const style = {
        textDecoration: this.decoration,
        fontWeight: this.bold ? "bold" : "normal",
        wordWrap: this.wordWrap,
        fontSize: uni_modules_uviewPlus_libs_function_index.addUnit(this.size)
      };
      !this.type && (style.color = this.color);
      this.isNvue && this.lines && (style.lines = this.lines);
      this.lineHeight && (style.lineHeight = uni_modules_uviewPlus_libs_function_index.addUnit(this.lineHeight));
      !this.isNvue && this.block && (style.display = "block");
      return uni_modules_uviewPlus_libs_function_index.deepMerge(style, uni_modules_uviewPlus_libs_function_index.addStyle(this.customStyle));
    },
    isNvue() {
      let nvue = false;
      return nvue;
    },
    isMp() {
      let mp = false;
      mp = true;
      return mp;
    }
  },
  data() {
    return {};
  },
  methods: {
    addStyle: uni_modules_uviewPlus_libs_function_index.addStyle,
    clickHandler() {
      if (this.call && this.mode === "phone") {
        common_vendor.index.makePhoneCall({
          phoneNumber: this.text
        });
      }
      this.$emit("click");
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_link2 = common_vendor.resolveComponent("u-link");
  (_easycom_u_icon2 + _easycom_u_link2)();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
const _easycom_u_link = () => "../u-link/u-link.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_link)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.show
  }, _ctx.show ? common_vendor.e({
    b: _ctx.mode === "price"
  }, _ctx.mode === "price" ? {
    c: common_vendor.n(_ctx.type && `u-text__value--${_ctx.type}`),
    d: common_vendor.s($options.valueStyle)
  } : {}, {
    e: _ctx.prefixIcon
  }, _ctx.prefixIcon ? {
    f: common_vendor.p({
      name: _ctx.prefixIcon,
      customStyle: $options.addStyle(_ctx.iconStyle)
    })
  } : {}, {
    g: _ctx.mode === "link"
  }, _ctx.mode === "link" ? {
    h: $options.valueStyle.fontWeight,
    i: $options.valueStyle.wordWrap,
    j: $options.valueStyle.fontSize,
    k: common_vendor.n(_ctx.type && `u-text__value--${_ctx.type}`),
    l: common_vendor.n(_ctx.lines && `u-line-${_ctx.lines}`),
    m: common_vendor.p({
      text: _ctx.value,
      href: _ctx.href,
      underLine: true
    })
  } : _ctx.openType && $options.isMp ? {
    o: common_vendor.t(_ctx.value),
    p: common_vendor.s($options.valueStyle),
    q: _ctx.index,
    r: _ctx.openType,
    s: common_vendor.o((...args) => _ctx.onGetUserInfo && _ctx.onGetUserInfo(...args)),
    t: common_vendor.o((...args) => _ctx.onContact && _ctx.onContact(...args)),
    v: common_vendor.o((...args) => _ctx.onGetPhoneNumber && _ctx.onGetPhoneNumber(...args)),
    w: common_vendor.o((...args) => _ctx.onError && _ctx.onError(...args)),
    x: common_vendor.o((...args) => _ctx.onLaunchApp && _ctx.onLaunchApp(...args)),
    y: common_vendor.o((...args) => _ctx.onOpenSetting && _ctx.onOpenSetting(...args)),
    z: _ctx.lang,
    A: _ctx.sessionFrom,
    B: _ctx.sendMessageTitle,
    C: _ctx.sendMessagePath,
    D: _ctx.sendMessageImg,
    E: _ctx.showMessageCard,
    F: _ctx.appParameter
  } : {
    G: common_vendor.t(_ctx.value),
    H: common_vendor.s($options.valueStyle),
    I: common_vendor.n(_ctx.type && `u-text__value--${_ctx.type}`),
    J: common_vendor.n(_ctx.lines && `u-line-${_ctx.lines}`)
  }, {
    n: _ctx.openType && $options.isMp,
    K: _ctx.suffixIcon
  }, _ctx.suffixIcon ? {
    L: common_vendor.p({
      name: _ctx.suffixIcon,
      customStyle: $options.addStyle(_ctx.iconStyle)
    })
  } : {}, {
    M: common_vendor.n(_ctx.customClass),
    N: _ctx.margin,
    O: _ctx.align === "left" ? "flex-start" : _ctx.align === "center" ? "center" : "flex-end",
    P: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0a574502"]]);
wx.createComponent(Component);
