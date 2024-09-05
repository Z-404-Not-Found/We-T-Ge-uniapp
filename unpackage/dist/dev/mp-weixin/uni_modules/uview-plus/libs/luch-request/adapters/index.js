"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_uviewPlus_libs_luchRequest_helpers_buildURL = require("../helpers/buildURL.js");
const uni_modules_uviewPlus_libs_luchRequest_core_buildFullPath = require("../core/buildFullPath.js");
const uni_modules_uviewPlus_libs_luchRequest_core_settle = require("../core/settle.js");
const uni_modules_uviewPlus_libs_luchRequest_utils = require("../utils.js");
const mergeKeys = (keys, config2) => {
  const config = {};
  keys.forEach((prop) => {
    if (!uni_modules_uviewPlus_libs_luchRequest_utils.isUndefined(config2[prop])) {
      config[prop] = config2[prop];
    }
  });
  return config;
};
const adapter = (config) => new Promise((resolve, reject) => {
  const fullPath = uni_modules_uviewPlus_libs_luchRequest_helpers_buildURL.buildURL(uni_modules_uviewPlus_libs_luchRequest_core_buildFullPath.buildFullPath(config.baseURL, config.url), config.params);
  const _config = {
    url: fullPath,
    header: config.header,
    complete: (response) => {
      config.fullPath = fullPath;
      response.config = config;
      try {
        if (typeof response.data === "string") {
          response.data = JSON.parse(response.data);
        }
      } catch (e) {
      }
      uni_modules_uviewPlus_libs_luchRequest_core_settle.settle(resolve, reject, response);
    }
  };
  let requestTask;
  if (config.method === "UPLOAD") {
    delete _config.header["content-type"];
    delete _config.header["Content-Type"];
    const otherConfig = {
      filePath: config.filePath,
      name: config.name
    };
    const optionalKeys = [
      "formData"
    ];
    requestTask = common_vendor.index.uploadFile({ ..._config, ...otherConfig, ...mergeKeys(optionalKeys, config) });
  } else if (config.method === "DOWNLOAD") {
    requestTask = common_vendor.index.downloadFile(_config);
  } else {
    const optionalKeys = [
      "data",
      "method",
      "timeout",
      "dataType",
      "responseType"
    ];
    requestTask = common_vendor.index.request({ ..._config, ...mergeKeys(optionalKeys, config) });
  }
  if (config.getTask) {
    config.getTask(requestTask, config);
  }
});
exports.adapter = adapter;
