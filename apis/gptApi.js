import { request } from "@/utils/request.js";
import { token } from "../config";
export function chatApi(data = {}) {
    return request({
        url: "https://api.openai.com/v1/chat/completions",
        data,
        method: "POST",
        header: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
    });
}
