"use strict";
const utils_request = require("../utils/request.js");
const config = require("../config.js");
function chatApi(data = {}) {
  return utils_request.request({
    url: "https://api.chatanywhere.tech/v1/chat/completions",
    data,
    method: "POST",
    header: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + config.token
    }
  });
}
exports.chatApi = chatApi;
