"use strict";
const common_vendor = require("../common/vendor.js");
function request(config = {}) {
  let {
    url,
    method = "GET",
    data = {},
    header = {}
  } = config;
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url,
      method,
      data,
      header,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}
exports.request = request;
