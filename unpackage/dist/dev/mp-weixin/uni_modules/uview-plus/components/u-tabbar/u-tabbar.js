"use strict";
const uni_modules_uviewPlus_components_uTabbar_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-tabbar",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uTabbar_props.props],
  data() {
    return {
      placeholderHeight: 0
    };
  },
  computed: {
    tabbarStyle() {
      const style = {
        zIndex: this.zIndex
      };
      return uni_modules_uviewPlus_libs_function_index.deepMerge(style, uni_modules_uviewPlus_libs_function_index.addStyle(this.customStyle));
    },
    // 监听多个参数的变化，通过在computed执行对应的操作
    updateChild() {
      return [this.value, this.activeColor, this.inactiveColor];
    },
    updatePlaceholder() {
      return [this.fixed, this.placeholder];
    }
  },
  watch: {
    updateChild() {
      this.updateChildren();
    },
    updatePlaceholder() {
      this.setPlaceholderHeight();
    }
  },
  created() {
    this.children = [];
  },
  mounted() {
    this.setPlaceholderHeight();
  },
  methods: {
    updateChildren() {
      this.children.length && this.children.map((child) => child.updateFromParent());
    },
    // 设置用于防止塌陷元素的高度
    async setPlaceholderHeight() {
      if (!this.fixed || !this.placeholder)
        return;
      await uni_modules_uviewPlus_libs_function_index.sleep(20);
      this.$uGetRect(".u-tabbar__content").then(({ height = 50 }) => {
        this.placeholderHeight = height;
      });
    }
  }
};
if (!Array) {
  const _easycom_u_safe_bottom2 = common_vendor.resolveComponent("u-safe-bottom");
  _easycom_u_safe_bottom2();
}
const _easycom_u_safe_bottom = () => "../u-safe-bottom/u-safe-bottom.js";
if (!Math) {
  _easycom_u_safe_bottom();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.safeAreaInsetBottom
  }, _ctx.safeAreaInsetBottom ? {} : {}, {
    b: common_vendor.o((...args) => _ctx.noop && _ctx.noop(...args)),
    c: common_vendor.n(_ctx.border && "u-border-top"),
    d: common_vendor.n(_ctx.fixed && "u-tabbar--fixed"),
    e: common_vendor.s($options.tabbarStyle),
    f: _ctx.placeholder
  }, _ctx.placeholder ? {
    g: $data.placeholderHeight + "px"
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b9276d10"]]);
wx.createComponent(Component);
