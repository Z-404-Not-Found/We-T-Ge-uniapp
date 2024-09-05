"use strict";
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
exports.isAbsoluteURL = isAbsoluteURL;
