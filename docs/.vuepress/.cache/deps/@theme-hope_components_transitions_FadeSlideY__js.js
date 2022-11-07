import {
  useScrollPromise
} from "./chunk-TXAXCRWM.js";
import "./chunk-32U2KQQ6.js";
import "./chunk-OUJYUTZB.js";
import "./chunk-Q2LMSMYD.js";
import "./chunk-YACYAO4R.js";
import "./chunk-YSMALZZ5.js";
import {
  Transition,
  defineComponent,
  h
} from "./chunk-ACN7CFPX.js";
import "./chunk-WFBTEJUR.js";
import "./chunk-IKJM6GHQ.js";

// node_modules/vuepress-theme-hope/lib/client/components/transitions/FadeSlideY.js
import "E:/my_vuepress/vuepress-theme-hope-lnjknr/node_modules/vuepress-theme-hope/lib/client/styles/fade-slide-y.scss";
var FadeSlideY_default = defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const scrollPromise = useScrollPromise();
    const onBeforeEnter = scrollPromise.resolve;
    const onBeforeLeave = scrollPromise.pending;
    return () => h(Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a;
      return (_a = slots["default"]) == null ? void 0 : _a.call(slots);
    });
  }
});

// dep:@theme-hope_components_transitions_FadeSlideY__js
var theme_hope_components_transitions_FadeSlideY_js_default = FadeSlideY_default;
export {
  theme_hope_components_transitions_FadeSlideY_js_default as default
};
//# sourceMappingURL=@theme-hope_components_transitions_FadeSlideY__js.js.map
