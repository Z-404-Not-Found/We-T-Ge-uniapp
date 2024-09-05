import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => {
        return {
            avatar: "/static/用户0.jpg",
            name: "微信用户123(瞎起的，随便改)",
            signature:
                "兜兜啭啭①圏，蕞終還媞徊菿伱這裡(你快把它改掉吧，谢谢你🥹)",
        };
    },
    actions: {
        updateUser(name, signature, avatar) {
            this.name = name;
            this.signature = signature;
            this.avatar = avatar;
        },
    },
    unistorage: true, // 开启后对 state 的数据读写都将持久化
});
