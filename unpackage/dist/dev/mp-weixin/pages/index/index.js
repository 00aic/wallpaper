"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_nav_bar2 = common_vendor.resolveComponent("nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_nav_bar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_theme_item2)();
}
const _easycom_nav_bar = () => "../../components/nav-bar/nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_nav_bar + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const banners = common_vendor.ref([]);
    const notices = common_vendor.ref([]);
    const dayRandoms = common_vendor.ref([]);
    const classifys = common_vendor.ref([]);
    const getBanners = async () => {
      banners.value = (await api_api.apiGetBanner()).data;
    };
    const getNotices = async () => {
      notices.value = (await api_api.apiGetNotice({
        select: true
      })).data;
    };
    const getDayRandoms = async () => {
      dayRandoms.value = (await api_api.apiGetDayRandom()).data;
    };
    const getClassify = async () => {
      classifys.value = (await api_api.apiGetClassify({
        select: true
      })).data;
    };
    getBanners();
    getNotices();
    getDayRandoms();
    getClassify();
    const goToPreview = (id) => {
      common_vendor.index.setStorageSync("storgClassList", dayRandoms.value);
      common_vendor.index.navigateTo({
        url: `/pages/preview/preview?id=${id}`
      });
    };
    common_vendor.onShareAppMessage((e) => {
      return {
        title: "咸虾米壁纸，好看的手机壁纸",
        path: "/pages/classify/classify"
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "咸虾米壁纸，好看的手机壁纸"
      };
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "推荐"
        }),
        b: common_vendor.f(banners.value, (item, k0, i0) => {
          return common_vendor.e({
            a: item.target === "miniProgram"
          }, item.target === "miniProgram" ? {
            b: item.picurl,
            c: item.url,
            d: item.appid
          } : {
            e: item.picurl,
            f: `/pages/categorized-list/categorized-list?${item.url}`
          }, {
            g: item._id
          });
        }),
        c: common_vendor.p({
          type: "sound",
          size: "20"
        }),
        d: common_vendor.f(notices.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: `/pages/notice/notice?id=${item._id}`,
            c: item._id
          };
        }),
        e: common_vendor.p({
          type: "forward",
          size: "20"
        }),
        f: common_vendor.p({
          type: "calendar",
          size: "15"
        }),
        g: common_vendor.p({
          date: Date.now(),
          format: "dd号"
        }),
        h: common_vendor.p({
          title: "每日推荐"
        }),
        i: common_vendor.f(dayRandoms.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: common_vendor.o(($event) => goToPreview(item._id), item._id),
            c: item._id
          };
        }),
        j: common_vendor.p({
          title: "专题精选"
        }),
        k: common_vendor.f(classifys.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "1cf27b2a-7-" + i0,
            c: common_vendor.p({
              data: item
            })
          };
        }),
        l: common_vendor.p({
          ["is-more"]: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
