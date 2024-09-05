"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_chatsRecord = require("../../stores/chatsRecord.js");
if (!Array) {
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_navbar2 = common_vendor.resolveComponent("up-navbar");
  const _easycom_up_image2 = common_vendor.resolveComponent("up-image");
  const _easycom_up_text2 = common_vendor.resolveComponent("up-text");
  const _easycom_up_cell2 = common_vendor.resolveComponent("up-cell");
  const _easycom_up_cell_group2 = common_vendor.resolveComponent("up-cell-group");
  const _easycom_up_swipe_action_item2 = common_vendor.resolveComponent("up-swipe-action-item");
  const _easycom_up_swipe_action2 = common_vendor.resolveComponent("up-swipe-action");
  const _easycom_Tabbar2 = common_vendor.resolveComponent("Tabbar");
  (_easycom_up_icon2 + _easycom_up_navbar2 + _easycom_up_image2 + _easycom_up_text2 + _easycom_up_cell2 + _easycom_up_cell_group2 + _easycom_up_swipe_action_item2 + _easycom_up_swipe_action2 + _easycom_Tabbar2)();
}
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_up_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_up_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_up_text = () => "../../uni_modules/uview-plus/components/u-text/u-text.js";
const _easycom_up_cell = () => "../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_up_cell_group = () => "../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
const _easycom_up_swipe_action_item = () => "../../uni_modules/uview-plus/components/u-swipe-action-item/u-swipe-action-item.js";
const _easycom_up_swipe_action = () => "../../uni_modules/uview-plus/components/u-swipe-action/u-swipe-action.js";
const _easycom_Tabbar = () => "../../components/Tabbar/Tabbar.js";
if (!Math) {
  (_easycom_up_icon + _easycom_up_navbar + _easycom_up_image + _easycom_up_text + _easycom_up_cell + _easycom_up_cell_group + _easycom_up_swipe_action_item + _easycom_up_swipe_action + _easycom_Tabbar)();
}
const _sfc_main = {
  __name: "chatList",
  setup(__props) {
    const chatRecordStore = stores_chatsRecord.useChatRecordStore();
    const chatList = common_vendor.ref({});
    const swipeShow = common_vendor.ref(false);
    const options = common_vendor.ref([
      {
        text: "删除",
        style: {
          backgroundColor: "#dd524d"
        }
      },
      {
        text: "置顶!=置顶",
        style: {
          backgroundColor: "#f0ad4e"
        }
      }
    ]);
    const clickSwipe = (e) => {
      if (e.index == 0) {
        common_vendor.index.showModal({
          title: "确认删除？？",
          content: "你真想删除？？？！",
          cancelText: "不！！！",
          confirmText: "删。。。",
          success: function(res) {
            if (res.confirm) {
              chatRecordStore.removeChatRecordById(e.name);
              chatList.value = chatRecordStore.returnSortedChatRecord();
              common_vendor.index.showToast({
                title: "删除成功",
                icon: "success"
              });
            } else if (res.cancel)
              ;
          }
        });
      } else if (e.index == 1) {
        chatRecordStore.setOnTopById(
          e.name,
          !chatRecordStore.getChatRecordById(e.name).onTop
        );
        chatList.value = chatRecordStore.returnSortedChatRecord();
      }
      swipeShow.value = false;
    };
    const toAddRole = () => {
      common_vendor.index.navigateTo({
        url: "/pages/addRole/addRole"
      });
    };
    common_vendor.onReady(() => {
      chatList.value = chatRecordStore.returnSortedChatRecord();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "plus"
        }),
        b: common_vendor.o(toAddRole),
        c: common_vendor.p({
          title: "聊天",
          border: true,
          fixed: true,
          placeholder: true,
          leftIcon: "",
          bgColor: "#ededed"
        }),
        d: common_vendor.f(chatList.value, (item, index, i0) => {
          return {
            a: "0386f32c-6-" + i0 + "," + ("0386f32c-5-" + i0),
            b: common_vendor.p({
              src: item.avatar,
              shape: "square",
              radius: "10%",
              width: "42px",
              height: "42px",
              duration: "100"
            }),
            c: "0386f32c-7-" + i0 + "," + ("0386f32c-5-" + i0),
            d: common_vendor.p({
              color: "#000",
              size: "16px",
              lines: 1,
              text: item.name
            }),
            e: "0386f32c-8-" + i0 + "," + ("0386f32c-5-" + i0),
            f: common_vendor.p({
              color: "#999",
              size: "12px",
              lines: 1,
              text: item.history.length == 1 || item.history[item.history.length - 1].role == "divide" ? item.description : item.history[item.history.length - 1].content
            }),
            g: common_vendor.s(item.onTop ? "background-color: #ededed!important" : ""),
            h: "0386f32c-5-" + i0 + "," + ("0386f32c-4-" + i0),
            i: common_vendor.p({
              url: "pages/chat/chat?id=" + item.id,
              name: item.name,
              clickable: true,
              show: swipeShow.value
            }),
            j: "0386f32c-4-" + i0 + "," + ("0386f32c-3-" + i0),
            k: common_vendor.p({
              border: false,
              customStyle: item.onTop ? {
                backgroundColor: "#ededed"
              } : {}
            }),
            l: item.id,
            m: common_vendor.o(clickSwipe, item.id),
            n: "0386f32c-3-" + i0 + ",0386f32c-2",
            o: common_vendor.p({
              options: options.value,
              name: item.id
            })
          };
        }),
        e: common_vendor.p({
          active: "/pages/chatList/chatList"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
