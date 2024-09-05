"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_up_tabbar_item2 = common_vendor.resolveComponent("up-tabbar-item");
  const _easycom_up_tabbar2 = common_vendor.resolveComponent("up-tabbar");
  (_easycom_up_tabbar_item2 + _easycom_up_tabbar2)();
}
const _easycom_up_tabbar_item = () => "../../uni_modules/uview-plus/components/u-tabbar-item/u-tabbar-item.js";
const _easycom_up_tabbar = () => "../../uni_modules/uview-plus/components/u-tabbar/u-tabbar.js";
if (!Math) {
  (_easycom_up_tabbar_item + _easycom_up_tabbar)();
}
const _sfc_main = {
  __name: "Tabbar",
  props: {
    active: String
  },
  setup(__props) {
    const props = __props;
    const tabs = common_vendor.ref([
      {
        text: "聊天",
        icon: "chat",
        selectedIcon: "chat-fill",
        name: "/pages/chatList/chatList"
      },
      {
        text: "我",
        icon: "account",
        selectedIcon: "account-fill",
        name: "/pages/personalCenter/personalCenter"
      }
    ]);
    const getTabbarIcon = (item, index) => {
      return props.active === item.name ? item.selectedIcon : item.icon;
    };
    const click = (e) => {
      common_vendor.index.redirectTo({
        url: e
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(tabs.value, (item, index, i0) => {
          return {
            a: index,
            b: common_vendor.o(click, index),
            c: "e0170144-1-" + i0 + ",e0170144-0",
            d: common_vendor.p({
              text: item.text,
              icon: getTabbarIcon(item),
              name: item.name
            })
          };
        }),
        b: common_vendor.p({
          value: __props.active,
          fixed: true,
          activeColor: "#4BC163",
          placeholder: true
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
