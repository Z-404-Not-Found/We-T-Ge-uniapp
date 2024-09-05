<template>
    <view style="background-color: #ededed; height: 100vh">
        <up-navbar autoBack title="" fixed placeholder></up-navbar>
        <view
            style="
                background-color: #fff;
                width: 100%;
                min-height: 240rpx;
                padding: 40rpx;
                box-sizing: border-box;
                display: flex;
            "
        >
            <view style="margin-right: 48rpx; width: 120rpx">
                <up-image
                    duration="100"
                    :src="avatar"
                    shape="square"
                    radius="10%"
                    width="120rpx"
                    height="120rpx"
                ></up-image
            ></view>
            <view>
                <view
                    style="font-weight: bold; font-size: 36rpx; line-height: 1"
                    >{{ roleName }}</view
                >
                <view style="color: gray; font-size: 28rpx; margin-top: 16rpx">
                    <text>简介：</text>
                    {{ description }}
                </view>
            </view>
        </view>
        <view>
            <up-cell-group
                :customStyle="{
                    backgroundColor: '#fff',
                    marginTop: '10rpx',
                    paddingLeft: '10rpx',
                    paddingRight: '10rpx',
                }"
            >
                <up-cell
                    title="查看详细信息"
                    clickable
                    isLink
                    @click="detailShow = true"
                ></up-cell>
                <up-cell
                    title="修改角色信息"
                    clickable
                    isLink
                    @click="showChange"
                ></up-cell>
            </up-cell-group>
            <up-cell-group
                :customStyle="{
                    backgroundColor: '#fff',
                    marginTop: '10rpx',
                    paddingLeft: '10rpx',
                    paddingRight: '10rpx',
                }"
            >
                <up-cell clickable @click="toBack">
                    <template #title>
                        <view
                            style="
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                color: #5b6990;
                                font-size: 32rpx;
                            "
                        >
                            <up-icon name="chat" color="#5B6990"></up-icon>
                            <text>发消息</text>
                        </view>
                    </template></up-cell
                >
                <up-cell clickable @click="deleteRole">
                    <template #title>
                        <view
                            style="
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                color: #f56c6c;
                                font-size: 32rpx;
                            "
                        >
                            <up-icon name="trash" color="#f56c6c"></up-icon>
                            <text>删除角色</text>
                        </view>
                    </template></up-cell
                >
            </up-cell-group>
        </view>
        <view>
            <up-modal
                :title="roleName"
                :show="detailShow"
                closeOnClickOverlay
                confirmColor="#5B6990"
                confirmText="害，就这~"
                @confirm="detailShow = false"
            >
                <view style="display: flex; flex-direction: column">
                    <view style="display: flex">
                        <view
                            style="
                                color: #606266;
                                font-weight: bold;
                                width: 96rpx;
                            "
                            >描述：</view
                        >
                        <view style="flex: 1"> {{ description }}</view>
                    </view>
                    <view style="display: flex">
                        <view
                            style="
                                color: #606266;
                                font-weight: bold;
                                width: 96rpx;
                            "
                            >定义：</view
                        >
                        <view style="flex: 1">{{ definition }}</view>
                    </view></view
                >
            </up-modal></view
        >
        <view>
            <up-modal
                :title="'修改' + roleName + '信息'"
                :show="changeShow"
                closeOnClickOverlay
                confirmColor="#5B6990"
                confirmText="确定"
                showCancelButton
                @cancel="showChange"
                @confirm="changeRole"
            >
                <up-form
                    labelPosition="left"
                    ref="form"
                    :model="changeRoleForm"
                >
                    <up-form-item label="名称" prop="name">
                        <up-input v-model="changeRoleForm.name"></up-input>
                    </up-form-item>
                    <up-form-item label="描述" prop="description">
                        <up-textarea
                            :showConfirmBar="false"
                            v-model="changeRoleForm.description"
                        ></up-textarea>
                    </up-form-item>
                    <up-form-item label="定义" prop="definition">
                        <up-textarea
                            :showConfirmBar="false"
                            v-model="changeRoleForm.definition"
                        ></up-textarea>
                    </up-form-item>
                </up-form> </up-modal
        ></view>
    </view>
</template>

<script setup>
import { ref, watch } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { useChatRecordStore } from "../../stores/chatsRecord";
const chatRecordStore = useChatRecordStore();
const chatRecord = ref({
    id: "",
    onTop: false,
    recordCount: 0,
    name: "",
    avatar: "",
    description: "",
    history: [
        {
            role: "",
            content: "",
        },
    ],
});
const id = ref("");
const avatar = ref("");
const roleName = ref("");
const description = ref("");
const definition = ref("");
const detailShow = ref(false);
const changeShow = ref(false);
const form = ref(null);
const changeRoleForm = ref({
    name: "",
    description: "",
    definition: "",
});

const toBack = () => {
    uni.navigateBack();
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
            trigger: ["blur", "change"],
        },
        description: {
            required: true,
            message: "请输入角色描述",
            trigger: ["blur", "change"],
        },
        definition: {
            required: true,
            message: "请输入角色设定",
            trigger: ["blur", "change"],
        },
    });
};

const changeRole = () => {
    form.value
        .validate()
        .then((valid) => {
            if (valid) {
                changeShow.value = !changeShow.value;
                uni.showModal({
                    title: "确认修改？？",
                    content: "修改后将清除上下文开启新对话",
                    cancelText: "不确定",
                    confirmText: "确定",
                    success: function (res) {
                        if (res.confirm) {
                            chatRecordStore.updateChatRecordById(id.value, {
                                name: changeRoleForm.value.name,
                                description: changeRoleForm.value.description,
                                definition: changeRoleForm.value.definition,
                            });
                            if (
                                chatRecord.value.history[
                                    chatRecord.value.history.length - 1
                                ].role != "divide" &&
                                chatRecord.value.history.length != 1
                            ) {
                                chatRecord.value.history.push({
                                    role: "divide",
                                });
                                chatRecordStore.setRecordCountById(id.value, 0);
                            }
                            uni.showToast({
                                title: "修改成功",
                                icon: "success",
                            });
                            roleName.value = changeRoleForm.value.name;
                            description.value =
                                changeRoleForm.value.description;
                            definition.value = changeRoleForm.value.definition;
                        } else if (res.cancel) {
                        }
                    },
                });
            }
        })
        .catch((err) => {
            uni.showToast({
                title: "请正确填写角色定义",
                icon: "error",
            });
            console.log(err);
        });
};

const deleteRole = () => {
    uni.showModal({
        title: "确认删除？？",
        content: "你真想删除？？？！",
        cancelText: "不！！！",
        confirmText: "删。。。",
        success: function (res) {
            if (res.confirm) {
                chatRecordStore.removeChatRecordById(id.value);
                uni.showToast({
                    title: "删除成功",
                    icon: "success",
                });
                uni.redirectTo({
                    url: "/pages/chatList/chatList",
                });
            } else if (res.cancel) {
            }
        },
    });
};

watch(
    () => form.value,
    (newValue) => {
        if (newValue) {
            validateForm();
        }
    }
);

onLoad((e) => {
    id.value = e.id;
    chatRecord.value = chatRecordStore.getChatRecordById(id.value);
    avatar.value = chatRecord.value.avatar;
    roleName.value = chatRecord.value.name;
    description.value = chatRecord.value.description;
    definition.value = chatRecord.value.history[0].content;
});
</script>

<style lang="scss"></style>
