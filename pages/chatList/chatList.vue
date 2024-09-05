<template>
    <view>
        <up-navbar
            title="聊天"
            border
            fixed
            placeholder
            leftIcon=""
            @leftClick="toAddRole"
            bgColor="#ededed"
        >
            <template #left>
                <view
                    style="
                        display: flex;
                        flex-direction: column;
                        justify-items: center;
                        align-items: center;
                    "
                >
                    <up-icon name="plus"></up-icon>
                    <view
                        style="color: #999; font-size: 10px"
                        class="chat-list-add-text"
                        >新建角色</view
                    >
                </view>
            </template>
        </up-navbar>
        <up-swipe-action>
            <up-swipe-action-item
                :options="options"
                v-for="(item, index) in chatList"
                :name="item.id"
                :key="item.id"
                @click="clickSwipe"
            >
                <up-cell-group
                    :border="false"
                    :customStyle="
                        item.onTop ? { backgroundColor: '#ededed' } : {}
                    "
                >
                    <up-cell
                        :url="'pages/chat/chat?id=' + item.id"
                        :name="item.name"
                        clickable
                        :show="swipeShow"
                        :style="
                            item.onTop
                                ? 'background-color: #ededed!important'
                                : ''
                        "
                    >
                        >
                        <template #icon>
                            <view
                                style="
                                    width: 42px;
                                    height: 42px;
                                    margin-right: 16rpx;
                                "
                            >
                                <up-image
                                    :src="item.avatar"
                                    shape="square"
                                    radius="10%"
                                    width="42px"
                                    height="42px"
                                    duration="100"
                                ></up-image
                            ></view>
                        </template>
                        <template #title>
                            <up-text
                                color="#000"
                                size="16px"
                                :lines="1"
                                :text="item.name"
                            ></up-text>
                        </template>
                        <template #label>
                            <up-text
                                color="#999"
                                size="12px"
                                :lines="1"
                                :text="
                                    item.history.length == 1 ||
                                    item.history[item.history.length - 1]
                                        .role == 'divide'
                                        ? item.description
                                        : item.history[item.history.length - 1]
                                              .content
                                "
                            ></up-text>
                        </template> </up-cell
                ></up-cell-group>
            </up-swipe-action-item>
        </up-swipe-action>
        <Tabbar active="/pages/chatList/chatList"></Tabbar>
    </view>
</template>

<script setup>
import { ref } from "vue";
import { onReady } from "@dcloudio/uni-app";
import { useChatRecordStore } from "../../stores/chatsRecord";
const chatRecordStore = useChatRecordStore();
const chatList = ref({});
const swipeShow = ref(false);

const options = ref([
    {
        text: "删除",
        style: {
            backgroundColor: "#dd524d",
        },
    },
    {
        text: "置顶!=置顶",
        style: {
            backgroundColor: "#f0ad4e",
        },
    },
]);

const clickSwipe = (e) => {
    if (e.index == 0) {
        uni.showModal({
            title: "确认删除？？",
            content: "你真想删除？？？！",
            cancelText: "不！！！",
            confirmText: "删。。。",
            success: function (res) {
                if (res.confirm) {
                    chatRecordStore.removeChatRecordById(e.name);
                    chatList.value = chatRecordStore.returnSortedChatRecord();
                    uni.showToast({
                        title: "删除成功",
                        icon: "success",
                    });
                } else if (res.cancel) {
                }
            },
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
    uni.navigateTo({
        url: "/pages/addRole/addRole",
    });
};

onReady(() => {
    chatList.value = chatRecordStore.returnSortedChatRecord();
});
</script>

<style lang="scss" scoped></style>
