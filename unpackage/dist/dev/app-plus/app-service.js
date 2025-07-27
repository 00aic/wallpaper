if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _imports_0 = "/assets/banner1.a7a3b276.jpg";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {};
  function _sfc_render$2(_ctx, _cache) {
    const _component_uni_icons = vue.resolveComponent("uni-icons");
    return vue.openBlock(), vue.createElementBlock("view", { class: "home" }, [
      vue.createElementVNode("view", { class: "banner" }, [
        vue.createElementVNode("swiper", {
          circular: "",
          "indicator-dots": "",
          autoplay: "",
          "indicator-color": "rgba(255,255,255,0.5)",
          "indicator-active-color": "#fff"
        }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(3, (item) => {
              return vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("image", {
                  src: _imports_0,
                  mode: "aspectFill"
                })
              ]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]),
      vue.createElementVNode("view", { class: "bulletin" }, [
        vue.createElementVNode("view", { class: "title" }, [
          vue.createVNode(_component_uni_icons, {
            type: "sound",
            size: "30"
          }),
          vue.createElementVNode("text", null, "公告")
        ]),
        vue.createElementVNode("swiper", {
          circular: "",
          autoplay: ""
        }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(3, (item) => {
              return vue.createElementVNode("swiper-item", null, " aaaaaaaaaaaa ");
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-1cf27b2a"], ["__file", "F:/Development/code/uni-app/wallpaper/pages/index/index.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "" });
  }
  const PagesClassifyClassify = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "F:/Development/code/uni-app/wallpaper/pages/classify/classify.vue"]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "" });
  }
  const PagesUserUser = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "F:/Development/code/uni-app/wallpaper/pages/user/user.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/classify/classify", PagesClassifyClassify);
  __definePage("pages/user/user", PagesUserUser);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/Development/code/uni-app/wallpaper/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
