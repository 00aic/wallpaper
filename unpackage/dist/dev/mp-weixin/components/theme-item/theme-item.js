"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_common = require("../../utils/common.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "theme-item",
  props: {
    isMore: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.isMore
      }, !__props.isMore ? common_vendor.e({
        b: __props.data.picurl,
        c: common_vendor.unref(utils_common.compareTimestamp)(__props.data.updateTime)
      }, common_vendor.unref(utils_common.compareTimestamp)(__props.data.updateTime) ? {
        d: common_vendor.t(common_vendor.unref(utils_common.compareTimestamp)(__props.data.updateTime))
      } : {}, {
        e: common_vendor.t(__props.data.name),
        f: `/pages/categorized-list/categorized-list?id=${__props.data._id}&name=${__props.data.name}`
      }) : {
        g: common_assets._imports_0$1,
        h: common_vendor.p({
          type: "more-filled",
          size: "34",
          color: "#fff"
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f4eafbca"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/theme-item/theme-item.js.map
