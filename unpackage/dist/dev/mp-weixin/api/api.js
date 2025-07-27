"use strict";
const utils_request = require("../utils/request.js");
function apiGetBanner() {
  return utils_request.request({ url: "/homeBanner" });
}
function apiGetNotice(data = {}) {
  return utils_request.request({
    url: "/wallNewsList",
    data
  });
}
exports.apiGetBanner = apiGetBanner;
exports.apiGetNotice = apiGetNotice;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/api.js.map
