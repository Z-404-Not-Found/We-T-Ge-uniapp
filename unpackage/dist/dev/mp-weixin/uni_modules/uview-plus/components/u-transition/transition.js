"use strict";
const common_vendor = require("../../../../common/vendor.js");
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const getClassNames = (name) => ({
  enter: `u-${name}-enter u-${name}-enter-active`,
  "enter-to": `u-${name}-enter-to u-${name}-enter-active`,
  leave: `u-${name}-leave u-${name}-leave-active`,
  "leave-to": `u-${name}-leave-to u-${name}-leave-active`
});
const transition = {
  methods: {
    // 组件被点击发出事件
    clickHandler() {
      this.$emit("click");
    },
    // vue版本的组件进场处理
    async vueEnter() {
      const classNames = getClassNames(this.mode);
      this.status = "enter";
      this.$emit("beforeEnter");
      this.inited = true;
      this.display = true;
      this.classes = classNames.enter;
      await common_vendor.nextTick$1();
      {
        await uni_modules_uviewPlus_libs_function_index.sleep(20);
        this.$emit("enter");
        this.transitionEnded = false;
        this.$emit("afterEnter");
        this.classes = classNames["enter-to"];
      }
    },
    // 动画离场处理
    async vueLeave() {
      if (!this.display)
        return;
      const classNames = getClassNames(this.mode);
      this.status = "leave";
      this.$emit("beforeLeave");
      this.classes = classNames.leave;
      await common_vendor.nextTick$1();
      {
        this.transitionEnded = false;
        this.$emit("leave");
        setTimeout(this.onTransitionEnd, this.duration);
        this.classes = classNames["leave-to"];
      }
    },
    // 完成过渡后触发
    onTransitionEnd() {
      if (this.transitionEnded)
        return;
      this.transitionEnded = true;
      this.$emit(this.status === "leave" ? "afterLeave" : "afterEnter");
      if (!this.show && this.display) {
        this.display = false;
        this.inited = false;
      }
    }
  }
};
exports.transition = transition;
