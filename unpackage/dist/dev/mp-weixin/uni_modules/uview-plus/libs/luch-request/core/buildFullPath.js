"use strict";
const uni_modules_uviewPlus_libs_luchRequest_helpers_isAbsoluteURL = require("../helpers/isAbsoluteURL.js");
const uni_modules_uviewPlus_libs_luchRequest_helpers_combineURLs = require("../helpers/combineURLs.js");
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !uni_modules_uviewPlus_libs_luchRequest_helpers_isAbsoluteURL.isAbsoluteURL(requestedURL)) {
    return uni_modules_uviewPlus_libs_luchRequest_helpers_combineURLs.combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
exports.buildFullPath = buildFullPath;
