"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_user = require("../../stores/user.js");
if (!Array) {
  const _easycom_up_image2 = common_vendor.resolveComponent("up-image");
  const _easycom_up_loading_icon2 = common_vendor.resolveComponent("up-loading-icon");
  const _easycom_up_divider2 = common_vendor.resolveComponent("up-divider");
  (_easycom_up_image2 + _easycom_up_loading_icon2 + _easycom_up_divider2)();
}
const _easycom_up_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_up_loading_icon = () => "../../uni_modules/uview-plus/components/u-loading-icon/u-loading-icon.js";
const _easycom_up_divider = () => "../../uni_modules/uview-plus/components/u-divider/u-divider.js";
if (!Math) {
  (_easycom_up_image + _easycom_up_loading_icon + _easycom_up_divider)();
}
const _sfc_main = {
  __name: "ChattingBox",
  props: {
    role: {
      type: String,
      default: "assistant"
    },
    content: {
      type: String,
      default: ""
    },
    avatar: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const userStore = stores_user.useUserStore();
    const userAvatar = common_vendor.ref(userStore.avatar);
    const toRoleCenter = (id) => {
      common_vendor.index.navigateTo({
        url: `/pages/roleCenter/roleCenter?id=${id}`
      });
    };
    const toUserCenter = () => {
      common_vendor.index.navigateTo({
        url: `/pages/userCenter/userCenter`
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.role == "user"
      }, __props.role == "user" ? {
        b: common_vendor.t(__props.content),
        c: common_vendor.o(toUserCenter),
        d: common_vendor.p({
          duration: "100",
          src: userAvatar.value,
          shape: "square",
          radius: "10%",
          width: "80rpx",
          height: "80rpx"
        })
      } : __props.role == "assistant" ? common_vendor.e({
        f: common_vendor.o(($event) => toRoleCenter(__props.id)),
        g: common_vendor.p({
          duration: "100",
          src: __props.avatar,
          shape: "square",
          radius: "10%",
          width: "80rpx",
          height: "80rpx"
        }),
        h: __props.content == ""
      }, __props.content == "" ? {
        i: common_vendor.p({
          size: "16"
        })
      } : {
        j: common_vendor.t(__props.content)
      }) : {}, {
        e: __props.role == "assistant",
        k: __props.role == "divide"
      }, __props.role == "divide" ? {
        l: common_vendor.p({
          text: "以下为新对话"
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5e33090c"]]);
wx.createComponent(Component);
