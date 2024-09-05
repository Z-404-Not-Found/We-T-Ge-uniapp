"use strict";
const uni_modules_uviewPlus_libs_vue = require("../vue.js");
const buttonMixin = uni_modules_uviewPlus_libs_vue.defineMixin({
  props: {
    lang: String,
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appParameter: String,
    formType: String,
    openType: String
  }
});
exports.buttonMixin = buttonMixin;
