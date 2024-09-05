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
                    >{{ name }}</view
                >
                <view style="color: gray; font-size: 28rpx; margin-top: 16rpx">
                    <text>个性签名：</text>
                    {{ signature }}
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
                    title="更多信息"
                    clickable
                    isLink
                    @click="detailShow = true"
                ></up-cell>
                <up-cell
                    title="修改信息"
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
                <up-cell clickable @click="logout">
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
                            <text>退出登录</text>
                        </view>
                    </template></up-cell
                >
            </up-cell-group>
        </view>

        <view>
            <up-modal
                title="个人信息"
                :show="detailShow"
                closeOnClickOverlay
                confirmColor="#5B6990"
                @confirm="detailShow = false"
            >
                <view style="display: flex; flex-direction: column">
                    <view style="display: flex">
                        <view
                            style="
                                color: #606266;
                                font-weight: bold;
                                width: 160rpx;
                            "
                            >用户名：</view
                        >
                        <view style="flex: 1"> {{ name }}</view>
                    </view>
                    <view style="display: flex">
                        <view
                            style="
                                color: #606266;
                                font-weight: bold;
                                width: 160rpx;
                            "
                            >个性签名：</view
                        >
                        <view style="flex: 1">{{ signature }}</view>
                    </view>
                    <view
                        style="
                            color: #606266;
                            font-size: 24rpx;
                            text-align: center;
                            margin-top: 28rpx;
                        "
                        >（对，就这些，害想看啥🤯）</view
                    ></view
                >
            </up-modal></view
        >
        <view>
            <up-modal
                title="修改信息"
                :show="changeShow"
                closeOnClickOverlay
                confirmColor="#5B6990"
                confirmText="确定"
                showCancelButton
                @cancel="showChange"
                @confirm="changeUser"
            >
                <view>
                    <view
                        v-if="
                            signature ==
                            '兜兜啭啭①圏，蕞終還媞徊菿伱這裡(你快把它改掉吧，谢谢你🥹)'
                        "
                        style="
                            color: #606266;
                            font-size: 24rpx;
                            text-align: center;
                            margin-bottom: 28rpx;
                        "
                        >(快改啊！快把这**个签改掉，想到个签第一个就是去搜的火星文，然后就是这样。。。如果把你恶心到了，对不起！！😭😭😭)
                    </view>
                    <up-form
                        labelPosition="left"
                        ref="form"
                        :model="changeUserForm"
                    >
                        <up-form-item label="头像" prop="avatar">
                            <up-image
                                duration="100"
                                :src="changeUserForm.avatar"
                                shape="square"
                                radius="10%"
                                width="160rpx"
                                height="160rpx"
                                @click="changeAvatarShow = true"
                            ></up-image>
                        </up-form-item>
                        <up-form-item label="用户名" prop="name">
                            <up-input v-model="changeUserForm.name"></up-input>
                        </up-form-item>
                        <up-form-item label="个性签名" prop="signature">
                            <up-textarea
                                :showConfirmBar="false"
                                v-model="changeUserForm.signature"
                            ></up-textarea>
                        </up-form-item> </up-form
                ></view> </up-modal
        ></view>

        <view
            ><up-popup
                :show="changeAvatarShow"
                @close="close"
                @open="open"
                closeable
            >
                <view style="padding: 60rpx 100rpx">
                    <view
                        style="
                            text-align: center;
                            color: #606266;
                            font-weight: bold;
                            font-size: 32rpx;
                        "
                        >选择头像</view
                    >
                    <up-grid :border="false" @click="clickAvatar">
                        <up-grid-item
                            v-for="(item, index) in (0, 6)"
                            :index="index"
                            :key="index"
                        >
                            <view style="margin-top: 20rpx">
                                <up-image
                                    duration="100"
                                    :src="'/static/用户' + index + '.jpg'"
                                    shape="square"
                                    radius="10%"
                                    width="160rpx"
                                    height="160rpx"
                                ></up-image
                            ></view>
                        </up-grid-item>
                    </up-grid>
                </view> </up-popup
        ></view>
    </view>
</template>

<script setup>
import { ref, watch } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { useUserStore } from "../../stores/user";
const userStore = useUserStore();
const avatar = ref("");
const name = ref("");
const signature = ref("");
const detailShow = ref(false);
const changeShow = ref(false);
const changeAvatarShow = ref(false);
const form = ref(null);
const changeUserForm = ref({
    name: "",
    signature: "",
    avatar: "",
});

const showChange = () => {
    changeUserForm.value.name = name.value;
    changeUserForm.value.signature = signature.value;
    changeUserForm.value.avatar = avatar.value;
    changeShow.value = !changeShow.value;
};

const open = () => {
    // 打开逻辑，比如设置 show 为 true
    changeAvatarShow.value = true;
    // console.log('open');
};

const close = () => {
    // 关闭逻辑，设置 show 为 false
    changeAvatarShow.value = false;
    // console.log('close');
};

const clickAvatar = (e) => {
    changeUserForm.value.avatar = "/static/用户" + e + ".jpg";
};

const validateForm = () => {
    form.value.setRules({
        name: {
            required: true,
            message: "请输入用户名",
            trigger: ["blur", "change"],
        },
        signature: {
            required: true,
            message: "请输入个性签名",
            trigger: ["blur", "change"],
        },
    });
};

const changeUser = () => {
    form.value
        .validate()
        .then((valid) => {
            if (valid) {
                changeShow.value = !changeShow.value;
                userStore.updateUser(
                    changeUserForm.value.name,
                    changeUserForm.value.signature,
                    changeUserForm.value.avatar
                );
                uni.showToast({
                    title: "修改成功",
                    icon: "success",
                });
                name.value = changeUserForm.value.name;
                signature.value = changeUserForm.value.signature;
                avatar.value = changeUserForm.value.avatar;
            }
        })
        .catch((err) => {
            uni.showToast({
                title: "请正确填写",
                icon: "error",
            });
            console.log(err);
        });
};
const logout = () => {
    uni.showModal({
        title: "啥？？？退出登录？？",
        content: "你登录过吗就退出登录😢",
        cancelText: "取消",
        confirmText: "取消",
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

onLoad(() => {
    avatar.value = userStore.avatar;
    name.value = userStore.name;
    signature.value = userStore.signature;
});
</script>

<style lang="scss"></style>
