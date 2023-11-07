(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("vue3-dnd"));
	else if(typeof define === 'function' && define.amd)
		define(["vue", "vue3-dnd"], factory);
	else if(typeof exports === 'object')
		exports["vue-dnd-preview"] = factory(require("vue"), require("vue3-dnd"));
	else
		root["vue-dnd-preview"] = factory(root["vue"], root["vue3-dnd"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__748__, __WEBPACK_EXTERNAL_MODULE__347__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 748:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__748__;

/***/ }),

/***/ 347:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__347__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(748);
// EXTERNAL MODULE: external "vue3-dnd"
var external_vue3_dnd_ = __webpack_require__(347);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/dnd-preview/dnd-preview.vue?vue&type=script&setup=true&lang=js


/* harmony default export */ var dnd_previewvue_type_script_setup_true_lang_js = ({
  __name: 'dnd-preview',
  props: {
    zIndex: {
      type: Number,
      default: () => 9999999
    }
  },
  setup(__props) {
    /**
     * 获取容器
     */
    let collectedProps = (0,external_vue3_dnd_.useDragLayer)(monitor => ({
      isDragging: monitor.isDragging(),
      sourceClientOffset: monitor.getSourceClientOffset()
    }));
    return (_ctx, _cache) => {
      return (0,external_vue_.unref)(collectedProps).isDragging ? ((0,external_vue_.openBlock)(), (0,external_vue_.createBlock)(external_vue_.Teleport, {
        key: 0,
        to: "body"
      }, [(0,external_vue_.createElementVNode)("div", {
        style: (0,external_vue_.normalizeStyle)({
          position: 'fixed',
          pointerEvents: 'none',
          transform: `translate(${(0,external_vue_.unref)(collectedProps).sourceClientOffset?.x}px, ${(0,external_vue_.unref)(collectedProps).sourceClientOffset?.y}px)`,
          top: 0,
          left: 0,
          zIndex: __props.zIndex
        })
      }, [(0,external_vue_.renderSlot)(_ctx.$slots, "default", (0,external_vue_.normalizeProps)((0,external_vue_.guardReactiveProps)((0,external_vue_.unref)(collectedProps).sourceClientOffset)))], 4)])) : (0,external_vue_.createCommentVNode)("", true);
    };
  }
});
;// CONCATENATED MODULE: ./src/dnd-preview/dnd-preview.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./src/dnd-preview/dnd-preview.vue



const __exports__ = dnd_previewvue_type_script_setup_true_lang_js;

/* harmony default export */ var dnd_preview = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (dnd_preview);


}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-dnd-preview.umd.js.map