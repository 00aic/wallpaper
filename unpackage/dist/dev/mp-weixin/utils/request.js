"use strict";
const common_vendor = require("../common/vendor.js");
const baseURL = "https://tea.qingnian8.com/api/bizhi";
function request(config = { url: "" }) {
  let { url, data = {}, header = {}, method = "GET" } = config;
  header["access-key"] = "abc123";
  url = baseURL + url;
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url,
      data,
      header,
      method,
      success: (res) => {
        const data2 = res.data;
        if (data2.errCode === 0) {
          resolve(data2);
        } else if (data2.errCode === 400) {
          common_vendor.index.showModal({
            title: "错误提示",
            content: data2.errMsg,
            showCancel: false
          });
          reject(data2);
        } else {
          common_vendor.index.showToast({
            title: data2.errMsg,
            icon: "none"
          });
          reject(data2);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}
exports.request = request;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/request.js.map
