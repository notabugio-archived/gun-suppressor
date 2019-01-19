(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ajv"), require("ramda"), require("route-parser"), require("route-parser/lib/route/visitors/regexp"));
	else if(typeof define === 'function' && define.amd)
		define("gun-suppressor", ["ajv", "ramda", "route-parser", "route-parser/lib/route/visitors/regexp"], factory);
	else if(typeof exports === 'object')
		exports["gun-suppressor"] = factory(require("ajv"), require("ramda"), require("route-parser"), require("route-parser/lib/route/visitors/regexp"));
	else
		root["gun-suppressor"] = factory(root["ajv"], root["ramda"], root["route-parser"], root["route-parser/lib/route/visitors/regexp"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_ajv__, __WEBPACK_EXTERNAL_MODULE_ramda__, __WEBPACK_EXTERNAL_MODULE_route_parser__, __WEBPACK_EXTERNAL_MODULE_route_parser_lib_route_visitors_regexp__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAjv = initAjv;
exports.createSuppressor = createSuppressor;
exports.PERMISSIVE_SCHEMA = void 0;

var _ramda = __webpack_require__(/*! ramda */ "ramda");

var _routeParser = _interopRequireDefault(__webpack_require__(/*! route-parser */ "route-parser"));

var _regexp = _interopRequireDefault(__webpack_require__(/*! route-parser/lib/route/visitors/regexp */ "route-parser/lib/route/visitors/regexp"));

var _ajv = _interopRequireDefault(__webpack_require__(/*! ajv */ "ajv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var refRoute = new _routeParser.default("#/definitions/:refName");

function routeToRegexStr(route) {
  var _RouteRegexpVisitor$v = _regexp.default.visit(route.ast),
      re = _RouteRegexpVisitor$v.re;

  var reStr = re.toString();
  return reStr.slice(1, reStr.length - 1);
}

var PERMISSIVE_SCHEMA = {
  Node: {
    title: "Gun Node",
    description: "Any node supported by gun",
    $async: true,
    additionalProperties: {
      anyOf: [{
        $ref: "#/definitions/GunEdge"
      }, {
        type: "null"
      }, {
        type: "string"
      }, {
        type: "number"
      }, {
        type: "boolean"
      }, {
        type: "object"
      }]
    },
    soul: {
      pattern: "*soul",
      properties: {
        soul: {
          type: "string"
        }
      },
      required: ["soul"]
    }
  }
};
exports.PERMISSIVE_SCHEMA = PERMISSIVE_SCHEMA;
var DEFAULT_SCHEMA = PERMISSIVE_SCHEMA;

var compileValidateSoul = function compileValidateSoul(ajv) {
  return function (schema, parentSchema) {
    var _ref = schema || {},
        pattern = _ref.pattern,
        matchSchema = _objectWithoutProperties(_ref, ["pattern"]);

    var route = pattern && new _routeParser.default(pattern);
    return function (data, _cPath, _parentData, keyInParent) {
      var soul = (0, _ramda.path)(["_", "#"], data);
      if (!soul || !pattern || soul !== keyInParent) return false;
      var match = route.match(soul);
      return match ? ajv.compile(matchSchema)(match) : false;
    };
  };
};

var compilePropsFromSoul = function compilePropsFromSoul(propMap, parentSchema) {
  var pattern = (0, _ramda.path)(["soul", "pattern"], parentSchema);
  var route = pattern && new _routeParser.default(pattern);
  return function (data) {
    var soul = (0, _ramda.path)(["_", "#"], data);
    var soulProps = route.match(soul) || {};
    return !(0, _ramda.keys)(propMap).find(function (propName) {
      if (!(propName in data)) return false;
      return (0, _ramda.prop)(propName, soulProps) !== (0, _ramda.prop)((0, _ramda.prop)(propName, propMap), data);
    });
  };
};

var compileEdgeMatchesKey = function compileEdgeMatchesKey(ajv) {
  return function (schema) {
    return function (data, _cPath, _parentData, keyInParent) {
      return schema ? (0, _ramda.prop)("#", data) === keyInParent : true;
    };
  };
};

function initAjv() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$coerceTypes = _ref2.coerceTypes,
      coerceTypes = _ref2$coerceTypes === void 0 ? true : _ref2$coerceTypes,
      _ref2$removeAdditiona = _ref2.removeAdditional,
      removeAdditional = _ref2$removeAdditiona === void 0 ? false : _ref2$removeAdditiona,
      config = _objectWithoutProperties(_ref2, ["coerceTypes", "removeAdditional"]);

  var ajv = new _ajv.default({
    coerceTypes: coerceTypes,
    removeAdditional: removeAdditional,
    ...config
  });
  ajv.addKeyword("soul", {
    compile: compileValidateSoul(ajv)
  });
  ajv.addKeyword("edgeMatchesKey", {
    compile: compileEdgeMatchesKey(ajv)
  });
  ajv.addKeyword("propsFromSoul", {
    compile: compilePropsFromSoul
  });
  return ajv;
}

function createSuppressor() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$init = _ref3.init,
      init = _ref3$init === void 0 ? initAjv : _ref3$init,
      _ref3$id = _ref3.id,
      id = _ref3$id === void 0 ? "http://example.com/schemas/gun-schema.json" : _ref3$id,
      _ref3$jsonSchema = _ref3.jsonSchema,
      jsonSchema = _ref3$jsonSchema === void 0 ? "http://json-schema.org/draft-07/schema#" : _ref3$jsonSchema,
      _ref3$title = _ref3.title,
      title = _ref3$title === void 0 ? "Gun Message Schema" : _ref3$title,
      _ref3$description = _ref3.description,
      description = _ref3$description === void 0 ? "A defintion for the gunDB wire protocol" : _ref3$description,
      _ref3$definitions = _ref3.definitions,
      supplied = _ref3$definitions === void 0 ? DEFAULT_SCHEMA : _ref3$definitions;

  var nodeTypes = [];
  var definitions = (0, _ramda.keys)(supplied).reduce(function (defs, typeName) {
    var _ref4 = (0, _ramda.path)([typeName, "soul"], defs) || {},
        pattern = _ref4.pattern;

    if (!pattern) return defs;
    var route = new _routeParser.default(pattern);

    var pathOrRef = function pathOrRef(p) {
      var val = (0, _ramda.path)(p, defs);
      var ref = (0, _ramda.prop)("$refs", val);
      var refName = (0, _ramda.prop)("refName", refRoute.match(ref || ""));
      return refName ? (0, _ramda.prop)(refName, defs) : val;
    };

    nodeTypes.push(typeName);
    return (0, _ramda.compose)((0, _ramda.assocPath)([typeName, "$async"], true), (0, _ramda.assoc)("".concat(typeName, "Soul"), {
      type: "string",
      pattern: routeToRegexStr(route)
    }), (0, _ramda.assoc)("".concat(typeName, "Edge"), {
      type: "object",
      additionalProperties: false,
      properties: {
        "#": {
          $ref: "#/definitions/".concat(typeName, "Soul")
        }
      },
      required: ["#"]
    }), (0, _ramda.assocPath)([typeName, "required"], [].concat(_toConsumableArray((0, _ramda.path)([typeName, "required"], defs) || []), ["_"])), (0, _ramda.assocPath)([typeName, "properties", "_"], {
      type: "object",
      allOf: [{
        $ref: "#/definitions/GunNodeMeta"
      }],
      properties: {
        "#": {
          $ref: "#/definitions/".concat(typeName, "Soul")
        },
        ">": {
          type: "object",
          properties: (0, _ramda.keys)(pathOrRef([typeName, "properties"])).reduce(function (props, key) {
            return (0, _ramda.assoc)(key, {
              type: "number"
            }, props);
          }, {}),
          patternProperties: (0, _ramda.keys)(pathOrRef([typeName, "patternProperties"])).reduce(function (props, key) {
            return (0, _ramda.assoc)(key, {
              type: "number"
            }, props);
          }, {})
        }
      }
    }))(defs);
  }, supplied);
  var schema = {
    $id: id,
    $schema: jsonSchema,
    $async: true,
    title: title,
    description: description,
    anyOf: [{
      $ref: "#/definitions/GunMsg"
    }],
    definitions: {
      GunMsg: {
        $async: true,
        type: "object",
        // required: ["#"], // necessary over wire
        additionalProperties: false,
        properties: {
          "#": {
            title: "Message Identifier",
            description: "This should be a globally unique identifier",
            type: "string"
          },
          "##": {
            title: "Fast Hash Value?",
            description: "I have no idea how this is calculated",
            type: "number"
          },
          "@": {
            title: "Responding To",
            description: "The message identifier this message is responding to",
            type: "string"
          },
          "><": {
            title: "Adjacent Peers",
            description: "Not really sure how this works",
            type: "string"
          },
          $: {
            title: "??"
          },
          I: {
            title: "??"
          },
          ok: {
            title: "??",
            description: "Shouldn't actually be sent over wire",
            type: "boolean"
          },
          how: {
            title: "Used for debugging",
            description: "Shouldn't actually be sent over wire (but it is)",
            type: "string"
          },
          mesh: {
            title: "??",
            description: "Shouldn't be sent over wire"
          },
          rad: {
            title: "??",
            description: "Shouldn't be sent over wire"
          },
          user: {
            title: "??",
            description: "I don't think this is supposed to be sent over wire"
          },
          err: {
            anyOf: [{
              type: "null"
            }, {
              type: "string"
            }]
          },
          leech: {
            title: "Leech Command",
            description: "Gun protocol extension added by pistol",
            type: "boolean"
          },
          ping: {
            title: "Ping Command",
            description: "Gun protocol extension added by pistol",
            type: "boolean"
          },
          get: {
            title: "Get Command",
            description: "A request for graph data",
            type: "object",
            additionalProperties: false,
            properties: {
              "#": {
                description: "The soul to request data for",
                anyOf: nodeTypes.map(function (name) {
                  return {
                    $ref: "#/definitions/".concat(name, "Soul")
                  };
                })
              },
              ".": {
                description: "Request a single property?",
                type: "string"
              }
            }
          },
          put: {
            anyOf: [{
              $async: true,
              title: "Put Command",
              description: "A payload of graph data",
              type: "object",
              additionalProperties: {
                anyOf: nodeTypes.map(function (name) {
                  return {
                    $ref: "#/definitions/".concat(name)
                  };
                })
              }
            }, {
              type: "null"
            }]
          }
        }
      },
      GunChangeStates: {
        type: "object",
        title: "Gun Change States",
        description: "A map of property names to update timestamps",
        patternProperties: {
          ".*": {
            type: "number"
          }
        }
      },
      GunNodeMeta: {
        title: "Gun Node Metadata",
        description: "Change State and soul of a gun node",
        type: "object",
        additionalProperties: false,
        properties: {
          "#": {
            title: "Soul",
            type: "string"
          },
          ">": {
            $ref: "#/definitions/GunChangeStates"
          }
        },
        required: ["#", ">"]
      },
      GunEdge: {
        type: "object",
        additionalProperties: false,
        properties: {
          "#": {
            type: "string"
          }
        },
        required: ["#"]
      },
      ...definitions
    }
  };
  var ajv = init();
  ajv.addSchema({
    $id: "schema.json",
    definitions: schema.definitions
  });
  return {
    schema: schema,
    validate: ajv.compile(schema)
  };
}

/***/ }),

/***/ "ajv":
/*!**********************!*\
  !*** external "ajv" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ajv__;

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ramda__;

/***/ }),

