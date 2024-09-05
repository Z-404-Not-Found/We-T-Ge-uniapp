"use strict";
const uni_modules_uviewPlus_libs_luchRequest_utils = require("../utils.js");
const mergeKeys = (keys, globalsConfig, config2) => {
  const config = {};
  keys.forEach((prop) => {
    if (!uni_modules_uviewPlus_libs_luchRequest_utils.isUndefined(config2[prop])) {
      config[prop] = config2[prop];
    } else if (!uni_modules_uviewPlus_libs_luchRequest_utils.isUndefined(globalsConfig[prop])) {
      config[prop] = globalsConfig[prop];
    }
  });
  return config;
};
const mergeConfig = (globalsConfig, config2 = {}) => {
  const method = config2.method || globalsConfig.method || "GET";
  let config = {
    baseURL: globalsConfig.baseURL || "",
    method,
    url: config2.url || "",
    params: config2.params || {},
    custom: { ...globalsConfig.custom || {}, ...config2.custom || {} },
    header: uni_modules_uviewPlus_libs_luchRequest_utils.deepMerge(globalsConfig.header || {}, config2.header || {})
  };
  const defaultToConfig2Keys = ["getTask", "validateStatus"];
  config = { ...config, ...mergeKeys(defaultToConfig2Keys, globalsConfig, config2) };
  if (method === "DOWNLOAD")
    ;
  else if (method === "UPLOAD") {
    delete config.header["content-type"];
    delete config.header["Content-Type"];
    const uploadKeys = [
      "filePath",
      "name",
      "formData"
    ];
    uploadKeys.forEach((prop) => {
      if (!uni_modules_uviewPlus_libs_luchRequest_utils.isUndefined(config2[prop])) {
        config[prop] = config2[prop];
      }
    });
  } else {
    const defaultsKeys = [
      "data",
      "timeout",
      "dataType",
      "responseType"
    ];
    config = { ...config, ...mergeKeys(defaultsKeys, globalsConfig, config2) };
  }
  return config;
};
exports.mergeConfig = mergeConfig;
