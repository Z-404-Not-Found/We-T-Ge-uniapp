<template>
    <view>
        <up-navbar
            title="添加角色"
            border
            fixed
            placeholder
            autoBack
            bgColor="#ededed"
        >
            >
        </up-navbar>
        <view style="padding: 16px">
            <up-form
                labelWidth="50"
                :labelStyle="{
                    color: '#999',
                    fontSize: '16px',
                }"
                ref="form"
                :model="chatForm"
            >
                <up-form-item label="名称" prop="name">
                    <up-input
                        placeholder="请输入角色名称"
                        border="bottom"
                        v-model="chatForm.name"
                    ></up-input>
                </up-form-item>
                <up-form-item label="描述" prop="description">
                    <up-textarea
                        :showConfirmBar="false"
                        placeholder="请输入角色描述，如“这是一个通用助手，会回答你的各种问题。”（给自己看）"
                        height="70"
                        border="bottom"
                        v-model="chatForm.description"
                    ></up-textarea>
                </up-form-item>
                <up-form-item label="设定" prop="definition">
                    <up-textarea
                        :showConfirmBar="false"
                        placeholder="请输入角色设定，如“你是一个助手，你会帮助用户回答问题，并且所有对话要以中文进行”（给AI看）"
                        height="80"
                        border="bottom"
                        v-model="chatForm.definition"
                    ></up-textarea>
                </up-form-item>
            </up-form>
            <view style="margin-top: 20px">
                <up-button
                    type="primary"
                    text="确定"
                    @click="submit"
                    color="#4AC163"
                ></up-button>
            </view>
        </view>
    </view>
</template>

<script setup>
import { ref } from "vue";
import { onReady } from "@dcloudio/uni-app";
import { useChatRecordStore } from "../../stores/chatsRecord";
const chatRecordStore = useChatRecordStore();
const form = ref(null);
const chatForm = ref({
    name: "",
    description: "",
    definition: "",
});

let chat = {
    id: "",
    recordCount: 0,
    name: "",
    avatar: "/static/默认角色.jpg",
    description: "",
    history: [
        {
            role: "system",
            content: "",
        },
    ],
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

// 得到最大id并加一
const setId = () => {
    let maxId = 0;
    chatRecordStore.chatRecord.forEach((item) => {
        if (item.id > maxId) {
            maxId = item.id;
        }
    });
    return (Number(maxId) + 1).toString();
};

const submit = () => {
    form.value
        .validate()
        .then((valid) => {
            if (valid) {
                chat.id = setId();
                chat.name = chatForm.value.name;
                chat.description = chatForm.value.description;
                chat.history[0].content = chatForm.value.definition;
                chatRecordStore.addChatRecord(chat);
                uni.showToast({
                    title: "添加成功",
                    icon: "success",
                });
                uni.navigateBack();
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

onReady(() => {
    validateForm();
});
</script>

<style lang="scss"></style>
