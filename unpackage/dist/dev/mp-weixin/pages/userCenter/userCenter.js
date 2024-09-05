"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_user = require("../../stores/user.js");
if (!Array) {
  const _easycom_up_navbar2 = common_vendor.resolveComponent("up-navbar");
  const _easycom_up_image2 = common_vendor.resolveComponent("up-image");
  const _easycom_up_cell2 = common_vendor.resolveComponent("up-cell");
  const _easycom_up_cell_group2 = common_vendor.resolveComponent("up-cell-group");
  const _easycom_up_modal2 = common_vendor.resolveComponent("up-modal");
  const _easycom_up_form_item2 = common_vendor.resolveComponent("up-form-item");
  const _easycom_up_input2 = common_vendor.resolveComponent("up-input");
  const _easycom_up_textarea2 = common_vendor.resolveComponent("up-textarea");
  const _easycom_up_form2 = common_vendor.resolveComponent("up-form");
  const _easycom_up_grid_item2 = common_vendor.resolveComponent("up-grid-item");
  const _easycom_up_grid2 = common_vendor.resolveComponent("up-grid");
  const _easycom_up_popup2 = common_vendor.resolveComponent("up-popup");
  (_easycom_up_navbar2 + _easycom_up_image2 + _easycom_up_cell2 + _easycom_up_cell_group2 + _easycom_up_modal2 + _easycom_up_form_item2 + _easycom_up_input2 + _easycom_up_textarea2 + _easycom_up_form2 + _easycom_up_grid_item2 + _easycom_up_grid2 + _easycom_up_popup2)();
}
const _easycom_up_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_up_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_up_cell = () => "../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_up_cell_group = () => "../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
const _easycom_up_modal = () => "../../uni_modules/uview-plus/components/u-modal/u-modal.js";
const _easycom_up_form_item = () => "../../uni_modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_up_input = () => "../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_up_textarea = () => "../../uni_modules/uview-plus/components/u-textarea/u-textarea.js";
const _easycom_up_form = () => "../../uni_modules/uview-plus/components/u-form/u-form.js";
const _easycom_up_grid_item = () => "../../uni_modules/uview-plus/components/u-grid-item/u-grid-item.js";
const _easycom_up_grid = () => "../../uni_modules/uview-plus/components/u-grid/u-grid.js";
const _easycom_up_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_up_navbar + _easycom_up_image + _easycom_up_cell + _easycom_up_cell_group + _easycom_up_modal + _easycom_up_form_item + _easycom_up_input + _easycom_up_textarea + _easycom_up_form + _easycom_up_grid_item + _easycom_up_grid + _easycom_up_popup)();
}
const _sfc_main = {
  __name: "userCenter",
  setup(__props) {
    const userStore = stores_user.useUserStore();
    const avatar = common_vendor.ref("");
    const name = common_vendor.ref("");
    const signature = common_vendor.ref("");
    const detailShow = common_vendor.ref(false);
    const changeShow = common_vendor.ref(false);
    const changeAvatarShow = common_vendor.ref(false);
    const form = common_vendor.ref(null);
    const changeUserForm = common_vendor.ref({
      name: "",
      signature: "",
      avatar: ""
    });
    const showChange = () => {
      changeUserForm.value.name = name.value;
      changeUserForm.value.signature = signature.value;
      changeUserForm.value.avatar = avatar.value;
      changeShow.value = !changeShow.value;
    };
    const open = () => {
      changeAvatarShow.value = true;
    };
    const close = () => {
      changeAvatarShow.value = false;
    };
    const clickAvatar = (e) => {
      changeUserForm.value.avatar = "/static/用户" + e + ".jpg";
    };
    const validateForm = () => {
      form.value.setRules({
        name: {
          required: true,
          message: "请输入用户名",
          trigger: ["blur", "change"]
        },
        signature: {
          required: true,
          message: "请输入个性签名",
          trigger: ["blur", "change"]
        }
      });
    };
    const changeUser = () => {
      form.value.validate().then((valid) => {
        if (valid) {
          changeShow.value = !changeShow.value;
          userStore.updateUser(
            changeUserForm.value.name,
            changeUserForm.value.signature,
            changeUserForm.value.avatar
          );
          common_vendor.index.showToast({
            title: "修改成功",
            icon: "success"
          });
          name.value = changeUserForm.value.name;
          signature.value = changeUserForm.value.signature;
          avatar.value = changeUserForm.value.avatar;
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: "请正确填写",
          icon: "error"
        });
        console.log(err);
      });
    };
    const logout = () => {
      common_vendor.index.showModal({
        title: "啥？？？退出登录？？",
        content: "你登录过吗就退出登录😢",
        cancelText: "取消",
        confirmText: "取消"
      });
    };
    common_vendor.watch(
      () => form.value,
      (newValue) => {
        if (newValue) {
          validateForm();
        }
      }
    );
    common_vendor.onLoad(() => {
      avatar.value = userStore.avatar;
      name.value = userStore.name;
      signature.value = userStore.signature;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          autoBack: true,
          title: "",
          fixed: true,
          placeholder: true
        }),
        b: common_vendor.p({
          duration: "100",
          src: avatar.value,
          shape: "square",
          radius: "10%",
          width: "120rpx",
          height: "120rpx"
        }),
        c: common_vendor.t(name.value),
        d: common_vendor.t(signature.value),
        e: common_vendor.o(($event) => detailShow.value = true),
        f: common_vendor.p({
          title: "更多信息",
          clickable: true,
          isLink: true
        }),
        g: common_vendor.o(showChange),
        h: common_vendor.p({
          title: "修改信息",
          clickable: true,
          isLink: true
        }),
        i: common_vendor.p({
          customStyle: {
            backgroundColor: "#fff",
            marginTop: "10rpx",
            paddingLeft: "10rpx",
            paddingRight: "10rpx"
          }
        }),
        j: common_vendor.o(logout),
        k: common_vendor.p({
          clickable: true
        }),
        l: common_vendor.p({
          customStyle: {
            backgroundColor: "#fff",
            marginTop: "10rpx",
            paddingLeft: "10rpx",
            paddingRight: "10rpx"
          }
        }),
        m: common_vendor.t(name.value),
        n: common_vendor.t(signature.value),
        o: common_vendor.o(($event) => detailShow.value = false),
        p: common_vendor.p({
          title: "个人信息",
          show: detailShow.value,
          closeOnClickOverlay: true,
          confirmColor: "#5B6990"
        }),
        q: signature.value == "兜兜啭啭①圏，蕞終還媞徊菿伱這裡(你快把它改掉吧，谢谢你🥹)"
      }, signature.value == "兜兜啭啭①圏，蕞終還媞徊菿伱這裡(你快把它改掉吧，谢谢你🥹)" ? {} : {}, {
        r: common_vendor.o(($event) => changeAvatarShow.value = true),
        s: common_vendor.p({
          duration: "100",
          src: changeUserForm.value.avatar,
          shape: "square",
          radius: "10%",
          width: "160rpx",
          height: "160rpx"
        }),
        t: common_vendor.p({
          label: "头像",
          prop: "avatar"
        }),
        v: common_vendor.o(($event) => changeUserForm.value.name = $event),
        w: common_vendor.p({
          modelValue: changeUserForm.value.name
        }),
        x: common_vendor.p({
          label: "用户名",
          prop: "name"
        }),
        y: common_vendor.o(($event) => changeUserForm.value.signature = $event),
        z: common_vendor.p({
          showConfirmBar: false,
          modelValue: changeUserForm.value.signature
        }),
        A: common_vendor.p({
          label: "个性签名",
          prop: "signature"
        }),
        B: common_vendor.sr(form, "3d28d02c-9,3d28d02c-8", {
          "k": "form"
        }),
        C: common_vendor.p({
          labelPosition: "left",
          model: changeUserForm.value
        }),
        D: common_vendor.o(showChange),
        E: common_vendor.o(changeUser),
        F: common_vendor.p({
          title: "修改信息",
          show: changeShow.value,
          closeOnClickOverlay: true,
          confirmColor: "#5B6990",
          confirmText: "确定",
          showCancelButton: true
        }),
        G: common_vendor.f(6, (item, index, i0) => {
          return {
            a: "3d28d02c-19-" + i0 + "," + ("3d28d02c-18-" + i0),
            b: common_vendor.p({
              duration: "100",
              src: "/static/用户" + index + ".jpg",
              shape: "square",
              radius: "10%",
              width: "160rpx",
              height: "160rpx"
            }),
            c: index,
            d: "3d28d02c-18-" + i0 + ",3d28d02c-17",
            e: common_vendor.p({
              index
            })
          };
        }),
        H: common_vendor.o(clickAvatar),
        I: common_vendor.p({
          border: false
        }),
        J: common_vendor.o(close),
        K: common_vendor.o(open),
        L: common_vendor.p({
          show: changeAvatarShow.value,
          closeable: true
        })
      });
    };
  }
};
wx.createPage(_sfc_main);
