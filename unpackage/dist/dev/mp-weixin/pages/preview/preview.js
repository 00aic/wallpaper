"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_api = require("../../api/api.js");
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
    const score = common_vendor.ref(0);
    const currentIndex = common_vendor.ref();
    const currentId = common_vendor.ref();
    const classList = common_vendor.ref([]);
    const readImgs = common_vendor.ref([]);
    const currentInfo = common_vendor.ref(null);
    const isScore = common_vendor.ref(false);
    const storgClassList = common_vendor.index.getStorageSync("storgClassList") || [];
    classList.value = storgClassList.map((item) => {
      return {
        ...item,
        picurl: item.smallPicurl.replace("_small.webp", ".jpg")
      };
    });
    const readImgsFun = () => {
      readImgs.value.push(
        currentIndex.value <= 0 ? classList.value.length - 1 : currentIndex.value - 1,
        currentIndex.value,
        currentIndex.value >= classList.value.length - 1 ? 0 : currentIndex.value + 1
      ), readImgs.value = [...new Set(readImgs.value)];
    };
    common_vendor.onLoad(async (e) => {
      currentId.value = e.id;
      if (e.type === "share") {
        const res = await api_api.apiDetailWall({
          id: currentId.value
        });
        classList.value = res.data.map((item) => {
          return {
            ...item,
            picurl: item.smallPicurl.replace("_small.webp", ".jpg")
          };
        });
      }
      currentIndex.value = classList.value.findIndex((item) => item._id === currentId.value);
      currentInfo.value = classList.value[currentIndex.value];
      readImgsFun();
    });
    const swiperChange = (e) => {
      currentIndex.value = e.detail.current;
      currentInfo.value = classList.value[currentIndex.value];
      readImgsFun();
    };
    const showMask = () => {
      isShowMask.value = !isShowMask.value;
    };
    const goBack = async () => {
      try {
        const res = await common_vendor.index.navigateBack();
      } catch {
        common_vendor.index.reLaunch({
          url: "/pages/index/index"
        });
      }
    };
    const openInfoPopup = () => {
      infoPopup.value.open();
    };
    const closeInfoPopup = () => {
      infoPopup.value.close();
    };
    const openRatePopup = () => {
      if (currentInfo.value.userScore) {
        isScore.value = true;
        score.value = currentInfo.value.userScore;
      }
      ratePopup.value.open();
    };
    const closeRatePopup = () => {
      ratePopup.value.close();
      score.value = 0;
      isScore.value = false;
    };
    const submitScore = async () => {
      common_vendor.index.showLoading({
        title: "加载中..."
      });
      const {
        classid,
        _id: wallId
      } = currentInfo.value;
      const res = await api_api.apiGetSetupScore({
        classid,
        wallId,
        userScore: score.value
      });
      common_vendor.index.hideLoading();
      if (res.errCode === 0) {
        common_vendor.index.showToast({
          title: "评分成功",
          icon: "none"
        });
        classList.value[currentIndex.value].userScore = score.value;
        common_vendor.index.setStorageSync("storgClassList", classList.value);
        closeRatePopup();
      }
    };
    const clickDownload = async () => {
      try {
        common_vendor.index.__f__("log", "at pages/preview/preview.vue:245", "9999");
        common_vendor.index.showLoading({
          title: "下载中...",
          mask: true
        });
        common_vendor.index.__f__("log", "at pages/preview/preview.vue:250", "ddd");
        const {
          classid,
          _id: wallId
        } = currentInfo.value;
        const res = await api_api.apiWriteDownload({
          classid,
          wallId
        });
        if (res.errCode != 0)
          throw res;
        const imageInfo = await common_vendor.index.getImageInfo({
          src: currentInfo.value.picurl
        });
        try {
          const saveImageResult = await common_vendor.index.saveImageToPhotosAlbum({
            filePath: imageInfo.path
          });
          common_vendor.index.showToast({
            title: "保存成功，请到相册查看",
            icon: "none"
          });
        } catch (err) {
          if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
            common_vendor.index.showToast({
              title: "保存失败，请重新点击下载",
              icon: "none"
            });
            return;
          }
          const authRes = await common_vendor.index.showModal({
            title: "授权提示",
            content: "需要授权保存相册"
          });
          if (authRes.confirm) {
            const setting = await common_vendor.index.openSetting();
            if (setting.authSetting["scope.writePhotosAlbum"]) {
              common_vendor.index.showToast({
                title: "获取授权成功",
                icon: "none"
              });
            } else {
              common_vendor.index.showToast({
                title: "获取权限失败",
                icon: "none"
              });
            }
          }
        } finally {
          common_vendor.index.hideLoading();
        }
      } catch (err) {
        common_vendor.index.hideLoading();
      }
    };
    common_vendor.onShareAppMessage((e) => {
      return {
        title: "咸虾米壁纸",
        path: `/pages/preview/preview?id=${currentId.value}&type=share`
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "咸虾米壁纸",
        query: `id=${currentId.value}&type=share`
      };
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g;
      return common_vendor.e({
        a: currentInfo.value
      }, currentInfo.value ? common_vendor.e({
        b: common_vendor.f(classList.value, (item, index, i0) => {
          return common_vendor.e({
            a: readImgs.value.includes(index)
          }, readImgs.value.includes(index) ? {
            b: item.picurl
          } : {}, {
            c: item._id,
            d: common_vendor.o(showMask, item._id)
          });
        }),
        c: currentIndex.value,
        d: common_vendor.o(swiperChange),
        e: isShowMask.value
      }, isShowMask.value ? {
        f: common_vendor.p({
          type: "back",
          size: "20",
          color: "#fff"
        }),
        g: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        h: common_vendor.o(goBack),
        i: common_vendor.t(currentIndex.value + 1),
        j: common_vendor.t(classList.value.length),
        k: common_vendor.p({
          date: Date.now(),
          format: "hh:mm"
        }),
        l: common_vendor.p({
          date: Date.now(),
          format: "MM月dd日"
        }),
        m: common_vendor.p({
          type: "info",
          size: "20"
        }),
        n: common_vendor.o(openInfoPopup),
        o: common_vendor.p({
          type: "star",
          size: "20"
        }),
        p: common_vendor.t((_a = currentInfo.value) == null ? void 0 : _a.score),
        q: common_vendor.o(openRatePopup),
        r: common_vendor.p({
          type: "download",
          size: "20"
        }),
        s: common_vendor.o(clickDownload),
        t: common_vendor.p({
          type: "closeempty",
          size: "15"
        }),
        v: common_vendor.o(closeInfoPopup),
        w: common_vendor.t((_b = currentInfo.value) == null ? void 0 : _b._id),
        x: common_vendor.t((_c = currentInfo.value) == null ? void 0 : _c.nickname),
        y: common_vendor.p({
          readonly: true,
          value: (_d = currentInfo.value) == null ? void 0 : _d.score
        }),
        z: common_vendor.t((_e = currentInfo.value) == null ? void 0 : _e.score),
        A: common_vendor.f((_f = currentInfo.value) == null ? void 0 : _f.tabs, (tab, k0, i0) => {
          return {
            a: common_vendor.t(tab),
            b: tab
          };
        }),
        B: common_vendor.t((_g = currentInfo.value) == null ? void 0 : _g.description),
        C: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        D: common_vendor.p({
          type: "bottom"
        }),
        E: common_vendor.t(isScore.value ? "评分过了~" : "壁纸评分"),
        F: common_vendor.p({
          type: "closeempty",
          size: "15"
        }),
        G: common_vendor.o(closeRatePopup),
        H: common_vendor.o(($event) => score.value = $event),
        I: common_vendor.p({
          allowHalf: true,
          disabled: isScore.value,
          ["disabled-color"]: "#FFCA3E",
          modelValue: score.value
        }),
        J: common_vendor.t(score.value),
        K: common_vendor.o(submitScore),
        L: !score.value || isScore.value,
        M: common_vendor.sr(ratePopup, "2dad6c07-9", {
          "k": "ratePopup"
        })
      } : {}) : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map
