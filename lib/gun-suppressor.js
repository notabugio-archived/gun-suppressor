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
            required: ["#"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3IvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3IvZXh0ZXJuYWwgXCJhanZcIiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci9leHRlcm5hbCBcInJhbWRhXCIiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3IvZXh0ZXJuYWwgXCJyb3V0ZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci9leHRlcm5hbCBcInJvdXRlLXBhcnNlci9saWIvcm91dGUvdmlzaXRvcnMvcmVnZXhwXCIiXSwibmFtZXMiOlsicmVmUm91dGUiLCJyb3V0ZVRvUmVnZXhTdHIiLCJyb3V0ZSIsInZpc2l0IiwiYXN0IiwicmUiLCJyZVN0ciIsInRvU3RyaW5nIiwic2xpY2UiLCJsZW5ndGgiLCJQRVJNSVNTSVZFX1NDSEVNQSIsIk5vZGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiJGFzeW5jIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbnlPZiIsIiRyZWYiLCJ0eXBlIiwic291bCIsInBhdHRlcm4iLCJwcm9wZXJ0aWVzIiwicmVxdWlyZWQiLCJERUZBVUxUX1NDSEVNQSIsImNvbXBpbGVWYWxpZGF0ZVNvdWwiLCJhanYiLCJzY2hlbWEiLCJwYXJlbnRTY2hlbWEiLCJtYXRjaFNjaGVtYSIsImRhdGEiLCJfY1BhdGgiLCJfcGFyZW50RGF0YSIsImtleUluUGFyZW50IiwibWF0Y2giLCJjb21waWxlIiwiY29tcGlsZVByb3BzRnJvbVNvdWwiLCJwcm9wTWFwIiwic291bFByb3BzIiwiZmluZCIsInByb3BOYW1lIiwiY29tcGlsZUVkZ2VNYXRjaGVzS2V5IiwiaW5pdEFqdiIsImNvZXJjZVR5cGVzIiwicmVtb3ZlQWRkaXRpb25hbCIsImNvbmZpZyIsImFkZEtleXdvcmQiLCJjcmVhdGVTdXBwcmVzc29yIiwiaW5pdCIsImlkIiwianNvblNjaGVtYSIsImRlZmluaXRpb25zIiwic3VwcGxpZWQiLCJub2RlVHlwZXMiLCJyZWR1Y2UiLCJkZWZzIiwidHlwZU5hbWUiLCJwYXRoT3JSZWYiLCJwIiwidmFsIiwicmVmIiwicmVmTmFtZSIsInB1c2giLCJhbGxPZiIsInByb3BzIiwia2V5IiwicGF0dGVyblByb3BlcnRpZXMiLCIkaWQiLCIkc2NoZW1hIiwiR3VuTXNnIiwiJCIsIkkiLCJvayIsImhvdyIsIm1lc2giLCJyYWQiLCJ1c2VyIiwiZXJyIiwibGVlY2giLCJwaW5nIiwiZ2V0IiwibWFwIiwibmFtZSIsInB1dCIsIkd1bkNoYW5nZVN0YXRlcyIsIkd1bk5vZGVNZXRhIiwiR3VuRWRnZSIsImFkZFNjaGVtYSIsInZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7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c291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYWp2XCIpLCByZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJyb3V0ZS1wYXJzZXJcIiksIHJlcXVpcmUoXCJyb3V0ZS1wYXJzZXIvbGliL3JvdXRlL3Zpc2l0b3JzL3JlZ2V4cFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImd1bi1zdXBwcmVzc29yXCIsIFtcImFqdlwiLCBcInJhbWRhXCIsIFwicm91dGUtcGFyc2VyXCIsIFwicm91dGUtcGFyc2VyL2xpYi9yb3V0ZS92aXNpdG9ycy9yZWdleHBcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3VuLXN1cHByZXNzb3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJhanZcIiksIHJlcXVpcmUoXCJyYW1kYVwiKSwgcmVxdWlyZShcInJvdXRlLXBhcnNlclwiKSwgcmVxdWlyZShcInJvdXRlLXBhcnNlci9saWIvcm91dGUvdmlzaXRvcnMvcmVnZXhwXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndW4tc3VwcHJlc3NvclwiXSA9IGZhY3Rvcnkocm9vdFtcImFqdlwiXSwgcm9vdFtcInJhbWRhXCJdLCByb290W1wicm91dGUtcGFyc2VyXCJdLCByb290W1wicm91dGUtcGFyc2VyL2xpYi9yb3V0ZS92aXNpdG9ycy9yZWdleHBcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYWp2X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFtZGFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yb3V0ZV9wYXJzZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yb3V0ZV9wYXJzZXJfbGliX3JvdXRlX3Zpc2l0b3JzX3JlZ2V4cF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBjb21wb3NlLCBrZXlzLCBhc3NvYywgYXNzb2NQYXRoLCBwcm9wLCBwYXRoIH0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgUm91dGUgZnJvbSBcInJvdXRlLXBhcnNlclwiO1xuaW1wb3J0IFJvdXRlUmVnZXhwVmlzaXRvciBmcm9tIFwicm91dGUtcGFyc2VyL2xpYi9yb3V0ZS92aXNpdG9ycy9yZWdleHBcIjtcbmltcG9ydCBBanYgZnJvbSBcImFqdlwiO1xuXG5jb25zdCByZWZSb3V0ZSA9IG5ldyBSb3V0ZShcIiMvZGVmaW5pdGlvbnMvOnJlZk5hbWVcIik7XG5cbmZ1bmN0aW9uIHJvdXRlVG9SZWdleFN0cihyb3V0ZSkge1xuICBjb25zdCB7IHJlIH0gPSBSb3V0ZVJlZ2V4cFZpc2l0b3IudmlzaXQocm91dGUuYXN0KTtcbiAgY29uc3QgcmVTdHIgPSByZS50b1N0cmluZygpO1xuXG4gIHJldHVybiByZVN0ci5zbGljZSgxLCByZVN0ci5sZW5ndGggLSAxKTtcbn1cblxuZXhwb3J0IGNvbnN0IFBFUk1JU1NJVkVfU0NIRU1BID0ge1xuICBOb2RlOiB7XG4gICAgdGl0bGU6IFwiR3VuIE5vZGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbnkgbm9kZSBzdXBwb3J0ZWQgYnkgZ3VuXCIsXG4gICAgJGFzeW5jOiB0cnVlLFxuICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgICBhbnlPZjogW1xuICAgICAgICB7ICRyZWY6IFwiIy9kZWZpbml0aW9ucy9HdW5FZGdlXCIgfSxcbiAgICAgICAgeyB0eXBlOiBcIm51bGxcIiB9LFxuICAgICAgICB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgeyB0eXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgIHsgdHlwZTogXCJib29sZWFuXCIgfSxcbiAgICAgICAgeyB0eXBlOiBcIm9iamVjdFwiIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHNvdWw6IHtcbiAgICAgIHBhdHRlcm46IFwiKnNvdWxcIixcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc291bDogeyB0eXBlOiBcInN0cmluZ1wiIH1cbiAgICAgIH0sXG4gICAgICByZXF1aXJlZDogW1wic291bFwiXVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgREVGQVVMVF9TQ0hFTUEgPSBQRVJNSVNTSVZFX1NDSEVNQTtcblxuY29uc3QgY29tcGlsZVZhbGlkYXRlU291bCA9IGFqdiA9PiAoc2NoZW1hLCBwYXJlbnRTY2hlbWEpID0+IHtcbiAgY29uc3QgeyBwYXR0ZXJuLCAuLi5tYXRjaFNjaGVtYSB9ID0gc2NoZW1hIHx8IHt9O1xuICBjb25zdCByb3V0ZSA9IHBhdHRlcm4gJiYgbmV3IFJvdXRlKHBhdHRlcm4pO1xuXG4gIHJldHVybiAoZGF0YSwgX2NQYXRoLCBfcGFyZW50RGF0YSwga2V5SW5QYXJlbnQpID0+IHtcbiAgICBjb25zdCBzb3VsID0gcGF0aChbXCJfXCIsIFwiI1wiXSwgZGF0YSk7XG5cbiAgICBpZiAoIXNvdWwgfHwgIXBhdHRlcm4gfHwgc291bCAhPT0ga2V5SW5QYXJlbnQpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBtYXRjaCA9IHJvdXRlLm1hdGNoKHNvdWwpO1xuXG4gICAgcmV0dXJuIG1hdGNoID8gYWp2LmNvbXBpbGUobWF0Y2hTY2hlbWEpKG1hdGNoKSA6IGZhbHNlO1xuICB9O1xufTtcblxuY29uc3QgY29tcGlsZVByb3BzRnJvbVNvdWwgPSAocHJvcE1hcCwgcGFyZW50U2NoZW1hKSA9PiB7XG4gIGNvbnN0IHBhdHRlcm4gPSBwYXRoKFtcInNvdWxcIiwgXCJwYXR0ZXJuXCJdLCBwYXJlbnRTY2hlbWEpO1xuICBjb25zdCByb3V0ZSA9IHBhdHRlcm4gJiYgbmV3IFJvdXRlKHBhdHRlcm4pO1xuXG4gIHJldHVybiBkYXRhID0+IHtcbiAgICBjb25zdCBzb3VsID0gcGF0aChbXCJfXCIsIFwiI1wiXSwgZGF0YSk7XG4gICAgY29uc3Qgc291bFByb3BzID0gcm91dGUubWF0Y2goc291bCkgfHwge307XG5cbiAgICByZXR1cm4gIWtleXMocHJvcE1hcCkuZmluZChwcm9wTmFtZSA9PiB7XG4gICAgICBpZiAoIShwcm9wTmFtZSBpbiBkYXRhKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHByb3AocHJvcE5hbWUsIHNvdWxQcm9wcykgIT09IHByb3AocHJvcChwcm9wTmFtZSwgcHJvcE1hcCksIGRhdGEpO1xuICAgIH0pO1xuICB9O1xufTtcblxuY29uc3QgY29tcGlsZUVkZ2VNYXRjaGVzS2V5ID0gYWp2ID0+IHNjaGVtYSA9PiAoXG4gIGRhdGEsXG4gIF9jUGF0aCxcbiAgX3BhcmVudERhdGEsXG4gIGtleUluUGFyZW50XG4pID0+IChzY2hlbWEgPyBwcm9wKFwiI1wiLCBkYXRhKSA9PT0ga2V5SW5QYXJlbnQgOiB0cnVlKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBanYoe1xuICBjb2VyY2VUeXBlcyA9IHRydWUsXG4gIHJlbW92ZUFkZGl0aW9uYWwgPSBmYWxzZSxcbiAgLi4uY29uZmlnXG59ID0ge30pIHtcbiAgY29uc3QgYWp2ID0gbmV3IEFqdih7IGNvZXJjZVR5cGVzLCByZW1vdmVBZGRpdGlvbmFsLCAuLi5jb25maWcgfSk7XG5cbiAgYWp2LmFkZEtleXdvcmQoXCJzb3VsXCIsIHsgY29tcGlsZTogY29tcGlsZVZhbGlkYXRlU291bChhanYpIH0pO1xuICBhanYuYWRkS2V5d29yZChcImVkZ2VNYXRjaGVzS2V5XCIsIHsgY29tcGlsZTogY29tcGlsZUVkZ2VNYXRjaGVzS2V5KGFqdikgfSk7XG4gIGFqdi5hZGRLZXl3b3JkKFwicHJvcHNGcm9tU291bFwiLCB7IGNvbXBpbGU6IGNvbXBpbGVQcm9wc0Zyb21Tb3VsIH0pO1xuICByZXR1cm4gYWp2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3VwcHJlc3Nvcih7XG4gIGluaXQgPSBpbml0QWp2LFxuICBpZCA9IFwiaHR0cDovL2V4YW1wbGUuY29tL3NjaGVtYXMvZ3VuLXNjaGVtYS5qc29uXCIsXG4gIGpzb25TY2hlbWEgPSBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hI1wiLFxuICB0aXRsZSA9IFwiR3VuIE1lc3NhZ2UgU2NoZW1hXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJBIGRlZmludGlvbiBmb3IgdGhlIGd1bkRCIHdpcmUgcHJvdG9jb2xcIixcbiAgZGVmaW5pdGlvbnM6IHN1cHBsaWVkID0gREVGQVVMVF9TQ0hFTUFcbn0gPSB7fSkge1xuICBjb25zdCBub2RlVHlwZXMgPSBbXTtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBrZXlzKHN1cHBsaWVkKS5yZWR1Y2UoKGRlZnMsIHR5cGVOYW1lKSA9PiB7XG4gICAgY29uc3QgeyBwYXR0ZXJuIH0gPSBwYXRoKFt0eXBlTmFtZSwgXCJzb3VsXCJdLCBkZWZzKSB8fCB7fTtcblxuICAgIGlmICghcGF0dGVybikgcmV0dXJuIGRlZnM7XG4gICAgY29uc3Qgcm91dGUgPSBuZXcgUm91dGUocGF0dGVybik7XG4gICAgY29uc3QgcGF0aE9yUmVmID0gcCA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBwYXRoKHAsIGRlZnMpO1xuICAgICAgY29uc3QgcmVmID0gcHJvcChcIiRyZWZzXCIsIHZhbCk7XG4gICAgICBjb25zdCByZWZOYW1lID0gcHJvcChcInJlZk5hbWVcIiwgcmVmUm91dGUubWF0Y2gocmVmIHx8IFwiXCIpKTtcblxuICAgICAgcmV0dXJuIHJlZk5hbWUgPyBwcm9wKHJlZk5hbWUsIGRlZnMpIDogdmFsO1xuICAgIH07XG5cbiAgICBub2RlVHlwZXMucHVzaCh0eXBlTmFtZSk7XG4gICAgcmV0dXJuIGNvbXBvc2UoXG4gICAgICBhc3NvY1BhdGgoW3R5cGVOYW1lLCBcIiRhc3luY1wiXSwgdHJ1ZSksXG4gICAgICBhc3NvYyhgJHt0eXBlTmFtZX1Tb3VsYCwge1xuICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICBwYXR0ZXJuOiByb3V0ZVRvUmVnZXhTdHIocm91dGUpXG4gICAgICB9KSxcbiAgICAgIGFzc29jKGAke3R5cGVOYW1lfUVkZ2VgLCB7XG4gICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIFwiI1wiOiB7ICRyZWY6IGAjL2RlZmluaXRpb25zLyR7dHlwZU5hbWV9U291bGAgfVxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZDogW1wiI1wiXVxuICAgICAgfSksXG4gICAgICBhc3NvY1BhdGgoXG4gICAgICAgIFt0eXBlTmFtZSwgXCJyZXF1aXJlZFwiXSxcbiAgICAgICAgWy4uLihwYXRoKFt0eXBlTmFtZSwgXCJyZXF1aXJlZFwiXSwgZGVmcykgfHwgW10pLCBcIl9cIl1cbiAgICAgICksXG4gICAgICBhc3NvY1BhdGgoW3R5cGVOYW1lLCBcInByb3BlcnRpZXNcIiwgXCJfXCJdLCB7XG4gICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgIGFsbE9mOiBbeyAkcmVmOiBcIiMvZGVmaW5pdGlvbnMvR3VuTm9kZU1ldGFcIiB9XSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIFwiI1wiOiB7ICRyZWY6IGAjL2RlZmluaXRpb25zLyR7dHlwZU5hbWV9U291bGAgfSxcbiAgICAgICAgICBcIj5cIjoge1xuICAgICAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IGtleXMocGF0aE9yUmVmKFt0eXBlTmFtZSwgXCJwcm9wZXJ0aWVzXCJdKSkucmVkdWNlKFxuICAgICAgICAgICAgICAocHJvcHMsIGtleSkgPT4gYXNzb2Moa2V5LCB7IHR5cGU6IFwibnVtYmVyXCIgfSwgcHJvcHMpLFxuICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHBhdHRlcm5Qcm9wZXJ0aWVzOiBrZXlzKFxuICAgICAgICAgICAgICBwYXRoT3JSZWYoW3R5cGVOYW1lLCBcInBhdHRlcm5Qcm9wZXJ0aWVzXCJdKVxuICAgICAgICAgICAgKS5yZWR1Y2UoKHByb3BzLCBrZXkpID0+IGFzc29jKGtleSwgeyB0eXBlOiBcIm51bWJlclwiIH0sIHByb3BzKSwge30pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICkoZGVmcyk7XG4gIH0sIHN1cHBsaWVkKTtcblxuICBjb25zdCBzY2hlbWEgPSB7XG4gICAgJGlkOiBpZCxcbiAgICAkc2NoZW1hOiBqc29uU2NoZW1hLFxuICAgICRhc3luYzogdHJ1ZSxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBhbnlPZjogW3sgJHJlZjogXCIjL2RlZmluaXRpb25zL0d1bk1zZ1wiIH1dLFxuICAgIGRlZmluaXRpb25zOiB7XG4gICAgICBHdW5Nc2c6IHtcbiAgICAgICAgJGFzeW5jOiB0cnVlLFxuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICAvLyByZXF1aXJlZDogW1wiI1wiXSwgLy8gbmVjZXNzYXJ5IG92ZXIgd2lyZVxuICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBcIiNcIjoge1xuICAgICAgICAgICAgdGl0bGU6IFwiTWVzc2FnZSBJZGVudGlmaWVyXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHNob3VsZCBiZSBhIGdsb2JhbGx5IHVuaXF1ZSBpZGVudGlmaWVyXCIsXG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIiMjXCI6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkZhc3QgSGFzaCBWYWx1ZT9cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkkgaGF2ZSBubyBpZGVhIGhvdyB0aGlzIGlzIGNhbGN1bGF0ZWRcIixcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiQFwiOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJSZXNwb25kaW5nIFRvXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgbWVzc2FnZSBpZGVudGlmaWVyIHRoaXMgbWVzc2FnZSBpcyByZXNwb25kaW5nIHRvXCIsXG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIj48XCI6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkFkamFjZW50IFBlZXJzXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJOb3QgcmVhbGx5IHN1cmUgaG93IHRoaXMgd29ya3NcIixcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgICQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIj8/XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIEk6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIj8/XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9rOiB7XG4gICAgICAgICAgICB0aXRsZTogXCI/P1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2hvdWxkbid0IGFjdHVhbGx5IGJlIHNlbnQgb3ZlciB3aXJlXCIsXG4gICAgICAgICAgICB0eXBlOiBcImJvb2xlYW5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgaG93OiB7XG4gICAgICAgICAgICB0aXRsZTogXCJVc2VkIGZvciBkZWJ1Z2dpbmdcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNob3VsZG4ndCBhY3R1YWxseSBiZSBzZW50IG92ZXIgd2lyZSAoYnV0IGl0IGlzKVwiLFxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVzaDoge1xuICAgICAgICAgICAgdGl0bGU6IFwiPz9cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNob3VsZG4ndCBiZSBzZW50IG92ZXIgd2lyZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICByYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIj8/XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTaG91bGRuJ3QgYmUgc2VudCBvdmVyIHdpcmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgdGl0bGU6IFwiPz9cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkkgZG9uJ3QgdGhpbmsgdGhpcyBpcyBzdXBwb3NlZCB0byBiZSBzZW50IG92ZXIgd2lyZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnI6IHtcbiAgICAgICAgICAgIGFueU9mOiBbeyB0eXBlOiBcIm51bGxcIiB9LCB7IHR5cGU6IFwic3RyaW5nXCIgfV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGxlZWNoOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJMZWVjaCBDb21tYW5kXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJHdW4gcHJvdG9jb2wgZXh0ZW5zaW9uIGFkZGVkIGJ5IHBpc3RvbFwiLFxuICAgICAgICAgICAgdHlwZTogXCJib29sZWFuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBpbmc6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlBpbmcgQ29tbWFuZFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR3VuIHByb3RvY29sIGV4dGVuc2lvbiBhZGRlZCBieSBwaXN0b2xcIixcbiAgICAgICAgICAgIHR5cGU6IFwiYm9vbGVhblwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkdldCBDb21tYW5kXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIHJlcXVlc3QgZm9yIGdyYXBoIGRhdGFcIixcbiAgICAgICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgICAgICByZXF1aXJlZDogW1wiI1wiXSxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgXCIjXCI6IHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgc291bCB0byByZXF1ZXN0IGRhdGEgZm9yXCIsXG4gICAgICAgICAgICAgICAgYW55T2Y6IG5vZGVUeXBlcy5tYXAobmFtZSA9PiAoe1xuICAgICAgICAgICAgICAgICAgJHJlZjogYCMvZGVmaW5pdGlvbnMvJHtuYW1lfVNvdWxgXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiLlwiOiB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmVxdWVzdCBhIHNpbmdsZSBwcm9wZXJ0eT9cIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHB1dDoge1xuICAgICAgICAgICAgYW55T2Y6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICRhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJQdXQgQ29tbWFuZFwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgcGF5bG9hZCBvZiBncmFwaCBkYXRhXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgYW55T2Y6IG5vZGVUeXBlcy5tYXAobmFtZSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke25hbWV9YFxuICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7IHR5cGU6IFwibnVsbFwiIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBHdW5DaGFuZ2VTdGF0ZXM6IHtcbiAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgdGl0bGU6IFwiR3VuIENoYW5nZSBTdGF0ZXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBtYXAgb2YgcHJvcGVydHkgbmFtZXMgdG8gdXBkYXRlIHRpbWVzdGFtcHNcIixcbiAgICAgICAgcGF0dGVyblByb3BlcnRpZXM6IHtcbiAgICAgICAgICBcIi4qXCI6IHtcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBHdW5Ob2RlTWV0YToge1xuICAgICAgICB0aXRsZTogXCJHdW4gTm9kZSBNZXRhZGF0YVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDaGFuZ2UgU3RhdGUgYW5kIHNvdWwgb2YgYSBndW4gbm9kZVwiLFxuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBcIiNcIjogeyB0aXRsZTogXCJTb3VsXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICBcIj5cIjogeyAkcmVmOiBcIiMvZGVmaW5pdGlvbnMvR3VuQ2hhbmdlU3RhdGVzXCIgfVxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZDogW1wiI1wiLCBcIj5cIl1cbiAgICAgIH0sXG4gICAgICBHdW5FZGdlOiB7XG4gICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIFwiI1wiOiB7IHR5cGU6IFwic3RyaW5nXCIgfVxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZDogW1wiI1wiXVxuICAgICAgfSxcbiAgICAgIC4uLmRlZmluaXRpb25zXG4gICAgfVxuICB9O1xuICBjb25zdCBhanYgPSBpbml0KCk7XG5cbiAgYWp2LmFkZFNjaGVtYSh7XG4gICAgJGlkOiBcInNjaGVtYS5qc29uXCIsXG4gICAgZGVmaW5pdGlvbnM6IHNjaGVtYS5kZWZpbml0aW9uc1xuICB9KTtcbiAgcmV0dXJuIHsgc2NoZW1hLCB2YWxpZGF0ZTogYWp2LmNvbXBpbGUoc2NoZW1hKSB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Fqdl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yb3V0ZV9wYXJzZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcm91dGVfcGFyc2VyX2xpYl9yb3V0ZV92aXNpdG9yc19yZWdleHBfXzsiXSwic291cmNlUm9vdCI6IiJ9