/***/ "route-parser":
/*!*******************************!*\
  !*** external "route-parser" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_route_parser__;

/***/ }),

/***/ "route-parser/lib/route/visitors/regexp":
/*!*********************************************************!*\
  !*** external "route-parser/lib/route/visitors/regexp" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_route_parser_lib_route_visitors_regexp__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3IvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3IvZXh0ZXJuYWwgXCJhanZcIiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci9leHRlcm5hbCBcInJhbWRhXCIiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3IvZXh0ZXJuYWwgXCJyb3V0ZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci9leHRlcm5hbCBcInJvdXRlLXBhcnNlci9saWIvcm91dGUvdmlzaXRvcnMvcmVnZXhwXCIiXSwibmFtZXMiOlsicmVmUm91dGUiLCJyb3V0ZVRvUmVnZXhTdHIiLCJyb3V0ZSIsInZpc2l0IiwiYXN0IiwicmUiLCJyZVN0ciIsInRvU3RyaW5nIiwic2xpY2UiLCJsZW5ndGgiLCJQRVJNSVNTSVZFX1NDSEVNQSIsIk5vZGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiJGFzeW5jIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbnlPZiIsIiRyZWYiLCJ0eXBlIiwic291bCIsInBhdHRlcm4iLCJwcm9wZXJ0aWVzIiwicmVxdWlyZWQiLCJERUZBVUxUX1NDSEVNQSIsImNvbXBpbGVWYWxpZGF0ZVNvdWwiLCJhanYiLCJzY2hlbWEiLCJwYXJlbnRTY2hlbWEiLCJtYXRjaFNjaGVtYSIsImRhdGEiLCJfY1BhdGgiLCJfcGFyZW50RGF0YSIsImtleUluUGFyZW50IiwibWF0Y2giLCJjb21waWxlIiwiY29tcGlsZVByb3BzRnJvbVNvdWwiLCJwcm9wTWFwIiwic291bFByb3BzIiwiZmluZCIsInByb3BOYW1lIiwiY29tcGlsZUVkZ2VNYXRjaGVzS2V5IiwiaW5pdEFqdiIsImNvZXJjZVR5cGVzIiwicmVtb3ZlQWRkaXRpb25hbCIsImNvbmZpZyIsImFkZEtleXdvcmQiLCJjcmVhdGVTdXBwcmVzc29yIiwiaW5pdCIsImlkIiwianNvblNjaGVtYSIsImRlZmluaXRpb25zIiwic3VwcGxpZWQiLCJub2RlVHlwZXMiLCJyZWR1Y2UiLCJkZWZzIiwidHlwZU5hbWUiLCJwYXRoT3JSZWYiLCJwIiwidmFsIiwicmVmIiwicmVmTmFtZSIsInB1c2giLCJhbGxPZiIsInByb3BzIiwia2V5IiwicGF0dGVyblByb3BlcnRpZXMiLCIkaWQiLCIkc2NoZW1hIiwiR3VuTXNnIiwiJCIsIkkiLCJvayIsImhvdyIsIm1lc2giLCJyYWQiLCJ1c2VyIiwiZXJyIiwibGVlY2giLCJwaW5nIiwiZ2V0IiwibWFwIiwibmFtZSIsInB1dCIsIkd1bkNoYW5nZVN0YXRlcyIsIkd1bk5vZGVNZXRhIiwiR3VuRWRnZSIsImFkZFNjaGVtYSIsInZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7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YWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImFqdlwiKSwgcmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwicm91dGUtcGFyc2VyXCIpLCByZXF1aXJlKFwicm91dGUtcGFyc2VyL2xpYi9yb3V0ZS92aXNpdG9ycy9yZWdleHBcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJndW4tc3VwcHJlc3NvclwiLCBbXCJhanZcIiwgXCJyYW1kYVwiLCBcInJvdXRlLXBhcnNlclwiLCBcInJvdXRlLXBhcnNlci9saWIvcm91dGUvdmlzaXRvcnMvcmVnZXhwXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImd1bi1zdXBwcmVzc29yXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYWp2XCIpLCByZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJyb3V0ZS1wYXJzZXJcIiksIHJlcXVpcmUoXCJyb3V0ZS1wYXJzZXIvbGliL3JvdXRlL3Zpc2l0b3JzL3JlZ2V4cFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZ3VuLXN1cHByZXNzb3JcIl0gPSBmYWN0b3J5KHJvb3RbXCJhanZcIl0sIHJvb3RbXCJyYW1kYVwiXSwgcm9vdFtcInJvdXRlLXBhcnNlclwiXSwgcm9vdFtcInJvdXRlLXBhcnNlci9saWIvcm91dGUvdmlzaXRvcnMvcmVnZXhwXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Fqdl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcm91dGVfcGFyc2VyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcm91dGVfcGFyc2VyX2xpYl9yb3V0ZV92aXNpdG9yc19yZWdleHBfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgY29tcG9zZSwga2V5cywgYXNzb2MsIGFzc29jUGF0aCwgcHJvcCwgcGF0aCB9IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IFJvdXRlIGZyb20gXCJyb3V0ZS1wYXJzZXJcIjtcbmltcG9ydCBSb3V0ZVJlZ2V4cFZpc2l0b3IgZnJvbSBcInJvdXRlLXBhcnNlci9saWIvcm91dGUvdmlzaXRvcnMvcmVnZXhwXCI7XG5pbXBvcnQgQWp2IGZyb20gXCJhanZcIjtcblxuY29uc3QgcmVmUm91dGUgPSBuZXcgUm91dGUoXCIjL2RlZmluaXRpb25zLzpyZWZOYW1lXCIpO1xuXG5mdW5jdGlvbiByb3V0ZVRvUmVnZXhTdHIocm91dGUpIHtcbiAgY29uc3QgeyByZSB9ID0gUm91dGVSZWdleHBWaXNpdG9yLnZpc2l0KHJvdXRlLmFzdCk7XG4gIGNvbnN0IHJlU3RyID0gcmUudG9TdHJpbmcoKTtcblxuICByZXR1cm4gcmVTdHIuc2xpY2UoMSwgcmVTdHIubGVuZ3RoIC0gMSk7XG59XG5cbmV4cG9ydCBjb25zdCBQRVJNSVNTSVZFX1NDSEVNQSA9IHtcbiAgTm9kZToge1xuICAgIHRpdGxlOiBcIkd1biBOb2RlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW55IG5vZGUgc3VwcG9ydGVkIGJ5IGd1blwiLFxuICAgICRhc3luYzogdHJ1ZSxcbiAgICBhZGRpdGlvbmFsUHJvcGVydGllczoge1xuICAgICAgYW55T2Y6IFtcbiAgICAgICAgeyAkcmVmOiBcIiMvZGVmaW5pdGlvbnMvR3VuRWRnZVwiIH0sXG4gICAgICAgIHsgdHlwZTogXCJudWxsXCIgfSxcbiAgICAgICAgeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAgIHsgdHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICB7IHR5cGU6IFwiYm9vbGVhblwiIH0sXG4gICAgICAgIHsgdHlwZTogXCJvYmplY3RcIiB9XG4gICAgICBdXG4gICAgfSxcbiAgICBzb3VsOiB7XG4gICAgICBwYXR0ZXJuOiBcIipzb3VsXCIsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNvdWw6IHsgdHlwZTogXCJzdHJpbmdcIiB9XG4gICAgICB9LFxuICAgICAgcmVxdWlyZWQ6IFtcInNvdWxcIl1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IERFRkFVTFRfU0NIRU1BID0gUEVSTUlTU0lWRV9TQ0hFTUE7XG5cbmNvbnN0IGNvbXBpbGVWYWxpZGF0ZVNvdWwgPSBhanYgPT4gKHNjaGVtYSwgcGFyZW50U2NoZW1hKSA9PiB7XG4gIGNvbnN0IHsgcGF0dGVybiwgLi4ubWF0Y2hTY2hlbWEgfSA9IHNjaGVtYSB8fCB7fTtcbiAgY29uc3Qgcm91dGUgPSBwYXR0ZXJuICYmIG5ldyBSb3V0ZShwYXR0ZXJuKTtcblxuICByZXR1cm4gKGRhdGEsIF9jUGF0aCwgX3BhcmVudERhdGEsIGtleUluUGFyZW50KSA9PiB7XG4gICAgY29uc3Qgc291bCA9IHBhdGgoW1wiX1wiLCBcIiNcIl0sIGRhdGEpO1xuXG4gICAgaWYgKCFzb3VsIHx8ICFwYXR0ZXJuIHx8IHNvdWwgIT09IGtleUluUGFyZW50KSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgbWF0Y2ggPSByb3V0ZS5tYXRjaChzb3VsKTtcblxuICAgIHJldHVybiBtYXRjaCA/IGFqdi5jb21waWxlKG1hdGNoU2NoZW1hKShtYXRjaCkgOiBmYWxzZTtcbiAgfTtcbn07XG5cbmNvbnN0IGNvbXBpbGVQcm9wc0Zyb21Tb3VsID0gKHByb3BNYXAsIHBhcmVudFNjaGVtYSkgPT4ge1xuICBjb25zdCBwYXR0ZXJuID0gcGF0aChbXCJzb3VsXCIsIFwicGF0dGVyblwiXSwgcGFyZW50U2NoZW1hKTtcbiAgY29uc3Qgcm91dGUgPSBwYXR0ZXJuICYmIG5ldyBSb3V0ZShwYXR0ZXJuKTtcblxuICByZXR1cm4gZGF0YSA9PiB7XG4gICAgY29uc3Qgc291bCA9IHBhdGgoW1wiX1wiLCBcIiNcIl0sIGRhdGEpO1xuICAgIGNvbnN0IHNvdWxQcm9wcyA9IHJvdXRlLm1hdGNoKHNvdWwpIHx8IHt9O1xuXG4gICAgcmV0dXJuICFrZXlzKHByb3BNYXApLmZpbmQocHJvcE5hbWUgPT4ge1xuICAgICAgaWYgKCEocHJvcE5hbWUgaW4gZGF0YSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBwcm9wKHByb3BOYW1lLCBzb3VsUHJvcHMpICE9PSBwcm9wKHByb3AocHJvcE5hbWUsIHByb3BNYXApLCBkYXRhKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbmNvbnN0IGNvbXBpbGVFZGdlTWF0Y2hlc0tleSA9IGFqdiA9PiBzY2hlbWEgPT4gKFxuICBkYXRhLFxuICBfY1BhdGgsXG4gIF9wYXJlbnREYXRhLFxuICBrZXlJblBhcmVudFxuKSA9PiAoc2NoZW1hID8gcHJvcChcIiNcIiwgZGF0YSkgPT09IGtleUluUGFyZW50IDogdHJ1ZSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QWp2KHtcbiAgY29lcmNlVHlwZXMgPSB0cnVlLFxuICByZW1vdmVBZGRpdGlvbmFsID0gZmFsc2UsXG4gIC4uLmNvbmZpZ1xufSA9IHt9KSB7XG4gIGNvbnN0IGFqdiA9IG5ldyBBanYoeyBjb2VyY2VUeXBlcywgcmVtb3ZlQWRkaXRpb25hbCwgLi4uY29uZmlnIH0pO1xuXG4gIGFqdi5hZGRLZXl3b3JkKFwic291bFwiLCB7IGNvbXBpbGU6IGNvbXBpbGVWYWxpZGF0ZVNvdWwoYWp2KSB9KTtcbiAgYWp2LmFkZEtleXdvcmQoXCJlZGdlTWF0Y2hlc0tleVwiLCB7IGNvbXBpbGU6IGNvbXBpbGVFZGdlTWF0Y2hlc0tleShhanYpIH0pO1xuICBhanYuYWRkS2V5d29yZChcInByb3BzRnJvbVNvdWxcIiwgeyBjb21waWxlOiBjb21waWxlUHJvcHNGcm9tU291bCB9KTtcbiAgcmV0dXJuIGFqdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN1cHByZXNzb3Ioe1xuICBpbml0ID0gaW5pdEFqdixcbiAgaWQgPSBcImh0dHA6Ly9leGFtcGxlLmNvbS9zY2hlbWFzL2d1bi1zY2hlbWEuanNvblwiLFxuICBqc29uU2NoZW1hID0gXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNcIixcbiAgdGl0bGUgPSBcIkd1biBNZXNzYWdlIFNjaGVtYVwiLFxuICBkZXNjcmlwdGlvbiA9IFwiQSBkZWZpbnRpb24gZm9yIHRoZSBndW5EQiB3aXJlIHByb3RvY29sXCIsXG4gIGRlZmluaXRpb25zOiBzdXBwbGllZCA9IERFRkFVTFRfU0NIRU1BXG59ID0ge30pIHtcbiAgY29uc3Qgbm9kZVR5cGVzID0gW107XG4gIGNvbnN0IGRlZmluaXRpb25zID0ga2V5cyhzdXBwbGllZCkucmVkdWNlKChkZWZzLCB0eXBlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHsgcGF0dGVybiB9ID0gcGF0aChbdHlwZU5hbWUsIFwic291bFwiXSwgZGVmcykgfHwge307XG5cbiAgICBpZiAoIXBhdHRlcm4pIHJldHVybiBkZWZzO1xuICAgIGNvbnN0IHJvdXRlID0gbmV3IFJvdXRlKHBhdHRlcm4pO1xuICAgIGNvbnN0IHBhdGhPclJlZiA9IHAgPT4ge1xuICAgICAgY29uc3QgdmFsID0gcGF0aChwLCBkZWZzKTtcbiAgICAgIGNvbnN0IHJlZiA9IHByb3AoXCIkcmVmc1wiLCB2YWwpO1xuICAgICAgY29uc3QgcmVmTmFtZSA9IHByb3AoXCJyZWZOYW1lXCIsIHJlZlJvdXRlLm1hdGNoKHJlZiB8fCBcIlwiKSk7XG5cbiAgICAgIHJldHVybiByZWZOYW1lID8gcHJvcChyZWZOYW1lLCBkZWZzKSA6IHZhbDtcbiAgICB9O1xuXG4gICAgbm9kZVR5cGVzLnB1c2godHlwZU5hbWUpO1xuICAgIHJldHVybiBjb21wb3NlKFxuICAgICAgYXNzb2NQYXRoKFt0eXBlTmFtZSwgXCIkYXN5bmNcIl0sIHRydWUpLFxuICAgICAgYXNzb2MoYCR7dHlwZU5hbWV9U291bGAsIHtcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgcGF0dGVybjogcm91dGVUb1JlZ2V4U3RyKHJvdXRlKVxuICAgICAgfSksXG4gICAgICBhc3NvYyhgJHt0eXBlTmFtZX1FZGdlYCwge1xuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBcIiNcIjogeyAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke3R5cGVOYW1lfVNvdWxgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWlyZWQ6IFtcIiNcIl1cbiAgICAgIH0pLFxuICAgICAgYXNzb2NQYXRoKFxuICAgICAgICBbdHlwZU5hbWUsIFwicmVxdWlyZWRcIl0sXG4gICAgICAgIFsuLi4ocGF0aChbdHlwZU5hbWUsIFwicmVxdWlyZWRcIl0sIGRlZnMpIHx8IFtdKSwgXCJfXCJdXG4gICAgICApLFxuICAgICAgYXNzb2NQYXRoKFt0eXBlTmFtZSwgXCJwcm9wZXJ0aWVzXCIsIFwiX1wiXSwge1xuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICBhbGxPZjogW3sgJHJlZjogXCIjL2RlZmluaXRpb25zL0d1bk5vZGVNZXRhXCIgfV0sXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBcIiNcIjogeyAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke3R5cGVOYW1lfVNvdWxgIH0sXG4gICAgICAgICAgXCI+XCI6IHtcbiAgICAgICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBrZXlzKHBhdGhPclJlZihbdHlwZU5hbWUsIFwicHJvcGVydGllc1wiXSkpLnJlZHVjZShcbiAgICAgICAgICAgICAgKHByb3BzLCBrZXkpID0+IGFzc29jKGtleSwgeyB0eXBlOiBcIm51bWJlclwiIH0sIHByb3BzKSxcbiAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBwYXR0ZXJuUHJvcGVydGllczoga2V5cyhcbiAgICAgICAgICAgICAgcGF0aE9yUmVmKFt0eXBlTmFtZSwgXCJwYXR0ZXJuUHJvcGVydGllc1wiXSlcbiAgICAgICAgICAgICkucmVkdWNlKChwcm9wcywga2V5KSA9PiBhc3NvYyhrZXksIHsgdHlwZTogXCJudW1iZXJcIiB9LCBwcm9wcyksIHt9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApKGRlZnMpO1xuICB9LCBzdXBwbGllZCk7XG5cbiAgY29uc3Qgc2NoZW1hID0ge1xuICAgICRpZDogaWQsXG4gICAgJHNjaGVtYToganNvblNjaGVtYSxcbiAgICAkYXN5bmM6IHRydWUsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgYW55T2Y6IFt7ICRyZWY6IFwiIy9kZWZpbml0aW9ucy9HdW5Nc2dcIiB9XSxcbiAgICBkZWZpbml0aW9uczoge1xuICAgICAgR3VuTXNnOiB7XG4gICAgICAgICRhc3luYzogdHJ1ZSxcbiAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgLy8gcmVxdWlyZWQ6IFtcIiNcIl0sIC8vIG5lY2Vzc2FyeSBvdmVyIHdpcmVcbiAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgXCIjXCI6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIk1lc3NhZ2UgSWRlbnRpZmllclwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBzaG91bGQgYmUgYSBnbG9iYWxseSB1bmlxdWUgaWRlbnRpZmllclwiLFxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCIjI1wiOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJGYXN0IEhhc2ggVmFsdWU/XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJJIGhhdmUgbm8gaWRlYSBob3cgdGhpcyBpcyBjYWxjdWxhdGVkXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIkBcIjoge1xuICAgICAgICAgICAgdGl0bGU6IFwiUmVzcG9uZGluZyBUb1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIG1lc3NhZ2UgaWRlbnRpZmllciB0aGlzIG1lc3NhZ2UgaXMgcmVzcG9uZGluZyB0b1wiLFxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI+PFwiOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJBZGphY2VudCBQZWVyc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTm90IHJlYWxseSBzdXJlIGhvdyB0aGlzIHdvcmtzXCIsXG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICAkOiB7XG4gICAgICAgICAgICB0aXRsZTogXCI/P1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBJOiB7XG4gICAgICAgICAgICB0aXRsZTogXCI/P1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvazoge1xuICAgICAgICAgICAgdGl0bGU6IFwiPz9cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNob3VsZG4ndCBhY3R1YWxseSBiZSBzZW50IG92ZXIgd2lyZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJib29sZWFuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhvdzoge1xuICAgICAgICAgICAgdGl0bGU6IFwiVXNlZCBmb3IgZGVidWdnaW5nXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTaG91bGRuJ3QgYWN0dWFsbHkgYmUgc2VudCBvdmVyIHdpcmUgKGJ1dCBpdCBpcylcIixcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lc2g6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIj8/XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTaG91bGRuJ3QgYmUgc2VudCBvdmVyIHdpcmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmFkOiB7XG4gICAgICAgICAgICB0aXRsZTogXCI/P1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2hvdWxkbid0IGJlIHNlbnQgb3ZlciB3aXJlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIj8/XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJJIGRvbid0IHRoaW5rIHRoaXMgaXMgc3VwcG9zZWQgdG8gYmUgc2VudCBvdmVyIHdpcmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyOiB7XG4gICAgICAgICAgICBhbnlPZjogW3sgdHlwZTogXCJudWxsXCIgfSwgeyB0eXBlOiBcInN0cmluZ1wiIH1dXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZWVjaDoge1xuICAgICAgICAgICAgdGl0bGU6IFwiTGVlY2ggQ29tbWFuZFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR3VuIHByb3RvY29sIGV4dGVuc2lvbiBhZGRlZCBieSBwaXN0b2xcIixcbiAgICAgICAgICAgIHR5cGU6IFwiYm9vbGVhblwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwaW5nOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJQaW5nIENvbW1hbmRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkd1biBwcm90b2NvbCBleHRlbnNpb24gYWRkZWQgYnkgcGlzdG9sXCIsXG4gICAgICAgICAgICB0eXBlOiBcImJvb2xlYW5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgICB0aXRsZTogXCJHZXQgQ29tbWFuZFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSByZXF1ZXN0IGZvciBncmFwaCBkYXRhXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICBcIiNcIjoge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBzb3VsIHRvIHJlcXVlc3QgZGF0YSBmb3JcIixcbiAgICAgICAgICAgICAgICBhbnlPZjogbm9kZVR5cGVzLm1hcChuYW1lID0+ICh7XG4gICAgICAgICAgICAgICAgICAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke25hbWV9U291bGBcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCIuXCI6IHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSZXF1ZXN0IGEgc2luZ2xlIHByb3BlcnR5P1wiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHV0OiB7XG4gICAgICAgICAgICBhbnlPZjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlB1dCBDb21tYW5kXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSBwYXlsb2FkIG9mIGdyYXBoIGRhdGFcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICBhbnlPZjogbm9kZVR5cGVzLm1hcChuYW1lID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICRyZWY6IGAjL2RlZmluaXRpb25zLyR7bmFtZX1gXG4gICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHsgdHlwZTogXCJudWxsXCIgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIEd1bkNoYW5nZVN0YXRlczoge1xuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICB0aXRsZTogXCJHdW4gQ2hhbmdlIFN0YXRlc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBIG1hcCBvZiBwcm9wZXJ0eSBuYW1lcyB0byB1cGRhdGUgdGltZXN0YW1wc1wiLFxuICAgICAgICBwYXR0ZXJuUHJvcGVydGllczoge1xuICAgICAgICAgIFwiLipcIjoge1xuICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIEd1bk5vZGVNZXRhOiB7XG4gICAgICAgIHRpdGxlOiBcIkd1biBOb2RlIE1ldGFkYXRhXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNoYW5nZSBTdGF0ZSBhbmQgc291bCBvZiBhIGd1biBub2RlXCIsXG4gICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIFwiI1wiOiB7IHRpdGxlOiBcIlNvdWxcIiwgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgIFwiPlwiOiB7ICRyZWY6IFwiIy9kZWZpbml0aW9ucy9HdW5DaGFuZ2VTdGF0ZXNcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVpcmVkOiBbXCIjXCIsIFwiPlwiXVxuICAgICAgfSxcbiAgICAgIEd1bkVkZ2U6IHtcbiAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgXCIjXCI6IHsgdHlwZTogXCJzdHJpbmdcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVpcmVkOiBbXCIjXCJdXG4gICAgICB9LFxuICAgICAgLi4uZGVmaW5pdGlvbnNcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFqdiA9IGluaXQoKTtcblxuICBhanYuYWRkU2NoZW1hKHtcbiAgICAkaWQ6IFwic2NoZW1hLmpzb25cIixcbiAgICBkZWZpbml0aW9uczogc2NoZW1hLmRlZmluaXRpb25zXG4gIH0pO1xuICByZXR1cm4geyBzY2hlbWEsIHZhbGlkYXRlOiBhanYuY29tcGlsZShzY2hlbWEpIH07XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYWp2X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JvdXRlX3BhcnNlcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yb3V0ZV9wYXJzZXJfbGliX3JvdXRlX3Zpc2l0b3JzX3JlZ2V4cF9fOyJdLCJzb3VyY2VSb290IjoiIn0=