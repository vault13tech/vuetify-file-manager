(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuetify-file-manager"] = factory();
	else
		root["vuetify-file-manager"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1687":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Folders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dae6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Folders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Folders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Folders_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2083":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileView_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f04c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileView_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileView_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileView_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5ed8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f2b8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9da9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileView_vue_vue_type_style_index_0_id_335f5621_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fac0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileView_vue_vue_type_style_index_0_id_335f5621_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileView_vue_vue_type_style_index_0_id_335f5621_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileView_vue_vue_type_style_index_0_id_335f5621_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a132":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dae6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f04c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f2b8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6b2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderCreate_vue_vue_type_style_index_0_id_5b553739_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a132");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderCreate_vue_vue_type_style_index_0_id_5b553739_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderCreate_vue_vue_type_style_index_0_id_5b553739_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderCreate_vue_vue_type_style_index_0_id_5b553739_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fac0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7f712198-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VuetifyFileManager.vue?vue&type=template&id=9868c6d0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"pa-0":"","ma-0":"","fill-height":""}},[_c('v-flex',{attrs:{"xs12":"","sm4":"","md3":"","xl2":""}},[_c('v-layout',{staticClass:"grey lighten-4",staticStyle:{"position":"relative"},attrs:{"column":"","fill-height":"","pa-3":""}},[_c('folders',{attrs:{"root-name":_vm.rootName,"folders":_vm.folders,"deleteFolder":_vm.deleteFolder,"hasDeleteOption":_vm.hasDeleteFolderOption},on:{"folderSelected":_vm.folderSelected}}),_c('folder-create',_vm._g({attrs:{"createFolder":_vm.createFolder,"folders":_vm.folders},on:{"folderCreated":_vm.callGetFolders}},_vm.$listeners))],1)],1),_c('v-divider',{attrs:{"vertical":""}}),_c('v-flex',{attrs:{"xs12":"","sm8":"","md9":"","xl10":""}},[_c('v-layout',{attrs:{"column":"","fill-height":"","pa-3":""}},[_c('folder-view',_vm._g({attrs:{"files":_vm.files,"deleteImage":_vm.deleteImage,"hasDeleteOption":_vm.hasDeleteImageOption}},_vm.$listeners))],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/VuetifyFileManager.vue?vue&type=template&id=9868c6d0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7f712198-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/FileManager/FolderCreate.vue?vue&type=template&id=5b553739&scoped=true&
var FolderCreatevue_type_template_id_5b553739_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"folder-create-wrapper"},[_c('v-tooltip',{attrs:{"left":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('v-btn',_vm._g({staticClass:"createFolderBtn",attrs:{"absolute":"","dark":"","fab":"","bottom":"","right":"","small":"","color":"accent"},on:{"click":function($event){_vm.dialog = true}}},on),[_c('v-icon',[_vm._v("fa-plus")])],1)]}}])},[_vm._v(" "+_vm._s(_vm.$vuetify.lang.t('$vuetify.fileManager.folder.create'))+" ")]),_c('v-dialog',{attrs:{"width":"300px"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-card-title',[_vm._v(_vm._s(_vm.$vuetify.lang.t('$vuetify.fileManager.folder.create')))]),_c('v-card-text',[_c('v-text-field',{attrs:{"label":_vm.$vuetify.lang.t('$vuetify.fileManager.name'),"hint":_vm.$vuetify.lang.t('$vuetify.fileManager.folder.create')},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_c('v-select',{attrs:{"items":_vm.foldersWithWebsiteParent,"label":_vm.$vuetify.lang.t('$vuetify.fileManager.folder.upperFolder'),"item-text":"name","item-value":"id"},model:{value:(_vm.parent),callback:function ($$v) {_vm.parent=$$v},expression:"parent"}})],1),_c('v-card-actions',[_c('v-spacer'),_c('v-btn',{attrs:{"flat":"","color":"accent"},on:{"click":_vm.callCreateFolder}},[_vm._v(_vm._s(_vm.$vuetify.lang.t('$vuetify.fileManager.folder.upperFolder')))])],1)],1)],1)],1)}
var FolderCreatevue_type_template_id_5b553739_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/FileManager/FolderCreate.vue?vue&type=template&id=5b553739&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/FileManager/FolderCreate.vue?vue&type=script&lang=js&
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

/* harmony default export */ var FolderCreatevue_type_script_lang_js_ = ({
    name: 'FolderCreate',
    props: {
        folders: {
            required: true,
            type: Array,
        },
        createFolder: {
            required: true,
            type: Function,
        },
    },
    data() {
        return {
            dialog: false,
            name: '',
            parent: null,
        };
    },
    computed: {
        foldersWithWebsiteParent() {
            return [...this.folders, {name: 'Website', id: null}];
        },
    },
    methods: {
        callCreateFolder() {
            this.createFolder(this.name, this.parent).then(() => {
                this.dialog = false;
                this.$emit('folderCreated');
                this.name = null;
                this.parent = null;
            });
        },
    },
});

// CONCATENATED MODULE: ./src/FileManager/FolderCreate.vue?vue&type=script&lang=js&
 /* harmony default export */ var FileManager_FolderCreatevue_type_script_lang_js_ = (FolderCreatevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/FileManager/FolderCreate.vue?vue&type=style&index=0&id=5b553739&scoped=true&lang=css&
var FolderCreatevue_type_style_index_0_id_5b553739_scoped_true_lang_css_ = __webpack_require__("f6b2");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/FileManager/FolderCreate.vue






/* normalize component */

var component = normalizeComponent(
  FileManager_FolderCreatevue_type_script_lang_js_,
  FolderCreatevue_type_template_id_5b553739_scoped_true_render,
  FolderCreatevue_type_template_id_5b553739_scoped_true_staticRenderFns,
  false,
  null,
  "5b553739",
  null
  
)

/* harmony default export */ var FolderCreate = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7f712198-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/FileManager/Folders.vue?vue&type=template&id=e4549866&
var Foldersvue_type_template_id_e4549866_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-treeview',{attrs:{"active":_vm.active,"open":_vm.open,"items":_vm.folderItems,"activatable":""},on:{"update:active":function($event){_vm.active=$event},"update:open":function($event){_vm.open=$event}},scopedSlots:_vm._u([{key:"prepend",fn:function(ref){
var item = ref.item;
var open = ref.open;
return [_c('v-icon',{on:{"contextmenu":function($event){return _vm.showContextMenu($event,item)}}},[_vm._v(" "+_vm._s(open ? 'fa-folder-open' : 'fa-folder')+" ")])]}},{key:"label",fn:function(ref){
var item = ref.item;
return [_c('div',{on:{"contextmenu":function($event){return _vm.showContextMenu($event, item)}}},[_vm._v(" "+_vm._s(item.name)+" ")])]}}])}),_c('context-menu',{ref:"contextMenu",on:{"showDeleteDialog":_vm.showDeleteDialog}}),_c('delete-dialog',{ref:"deleteDialog",on:{"deleted":_vm.deleteFolder}})],1)}
var Foldersvue_type_template_id_e4549866_staticRenderFns = []


