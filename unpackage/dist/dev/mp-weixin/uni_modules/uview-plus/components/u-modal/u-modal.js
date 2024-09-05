"use strict";
const uni_modules_uviewPlus_components_uModal_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-modal",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uModal_props.props],
  data() {
    return {
      loading: false
    };
  },
  watch: {
    show(n) {
      if (n && this.loading)
        this.loading = false;
    }
  },
  emits: ["confirm", "cancel", "close"],
  methods: {
    addUnit: uni_modules_uviewPlus_libs_function_index.addUnit,
    // 点击确定按钮
    confirmHandler() {
      if (this.asyncClose) {
        this.loading = true;
      }
      this.$emit("confirm");
    },
    // 点击取消按钮
    cancelHandler() {
      this.$emit("cancel");
    },
    // 点击遮罩
    // 从原理上来说，modal的遮罩点击，并不是真的点击到了遮罩
    // 因为modal依赖于popup的中部弹窗类型，中部弹窗比较特殊，虽有然遮罩，但是为了让弹窗内容能flex居中
    // 多了一个透明的遮罩，此透明的遮罩会覆盖在灰色的遮罩上，所以实际上是点击不到灰色遮罩的，popup内部在
    // 透明遮罩的子元素做了.stop处理，所以点击内容区，也不会导致误触发
    clickHandler() {
      if (this.closeOnClickOverlay) {
        this.$emit("close");
      }
    }
  }
};
if (!Array) {
  const _easycom_u_line2 = common_vendor.resolveComponent("u-line");
  const _easycom_u_loading_icon2 = common_vendor.resolveComponent("u-loading-icon");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_line2 + _easycom_u_loading_icon2 + _easycom_u_popup2)();
}
const _easycom_u_line = () => "../u-line/u-line.js";
const _easycom_u_loading_icon = () => "../u-loading-icon/u-loading-icon.js";
const _easycom_u_popup = () => "../u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_line + _easycom_u_loading_icon + _easycom_u_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.title
  }, _ctx.title ? {
    b: common_vendor.t(_ctx.title)
  } : {}, {
    c: common_vendor.t(_ctx.content),
    d: `${_ctx.title ? 12 : 25}px`,
    e: _ctx.$slots.confirmButton
  }, _ctx.$slots.confirmButton ? {} : common_vendor.e({
    f: _ctx.showCancelButton
  }, _ctx.showCancelButton ? {
    g: common_vendor.t(_ctx.cancelText),
    h: _ctx.cancelColor,
    i: common_vendor.n(_ctx.showCancelButton && !_ctx.showConfirmButton && "u-modal__button-group__wrapper--only-cancel"),
    j: common_vendor.o((...args) => $options.cancelHandler && $options.cancelHandler(...args))
  } : {}, {
    k: _ctx.showConfirmButton && _ctx.showCancelButton
  }, _ctx.showConfirmButton && _ctx.showCancelButton ? {
    l: common_vendor.p({
      direction: "column"
    })
  } : {}, {
    m: _ctx.showConfirmButton
  }, _ctx.showConfirmButton ? common_vendor.e({
    n: $data.loading
  }, $data.loading ? {} : {
    o: common_vendor.t(_ctx.confirmText),
    p: _ctx.confirmColor
  }, {
    q: common_vendor.n(!_ctx.showCancelButton && _ctx.showConfirmButton && "u-modal__button-group__wrapper--only-confirm"),
    r: common_vendor.o((...args) => $options.confirmHandler && $options.confirmHandler(...args))
  }) : {}, {
    s: _ctx.buttonReverse ? "row-reverse" : "row"
  }), {
    t: $options.addUnit(_ctx.width),
    v: common_vendor.n(_ctx.customClass),
    w: common_vendor.o($options.clickHandler),
    x: common_vendor.p({
      mode: "center",
      zoom: _ctx.zoom,
      show: _ctx.show,
      customStyle: {
        borderRadius: "6px",
        overflow: "hidden",
        marginTop: `-${$options.addUnit(_ctx.negativeTop)}`
      },
      closeOnClickOverlay: _ctx.closeOnClickOverlay,
      safeAreaInsetBottom: false,
      duration: 400
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f667648f"]]);
wx.createComponent(Component);
