"use strict";
const uni_modules_uviewPlus_libs_mixin_touch = require("../../libs/mixin/touch.js");
const uni_modules_uviewPlus_components_uSwipeActionItem_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewPlus_components_uSwipeActionItem_wxs = require("./wxs.js");
const common_vendor = require("../../../../common/vendor.js");
const block0 = (Component2) => {
  if (!Component2.wxsCallMethods) {
    Component2.wxsCallMethods = [];
  }
  Component2.wxsCallMethods.push("closeOther", "setState");
};
const _sfc_main = {
  name: "u-swipe-action-item",
  emits: ["click"],
  mixins: [
    uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin,
    uni_modules_uviewPlus_libs_mixin_mixin.mixin,
    uni_modules_uviewPlus_libs_mixin_touch.touchMixin,
    uni_modules_uviewPlus_components_uSwipeActionItem_wxs.wxs,
    uni_modules_uviewPlus_components_uSwipeActionItem_props.props
  ],
  data() {
    return {
      // 按钮的尺寸信息
      size: {},
      // 父组件u-swipe-action的参数
      parentData: {
        autoClose: true
      },
      // 当前状态，open-打开，close-关闭
      status: "close",
      sliderStyle: {}
    };
  },
  watch: {
    // 由于wxs无法直接读取外部的值，需要在外部值变化时，重新执行赋值逻辑
    wxsInit(newValue, oldValue) {
      this.queryRect();
    }
  },
  computed: {
    wxsInit() {
      return [this.disabled, this.autoClose, this.threshold, this.options, this.duration];
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    addUnit: uni_modules_uviewPlus_libs_function_index.addUnit,
    getPx: uni_modules_uviewPlus_libs_function_index.getPx,
    init() {
      this.updateParentData();
      uni_modules_uviewPlus_libs_function_index.sleep().then(() => {
        this.queryRect();
      });
    },
    updateParentData() {
      this.getParentData("u-swipe-action");
    },
    // 查询节点
    queryRect() {
      this.$uGetRect(".u-swipe-action-item__right__button", true).then((buttons) => {
        this.size = {
          buttons,
          show: this.show,
          disabled: this.disabled,
          threshold: this.threshold,
          duration: this.duration
        };
      });
    },
    // 按钮被点击
    buttonClickHandler(item, index) {
      this.status = "close";
      this.$emit("click", {
        index,
        name: this.name
      });
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.options, (item, index, i0) => {
      return common_vendor.e({
        a: item.icon
      }, item.icon ? {
        b: "ed3ce04a-0-" + i0,
        c: common_vendor.p({
          name: item.icon,
          color: item.style && item.style.color ? item.style.color : "#ffffff",
          size: item.iconSize ? $options.addUnit(item.iconSize) : item.style && item.style.fontSize ? $options.getPx(item.style.fontSize) * 1.2 : 17,
          customStyle: {
            marginRight: item.text ? "2px" : 0
          }
        })
      } : {}, {
        d: item.text
      }, item.text ? {
        e: common_vendor.t(item.text),
        f: common_vendor.s({
          color: item.style && item.style.color ? item.style.color : "#ffffff",
          fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px",
          lineHeight: item.style && item.style.fontSize ? item.style.fontSize : "16px"
        })
      } : {}, {
        g: common_vendor.s({
          backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD",
          borderRadius: item.style && item.style.borderRadius ? item.style.borderRadius : "0",
          padding: item.style && item.style.borderRadius ? "0" : "0 15px"
        }),
        h: common_vendor.s(item.style),
        i: index,
        j: `u-swipe-action-item__right__button-${index}`,
        k: common_vendor.s({
          alignItems: item.style && item.style.borderRadius ? "center" : "stretch"
        }),
        l: common_vendor.o(($event) => $options.buttonClickHandler(item, index), index)
      });
    }),
    b: $data.status,
    c: $data.size
  };
}
if (typeof block0 === "function")
  block0(_sfc_main);
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ed3ce04a"]]);
wx.createComponent(Component);
