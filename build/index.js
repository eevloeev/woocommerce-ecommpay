/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers/registerPaymentMethodByName.tsx":
/*!*****************************************************!*\
  !*** ./src/helpers/registerPaymentMethodByName.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerPaymentMethodByName: () => (/* binding */ registerPaymentMethodByName)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  useEffect
} = window.wp.element;
const {
  getSetting
} = window.wc.wcSettings;
const {
  decodeEntities
} = window.wp.htmlEntities;
const {
  registerPaymentMethod
} = window.wc.wcBlocksRegistry;
const EcpLabel = props => {
  return props.children;
};
const EcpContent = props => {
  return props.children;
};
const registerPaymentMethodByName = name => {
  var _decodeEntities, _decodeEntities2;
  const data = getSetting(`${name}_data`, null);
  if (!data) {
    return;
  }
  const label = (_decodeEntities = decodeEntities(data.title)) !== null && _decodeEntities !== void 0 ? _decodeEntities : "";
  const description = (_decodeEntities2 = decodeEntities(data.description)) !== null && _decodeEntities2 !== void 0 ? _decodeEntities2 : "";
  const paymentMethod = {
    name: name,
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(EcpLabel, null, label),
    content: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(EcpContent, null, description),
    edit: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(EcpContent, null, description),
    canMakePayment: () => true,
    placeOrderButtonLabel: data.checkout_button_text,
    ariaLabel: label,
    supports: {
      features: data.supports
    }
  };
  registerPaymentMethod(paymentMethod);
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_registerPaymentMethodByName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/registerPaymentMethodByName */ "./src/helpers/registerPaymentMethodByName.tsx");

for (const gateway of window.ECP.gateways) {
  (0,_helpers_registerPaymentMethodByName__WEBPACK_IMPORTED_MODULE_0__.registerPaymentMethodByName)(gateway);
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map