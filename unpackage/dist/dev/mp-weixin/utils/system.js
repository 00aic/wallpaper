"use strict";
const common_vendor = require("../common/vendor.js");
const systemInfo = common_vendor.index.getSystemInfoSync();
const getStatusBarHeight = () => systemInfo.statusBarHeight;
const getTitleBarHeight = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    const { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
    return (top - getStatusBarHeight()) * 2 + height;
  } else {
    return 40;
  }
};
const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight();
exports.getNavBarHeight = getNavBarHeight;
exports.getStatusBarHeight = getStatusBarHeight;
exports.getTitleBarHeight = getTitleBarHeight;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/system.js.map
