(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/news/news"],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/*!********************************************************************************!*\
  !*** D:/JuliusDeng_Study/uni-community/main.js?{"page":"pages%2Fnews%2Fnews"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _news = _interopRequireDefault(__webpack_require__(/*! ./pages/news/news.vue */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_news.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 18 */
/*!*************************************************************!*\
  !*** D:/JuliusDeng_Study/uni-community/pages/news/news.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _news_vue_vue_type_template_id_c454de34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.vue?vue&type=template&id=c454de34& */ 19);
/* harmony import */ var _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.vue?vue&type=script&lang=js& */ 21);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Softs-code/HBuilderX.2.7.11.20200602-alpha.full/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _news_vue_vue_type_template_id_c454de34___WEBPACK_IMPORTED_MODULE_0__["render"],
  _news_vue_vue_type_template_id_c454de34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _news_vue_vue_type_template_id_c454de34___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/news/news.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 19 */
/*!********************************************************************************************!*\
  !*** D:/JuliusDeng_Study/uni-community/pages/news/news.vue?vue&type=template&id=c454de34& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_c454de34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Softs-code/HBuilderX.2.7.11.20200602-alpha.full/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Softs-code/HBuilderX.2.7.11.20200602-alpha.full/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../Softs-code/HBuilderX.2.7.11.20200602-alpha.full/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Softs-code/HBuilderX.2.7.11.20200602-alpha.full/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../Softs-code/HBuilderX.2.7.11.20200602-alpha.full/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Softs-code/HBuilderX.2.7.11.20200602-alpha.full/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news.vue?vue&type=template&id=c454de34& */ 20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_c454de34___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_c454de34___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_c454de34___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_template_id_c454de34___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 20 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/JuliusDeng_Study/uni-community/pages/news/news.vue?vue&type=template&id=c454de34& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 21 */
/*!**************************************************************************************!*\
  !*** D:/JuliusDeng_Study/uni-community/pages/news/news.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Softs-code/HBuilderX.2.7.11.20200602-alpha.full/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Softs-code/HBuilderX.2.7.11.20200602-alpha.full/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Softs-code/HBuilderX.2.7.11.20200602-alpha.full/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Softs-code/HBuilderX.2.7.11.20200602-alpha.full/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../Softs-code/HBuilderX.2.7.11.20200602-alpha.full/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./news.vue?vue&type=script&lang=js& */ 22);
