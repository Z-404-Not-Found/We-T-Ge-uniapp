<template>
    <view>
        <up-tabbar :value="active" fixed activeColor="#4BC163" placeholder>
            <up-tabbar-item
                v-for="(item, index) in tabs"
                :key="index"
                :text="item.text"
                :icon="getTabbarIcon(item, index)"
                @click="click"
                :name="item.name"
            ></up-tabbar-item> </up-tabbar
    ></view>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
    active: String,
});

const tabs = ref([
    {
        text: "聊天",
        icon: "chat",
        selectedIcon: "chat-fill",
        name: "/pages/chatList/chatList",
    },
    {
        text: "我",
        icon: "account",
        selectedIcon: "account-fill",
        name: "/pages/personalCenter/personalCenter",
    },
]);
const getTabbarIcon = (item, index) => {
    return props.active === item.name ? item.selectedIcon : item.icon;
};
const click = (e) => {
    uni.redirectTo({
        url: e,
    });
};
</script>

<style lang="scss" scoped></style>
