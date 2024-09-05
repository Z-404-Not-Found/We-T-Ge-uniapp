<template>
    <view>
        <view class="users-box" v-if="role == 'user'">
            <view class="chatting">
                {{ content }}
            </view>
            <view class="avatar">
                <up-image
                    duration="100"
                    class="avatar"
                    :src="userAvatar"
                    shape="square"
                    radius="10%"
                    width="80rpx"
                    height="80rpx"
                    @click="toUserCenter"
                ></up-image
            ></view>
        </view>
        <view class="gpt-box" v-else-if="role == 'assistant'">
            <view class="avatar">
                <up-image
                    duration="100"
                    :src="avatar"
                    shape="square"
                    radius="10%"
                    width="80rpx"
                    height="80rpx"
                    @click="toRoleCenter(id)"
                ></up-image
            ></view>
            <view class="chatting">
                <up-loading-icon
                    v-if="content == ''"
                    size="16"
                ></up-loading-icon>
                <text v-else>
                    {{ content }}
                </text>
            </view>
        </view>
        <view v-if="role == 'divide'" style="padding: 16rpx 32rpx">
            <up-divider text="以下为新对话"></up-divider></view
    ></view>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../../stores/user";
const props = defineProps({
    role: {
        type: String,
        default: "assistant",
    },
    content: {
        type: String,
        default: "",
    },
    avatar: {
        type: String,
        default: "",
    },
    id: {
        type: String,
        default: "",
    },
});
const userStore = useUserStore();
const userAvatar = ref(userStore.avatar);
const toRoleCenter = (id) => {
    uni.navigateTo({
        url: `/pages/roleCenter/roleCenter?id=${id}`,
    });
};
const toUserCenter = () => {
    uni.navigateTo({
        url: `/pages/userCenter/userCenter`,
    });
};
</script>

<style lang="scss" scoped>
.gpt-box {
    padding: 16rpx 32rpx;
    display: flex;
    .avatar {
        width: 80rpx;
        height: 80rpx;
    }
    .chatting {
        display: flex;
        min-height: 80rpx;
        max-width: 462rpx;
        background-color: #fff;
        border-radius: 8rpx;
        position: relative;
        left: 32rpx;
        padding: 24rpx;
        line-height: 1;
        box-sizing: border-box;
        font-size: 32rpx;
        justify-content: center;
        align-items: center;
        word-wrap: break-word;
    }
    .chatting::before {
        width: 0;
        height: 0;
        content: "";
        border-top: 16rpx solid transparent;
        border-bottom: 16rpx solid transparent;
        border-right: 16rpx solid #fff;
        position: absolute;
        left: -16rpx;
        top: 24rpx;
    }
}
.users-box {
    padding: 16rpx 32rpx;
    display: flex;
    justify-content: flex-end;
    .avatar {
        width: 80rpx;
        height: 80rpx;
    }
    .chatting {
        min-height: 80rpx;
        max-width: 462rpx;
        background-color: #95ec69;
        border-radius: 8rpx;
        position: relative;
        right: 32rpx;
        padding: 24rpx;
        line-height: 1;
        box-sizing: border-box;
        font-size: 32rpx;
        justify-content: center;
        align-items: center;
        word-wrap: break-word;
    }
    .chatting::after {
        width: 0;
        height: 0;
        content: "";
        border-top: 16rpx solid transparent;
        border-bottom: 16rpx solid transparent;
        border-left: 16rpx solid #95ec69;
        position: absolute;
        right: -16rpx;
        top: 24rpx;
    }
}
</style>
