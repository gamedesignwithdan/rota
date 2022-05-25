/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services/employees/index.ts":
/*!*****************************************!*\
  !*** ./src/services/employees/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEmployees = void 0;
// get employees 
var getEmployees = function () {
    return [
        'Andy',
        'Ben',
        'Carol',
        'Denise',
        'Eddie',
        'Francesca',
        'Geraint',
        'Helen',
        'Ivor',
        'Jacqueline'
    ];
};
exports.getEmployees = getEmployees;


/***/ }),

/***/ "./src/services/rota/createRota.ts":
/*!*****************************************!*\
  !*** ./src/services/rota/createRota.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createRota = void 0;
var fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
var IRota_1 = __webpack_require__(/*! ../../types/IRota */ "./src/types/IRota.ts");
var employees_1 = __webpack_require__(/*! ../employees */ "./src/services/employees/index.ts");
var createRotaObject = function () {
    var employees = (0, employees_1.getEmployees)();
    var counter = 0;
    var startDate = new Date();
    var endDate = new Date();
    endDate.setDate(endDate.getDate() + 14);
    var weeklyRota = IRota_1.weekdays.reduce(function (week, day) {
        var _a;
        var update = __assign(__assign({}, week), (_a = {}, _a[day] = {
            morning: employees[counter],
            afternoon: employees[counter + 1],
        }, _a));
        counter += 2;
        return update;
    }, {});
    return {
        startDate: startDate,
        endDate: endDate,
        week1: weeklyRota,
        week2: weeklyRota,
    };
};
var createRota = function () {
    fs_1.default.writeFileSync('src/services/rota/rota.json', JSON.stringify(createRotaObject()));
};
exports.createRota = createRota;


/***/ }),

/***/ "./src/services/rota/getRota.ts":
/*!**************************************!*\
  !*** ./src/services/rota/getRota.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rotaJSON = void 0;
var fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
var rotaJSON = function () { return JSON.parse(fs_1.default.readFileSync('src/services/rota/rota.json', 'utf8')); };
exports.rotaJSON = rotaJSON;


/***/ }),

/***/ "./src/services/rota/index.ts":
/*!************************************!*\
  !*** ./src/services/rota/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRota = exports.createRota = void 0;
var createRota_1 = __webpack_require__(/*! ./createRota */ "./src/services/rota/createRota.ts");
Object.defineProperty(exports, "createRota", ({ enumerable: true, get: function () { return createRota_1.createRota; } }));
var getRota_1 = __webpack_require__(/*! ./getRota */ "./src/services/rota/getRota.ts");
Object.defineProperty(exports, "getRota", ({ enumerable: true, get: function () { return getRota_1.rotaJSON; } }));
// npm i -D clean-webpack-plugin && 
// npm i -D copy-webpack-plugin && 
// npm i -D eslint && 
// npm i -D eslint-config-prettier && 
// npm i -D eslint-plugin-prettier && 
// npm i -D prettier && 
// npm i -D webpack && 
// npm i -D webpack-cli && 
// npm i -D webpack-node-externals && 
// npm i -D ts-jest && 
// npm i -D ts-loader && 
// npm i -D ts-node && 
// npm i -D @types/jest && 
// npm i -D @typescript-eslint/eslint-plugin && 
// npm i -D @typescript-eslint/parser 


/***/ }),

/***/ "./src/types/IRota.ts":
/*!****************************!*\
  !*** ./src/types/IRota.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.weekdays = void 0;
exports.weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

// cron job that updates rota json file
Object.defineProperty(exports, "__esModule", ({ value: true }));
var rota_1 = __webpack_require__(/*! ./services/rota */ "./src/services/rota/index.ts");
(0, rota_1.createRota)();
console.log((0, rota_1.getRota)());

})();

/******/ })()
;
//# sourceMappingURL=app.js.map