import App from "./App";
import uviewPlus from "@/uni_modules/uview-plus";

// #ifndef VUE3
import Vue from "vue";
import "./uni.promisify.adaptor";
Vue.config.productionTip = false;
App.mpType = "app";
const app = new Vue({
    ...App,
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
import * as Pinia from "pinia";
import { createUnistorage } from "./uni_modules/pinia-plugin-unistorage";
export function createApp() {
    const app = createSSRApp(App);
    app.use(uviewPlus);
    const store = Pinia.createPinia();
    store.use(createUnistorage());
    app.use(store);
    return {
        app,
        Pinia,
    };
}
// #endif

export function rpxToPx(rpx) {
    let deviceWidth = wx.getSystemInfoSync().windowWidth; //获取设备屏幕宽度

    let px = (deviceWidth / 750) * Number(rpx);

    return Math.floor(px);
}

export function pxToRpx(px) {
    let deviceWidth = wx.getSystemInfoSync().windowWidth; //获取设备屏幕宽度

    let rpx = (750 / deviceWidth) * Number(px);

    return Math.floor(rpx);
}
