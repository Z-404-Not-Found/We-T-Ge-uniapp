"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_chatsRecord = require("../../stores/chatsRecord.js");
if (!Array) {
  const _easycom_up_navbar2 = common_vendor.resolveComponent("up-navbar");
  const _easycom_up_image2 = common_vendor.resolveComponent("up-image");
  const _easycom_up_cell2 = common_vendor.resolveComponent("up-cell");
  const _easycom_up_cell_group2 = common_vendor.resolveComponent("up-cell-group");
  const _easycom_up_icon2 = common_vendor.resolveComponent("up-icon");
  const _easycom_up_modal2 = common_vendor.resolveComponent("up-modal");
  const _easycom_up_input2 = common_vendor.resolveComponent("up-input");
  const _easycom_up_form_item2 = common_vendor.resolveComponent("up-form-item");
  const _easycom_up_textarea2 = common_vendor.resolveComponent("up-textarea");
  const _easycom_up_form2 = common_vendor.resolveComponent("up-form");
  (_easycom_up_navbar2 + _easycom_up_image2 + _easycom_up_cell2 + _easycom_up_cell_group2 + _easycom_up_icon2 + _easycom_up_modal2 + _easycom_up_input2 + _easycom_up_form_item2 + _easycom_up_textarea2 + _easycom_up_form2)();
}
const _easycom_up_navbar = () => "../../uni_modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_up_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_up_cell = () => "../../uni_modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_up_cell_group = () => "../../uni_modules/uview-plus/components/u-cell-group/u-cell-group.js";
const _easycom_up_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_up_modal = () => "../../uni_modules/uview-plus/components/u-modal/u-modal.js";
const _easycom_up_input = () => "../../uni_modules/uview-plus/components/u-input/u-input.js";
const _easycom_up_form_item = () => "../../uni_modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_up_textarea = () => "../../uni_modules/uview-plus/components/u-textarea/u-textarea.js";
const _easycom_up_form = () => "../../uni_modules/uview-plus/components/u-form/u-form.js";
if (!Math) {
  (_easycom_up_navbar + _easycom_up_image + _easycom_up_cell + _easycom_up_cell_group + _easycom_up_icon + _easycom_up_modal + _easycom_up_input + _easycom_up_form_item + _easycom_up_textarea + _easycom_up_form)();
}
const _sfc_main = {
  __name: "roleCenter",
  setup(__props) {
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
    const id = common_vendor.ref("");
    const avatar = common_vendor.ref("");
    const roleName = common_vendor.ref("");
    const description = common_vendor.ref("");
    const definition = common_vendor.ref("");
    const detailShow = common_vendor.ref(false);
    const changeShow = common_vendor.ref(false);
    const form = common_vendor.ref(null);
    const changeRoleForm = common_vendor.ref({
      name: "",
      description: "",
      definition: ""
    });
    const toBack = () => {
      common_vendor.index.navigateBack();
    };
    const showChange = () => {
      changeRoleForm.value.name = roleName.value;
      changeRoleForm.value.description = description.value;
      changeRoleForm.value.definition = definition.value;
      changeShow.value = !changeShow.value;
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
    const changeRole = () => {
      form.value.validate().then((valid) => {
        if (valid) {
          changeShow.value = !changeShow.value;
          common_vendor.index.showModal({
            title: "确认修改？？",
            content: "修改后将清除上下文开启新对话",
            cancelText: "不确定",
            confirmText: "确定",
            success: function(res) {
              if (res.confirm) {
                chatRecordStore.updateChatRecordById(id.value, {
                  name: changeRoleForm.value.name,
                  description: changeRoleForm.value.description,
                  definition: changeRoleForm.value.definition
                });
                if (chatRecord.value.history[chatRecord.value.history.length - 1].role != "divide" && chatRecord.value.history.length != 1) {
                  chatRecord.value.history.push({
                    role: "divide"
                  });
                  chatRecordStore.setRecordCountById(id.value, 0);
                }
                common_vendor.index.showToast({
                  title: "修改成功",
                  icon: "success"
                });
                roleName.value = changeRoleForm.value.name;
                description.value = changeRoleForm.value.description;
                definition.value = changeRoleForm.value.definition;
              } else if (res.cancel)
                ;
            }
          });
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: "请正确填写角色定义",
          icon: "error"
        });
        console.log(err);
      });
    };
    const deleteRole = () => {
      common_vendor.index.showModal({
        title: "确认删除？？",
        content: "你真想删除？？？！",
        cancelText: "不！！！",
        confirmText: "删。。。",
        success: function(res) {
          if (res.confirm) {
            chatRecordStore.removeChatRecordById(id.value);
            common_vendor.index.showToast({
              title: "删除成功",
              icon: "success"
            });
            common_vendor.index.redirectTo({
              url: "/pages/chatList/chatList"
            });
          } else if (res.cancel)
            ;
        }
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
    common_vendor.onLoad((e) => {
      id.value = e.id;
      chatRecord.value = chatRecordStore.getChatRecordById(id.value);
      avatar.value = chatRecord.value.avatar;
      roleName.value = chatRecord.value.name;
      description.value = chatRecord.value.description;
      definition.value = chatRecord.value.history[0].content;
    });
    return (_ctx, _cache) => {
      return {
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
        c: common_vendor.t(roleName.value),
        d: common_vendor.t(description.value),
        e: common_vendor.o(($event) => detailShow.value = true),
        f: common_vendor.p({
          title: "查看详细信息",
          clickable: true,
          isLink: true
        }),
        g: common_vendor.o(showChange),
        h: common_vendor.p({
          title: "修改角色信息",
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
        j: common_vendor.p({
          name: "chat",
          color: "#5B6990"
        }),
        k: common_vendor.o(toBack),
        l: common_vendor.p({
          clickable: true
        }),
        m: common_vendor.p({
          name: "trash",
          color: "#f56c6c"
        }),
        n: common_vendor.o(deleteRole),
        o: common_vendor.p({
          clickable: true
        }),
        p: common_vendor.p({
          customStyle: {
            backgroundColor: "#fff",
            marginTop: "10rpx",
            paddingLeft: "10rpx",
            paddingRight: "10rpx"
          }
        }),
        q: common_vendor.t(description.value),
        r: common_vendor.t(definition.value),
        s: common_vendor.o(($event) => detailShow.value = false),
        t: common_vendor.p({
          title: roleName.value,
          show: detailShow.value,
          closeOnClickOverlay: true,
          confirmColor: "#5B6990",
          confirmText: "害，就这~"
        }),
        v: common_vendor.o(($event) => changeRoleForm.value.name = $event),
        w: common_vendor.p({
          modelValue: changeRoleForm.value.name
        }),
        x: common_vendor.p({
          label: "名称",
          prop: "name"
        }),
        y: common_vendor.o(($event) => changeRoleForm.value.description = $event),
        z: common_vendor.p({
          showConfirmBar: false,
          modelValue: changeRoleForm.value.description
        }),
        A: common_vendor.p({
          label: "描述",
          prop: "description"
        }),
        B: common_vendor.o(($event) => changeRoleForm.value.definition = $event),
        C: common_vendor.p({
          showConfirmBar: false,
          modelValue: changeRoleForm.value.definition
        }),
        D: common_vendor.p({
          label: "定义",
          prop: "definition"
        }),
        E: common_vendor.sr(form, "39bb5f4c-12,39bb5f4c-11", {
          "k": "form"
        }),
        F: common_vendor.p({
          labelPosition: "left",
          model: changeRoleForm.value
        }),
        G: common_vendor.o(showChange),
        H: common_vendor.o(changeRole),
        I: common_vendor.p({
          title: "修改" + roleName.value + "信息",
          show: changeShow.value,
          closeOnClickOverlay: true,
          confirmColor: "#5B6990",
          confirmText: "确定",
          showCancelButton: true
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
