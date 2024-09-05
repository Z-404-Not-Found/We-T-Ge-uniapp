"use strict";
const uni_modules_uviewPlus_libs_function_index = require("../../libs/function/index.js");
const uni_modules_uviewPlus_libs_function_test = require("../../libs/function/test.js");
const value = {
  computed: {
    // 经处理后需要显示的值
    value() {
      const {
        text,
        mode,
        format,
        href
      } = this;
      if (mode === "price") {
        if (!/^\d+(\.\d+)?$/.test(text)) {
          uni_modules_uviewPlus_libs_function_index.error("金额模式下，text参数需要为金额格式");
        }
        if (uni_modules_uviewPlus_libs_function_test.test.func(format)) {
          return format(text);
        }
        return uni_modules_uviewPlus_libs_function_index.priceFormat(text, 2);
      }
      if (mode === "date") {
        !uni_modules_uviewPlus_libs_function_test.test.date(text) && uni_modules_uviewPlus_libs_function_index.error("日期模式下，text参数需要为日期或时间戳格式");
        if (uni_modules_uviewPlus_libs_function_test.test.func(format)) {
          return format(text);
        }
        if (format) {
          return uni_modules_uviewPlus_libs_function_index.timeFormat(text, format);
        }
        return uni_modules_uviewPlus_libs_function_index.timeFormat(text, "yyyy-mm-dd");
      }
      if (mode === "phone") {
        if (uni_modules_uviewPlus_libs_function_test.test.func(format)) {
          return format(text);
        }
        if (format === "encrypt") {
          return `${text.substr(0, 3)}****${text.substr(7)}`;
        }
        return text;
      }
      if (mode === "name") {
        !(typeof text === "string") && uni_modules_uviewPlus_libs_function_index.error("姓名模式下，text参数需要为字符串格式");
        if (uni_modules_uviewPlus_libs_function_test.test.func(format)) {
          return format(text);
        }
        if (format === "encrypt") {
          return this.formatName(text);
        }
        return text;
      }
      if (mode === "link") {
        !uni_modules_uviewPlus_libs_function_test.test.url(href) && uni_modules_uviewPlus_libs_function_index.error("超链接模式下，href参数需要为URL格式");
        return text;
      }
      return text;
    }
  },
  methods: {
    // 默认的姓名脱敏规则
    formatName(name) {
      let value2 = "";
      if (name.length === 2) {
        value2 = name.substr(0, 1) + "*";
      } else if (name.length > 2) {
        let char = "";
        for (let i = 0, len = name.length - 2; i < len; i++) {
          char += "*";
        }
        value2 = name.substr(0, 1) + char + name.substr(-1, 1);
      } else {
        value2 = name;
      }
      return value2;
    }
  }
};
exports.value = value;
