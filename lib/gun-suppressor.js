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
        required: ["#"],
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
            description: "Shouldn't be sent over wire",
            type: "object"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3IvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3IvZXh0ZXJuYWwgXCJhanZcIiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci9leHRlcm5hbCBcInJhbWRhXCIiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3IvZXh0ZXJuYWwgXCJyb3V0ZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci9leHRlcm5hbCBcInJvdXRlLXBhcnNlci9saWIvcm91dGUvdmlzaXRvcnMvcmVnZXhwXCIiXSwibmFtZXMiOlsicmVmUm91dGUiLCJyb3V0ZVRvUmVnZXhTdHIiLCJyb3V0ZSIsInZpc2l0IiwiYXN0IiwicmUiLCJyZVN0ciIsInRvU3RyaW5nIiwic2xpY2UiLCJsZW5ndGgiLCJQRVJNSVNTSVZFX1NDSEVNQSIsIk5vZGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiJGFzeW5jIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbnlPZiIsIiRyZWYiLCJ0eXBlIiwic291bCIsInBhdHRlcm4iLCJwcm9wZXJ0aWVzIiwicmVxdWlyZWQiLCJERUZBVUxUX1NDSEVNQSIsImNvbXBpbGVWYWxpZGF0ZVNvdWwiLCJhanYiLCJzY2hlbWEiLCJwYXJlbnRTY2hlbWEiLCJtYXRjaFNjaGVtYSIsImRhdGEiLCJfY1BhdGgiLCJfcGFyZW50RGF0YSIsImtleUluUGFyZW50IiwibWF0Y2giLCJjb21waWxlIiwiY29tcGlsZVByb3BzRnJvbVNvdWwiLCJwcm9wTWFwIiwic291bFByb3BzIiwiZmluZCIsInByb3BOYW1lIiwiY29tcGlsZUVkZ2VNYXRjaGVzS2V5IiwiaW5pdEFqdiIsImNvZXJjZVR5cGVzIiwicmVtb3ZlQWRkaXRpb25hbCIsImNvbmZpZyIsImFkZEtleXdvcmQiLCJjcmVhdGVTdXBwcmVzc29yIiwiaW5pdCIsImlkIiwianNvblNjaGVtYSIsImRlZmluaXRpb25zIiwic3VwcGxpZWQiLCJub2RlVHlwZXMiLCJyZWR1Y2UiLCJkZWZzIiwidHlwZU5hbWUiLCJwYXRoT3JSZWYiLCJwIiwidmFsIiwicmVmIiwicmVmTmFtZSIsInB1c2giLCJhbGxPZiIsInByb3BzIiwia2V5IiwicGF0dGVyblByb3BlcnRpZXMiLCIkaWQiLCIkc2NoZW1hIiwiR3VuTXNnIiwib2siLCJob3ciLCJtZXNoIiwiZXJyIiwibGVlY2giLCJnZXQiLCJtYXAiLCJuYW1lIiwicHV0IiwiR3VuQ2hhbmdlU3RhdGVzIiwiR3VuTm9kZU1ldGEiLCJHdW5FZGdlIiwiYWRkU2NoZW1hIiwidmFsaWRhdGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0Qs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RTtBQUNQOUQsWUFBSSxFQUFFLFFBREM7QUFFUEgsNEJBQW9CLEVBQUUsS0FGZjtBQUdQTSxrQkFBVSxFQUFFO0FBQ1YsZUFBSztBQUFFSCxnQkFBSSxFQUFFO0FBQVI7QUFESyxTQUhMO0FBTVBJLGdCQUFRLEVBQUUsQ0FBQyxHQUFEO0FBTkgsT0F2R0U7QUErR1gsU0FBRzRCO0FBL0dRO0FBUEEsR0FBZjtBQXlIQSxNQUFNekIsR0FBRyxHQUFHc0IsSUFBSSxFQUFoQjtBQUVBdEIsS0FBRyxDQUFDd0QsU0FBSixDQUFjO0FBQ1pmLE9BQUcsRUFBRSxhQURPO0FBRVpoQixlQUFXLEVBQUV4QixNQUFNLENBQUN3QjtBQUZSLEdBQWQ7QUFJQSxTQUFPO0FBQUV4QixVQUFNLEVBQU5BLE1BQUY7QUFBVXdELFlBQVEsRUFBRXpELEdBQUcsQ0FBQ1MsT0FBSixDQUFZUixNQUFaO0FBQXBCLEdBQVA7QUFDRCxDOzs7Ozs7Ozs7OztBQ3RSRCxpRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxvRiIsImZpbGUiOiJndW4tc3VwcHJlc3Nvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImFqdlwiKSwgcmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwicm91dGUtcGFyc2VyXCIpLCByZXF1aXJlKFwicm91dGUtcGFyc2VyL2xpYi9yb3V0ZS92aXNpdG9ycy9yZWdleHBcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJndW4tc3VwcHJlc3NvclwiLCBbXCJhanZcIiwgXCJyYW1kYVwiLCBcInJvdXRlLXBhcnNlclwiLCBcInJvdXRlLXBhcnNlci9saWIvcm91dGUvdmlzaXRvcnMvcmVnZXhwXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImd1bi1zdXBwcmVzc29yXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiYWp2XCIpLCByZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJyb3V0ZS1wYXJzZXJcIiksIHJlcXVpcmUoXCJyb3V0ZS1wYXJzZXIvbGliL3JvdXRlL3Zpc2l0b3JzL3JlZ2V4cFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZ3VuLXN1cHByZXNzb3JcIl0gPSBmYWN0b3J5KHJvb3RbXCJhanZcIl0sIHJvb3RbXCJyYW1kYVwiXSwgcm9vdFtcInJvdXRlLXBhcnNlclwiXSwgcm9vdFtcInJvdXRlLXBhcnNlci9saWIvcm91dGUvdmlzaXRvcnMvcmVnZXhwXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Fqdl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcm91dGVfcGFyc2VyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcm91dGVfcGFyc2VyX2xpYl9yb3V0ZV92aXNpdG9yc19yZWdleHBfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgY29tcG9zZSwga2V5cywgYXNzb2MsIGFzc29jUGF0aCwgcHJvcCwgcGF0aCB9IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IFJvdXRlIGZyb20gXCJyb3V0ZS1wYXJzZXJcIjtcbmltcG9ydCBSb3V0ZVJlZ2V4cFZpc2l0b3IgZnJvbSBcInJvdXRlLXBhcnNlci9saWIvcm91dGUvdmlzaXRvcnMvcmVnZXhwXCI7XG5pbXBvcnQgQWp2IGZyb20gXCJhanZcIjtcblxuY29uc3QgcmVmUm91dGUgPSBuZXcgUm91dGUoXCIjL2RlZmluaXRpb25zLzpyZWZOYW1lXCIpO1xuXG5mdW5jdGlvbiByb3V0ZVRvUmVnZXhTdHIocm91dGUpIHtcbiAgY29uc3QgeyByZSB9ID0gUm91dGVSZWdleHBWaXNpdG9yLnZpc2l0KHJvdXRlLmFzdCk7XG4gIGNvbnN0IHJlU3RyID0gcmUudG9TdHJpbmcoKTtcblxuICByZXR1cm4gcmVTdHIuc2xpY2UoMSwgcmVTdHIubGVuZ3RoIC0gMSk7XG59XG5cbmV4cG9ydCBjb25zdCBQRVJNSVNTSVZFX1NDSEVNQSA9IHtcbiAgTm9kZToge1xuICAgIHRpdGxlOiBcIkd1biBOb2RlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQW55IG5vZGUgc3VwcG9ydGVkIGJ5IGd1blwiLFxuICAgICRhc3luYzogdHJ1ZSxcbiAgICBhZGRpdGlvbmFsUHJvcGVydGllczoge1xuICAgICAgYW55T2Y6IFtcbiAgICAgICAgeyAkcmVmOiBcIiMvZGVmaW5pdGlvbnMvR3VuRWRnZVwiIH0sXG4gICAgICAgIHsgdHlwZTogXCJudWxsXCIgfSxcbiAgICAgICAgeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAgIHsgdHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICB7IHR5cGU6IFwiYm9vbGVhblwiIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHNvdWw6IHtcbiAgICAgIHBhdHRlcm46IFwiKnNvdWxcIixcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc291bDogeyB0eXBlOiBcInN0cmluZ1wiIH1cbiAgICAgIH0sXG4gICAgICByZXF1aXJlZDogW1wic291bFwiXVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgREVGQVVMVF9TQ0hFTUEgPSBQRVJNSVNTSVZFX1NDSEVNQTtcblxuY29uc3QgY29tcGlsZVZhbGlkYXRlU291bCA9IGFqdiA9PiAoc2NoZW1hLCBwYXJlbnRTY2hlbWEpID0+IHtcbiAgY29uc3QgeyBwYXR0ZXJuLCAuLi5tYXRjaFNjaGVtYSB9ID0gc2NoZW1hIHx8IHt9O1xuICBjb25zdCByb3V0ZSA9IHBhdHRlcm4gJiYgbmV3IFJvdXRlKHBhdHRlcm4pO1xuXG4gIHJldHVybiAoZGF0YSwgX2NQYXRoLCBfcGFyZW50RGF0YSwga2V5SW5QYXJlbnQpID0+IHtcbiAgICBjb25zdCBzb3VsID0gcGF0aChbXCJfXCIsIFwiI1wiXSwgZGF0YSk7XG5cbiAgICBpZiAoIXNvdWwgfHwgIXBhdHRlcm4gfHwgc291bCAhPT0ga2V5SW5QYXJlbnQpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBtYXRjaCA9IHJvdXRlLm1hdGNoKHNvdWwpO1xuXG4gICAgcmV0dXJuIG1hdGNoID8gYWp2LmNvbXBpbGUobWF0Y2hTY2hlbWEpKG1hdGNoKSA6IGZhbHNlO1xuICB9O1xufTtcblxuY29uc3QgY29tcGlsZVByb3BzRnJvbVNvdWwgPSAocHJvcE1hcCwgcGFyZW50U2NoZW1hKSA9PiB7XG4gIGNvbnN0IHBhdHRlcm4gPSBwYXRoKFtcInNvdWxcIiwgXCJwYXR0ZXJuXCJdLCBwYXJlbnRTY2hlbWEpO1xuICBjb25zdCByb3V0ZSA9IHBhdHRlcm4gJiYgbmV3IFJvdXRlKHBhdHRlcm4pO1xuXG4gIHJldHVybiBkYXRhID0+IHtcbiAgICBjb25zdCBzb3VsID0gcGF0aChbXCJfXCIsIFwiI1wiXSwgZGF0YSk7XG4gICAgY29uc3Qgc291bFByb3BzID0gcm91dGUubWF0Y2goc291bCkgfHwge307XG5cbiAgICByZXR1cm4gIWtleXMocHJvcE1hcCkuZmluZChwcm9wTmFtZSA9PiB7XG4gICAgICBpZiAoIShwcm9wTmFtZSBpbiBkYXRhKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHByb3AocHJvcE5hbWUsIHNvdWxQcm9wcykgIT09IHByb3AocHJvcChwcm9wTmFtZSwgcHJvcE1hcCksIGRhdGEpO1xuICAgIH0pO1xuICB9O1xufTtcblxuY29uc3QgY29tcGlsZUVkZ2VNYXRjaGVzS2V5ID0gYWp2ID0+IHNjaGVtYSA9PiAoXG4gIGRhdGEsXG4gIF9jUGF0aCxcbiAgX3BhcmVudERhdGEsXG4gIGtleUluUGFyZW50XG4pID0+IChzY2hlbWEgPyBwcm9wKFwiI1wiLCBkYXRhKSA9PT0ga2V5SW5QYXJlbnQgOiB0cnVlKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRBanYoe1xuICBjb2VyY2VUeXBlcyA9IHRydWUsXG4gIHJlbW92ZUFkZGl0aW9uYWwgPSBmYWxzZSxcbiAgLi4uY29uZmlnXG59ID0ge30pIHtcbiAgY29uc3QgYWp2ID0gbmV3IEFqdih7IGNvZXJjZVR5cGVzLCByZW1vdmVBZGRpdGlvbmFsLCAuLi5jb25maWcgfSk7XG5cbiAgYWp2LmFkZEtleXdvcmQoXCJzb3VsXCIsIHsgY29tcGlsZTogY29tcGlsZVZhbGlkYXRlU291bChhanYpIH0pO1xuICBhanYuYWRkS2V5d29yZChcImVkZ2VNYXRjaGVzS2V5XCIsIHsgY29tcGlsZTogY29tcGlsZUVkZ2VNYXRjaGVzS2V5KGFqdikgfSk7XG4gIGFqdi5hZGRLZXl3b3JkKFwicHJvcHNGcm9tU291bFwiLCB7IGNvbXBpbGU6IGNvbXBpbGVQcm9wc0Zyb21Tb3VsIH0pO1xuICByZXR1cm4gYWp2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3VwcHJlc3Nvcih7XG4gIGluaXQgPSBpbml0QWp2LFxuICBpZCA9IFwiaHR0cDovL2V4YW1wbGUuY29tL3NjaGVtYXMvZ3VuLXNjaGVtYS5qc29uXCIsXG4gIGpzb25TY2hlbWEgPSBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDcvc2NoZW1hI1wiLFxuICB0aXRsZSA9IFwiR3VuIE1lc3NhZ2UgU2NoZW1hXCIsXG4gIGRlc2NyaXB0aW9uID0gXCJBIGRlZmludGlvbiBmb3IgdGhlIGd1bkRCIHdpcmUgcHJvdG9jb2xcIixcbiAgZGVmaW5pdGlvbnM6IHN1cHBsaWVkID0gREVGQVVMVF9TQ0hFTUFcbn0gPSB7fSkge1xuICBjb25zdCBub2RlVHlwZXMgPSBbXTtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBrZXlzKHN1cHBsaWVkKS5yZWR1Y2UoKGRlZnMsIHR5cGVOYW1lKSA9PiB7XG4gICAgY29uc3QgeyBwYXR0ZXJuIH0gPSBwYXRoKFt0eXBlTmFtZSwgXCJzb3VsXCJdLCBkZWZzKSB8fCB7fTtcblxuICAgIGlmICghcGF0dGVybikgcmV0dXJuIGRlZnM7XG4gICAgY29uc3Qgcm91dGUgPSBuZXcgUm91dGUocGF0dGVybik7XG4gICAgY29uc3QgcGF0aE9yUmVmID0gcCA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBwYXRoKHAsIGRlZnMpO1xuICAgICAgY29uc3QgcmVmID0gcHJvcChcIiRyZWZzXCIsIHZhbCk7XG4gICAgICBjb25zdCByZWZOYW1lID0gcHJvcChcInJlZk5hbWVcIiwgcmVmUm91dGUubWF0Y2gocmVmIHx8IFwiXCIpKTtcblxuICAgICAgcmV0dXJuIHJlZk5hbWUgPyBwcm9wKHJlZk5hbWUsIGRlZnMpIDogdmFsO1xuICAgIH07XG5cbiAgICBub2RlVHlwZXMucHVzaCh0eXBlTmFtZSk7XG4gICAgcmV0dXJuIGNvbXBvc2UoXG4gICAgICBhc3NvY1BhdGgoW3R5cGVOYW1lLCBcIiRhc3luY1wiXSwgdHJ1ZSksXG4gICAgICBhc3NvYyhgJHt0eXBlTmFtZX1Tb3VsYCwge1xuICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICBwYXR0ZXJuOiByb3V0ZVRvUmVnZXhTdHIocm91dGUpXG4gICAgICB9KSxcbiAgICAgIGFzc29jKGAke3R5cGVOYW1lfUVkZ2VgLCB7XG4gICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIFwiI1wiOiB7ICRyZWY6IGAjL2RlZmluaXRpb25zLyR7dHlwZU5hbWV9U291bGAgfVxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZDogW1wiI1wiXVxuICAgICAgfSksXG4gICAgICBhc3NvY1BhdGgoXG4gICAgICAgIFt0eXBlTmFtZSwgXCJyZXF1aXJlZFwiXSxcbiAgICAgICAgWy4uLihwYXRoKFt0eXBlTmFtZSwgXCJyZXF1aXJlZFwiXSwgZGVmcykgfHwgW10pLCBcIl9cIl1cbiAgICAgICksXG4gICAgICBhc3NvY1BhdGgoW3R5cGVOYW1lLCBcInByb3BlcnRpZXNcIiwgXCJfXCJdLCB7XG4gICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgIGFsbE9mOiBbeyAkcmVmOiBcIiMvZGVmaW5pdGlvbnMvR3VuTm9kZU1ldGFcIiB9XSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIFwiI1wiOiB7ICRyZWY6IGAjL2RlZmluaXRpb25zLyR7dHlwZU5hbWV9U291bGAgfSxcbiAgICAgICAgICBcIj5cIjoge1xuICAgICAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IGtleXMocGF0aE9yUmVmKFt0eXBlTmFtZSwgXCJwcm9wZXJ0aWVzXCJdKSkucmVkdWNlKFxuICAgICAgICAgICAgICAocHJvcHMsIGtleSkgPT4gYXNzb2Moa2V5LCB7IHR5cGU6IFwibnVtYmVyXCIgfSwgcHJvcHMpLFxuICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHBhdHRlcm5Qcm9wZXJ0aWVzOiBrZXlzKFxuICAgICAgICAgICAgICBwYXRoT3JSZWYoW3R5cGVOYW1lLCBcInBhdHRlcm5Qcm9wZXJ0aWVzXCJdKVxuICAgICAgICAgICAgKS5yZWR1Y2UoKHByb3BzLCBrZXkpID0+IGFzc29jKGtleSwgeyB0eXBlOiBcIm51bWJlclwiIH0sIHByb3BzKSwge30pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICkoZGVmcyk7XG4gIH0sIHN1cHBsaWVkKTtcblxuICBjb25zdCBzY2hlbWEgPSB7XG4gICAgJGlkOiBpZCxcbiAgICAkc2NoZW1hOiBqc29uU2NoZW1hLFxuICAgICRhc3luYzogdHJ1ZSxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBhbnlPZjogW3sgJHJlZjogXCIjL2RlZmluaXRpb25zL0d1bk1zZ1wiIH1dLFxuICAgIGRlZmluaXRpb25zOiB7XG4gICAgICBHdW5Nc2c6IHtcbiAgICAgICAgJGFzeW5jOiB0cnVlLFxuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICByZXF1aXJlZDogW1wiI1wiXSxcbiAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgXCIjXCI6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIk1lc3NhZ2UgSWRlbnRpZmllclwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBzaG91bGQgYmUgYSBnbG9iYWxseSB1bmlxdWUgaWRlbnRpZmllclwiLFxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCIjI1wiOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJGYXN0IEhhc2ggVmFsdWU/XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJJIGhhdmUgbm8gaWRlYSBob3cgdGhpcyBpcyBjYWxjdWxhdGVkXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIkBcIjoge1xuICAgICAgICAgICAgdGl0bGU6IFwiUmVzcG9uZGluZyBUb1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIG1lc3NhZ2UgaWRlbnRpZmllciB0aGlzIG1lc3NhZ2UgaXMgcmVzcG9uZGluZyB0b1wiLFxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI+PFwiOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJBZGphY2VudCBQZWVyc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTm90IHJlYWxseSBzdXJlIGhvdyB0aGlzIHdvcmtzXCIsXG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvazoge1xuICAgICAgICAgICAgdGl0bGU6IFwiPz9cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNob3VsZG4ndCBhY3R1YWxseSBiZSBzZW50IG92ZXIgd2lyZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJib29sZWFuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhvdzoge1xuICAgICAgICAgICAgdGl0bGU6IFwiVXNlZCBmb3IgZGVidWdnaW5nXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTaG91bGRuJ3QgYWN0dWFsbHkgYmUgc2VudCBvdmVyIHdpcmUgKGJ1dCBpdCBpcylcIixcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lc2g6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIj8/XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTaG91bGRuJ3QgYmUgc2VudCBvdmVyIHdpcmVcIixcbiAgICAgICAgICAgIHR5cGU6IFwib2JqZWN0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycjoge1xuICAgICAgICAgICAgYW55T2Y6IFt7IHR5cGU6IFwibnVsbFwiIH0sIHsgdHlwZTogXCJzdHJpbmdcIiB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVlY2g6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkxlZWNoIENvbW1hbmRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkd1biBwcm90b2NvbCBleHRlbnNpb24gYWRkZWQgYnkgcGlzdG9sXCIsXG4gICAgICAgICAgICB0eXBlOiBcImJvb2xlYW5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgICB0aXRsZTogXCJHZXQgQ29tbWFuZFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSByZXF1ZXN0IGZvciBncmFwaCBkYXRhXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFtcIiNcIl0sXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIFwiI1wiOiB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHNvdWwgdG8gcmVxdWVzdCBkYXRhIGZvclwiLFxuICAgICAgICAgICAgICAgIGFueU9mOiBub2RlVHlwZXMubWFwKG5hbWUgPT4gKHtcbiAgICAgICAgICAgICAgICAgICRyZWY6IGAjL2RlZmluaXRpb25zLyR7bmFtZX1Tb3VsYFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcIi5cIjoge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlcXVlc3QgYSBzaW5nbGUgcHJvcGVydHk/XCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwdXQ6IHtcbiAgICAgICAgICAgICRhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIlB1dCBDb21tYW5kXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIHBheWxvYWQgb2YgZ3JhcGggZGF0YVwiLFxuICAgICAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIGFueU9mOiBub2RlVHlwZXMubWFwKG5hbWUgPT4gKHtcbiAgICAgICAgICAgICAgICAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke25hbWV9YFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBHdW5DaGFuZ2VTdGF0ZXM6IHtcbiAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgdGl0bGU6IFwiR3VuIENoYW5nZSBTdGF0ZXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBtYXAgb2YgcHJvcGVydHkgbmFtZXMgdG8gdXBkYXRlIHRpbWVzdGFtcHNcIixcbiAgICAgICAgcGF0dGVyblByb3BlcnRpZXM6IHtcbiAgICAgICAgICBcIi4qXCI6IHtcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBHdW5Ob2RlTWV0YToge1xuICAgICAgICB0aXRsZTogXCJHdW4gTm9kZSBNZXRhZGF0YVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDaGFuZ2UgU3RhdGUgYW5kIHNvdWwgb2YgYSBndW4gbm9kZVwiLFxuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBcIiNcIjogeyB0aXRsZTogXCJTb3VsXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICBcIj5cIjogeyAkcmVmOiBcIiMvZGVmaW5pdGlvbnMvR3VuQ2hhbmdlU3RhdGVzXCIgfVxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZDogW1wiI1wiLCBcIj5cIl1cbiAgICAgIH0sXG4gICAgICBHdW5FZGdlOiB7XG4gICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIFwiI1wiOiB7IHR5cGU6IFwic3RyaW5nXCIgfVxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZDogW1wiI1wiXVxuICAgICAgfSxcbiAgICAgIC4uLmRlZmluaXRpb25zXG4gICAgfVxuICB9O1xuICBjb25zdCBhanYgPSBpbml0KCk7XG5cbiAgYWp2LmFkZFNjaGVtYSh7XG4gICAgJGlkOiBcInNjaGVtYS5qc29uXCIsXG4gICAgZGVmaW5pdGlvbnM6IHNjaGVtYS5kZWZpbml0aW9uc1xuICB9KTtcbiAgcmV0dXJuIHsgc2NoZW1hLCB2YWxpZGF0ZTogYWp2LmNvbXBpbGUoc2NoZW1hKSB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Fqdl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yb3V0ZV9wYXJzZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcm91dGVfcGFyc2VyX2xpYl9yb3V0ZV92aXNpdG9yc19yZWdleHBfXzsiXSwic291cmNlUm9vdCI6IiJ9