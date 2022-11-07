import {
  PasswordModal_default,
  usePathEncrypt
} from "./chunk-B3AKI5IF.js";
import "./chunk-TF4HKU7C.js";
import "./chunk-TXAXCRWM.js";
import "./chunk-32U2KQQ6.js";
import "./chunk-OUJYUTZB.js";
import "./chunk-Q2LMSMYD.js";
import "./chunk-YACYAO4R.js";
import "./chunk-YSMALZZ5.js";
import {
  defineComponent,
  h
} from "./chunk-ACN7CFPX.js";
import "./chunk-WFBTEJUR.js";
import "./chunk-IKJM6GHQ.js";

// node_modules/vuepress-theme-hope/lib/client/modules/encrypt/components/LocalEncrypt.js
var LocalEncrypt_default = defineComponent({
  name: "LocalEncrypt",
  setup(_props, { slots }) {
    const { isEncrypted, validateToken } = usePathEncrypt();
    return () => {
      var _a;
      return isEncrypted.value ? h(PasswordModal_default, { full: true, onVerify: validateToken }) : ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || null;
    };
  }
});

// dep:@theme-hope_modules_encrypt_components_LocalEncrypt__js
var theme_hope_modules_encrypt_components_LocalEncrypt_js_default = LocalEncrypt_default;
export {
  theme_hope_modules_encrypt_components_LocalEncrypt_js_default as default
};
//# sourceMappingURL=@theme-hope_modules_encrypt_components_LocalEncrypt__js.js.map
