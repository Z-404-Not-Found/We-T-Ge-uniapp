"use strict";
const wxs = {
  methods: {
    // 关闭时执行
    closeHandler() {
      this.status = "close";
    },
    setState(status) {
      this.status = status;
    },
    closeOther() {
      this.parent && this.parent.closeOther(this);
    }
  }
};
exports.wxs = wxs;
