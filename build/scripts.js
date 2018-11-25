/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//import axios from './node_modules/axios/lib/axios.js';\r\n\r\n// Make a request for a user with a given ID\r\n\r\nlet app = new Vue({\r\n    el: '#app',\r\n    data() {\r\n        return {\r\n            textText: 'Hello Vue!',\r\n            style1: {color: 'blue'},\r\n            bpdyElement: '',\r\n            getDate: 'Текущее время:' + new Date().toLocaleString(),\r\n            typeJob: '',\r\n            count: 0,\r\n            inputText: '',\r\n            search: '',\r\n            array: [],\r\n            name1: '',\r\n            info: {},\r\n            openId: null,\r\n        }\r\n\r\n\r\n    },\r\n\r\n    created(){\r\n      console.log('created');\r\n\r\n      /*axios.get('http://localhost:3100/getDefaultJsonData')\r\n          .then(response => response.data)\r\n          .then(data => this.array = data)*/\r\n    axios.get('http://localhost:3100/getDefaultJsonData')\r\n            .then(response => (this.array = response.data));\r\n\r\n\r\n\r\n\r\n        /*.then(response => response.json)\r\n            .then(json => (app.array = json))*/\r\n            /*.then(response => json)\r\n            .then(json => console.log(json))*/\r\n                // handle success\r\n            /*.catch(function (error) {\r\n                // handle error\r\n                console.log(error);\r\n            })\r\n            .then(function () {\r\n                // always executed\r\n            });*/\r\n\r\n\r\n    },\r\n\r\n    watch: {\r\n\r\n    },\r\n    methods: {\r\n        clickFunc () {\r\n            console.log(this.textText + ' -- clickFunc!!');\r\n            this.style1.color == 'blue' ? this.style1.color = 'red' : this.style1.color = 'blue';\r\n        },\r\n        countFunc (param) {\r\n            //this.count = 0;\r\n            param !== 'increase' ? this.count-- : this.count++;\r\n\r\n            if (!param) {\r\n                this.count = 0;\r\n            }\r\n        },\r\n        inputTextButtonClick: function () {\r\n            this.inputText += this.inputText !== '' ?  'и зачем то надажи Кнопку))' : 'нажали кнопку но... не ввели текст ((((';\r\n        },\r\n        consoleArray: () =>\r\n        {\r\n            console.log('app.array:', app.array)\r\n        },\r\n        consoleCheckedItem: (arg) => {\r\n            app.openId !== arg ? app.openId = arg : app.openId = null;\r\n            console.log('openId=', app.openId == 'open');\r\n            return app.openId !== arg ? 'открыть' : 'закрыть';\r\n        }\r\n    }\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ })

/******/ });