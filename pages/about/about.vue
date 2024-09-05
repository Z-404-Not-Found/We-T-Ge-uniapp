<template>
    <view
        style="background-color: #ededed"
        :style="{ height: windowHeight + 'px' }"
    >
        <up-navbar
            title="关于"
            border
            fixed
            placeholder
            autoBack
            bgColor="#ededed"
        ></up-navbar>
        <view
            class="container"
            hover-class="container-hover"
            :hover-start-time="1"
        >
            <view
                style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 96rpx;
                    height: 240rpx;
                "
            >
                <up-image
                    duration="100"
                    src="/static/头像.jpg"
                    shape="square"
                    radius="0"
                    width="240rpx"
                    height="240rpx"
                ></up-image>
            </view>
            <view class="text"> 关于（正文） </view>
            <view class="source"> 素材来源：</view>
            <view class="source"> 1. 部分图标：iconfonts.com </view>
            <view class="source">
                2.用户头像及默认角色头像图片素材：小🍠——月小七🍬（小🍠号：Jelly777）</view
            >
            <view class="source">
                3.
                “中国亲妈”头像图片素材：小🍠——星光慧慧子（小🍠号：cmh188o）</view
            >
            <view class="source">
                4.
                “故事王”头像图片素材：小🍠——Oneone（小🍠号：4272273487）</view
            >
            <view class="source">
                5.“文字冒险游戏”头像图片素材：小🍠——梦境匠人H.Po（小🍠号：9624138367）</view
            >
            <view class="source">
                6. “励志师”头像图片素材：《爱情公寓》截图</view
            >
            <view class="source"> 7. “小🍠写手”头像图片素材：小🍠表情</view>
            <view class="source"> （小🍠真是个找素材的好地方😂）</view>
            <view class="source"> （素材来源于网络，如有侵权及时删除）</view>
        </view>
    </view>
</template>

<script setup>
import { ref } from "vue";
import { onReady } from "@dcloudio/uni-app";
const dateNow = ref("");
const windowHeight = ref();

windowHeight.value = uni.getSystemInfoSync().screenHeight;
onReady(() => {
    dateNow.value = new Date().toLocaleString();
});
</script>

<style lang="scss">
.container {
    height: 86%;
    overflow: auto;
    box-sizing: border-box;
    margin: 16px;
    padding: 16px;
    transition: box-shadow 0.3s, background-color 0.3s;
    &-hover {
        box-shadow: 24rpx 24rpx 24rpx 24rpx rgb(0, 0, 0, 0.1),
            -16rpx -16rpx 16rpx white;
        background-color: #fff;
    }
}
.text {
    color: #4a4a4a;
    font-size: 36rpx;
    text-indent: 72rpx;
}
.tip {
    color: #999;
    font-size: 28rpx;
}
.source {
    color: #999;
    font-size: 24rpx;
}
</style>