// CONCATENATED MODULE: ./src/FileManager/Folders.vue?vue&type=template&id=e4549866&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7f712198-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/FileManager/DeleteDialog.vue?vue&type=template&id=f3a16b4a&scoped=true&
var DeleteDialogvue_type_template_id_f3a16b4a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-dialog',{attrs:{"max-width":"290"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$vuetify.lang.t('$vuetify.fileManager.confirmation_delete'))+" ")]),_c('v-card-text',[_vm._v(" "+_vm._s(_vm.$vuetify.lang.t('$vuetify.fileManager.image.delete.warning'))+" ")]),_c('v-card-actions',[_c('v-btn',{attrs:{"color":"grey darken-1","text":"","flat":""},on:{"click":function($event){_vm.dialog = false}}},[_vm._v(" "+_vm._s(_vm.$vuetify.lang.t('$vuetify.cancel'))+" ")]),_c('v-spacer'),_c('v-btn',{attrs:{"color":"priamry darken-1","text":"","flat":""},on:{"click":_vm.deleteItem}},[_vm._v(" "+_vm._s(_vm.$vuetify.lang.t('$vuetify.delete'))+" ")])],1)],1)],1)}
var DeleteDialogvue_type_template_id_f3a16b4a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/FileManager/DeleteDialog.vue?vue&type=template&id=f3a16b4a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/FileManager/DeleteDialog.vue?vue&type=script&lang=js&
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

