<template>
    <view
        style="display: flex; flex-direction: column; transition: height 0.05s"
        :style="{
            height: calculateHeight,
        }"
    >
        <up-navbar :title="title" border fixed placeholder bgColor="#ededed">
            <template #left>
                <view class="u-nav-slot">
                    <up-icon
                        name="arrow-left"
                        size="16"
                        @click="toBack"
                    ></up-icon>
                    <up-line
                        direction="column"
                        :hairline="false"
                        length="16"
                        margin="0 14px"
                    ></up-line>
                    <up-icon
                        name="trash"
                        size="20"
                        @click="deleteShow"
                    ></up-icon>
                </view>
            </template>
        </up-navbar>
        <scroll-view
            style="background-color: #ededed; overflow: auto; flex-grow: 1"
            scroll-y
            :scroll-top="scrollTop"
        >
            <view>
                <view
                    style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        padding: 40rpx 40rpx 0 40rpx;
                        font-size: 22rpx;
                        color: #999;
                    "
                    >声明：服务生成的所有内容均由人工智能模型生成，其生成内容的准确性和完整性无法保证，不代表开发者的态度或观点</view
                ></view
            >
            <view style="padding: 16rpx 32rpx">
                <up-divider text="这是一条分割线"></up-divider>
            </view>
            <view
                style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 0 40rpx 40rpx 40rpx;
                    font-size: 28rpx;
                    color: #999;
                "
            >
                {{ chatRecord.description }}
            </view>
            <ChattingBox
                v-for="(item, index) in chatRecord.history"
                :id="id"
                :key="index"
                :role="item.role"
                :content="item.content"
                :avatar="chatRecord.avatar"
            ></ChattingBox>
        </scroll-view>
        <view
            style="
                height: 60px;
                width: 100%;
                background: #f7f7f7;
                border-top: 1px solid #dadbde;
                box-sizing: border-box;
            "
            ><view style="background-color: #fff; margin: 10px">
                <up-input
                    v-model="inputText"
                    placeholder="请输入内容"
                    confirmHold
                    @focus="focus"
                    @blur="blur"
                    :adjustPosition="false"
                    :hold-keyboard="true"
                >
                    <template #suffix
                        ><up-button
                            size="small"
                            text="发送"
                            :disabled="sendMessageDisabled"
                            @click="sendMessage"
                            color="#4AC163"
                        ></up-button></template
                ></up-input> </view
        ></view>
        <view>
            <up-popup
                :show="show"
                :round="5"
                closeable
                @close="close"
                @open="open"
            >
                <view style="padding: 60px 30px">
                    <up-grid :border="false" col="2">
                        <up-grid-item>
                            <view style="height: 60px; width: 60px">
                                <up-button
                                    shape="circle"
                                    plain
                                    type="primary"
                                    size="large"
                                    icon="plus"
                                    :disabled="clearRememberDisabled"
                                    @click="clearRemember"
                                ></up-button
                            ></view>
                            <text style="font-size: 14px; color: gray">
                                开启新对话
                            </text>
                        </up-grid-item>
                        <up-grid-item>
                            <view style="height: 60px; width: 60px">
                                <up-button
                                    shape="circle"
                                    plain
                                    type="error"
                                    size="large"
                                    icon="trash"
                                    :disabled="clearHistoryDisabled"
                                    @click="clearHistory"
                                ></up-button>
                            </view>
                            <text style="font-size: 14px; color: gray">
                                清除聊天记录
                            </text>
                        </up-grid-item>
                    </up-grid>
                </view>
            </up-popup>
        </view>
    </view>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { onLoad, onUnload, onReady, onShow } from "@dcloudio/uni-app";
import { useChatRecordStore } from "../../stores/chatsRecord";
import { chatApi } from "@/apis/gptApi";
const id = ref("");
const windowHeight = ref(0);
const keyboardHeight = ref(0);
const scrollTop = ref(0);
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
const roleName = ref("");
const title = ref("");
const buttonDisabled = ref(false);
const inputText = ref("");
const onFocus = ref(false);
const show = ref(false);

windowHeight.value = uni.getSystemInfoSync().screenHeight;

// #ifndef H5
uni.onKeyboardHeightChange((res) => {
    keyboardHeight.value = res.height;
});
// #endif

const scrollToBottom = () => {
    setTimeout(() => {
        scrollTop.value += 999999;
    }, 50);
};

