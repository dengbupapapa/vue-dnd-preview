/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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

;// CONCATENATED MODULE: external "vue"
var external_vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: external "vue3-dnd"
var external_vue3_dnd_namespaceObject = require("vue3-dnd");
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/dnd-preview/dnd-preview.vue?vue&type=script&setup=true&lang=js


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
    let collectedProps = (0,external_vue3_dnd_namespaceObject.useDragLayer)(monitor => ({
      isDragging: monitor.isDragging(),
      sourceClientOffset: monitor.getSourceClientOffset()
    }));
    return (_ctx, _cache) => {
      return (0,external_vue_namespaceObject.unref)(collectedProps).isDragging ? ((0,external_vue_namespaceObject.openBlock)(), (0,external_vue_namespaceObject.createBlock)(external_vue_namespaceObject.Teleport, {
        key: 0,
        to: "body"
      }, [(0,external_vue_namespaceObject.createElementVNode)("div", {
        style: (0,external_vue_namespaceObject.normalizeStyle)({
          position: 'fixed',
          pointerEvents: 'none',
          left: (0,external_vue_namespaceObject.unref)(collectedProps).sourceClientOffset?.x + 'px',
          top: (0,external_vue_namespaceObject.unref)(collectedProps).sourceClientOffset?.y + 'px',
          zIndex: __props.zIndex
        })
      }, [(0,external_vue_namespaceObject.renderSlot)(_ctx.$slots, "default")], 4)])) : (0,external_vue_namespaceObject.createCommentVNode)("", true);
    };
  }
});
;// CONCATENATED MODULE: ./src/dnd-preview/dnd-preview.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./src/dnd-preview/dnd-preview.vue



const __exports__ = dnd_previewvue_type_script_setup_true_lang_js;

/* harmony default export */ var dnd_preview = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (dnd_preview);


module.exports = __webpack_exports__["default"];
/******/ })()
;
//# sourceMappingURL=vue-dnd-preview.common.js.map