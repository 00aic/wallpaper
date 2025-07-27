"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const infoPopup = common_vendor.ref(null);
    const ratePopup = common_vendor.ref(null);
    const isShowMask = common_vendor.ref(true);
    const score = common_vendor.ref(3);
    const showMask = () => {
      isShowMask.value = !isShowMask.value;
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const openInfoPopup = () => {
      infoPopup.value.open();
    };
    const closeInfoPopup = () => {
      infoPopup.value.close();
    };
    const openRatePopup = () => {
      ratePopup.value.open();
    };
    const closeRatePopup = () => {
      ratePopup.value.close();
    };
    const submitScore = () => {
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:154", "评分了");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(3, (item, k0, i0) => {
          return {
            a: item,
            b: common_vendor.o(showMask, item)
          };
        }),
        b: common_assets._imports_0$3,
        c: isShowMask.value
      }, isShowMask.value ? {
        d: common_vendor.p({
          type: "back",
          size: "20",
          color: "#fff"
        }),
        e: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        f: common_vendor.o(goBack),
        g: common_vendor.p({
          date: Date.now(),
          format: "hh:mm"
        }),
        h: common_vendor.p({
          date: Date.now(),
          format: "MM月dd日"
        }),
        i: common_vendor.p({
          type: "info",
          size: "20"
        }),
        j: common_vendor.o(openInfoPopup),
        k: common_vendor.p({
          type: "star",
          size: "20"
        }),
        l: common_vendor.o(openRatePopup),
        m: common_vendor.p({
          type: "download",
          size: "20"
        }),
        n: common_vendor.p({
          type: "closeempty",
          size: "15"
        }),
        o: common_vendor.o(closeInfoPopup),
        p: common_vendor.p({
          readonly: true,
          value: 2
        }),
        q: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        r: common_vendor.p({
          type: "bottom"
        }),
        s: common_vendor.p({
          type: "closeempty",
          size: "15"
        }),
        t: common_vendor.o(closeRatePopup),
        v: common_vendor.o(($event) => score.value = $event),
        w: common_vendor.p({
          allowHalf: true,
          modelValue: score.value
        }),
        x: common_vendor.t(score.value),
        y: common_vendor.o(submitScore),
        z: !score.value,
        A: common_vendor.sr(ratePopup, "2dad6c07-9", {
          "k": "ratePopup"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map
