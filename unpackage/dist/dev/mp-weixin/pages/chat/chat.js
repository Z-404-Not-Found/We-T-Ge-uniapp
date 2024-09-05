"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_chatsRecord = require("../../stores/chatsRecord.js");
const apis_gptApi = require("../../apis/gptApi.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_line2 = common_vendor.resolveComponent("up-line");
  const _easycom_up_navbar2 = common_vendor.resolveComponent("up-navbar");
  const _easycom_up_divider2 = common_vendor.resolveComponent("up-divider");
  const _easycom_ChattingBox2 = common_vendor.resolveComponent("ChattingBox");
  const _easycom_up_button2 = common_vendor.resolveComponent("up-button");
  const _easycom_up_input2 = common_vendor.resolveComponent("up-input");
  const _easycom_up_grid_item2 = common_vendor.resolveComponent("up-grid-item");
  const _easycom_up_grid2 = common_vendor.resolveComponent("up-grid");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_icon2 + _easycom_up_line2 + _easycom_up_navbar2 + _easycom_up_divider2 + _easycom_ChattingBox2 + _easycom_up_button2 + _easycom_up_input2 + _easycom_up_grid_item2 + _easycom_up_grid2 + _easycom_up_popup2)();
}
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_up_line = () => "../../uni_modules/uview-plus/components/u-line/u-line.js";
const _easycom_up_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_up_divider = () => "../../uni_modules/uview-plus/components/u-divider/u-divider.js";
const _easycom_ChattingBox = () => "../../components/ChattingBox/ChattingBox.js";
const _easycom_up_button = () => "../../uni_modules/uview-plus/components/u-button/u-button.js";
const _easycom_up_input = () => "../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_up_grid_item = () => "../../uni_modules/uview-plus/components/u-grid-item/u-grid-item.js";
const _easycom_up_grid = () => "../../uni_modules/uview-plus/components/u-grid/u-grid.js";
const _easycom_up_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_line + _easycom_up_navbar + _easycom_up_divider + _easycom_ChattingBox + _easycom_up_button + _easycom_up_input + _easycom_up_grid_item + _easycom_up_grid + _easycom_up_popup)();
}
const _sfc_main = {
  __name: "chat",
  setup(__props) {
    const id = common_vendor.ref("");
    const windowHeight = common_vendor.ref(0);
    const keyboardHeight = common_vendor.ref(0);
    const scrollTop = common_vendor.ref(0);
    const chatRecordStore = stores_chatsRecord.useChatRecordStore();
    const chatRecord = common_vendor.ref({
      id: "",
      onTop: false,
      recordCount: 0,
      name: "",
      avatar: "",
      description: "",
      history: [
        {
          role: "",
          content: ""
        }
      ]
    });
    const roleName = common_vendor.ref("");
    const title = common_vendor.ref("");
    const buttonDisabled = common_vendor.ref(false);
    const inputText = common_vendor.ref("");
    const onFocus = common_vendor.ref(false);
    const show = common_vendor.ref(false);
    windowHeight.value = common_vendor.index.getSystemInfoSync().screenHeight;
    common_vendor.index.onKeyboardHeightChange((res) => {
      keyboardHeight.value = res.height;
    });
    const scrollToBottom = () => {
      setTimeout(() => {
        scrollTop.value += 999999;
      }, 50);
    };
    const calculateHeight = common_vendor.computed(() => {
      return onFocus.value ? windowHeight.value - keyboardHeight.value + "px" : windowHeight.value + "px";
    });
    const focus = () => {
      onFocus.value = true;
      scrollToBottom();
    };
    const blur = () => {
      onFocus.value = false;
      scrollToBottom();
    };
    const toBack = () => {
      common_vendor.index.hideKeyboard();
      common_vendor.index.redirectTo({
        url: "/pages/chatList/chatList"
      });
    };
    const deleteShow = () => {
      common_vendor.index.hideKeyboard();
      show.value = true;
    };
    const open = () => {
      show.value = true;
    };
    const close = () => {
      show.value = false;
    };
    const clearRememberDisabled = common_vendor.computed(() => {
      return chatRecord.history[chatRecord.history.length - 1].role == "divide" || chatRecord.history.length == 1 ? true : false;
    });
    const clearRemember = () => {
      common_vendor.index.hideKeyboard();
      show.value = false;
      chatRecord.value.history.push({
        role: "divide"
      });
      chatRecordStore.setRecordCountById(id.value, 0);
    };
    const clearHistoryDisabled = common_vendor.computed(() => {
      return chatRecord.history.length == 1 ? true : false;
    });
    const clearHistory = () => {
      common_vendor.index.hideKeyboard();
      show.value = false;
      common_vendor.index.showModal({
        title: "清除聊天记录",
        content: "确定清除聊天记录！？？",
        cancelText: "不确定",
        confirmText: "确定",
        success: function(res) {
          if (res.confirm) {
            chatRecordStore.clearHistoryById(id.value);
            chatRecordStore.setRecordCountById(id.value, 0);
            chatRecord.value = chatRecordStore.getChatRecordById(id.value);
            common_vendor.index.showToast({
              title: "删除成功",
              icon: "success"
            });
          } else if (res.cancel)
            ;
        }
      });
    };
    const sendMessageDisabled = common_vendor.computed(() => {
      return inputText.value.length == 0 || buttonDisabled.value;
    });
    const cutArray = (arr, n) => {
      if (arr.length === 1) {
        return [arr[0]].filter((messages) => messages.role !== "divide");
      } else if (arr.length <= n + 2) {
        return arr.slice(0, -1).filter((messages) => messages.role !== "divide");
      } else {
        const result = [arr[0]].concat(arr.slice(-n - 1, -1));
        return result.filter((messages) => messages.role !== "divide");
      }
    };
    const sendMessage = () => {
      chatRecord.value.history.push({
        role: "user",
        content: inputText.value
      });
      chatRecord.value.history.push({
        role: "assistant",
        content: ""
      });
      inputText.value = "";
      chatRecordStore.add2RecordCountById(id.value);
      buttonDisabled.value = true;
      title.value = "对方正在输入...";
      apis_gptApi.chatApi({
        model: "gpt-4o-mini",
        messages: cutArray(
          chatRecord.value.history,
          chatRecord.value.recordCount
        )
      }).then((res) => {
        if (res.error) {
          chatRecord.value.history[chatRecord.value.history.length - 1].content = "error:" + res.error.message;
        } else {
          chatRecord.value.history[chatRecord.value.history.length - 1].content = res.choices[0].message.content;
        }
        buttonDisabled.value = false;
        title.value = roleName.value;
      });
    };
    common_vendor.watch(
      () => chatRecord.value.history,
      () => {
        scrollToBottom();
      },
      {
        deep: true
      }
    );
    common_vendor.onLoad((e) => {
      id.value = e.id;
      chatRecord.value = chatRecordStore.getChatRecordById(id.value);
      roleName.value = chatRecord.value.name;
      title.value = roleName.value;
    });
    common_vendor.onReady(() => {
      scrollToBottom();
    });
    common_vendor.onShow(() => {
      chatRecord.value = {
        id: "",
        onTop: false,
        recordCount: 0,
        name: "",
        avatar: "",
        description: "",
        history: [
          {
            role: "",
            content: ""
          }
        ]
      };
      setTimeout(() => {
        chatRecord.value = chatRecordStore.getChatRecordById(id.value);
        roleName.value = chatRecord.value.name;
        title.value = roleName.value;
      }, 1);
    });
    common_vendor.onUnload(() => {
      if (chatRecord.history) {
        chatRecordStore.setChatHistoryById(id.value, chatRecord.value.history);
        chatRecord.value = {};
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toBack),
        b: common_vendor.p({
          name: "arrow-left",
          size: "16"
        }),
        c: common_vendor.p({
          direction: "column",
          hairline: false,
          length: "16",
          margin: "0 14px"
        }),
        d: common_vendor.o(deleteShow),
        e: common_vendor.p({
          name: "trash",
          size: "20"
        }),
        f: common_vendor.p({
          title: title.value,
          border: true,
          fixed: true,
          placeholder: true,
          bgColor: "#ededed"
        }),
        g: common_vendor.p({
          text: "这是一条分割线"
        }),
        h: common_vendor.t(chatRecord.value.description),
        i: common_vendor.f(chatRecord.value.history, (item, index, i0) => {
          return {
            a: index,
            b: "0a633310-5-" + i0,
            c: common_vendor.p({
              id: id.value,
              role: item.role,
              content: item.content,
              avatar: chatRecord.value.avatar
            })
          };
        }),
        j: id.value,
        k: scrollTop.value,
        l: common_vendor.o(sendMessage),
        m: common_vendor.p({
          size: "small",
          text: "发送",
          disabled: sendMessageDisabled.value,
          color: "#4AC163"
        }),
        n: common_vendor.o(focus),
        o: common_vendor.o(blur),
        p: common_vendor.o(($event) => inputText.value = $event),
        q: common_vendor.p({
          placeholder: "请输入内容",
          confirmHold: true,
          adjustPosition: false,
          ["hold-keyboard"]: true,
          modelValue: inputText.value
        }),
        r: common_vendor.o(clearRemember),
        s: common_vendor.p({
          shape: "circle",
          plain: true,
          type: "primary",
          size: "large",
          icon: "plus",
          disabled: clearRememberDisabled.value
        }),
        t: common_vendor.o(clearHistory),
        v: common_vendor.p({
          shape: "circle",
          plain: true,
          type: "error",
          size: "large",
          icon: "trash",
          disabled: clearHistoryDisabled.value
        }),
        w: common_vendor.p({
          border: false,
          col: "2"
        }),
        x: common_vendor.o(close),
        y: common_vendor.o(open),
        z: common_vendor.p({
          show: show.value,
          round: 5,
          closeable: true
        }),
        A: calculateHeight.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0a633310"]]);
wx.createPage(MiniProgramPage);
