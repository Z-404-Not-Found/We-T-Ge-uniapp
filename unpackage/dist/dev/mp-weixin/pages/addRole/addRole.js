"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_chatsRecord = require("../../stores/chatsRecord.js");
if (!Array) {
  const _easycom_up_navbar2 = common_vendor.resolveComponent("up-navbar");
  const _easycom_up_input2 = common_vendor.resolveComponent("up-input");
  const _easycom_up_form_item2 = common_vendor.resolveComponent("up-form-item");
  const _easycom_up_textarea2 = common_vendor.resolveComponent("up-textarea");
  const _easycom_up_form2 = common_vendor.resolveComponent("up-form");
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  (_easycom_up_navbar2 + _easycom_up_input2 + _easycom_up_form_item2 + _easycom_up_textarea2 + _easycom_up_form2 + _easycom_up_button2)();
}
const _easycom_up_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_up_input = () => "../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_up_form_item = () => "../../uni_modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_up_textarea = () => "../../uni_modules/uview-plus/components/u-textarea/u-textarea.js";
const _easycom_up_form = () => "../../uni_modules/uview-plus/components/u-form/u-form.js";
const _easycom_up_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  (_easycom_up_navbar + _easycom_up_input + _easycom_up_form_item + _easycom_up_textarea + _easycom_up_form + _easycom_up_button)();
}
const _sfc_main = {
  __name: "addRole",
  setup(__props) {
    const chatRecordStore = stores_chatsRecord.useChatRecordStore();
    const form = common_vendor.ref(null);
    const chatForm = common_vendor.ref({
      name: "",
      description: "",
      definition: ""
    });
    let chat = {
      id: "",
      recordCount: 0,
      name: "",
      avatar: "/static/默认角色.jpg",
      description: "",
      history: [
        {
          role: "system",
          content: ""
        }
      ]
    };
    const validateForm = () => {
      form.value.setRules({
        name: {
          required: true,
          message: "请输入角色名称",
          trigger: ["blur", "change"]
        },
        description: {
          required: true,
          message: "请输入角色描述",
          trigger: ["blur", "change"]
        },
        definition: {
          required: true,
          message: "请输入角色设定",
          trigger: ["blur", "change"]
        }
      });
    };
    const setId = () => {
      let maxId = 0;
      chatRecordStore.chatRecord.forEach((item) => {
        if (item.id > maxId) {
          maxId = item.id;
        }
      });
      return (Number(maxId) + 1).toString();
    };
    const submit = () => {
      form.value.validate().then((valid) => {
        if (valid) {
          chat.id = setId();
          chat.name = chatForm.value.name;
          chat.description = chatForm.value.description;
          chat.history[0].content = chatForm.value.definition;
          chatRecordStore.addChatRecord(chat);
          common_vendor.index.showToast({
            title: "添加成功",
            icon: "success"
          });
          common_vendor.index.navigateBack();
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: "请正确填写角色定义",
          icon: "error"
        });
        console.log(err);
      });
    };
    common_vendor.onReady(() => {
      validateForm();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "添加角色",
          border: true,
          fixed: true,
          placeholder: true,
          autoBack: true,
          bgColor: "#ededed"
        }),
        b: common_vendor.o(($event) => chatForm.value.name = $event),
        c: common_vendor.p({
          placeholder: "请输入角色名称",
          border: "bottom",
          modelValue: chatForm.value.name
        }),
        d: common_vendor.p({
          label: "名称",
          prop: "name"
        }),
        e: common_vendor.o(($event) => chatForm.value.description = $event),
        f: common_vendor.p({
          showConfirmBar: false,
          placeholder: "请输入角色描述，如“这是一个通用助手，会回答你的各种问题。”（给自己看）",
          height: "70",
          border: "bottom",
          modelValue: chatForm.value.description
        }),
        g: common_vendor.p({
          label: "描述",
          prop: "description"
        }),
        h: common_vendor.o(($event) => chatForm.value.definition = $event),
        i: common_vendor.p({
          showConfirmBar: false,
          placeholder: "请输入角色设定，如“你是一个助手，你会帮助用户回答问题，并且所有对话要以中文进行”（给AI看）",
          height: "80",
          border: "bottom",
          modelValue: chatForm.value.definition
        }),
        j: common_vendor.p({
          label: "设定",
          prop: "definition"
        }),
        k: common_vendor.sr(form, "9e193448-1", {
          "k": "form"
        }),
        l: common_vendor.p({
          labelWidth: "50",
          labelStyle: {
            color: "#999",
            fontSize: "16px"
          },
          model: chatForm.value
        }),
        m: common_vendor.o(submit),
        n: common_vendor.p({
          type: "primary",
          text: "确定",
          color: "#4AC163"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
