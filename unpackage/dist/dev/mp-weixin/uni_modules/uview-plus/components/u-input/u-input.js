"use strict";
const uni_modules_uviewPlus_components_uInput_props = require("./props.js");
const uni_modules_uviewPlus_libs_mixin_mpMixin = require("../../libs/mixin/mpMixin.js");
const uni_modules_uviewPlus_libs_mixin_mixin = require("../../libs/mixin/mixin.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-input",
  mixins: [uni_modules_uviewPlus_libs_mixin_mpMixin.mpMixin, uni_modules_uviewPlus_libs_mixin_mixin.mixin, uni_modules_uviewPlus_components_uInput_props.props],
  data() {
    return {
      // 清除操作
      clearInput: false,
      // 输入框的值
      innerValue: "",
      // 是否处于获得焦点状态
      focused: false,
      // value是否第一次变化，在watch中，由于加入immediate属性，会在第一次触发，此时不应该认为value发生了变化
      firstChange: true,
      // value绑定值的变化是由内部还是外部引起的
      changeFromInner: false,
      // 过滤处理方法
      innerFormatter: (value) => value
    };
  },
  created() {
    if (this.formatter) {
      this.innerFormatter = this.formatter;
    }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal, oldVal) {
        if (this.changeFromInner || this.innerValue === newVal) {
          this.changeFromInner = false;
          return;
        }
        this.innerValue = newVal;
        if (this.firstChange === false && this.changeFromInner === false) {
          this.valueChange(this.innerValue, true);
        } else {
          if (!this.firstChange)
            uni_modules_uviewPlus_libs_function_index.formValidate(this, "change");
        }
        this.firstChange = false;
        this.changeFromInner = false;
      }
    }
  },
  computed: {
    // 是否显示清除控件
    isShowClear() {
      const { clearable, readonly, focused, innerValue } = this;
      return !!clearable && !readonly && !!focused && innerValue !== "";
    },
    // 组件的类名
    inputClass() {
      let classes = [], { border, disabled, shape } = this;
      border === "surround" && (classes = classes.concat(["u-border", "u-input--radius"]));
      classes.push(`u-input--${shape}`);
      border === "bottom" && (classes = classes.concat([
        "u-border-bottom",
        "u-input--no-radius"
      ]));
      return classes.join(" ");
    },
    // 组件的样式
    wrapperStyle() {
      const style = {};
      if (this.disabled) {
        style.backgroundColor = this.disabledColor;
      }
      if (this.border === "none") {
        style.padding = "0";
      } else {
        style.paddingTop = "6px";
        style.paddingBottom = "6px";
        style.paddingLeft = "9px";
        style.paddingRight = "9px";
      }
      return uni_modules_uviewPlus_libs_function_index.deepMerge(style, uni_modules_uviewPlus_libs_function_index.addStyle(this.customStyle));
    },
    // 输入框的样式
    inputStyle() {
      const style = {
        color: this.color,
        fontSize: uni_modules_uviewPlus_libs_function_index.addUnit(this.fontSize),
        textAlign: this.inputAlign
      };
      return style;
    }
  },
  emits: ["update:modelValue", "focus", "blur", "change", "confirm", "clear", "keyboardheightchange"],
  methods: {
    // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
    setFormatter(e) {
      this.innerFormatter = e;
    },
    // 当键盘输入时，触发input事件
    onInput(e) {
      let { value = "" } = e.detail || {};
      this.innerValue = value;
      this.$nextTick(() => {
        let formatValue = this.innerFormatter(value);
        this.innerValue = formatValue;
        this.valueChange(formatValue);
      });
    },
    // 输入框失去焦点时触发
    onBlur(event) {
      this.$emit("blur", event.detail.value);
      uni_modules_uviewPlus_libs_function_index.sleep(150).then(() => {
        this.focused = false;
      });
      uni_modules_uviewPlus_libs_function_index.formValidate(this, "blur");
    },
    // 输入框聚焦时触发
    onFocus(event) {
      this.focused = true;
      this.$emit("focus");
    },
    // 点击完成按钮时触发
    onConfirm(event) {
      this.$emit("confirm", this.innerValue);
    },
    // 键盘高度发生变化的时候触发此事件
    // 兼容性：微信小程序2.7.0+、App 3.1.0+
    onkeyboardheightchange(event) {
      this.$emit("keyboardheightchange", event);
    },
    // 内容发生变化，进行处理
    valueChange(value, isOut = false) {
      if (this.clearInput) {
        this.innerValue = "";
        this.clearInput = false;
      }
      this.$nextTick(() => {
        if (!isOut || this.clearInput) {
          this.changeFromInner = true;
          this.$emit("change", value);
          this.$emit("update:modelValue", value);
        }
        uni_modules_uviewPlus_libs_function_index.formValidate(this, "change");
      });
    },
    // 点击清除控件
    onClear() {
      this.clearInput = true;
      this.innerValue = "";
      this.$nextTick(() => {
        this.valueChange("");
        this.$emit("clear");
      });
    },
    /**
     * 在安卓nvue上，事件无法冒泡
     * 在某些时间，我们希望监听u-from-item的点击事件，此时会导致点击u-form-item内的u-input后
     * 无法触发u-form-item的点击事件，这里通过手动调用u-form-item的方法进行触发
     */
    clickHandler() {
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
  return common_vendor.e({
    a: _ctx.prefixIcon || _ctx.$slots.prefix
  }, _ctx.prefixIcon || _ctx.$slots.prefix ? {
    b: common_vendor.p({
      name: _ctx.prefixIcon,
      size: "18",
      customStyle: _ctx.prefixIconStyle
    })
  } : {}, {
    c: common_vendor.s($options.inputStyle),
    d: _ctx.type,
    e: _ctx.focus,
    f: _ctx.cursor,
    g: $data.innerValue,
    h: _ctx.autoBlur,
    i: _ctx.disabled || _ctx.readonly,
    j: _ctx.maxlength,
    k: _ctx.placeholder,
    l: _ctx.placeholderStyle,
    m: _ctx.placeholderClass,
    n: _ctx.confirmType,
    o: _ctx.confirmHold,
    p: _ctx.holdKeyboard,
    q: _ctx.cursorSpacing,
    r: _ctx.adjustPosition,
    s: _ctx.selectionEnd,
    t: _ctx.selectionStart,
    v: _ctx.password || _ctx.type === "password" || false,
    w: _ctx.ignoreCompositionEvent,
    x: common_vendor.o((...args) => $options.onInput && $options.onInput(...args)),
    y: common_vendor.o((...args) => $options.onBlur && $options.onBlur(...args)),
    z: common_vendor.o((...args) => $options.onFocus && $options.onFocus(...args)),
    A: common_vendor.o((...args) => $options.onConfirm && $options.onConfirm(...args)),
    B: common_vendor.o((...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args)),
    C: common_vendor.o((...args) => $options.clickHandler && $options.clickHandler(...args)),
    D: $options.isShowClear
  }, $options.isShowClear ? {
    E: common_vendor.p({
      name: "close",
      size: "11",
      color: "#ffffff",
      customStyle: "line-height: 12px"
    }),
    F: common_vendor.o((...args) => $options.onClear && $options.onClear(...args))
  } : {}, {
    G: _ctx.suffixIcon || _ctx.$slots.suffix
  }, _ctx.suffixIcon || _ctx.$slots.suffix ? {
    H: common_vendor.p({
      name: _ctx.suffixIcon,
      size: "18",
      customStyle: _ctx.suffixIconStyle
    })
  } : {}, {
    I: common_vendor.n($options.inputClass),
    J: common_vendor.s($options.wrapperStyle)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-df79975b"]]);
wx.createComponent(Component);