/* harmony import */ var _Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Softs_code_HBuilderX_2_7_11_20200602_alpha_full_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_news_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 22 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/JuliusDeng_Study/uni-community/pages/news/news.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var demo = [
{
  username: "昵称",
  userpic: "/static/default.jpg",
  newstime: "2019-10-20 下午04:30",
  isFollow: true,
  title: "我是标题1",
  titlepic: "/static/demo/datapic/11.jpg",
  support: {
    type: "",
    support_count: 1,
    unsupport_count: 2 },

  comment_count: 2,
  share_num: 2 },

{
  username: "昵称",
  userpic: "/static/default.jpg",
  newstime: "2019-10-20 下午04:30",
  isFollow: true,
  title: "我是标题2",
  titlepic: "",
  support: {
    type: "support",
    support_count: 2,
    unsupport_count: 3 },

  comment_count: 2,
  share_num: 2 },

{
  username: "昵称",
  userpic: "/static/default.jpg",
  newstime: "2019-10-20 下午04:30",
  isFollow: true,
  title: "我是标题3",
  titlepic: "/static/demo/datapic/11.jpg",
  support: {
    type: "unsupport",
    support_count: 1,
    unsupport_count: 2 },

  comment_count: 2,
  share_num: 2 }];var uniNavBar = function uniNavBar() {__webpack_require__.e(/*! require.ensure | components/uni-ui/uni-nav-bar/uni-nav-bar */ "components/uni-ui/uni-nav-bar/uni-nav-bar").then((function () {return resolve(__webpack_require__(/*! @/components/uni-ui/uni-nav-bar/uni-nav-bar.vue */ 83));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var commonList = function commonList() {__webpack_require__.e(/*! require.ensure | components/common/common-list */ "components/common/common-list").then((function () {return resolve(__webpack_require__(/*! @/components/common/common-list.vue */ 71));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var loadMore = function loadMore() {__webpack_require__.e(/*! require.ensure | components/common/load-more */ "components/common/load-more").then((function () {return resolve(__webpack_require__(/*! @/components/common/load-more.vue */ 78));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var hotCate = function hotCate() {__webpack_require__.e(/*! require.ensure | components/news/hot-cate */ "components/news/hot-cate").then((function () {return resolve(__webpack_require__(/*! @/components/news/hot-cate.vue */ 90));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var topicList = function topicList() {__webpack_require__.e(/*! require.ensure | components/news/topic-list */ "components/news/topic-list").then((function () {return resolve(__webpack_require__(/*! @/components/news/topic-list.vue */ 95));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =








{
  components: {
    uniNavBar: uniNavBar,
    commonList: commonList,
    loadMore: loadMore,
    hotCate: hotCate,
    topicList: topicList },

  data: function data() {
    return {
      scrollH: 500,
      tabIndex: 0,
      tabBars: [
      { name: '关注' },
      { name: '话题' }],

      // 关注列表
      list: [],
      // 1.上拉加载更多  2.加载中... 3.没有更多了
      loadmore: "上拉加载更多",
      // 热门分类
      hotCate: [
      { name: '关注' },
      { name: '推荐' },
      { name: '体育' },
      { name: '热点' },
      { name: '财经' },
      { name: '娱乐' }],

      // 话题列表
      topicList: [
      {
        cover: "/static/demo/topicpic/1.jpeg",
        title: '话题名称',
        desc: '话题描述',
        today_count: 1,
        news_count: 22 },

      {
        cover: "/static/demo/topicpic/1.jpeg",
        title: '话题名称',
        desc: '话题描述',
        today_count: 1,
        news_count: 22 },

      {
        cover: "/static/demo/topicpic/1.jpeg",
        title: '话题名称',
        desc: '话题描述',
        today_count: 1,
        news_count: 22 },

      {
        cover: "/static/demo/topicpic/1.jpeg",
        title: '话题名称',
        desc: '话题描述',
        today_count: 1,
        news_count: 22 }] };




  },
  onLoad: function onLoad() {var _this = this;
    uni.getSystemInfo({
      success: function success(res) {
        _this.scrollH = res.windowHeight - res.statusBarHeight - 44;
      } }),

    // 加载测试数据
    this.list = demo;
  },
  methods: {
    // 切换选项卡
    changeTab: function changeTab(index) {
      this.tabIndex = index;
    },
    // 右上角打开发布页
    openAddInput: function openAddInput() {
      uni.navigateTo({
        url: '../add-input/add-input' });

    },
    onChangeTab: function onChangeTab(e) {
      // console.log(e);
      this.tabIndex = e.detail.current;
    },
    // 顶踩操作
    doSupport: function doSupport(e) {
      // 拿到当前对象
      var item = this.list[e.index];
      var msg = e.type === 'support' ? '顶' : '踩';
      // 之前没有操作过
      if (item.support.type === '') {
        item.support[e.type + '_count']++;
      } else if (item.support.type === 'support' && e.type === 'unsupport') {
        // 顶 - 1
        item.support.support_count--;
        // 踩 + 1
        item.support.unsupport_count++;
      } else if (item.support.type === 'unsupport' && e.type === 'support') {// 之前踩了
        // 顶 + 1
        item.support.support_count++;
        // 踩 - 1
        item.support.unsupport_count--;
      }
      item.support.type = e.type;
      uni.showToast({ title: msg + '成功' });
    },
    loadmoreEvent: function loadmoreEvent() {var _this2 = this;
      if (this.loadmore !== '上拉加载更多') {
        return;
      }
      setTimeout(function () {
        _this2.loadmore = '加载中...';
        // 模拟请求数据
        setTimeout(function () {
          _this2.list = [].concat(_toConsumableArray(_this2.list), _toConsumableArray(_this2.list));
          _this2.loadmore = '上拉加载更多';
        }, 3000);
      }, 3000);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })
],[[17,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/news/news.js.map