const calculateHeight = computed(() => {
    return onFocus.value
        ? windowHeight.value - keyboardHeight.value + "px"
        : windowHeight.value + "px";
});

const focus = () => {
    onFocus.value = true;
    scrollToBottom();
};

const blur = () => {
    onFocus.value = false;
    scrollToBottom();
};

const toBack = () => {
    uni.hideKeyboard();
    uni.redirectTo({
        url: "/pages/chatList/chatList",
    });
};

const deleteShow = () => {
    uni.hideKeyboard();
    show.value = true;
};

const open = () => {
    show.value = true;
};

const close = () => {
    show.value = false;
};

const clearRememberDisabled = computed(() => {
    return chatRecord.value.history[chatRecord.value.history.length - 1].role ==
        "divide" || chatRecord.value.history.length == 1
        ? true
        : false;
});

const clearRemember = () => {
    uni.hideKeyboard();
    show.value = false;
    chatRecord.value.history.push({
        role: "divide",
    });
    chatRecordStore.setRecordCountById(id.value, 0);
};

const clearHistoryDisabled = computed(() => {
    return chatRecord.value.history.length == 1 ? true : false;
});

const clearHistory = () => {
    uni.hideKeyboard();
    show.value = false;
    uni.showModal({
        title: "清除聊天记录",
        content: "确定清除聊天记录！？？",
        cancelText: "不确定",
        confirmText: "确定",
        success: function (res) {
            if (res.confirm) {
                chatRecordStore.clearHistoryById(id.value);
                chatRecordStore.setRecordCountById(id.value, 0);
                chatRecord.value = chatRecordStore.getChatRecordById(id.value);
                uni.showToast({
                    title: "删除成功",
                    icon: "success",
                });
            } else if (res.cancel) {
            }
        },
    });
};

const sendMessageDisabled = computed(() => {
    return inputText.value.length == 0 || buttonDisabled.value;
});

const cutArray = (arr, n) => {
    if (arr.length === 1) {
        return [arr[0]].filter((messages) => messages.role !== "divide");
    } else if (arr.length <= n + 2) {
        return arr
            .slice(0, -1)
            .filter((messages) => messages.role !== "divide");
    } else {
        const result = [arr[0]].concat(arr.slice(-n - 1, -1));
        return result.filter((messages) => messages.role !== "divide");
    }
};

const sendMessage = () => {
    chatRecord.value.history.push({
        role: "user",
        content: inputText.value,
    });
    chatRecord.value.history.push({
        role: "assistant",
        content: "",
    });
    inputText.value = "";
    chatRecordStore.add2RecordCountById(id.value);
    buttonDisabled.value = true;
    title.value = "对方正在输入...";
    chatApi({
        model: "gpt-4o-mini",
        messages: cutArray(
            chatRecord.value.history,
            chatRecord.value.recordCount
        ),
    }).then((res) => {
        if (res.error) {
            chatRecord.value.history[
                chatRecord.value.history.length - 1
            ].content = "error:" + res.error.message;
        } else {
            chatRecord.value.history[
                chatRecord.value.history.length - 1
            ].content = res.choices[0].message.content;
        }
        buttonDisabled.value = false;
        title.value = roleName.value;
    });
};

watch(
    () => chatRecord.value.history,
    () => {
        scrollToBottom();
    },
    {
        deep: true,
    }
);

onLoad((e) => {
    id.value = e.id;
    chatRecord.value = chatRecordStore.getChatRecordById(id.value);
    roleName.value = chatRecord.value.name;
    title.value = roleName.value;
});
onReady(() => {
    scrollToBottom();
});
onShow(() => {
    chatRecord.value = {
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
    };
    setTimeout(() => {
        chatRecord.value = chatRecordStore.getChatRecordById(id.value);
        roleName.value = chatRecord.value.name;
        title.value = roleName.value;
    }, 1);
});
onUnload(() => {
    if (chatRecord.history) {
        chatRecordStore.setChatHistoryById(id.value, chatRecord.value.history);
        chatRecord.value = {};
    }
});
</script>

<style lang="scss" scoped>
.u-nav-slot {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5px solid $uni-border-color;
    border-radius: 100px;
    padding: 3px 10px;
    opacity: 0.8;
    height: 28px;
    width: 80px;
    background-color: #f8f8f8;
}
</style>