/* harmony default export */ var DeleteDialogvue_type_script_lang_js_ = ({
    name: 'DeleteDialog',
    data: () => {
        return {
            dialog: false,
            item: null,
        };
    },
    methods: {
        deleteItem() {
            this.dialog = false;
            this.$emit('deleted', this.item);
        },
        show(item) {
            this.item = item;
            this.dialog = true;
        },
    },
});

// CONCATENATED MODULE: ./src/FileManager/DeleteDialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var FileManager_DeleteDialogvue_type_script_lang_js_ = (DeleteDialogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/FileManager/DeleteDialog.vue





/* normalize component */

var DeleteDialog_component = normalizeComponent(
  FileManager_DeleteDialogvue_type_script_lang_js_,
  DeleteDialogvue_type_template_id_f3a16b4a_scoped_true_render,
  DeleteDialogvue_type_template_id_f3a16b4a_scoped_true_staticRenderFns,
  false,
  null,
  "f3a16b4a",
  null
  
)

/* harmony default export */ var DeleteDialog = (DeleteDialog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7f712198-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/FileManager/ContextMenu.vue?vue&type=template&id=ce15df6e&
var ContextMenuvue_type_template_id_ce15df6e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-menu',{attrs:{"position-x":_vm.x,"position-y":_vm.y,"absolute":"","offset-y":""},model:{value:(_vm.showMenu),callback:function ($$v) {_vm.showMenu=$$v},expression:"showMenu"}},[_c('v-list',{staticClass:"clickable"},[_c('v-list-tile',[_c('v-list-tile-title',{on:{"click":function($event){return _vm.$emit('showDeleteDialog', _vm.item)}}},[_c('v-icon',{staticClass:"red--text"},[_vm._v("far fa-trash-alt")]),_vm._v(" "+_vm._s(_vm.item ? _vm.item.name : '')+" "+_vm._s(_vm.$vuetify.lang.t('$vuetify.delete'))+" ")],1)],1)],1)],1)],1)}
var ContextMenuvue_type_template_id_ce15df6e_staticRenderFns = []


// CONCATENATED MODULE: ./src/FileManager/ContextMenu.vue?vue&type=template&id=ce15df6e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/FileManager/ContextMenu.vue?vue&type=script&lang=js&
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

/* harmony default export */ var ContextMenuvue_type_script_lang_js_ = ({
    name: 'ContextMenu',
    data: () => ({
        showMenu: false,
        x: 0,
        y: 0,
        item: null,
    }),
    methods: {
        show(e, item) {
            e.preventDefault();
            this.showMenu = false;
            this.item = item;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true;
            });
        },
    },
});

// CONCATENATED MODULE: ./src/FileManager/ContextMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var FileManager_ContextMenuvue_type_script_lang_js_ = (ContextMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/FileManager/ContextMenu.vue?vue&type=style&index=0&lang=css&
var ContextMenuvue_type_style_index_0_lang_css_ = __webpack_require__("5ed8");

// CONCATENATED MODULE: ./src/FileManager/ContextMenu.vue






/* normalize component */

var ContextMenu_component = normalizeComponent(
  FileManager_ContextMenuvue_type_script_lang_js_,
  ContextMenuvue_type_template_id_ce15df6e_render,
  ContextMenuvue_type_template_id_ce15df6e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ContextMenu = (ContextMenu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/FileManager/Folders.vue?vue&type=script&lang=js&
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




/* harmony default export */ var Foldersvue_type_script_lang_js_ = ({
    name: 'folders',
    components: {DeleteDialog: DeleteDialog, ContextMenu: ContextMenu},
    data() {
        return {
            active: [],
            open: [],
            folderItems: [],
        };
    },
    watch: {
        folders: {
            immediate: true,
            deep: true,
            handler() {
                this.folderItems = [{name: this.rootName, id: 'root', children: this.folders}];
                this.open = ['root'];
            },
        },
        active: {
            deep: true,
            handler(newActive, oldActive) {
                let active = newActive[0];
                if (typeof active === 'undefined') {
                    active = oldActive[0];
                }
                this.$emit('folderSelected', active);
            },
        },
    },
    props: {
        folders: {
            required: true,
            type: Array,
        },
        rootName: {
            required: false,
            type: String,
            default: 'Website',
        },
        deleteFolder: {
            required: false,
            type: Function,
            default: () => {}
        },
        hasDeleteOption: {
            required: false,
            type: Boolean,
            default: false,
        }
    },
    methods: {
        showContextMenu(e, item) {
            e.preventDefault();

            if (this.hasDeleteOption) {
                this.$refs.contextMenu.show(e, item);
            }
        },
        showDeleteDialog(item) {
            this.$refs.deleteDialog.show(item);
        },
    },
});

// CONCATENATED MODULE: ./src/FileManager/Folders.vue?vue&type=script&lang=js&
 /* harmony default export */ var FileManager_Foldersvue_type_script_lang_js_ = (Foldersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/FileManager/Folders.vue?vue&type=style&index=0&lang=css&
var Foldersvue_type_style_index_0_lang_css_ = __webpack_require__("1687");

// CONCATENATED MODULE: ./src/FileManager/Folders.vue






/* normalize component */

var Folders_component = normalizeComponent(
  FileManager_Foldersvue_type_script_lang_js_,
  Foldersvue_type_template_id_e4549866_render,
  Foldersvue_type_template_id_e4549866_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Folders = (Folders_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7f712198-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/FileManager/FolderView.vue?vue&type=template&id=1b2183e8&scoped=true&
var FolderViewvue_type_template_id_1b2183e8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"grid-list-md":"","fluid":"","id":"drop-area"},on:{"drop":function($event){$event.preventDefault();return _vm.handleDrop($event)},"dragover":function($event){$event.preventDefault();}}},[(_vm.files.length > 0)?_c('v-layout',{attrs:{"row":"","wrap":""}},_vm._l((_vm.files),function(file){return _c('file-view',_vm._g({attrs:{"isRemovable":_vm.hasDeleteOption,"file":file},on:{"showDeleteDialog":_vm.showDeleteDialog}},_vm.$listeners))}),1):_c('div',{staticClass:"text-xs-center"},[_c('v-icon',{attrs:{"size":"150"}},[_vm._v("fa-search")]),_c('div',{staticClass:"mt-3 title"},[_vm._v(_vm._s(_vm.$vuetify.lang.t('$vuetify.fileManager.folder.empty')))])],1),_c('delete-dialog',{ref:"deleteDialog",on:{"deleted":_vm.deleteImage}})],1)}
var FolderViewvue_type_template_id_1b2183e8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/FileManager/FolderView.vue?vue&type=template&id=1b2183e8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7f712198-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/FileManager/FileView.vue?vue&type=template&id=335f5621&scoped=true&
var FileViewvue_type_template_id_335f5621_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-hover',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return _c('v-flex',{staticClass:"text-xs-center file",staticStyle:{"position":"relative"},attrs:{"xs4":"","md3":"","lg2":"","pa-3":""}},[_c('v-badge',{staticClass:"right px-2",staticStyle:{"width":"100%"},attrs:{"color":"transparant","transition":"scale-transition"},scopedSlots:_vm._u([{key:"badge",fn:function(){return [_c('v-speed-dial',{staticClass:"mr-4",attrs:{"openOnHover":"","direction":"bottom"},scopedSlots:_vm._u([{key:"activator",fn:function(){return [_c('v-btn',{attrs:{"color":"primary darken-2","dark":"","fab":"","small":""},model:{value:(_vm.fab),callback:function ($$v) {_vm.fab=$$v},expression:"fab"}},[_c('v-icon',[_vm._v("fa-ellipsis-v")]),_c('v-icon',[_vm._v("fa-times")])],1)]},proxy:true}],null,true),model:{value:(_vm.fab),callback:function ($$v) {_vm.fab=$$v},expression:"fab"}},[_c('v-btn',{attrs:{"fab":"","dark":"","small":"","color":"grey","x-small":""},on:{"click":function($event){return _vm.$emit('download', _vm.file)}}},[_c('v-icon',[_vm._v("fa-download")])],1),(_vm.isRemovable)?_c('v-btn',{attrs:{"fab":"","dark":"","small":"","color":"red","x-small":""},on:{"click":function($event){return _vm.$emit('showDeleteDialog', _vm.file)}}},[_c('v-icon',{on:{"click":function($event){}}},[_vm._v("fa-trash")])],1):_vm._e()],1)]},proxy:true}],null,true),model:{value:(hover),callback:function ($$v) {hover=$$v},expression:"hover"}},[(_vm.isImage)?_c('v-img',{staticClass:"mt-4",attrs:{"height":72,"src":((_vm.file.preview_path) + "?height=80")},on:{"click":function($event){return _vm.$emit('select', _vm.file)}}}):_c('v-icon',{staticClass:"mt-4",attrs:{"size":72,"color":"gray"},on:{"click":function($event){return _vm.$emit('select', _vm.file)}}},[_vm._v(" fal "+_vm._s(_vm.icon)+" ")]),_c('v-tooltip',{attrs:{"right":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('div',_vm._g({staticClass:"subheading text-truncate"},on),[_vm._v(_vm._s(_vm.file.name))])]}}],null,true)},[_vm._v(" "+_vm._s(_vm.file.name)+" ")])],1)],1)}}])})}
var FileViewvue_type_template_id_335f5621_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/FileManager/FileView.vue?vue&type=template&id=335f5621&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/FileManager/FileView.vue?vue&type=script&lang=js&
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
//



/* harmony default export */ var FileViewvue_type_script_lang_js_ = ({
    name: 'FileView',
    components: {ContextMenu: ContextMenu},
    props: {
        file: {
            required: true,
            type: Object,
        },
        isRemovable: {
            required: false,
            type: Boolean,
            default: false,
        },
    },
    data: () => {
        return {
            fab: false,
        };
    },
    computed: {
        isImage() {
            return this.file.mime_type && ['image/png', 'image/jpeg', 'image/jpg'].includes(this.file.mime_type);
        },
        icon() {
            let mimeType = this.file.mime_type;
            // List of official MIME Types: http://www.iana.org/assignments/media-types/media-types.xhtml
            let icon_classes = {
                // Media
                image: 'fa-file-image',
                audio: 'fa-file-audio',
                video: 'fa-file-video',

                // Documents
                'application/pdf': 'fa-file-pdf',
                'application/msword': 'fa-file-word',
                'application/vnd.ms-word': 'fa-file-word',
                'application/vnd.oasis.opendocument.text': 'fa-file-word',
                'application/vnd.openxmlformatsfficedocument.wordprocessingml': 'fa-file-word',
                'application/vnd.ms-excel': 'fa-file-excel',
                'application/vnd.openxmlformatsfficedocument.spreadsheetml': 'fa-file-excel',
                'application/vnd.oasis.opendocument.spreadsheet': 'fa-file-excel',
                'application/vnd.ms-powerpoint': 'fa-file-powerpoint',
                'application/vnd.openxmlformatsfficedocument.presentationml': 'fa-file-powerpoint',
                'application/vnd.oasis.opendocument.presentation': 'fa-file-powerpoint',
                'text/plain': 'fa-file-alt',
                'text/html': 'fa-file-code',
                'application/json': 'fa-file-code',

                // Archives
                'application/gzip': 'fa-file-archive',
                'application/zip': 'fa-file-archive',
            };

            for (let key in icon_classes) {
                if (icon_classes.hasOwnProperty(key)) {
                    if (mimeType.search(key) === 0) {
                        return icon_classes[key];
                    }
                } else {
                    return 'fa-file';
                }
            }
            return 'fa-file';
        },
    },
});

// CONCATENATED MODULE: ./src/FileManager/FileView.vue?vue&type=script&lang=js&
 /* harmony default export */ var FileManager_FileViewvue_type_script_lang_js_ = (FileViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/FileManager/FileView.vue?vue&type=style&index=0&id=335f5621&scoped=true&lang=css&
var FileViewvue_type_style_index_0_id_335f5621_scoped_true_lang_css_ = __webpack_require__("9da9");

// EXTERNAL MODULE: ./src/FileManager/FileView.vue?vue&type=style&index=1&lang=css&
var FileViewvue_type_style_index_1_lang_css_ = __webpack_require__("2083");

// CONCATENATED MODULE: ./src/FileManager/FileView.vue







/* normalize component */

var FileView_component = normalizeComponent(
  FileManager_FileViewvue_type_script_lang_js_,
  FileViewvue_type_template_id_335f5621_scoped_true_render,
  FileViewvue_type_template_id_335f5621_scoped_true_staticRenderFns,
  false,
  null,
  "335f5621",
  null
  
)

/* harmony default export */ var FileView = (FileView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/FileManager/FolderView.vue?vue&type=script&lang=js&
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





/* harmony default export */ var FolderViewvue_type_script_lang_js_ = ({
    name: 'FolderView',
    components: {DeleteDialog: DeleteDialog, FileView: FileView, ContextMenu: ContextMenu},
    props: {
        files: {
            required: true,
            type: Array,
        },
        deleteImage: {
            required: false,
            type: Function,
            default: () => {}
        },
        hasDeleteOption: {
            required: false,
            type: Boolean,
            default: false,
        }
    },
    methods: {
        handleDrop(e) {
            this.$emit('filesDropped', e.dataTransfer.files);
        },
        showDeleteDialog(item) {
            this.$refs.deleteDialog.show(item);
        },
    },
});

// CONCATENATED MODULE: ./src/FileManager/FolderView.vue?vue&type=script&lang=js&
 /* harmony default export */ var FileManager_FolderViewvue_type_script_lang_js_ = (FolderViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/FileManager/FolderView.vue





/* normalize component */

var FolderView_component = normalizeComponent(
  FileManager_FolderViewvue_type_script_lang_js_,
  FolderViewvue_type_template_id_1b2183e8_scoped_true_render,
  FolderViewvue_type_template_id_1b2183e8_scoped_true_staticRenderFns,
  false,
  null,
  "1b2183e8",
  null
  
)

/* harmony default export */ var FolderView = (FolderView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VuetifyFileManager.vue?vue&type=script&lang=js&
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





/* harmony default export */ var VuetifyFileManagervue_type_script_lang_js_ = ({
    name: 'vuetify-file-manager',
    components: {FolderCreate: FolderCreate, FolderView: FolderView, Folders: Folders},
    data() {
        return {
            files: [],
            folders: [],
        };
    },
    props: {
        getFolders: {
            required: true,
            type: Function,
        },
        /**
         * {
         *     id: 0,
         *     name: '',
         *     mime_type: '',
         *     download_path: '',
         *     preview_path: ''
         * }
         */
        getFolderContent: {
            required: true,
            type: Function,
        },
        rootName: {
            required: false,
            type: String,
            default: 'Website',
        },
        createFolder: {
            required: true,
            type: Function,
        },
        deleteFolder: {
            required: false,
            type: Function,
        },
        deleteImage: {
            required: false,
            type: Function,
        },
    },
    computed: {
        selectedFolder() {
            return this.folders ? this.folders[0].id : null;
        },
        hasDeleteFolderOption() {
            return typeof this.deleteFolder === 'function';
        },
        hasDeleteImageOption() {
            return typeof this.deleteImage === 'function';
        },
    },
    methods: {
        folderSelected(selectedFolderId) {
            this.getFolderContent(selectedFolderId).then((content) => {
                this.files = content;
            });
        },
        callGetFolders() {
            this.getFolders().then(folders => {
                this.folders = folders;
                this.folderSelected(folders[0].id);
            });
        },
        reloadFiles() {
            this.folderSelected(this.selectedFolder);
        },
        reloadDirectory() {
            this.callGetFolders();
        },
    },
    created() {
        this.callGetFolders();
    },
});

// CONCATENATED MODULE: ./src/VuetifyFileManager.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_VuetifyFileManagervue_type_script_lang_js_ = (VuetifyFileManagervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/VuetifyFileManager.vue





/* normalize component */

var VuetifyFileManager_component = normalizeComponent(
  src_VuetifyFileManagervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "9868c6d0",
  null
  
)

/* harmony default export */ var VuetifyFileManager = (VuetifyFileManager_component.exports);
// CONCATENATED MODULE: ./src/index.js


const src_VuetifyFileManager = {
    install(Vue, options) {
        Vue.component('vuetify-file-manager', VuetifyFileManager);

    },
};

/* harmony default export */ var src = (src_VuetifyFileManager);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
});
//# sourceMappingURL=vuetify-file-manager.umd.js.map