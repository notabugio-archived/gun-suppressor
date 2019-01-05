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
        } // required: ["#"] // Required for sent messages

      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3IvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3IvZXh0ZXJuYWwgXCJhanZcIiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci9leHRlcm5hbCBcInJhbWRhXCIiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3IvZXh0ZXJuYWwgXCJyb3V0ZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci9leHRlcm5hbCBcInJvdXRlLXBhcnNlci9saWIvcm91dGUvdmlzaXRvcnMvcmVnZXhwXCIiXSwibmFtZXMiOlsicmVmUm91dGUiLCJyb3V0ZVRvUmVnZXhTdHIiLCJyb3V0ZSIsInZpc2l0IiwiYXN0IiwicmUiLCJyZVN0ciIsInRvU3RyaW5nIiwic2xpY2UiLCJsZW5ndGgiLCJQRVJNSVNTSVZFX1NDSEVNQSIsIk5vZGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiJGFzeW5jIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbnlPZiIsIiRyZWYiLCJ0eXBlIiwic291bCIsInBhdHRlcm4iLCJwcm9wZXJ0aWVzIiwicmVxdWlyZWQiLCJERUZBVUxUX1NDSEVNQSIsImNvbXBpbGVWYWxpZGF0ZVNvdWwiLCJhanYiLCJzY2hlbWEiLCJwYXJlbnRTY2hlbWEiLCJtYXRjaFNjaGVtYSIsImRhdGEiLCJfY1BhdGgiLCJfcGFyZW50RGF0YSIsImtleUluUGFyZW50IiwibWF0Y2giLCJjb21waWxlIiwiY29tcGlsZVByb3BzRnJvbVNvdWwiLCJwcm9wTWFwIiwic291bFByb3BzIiwiZmluZCIsInByb3BOYW1lIiwiY29tcGlsZUVkZ2VNYXRjaGVzS2V5IiwiaW5pdEFqdiIsImNvZXJjZVR5cGVzIiwicmVtb3ZlQWRkaXRpb25hbCIsImNvbmZpZyIsImFkZEtleXdvcmQiLCJjcmVhdGVTdXBwcmVzc29yIiwiaW5pdCIsImlkIiwianNvblNjaGVtYSIsImRlZmluaXRpb25zIiwic3VwcGxpZWQiLCJub2RlVHlwZXMiLCJyZWR1Y2UiLCJkZWZzIiwidHlwZU5hbWUiLCJwYXRoT3JSZWYiLCJwIiwidmFsIiwicmVmIiwicmVmTmFtZSIsInB1c2giLCJhbGxPZiIsInByb3BzIiwia2V5IiwicGF0dGVyblByb3BlcnRpZXMiLCIkaWQiLCIkc2NoZW1hIiwiR3VuTXNnIiwib2siLCJob3ciLCJtZXNoIiwiZXJyIiwibGVlY2giLCJnZXQiLCJtYXAiLCJuYW1lIiwicHV0IiwiR3VuQ2hhbmdlU3RhdGVzIiwiR3VuTm9kZU1ldGEiLCJHdW5FZGdlIiwiYWRkU2NoZW1hIiwidmFsaWRhdGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLHlCQUFVLHdCQUFWLENBQWpCOztBQUVBLFNBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQUEsOEJBQ2YsZ0JBQW1CQyxLQUFuQixDQUF5QkQsS0FBSyxDQUFDRSxHQUEvQixDQURlO0FBQUEsTUFDdEJDLEVBRHNCLHlCQUN0QkEsRUFEc0I7O0FBRTlCLE1BQU1DLEtBQUssR0FBR0QsRUFBRSxDQUFDRSxRQUFILEVBQWQ7QUFFQSxTQUFPRCxLQUFLLENBQUNFLEtBQU4sQ0FBWSxDQUFaLEVBQWVGLEtBQUssQ0FBQ0csTUFBTixHQUFlLENBQTlCLENBQVA7QUFDRDs7QUFFTSxJQUFNQyxpQkFBaUIsR0FBRztBQUMvQkMsTUFBSSxFQUFFO0FBQ0pDLFNBQUssRUFBRSxVQURIO0FBRUpDLGVBQVcsRUFBRSwyQkFGVDtBQUdKQyxVQUFNLEVBQUUsSUFISjtBQUlKQyx3QkFBb0IsRUFBRTtBQUNwQkMsV0FBSyxFQUFFLENBQ0w7QUFBRUMsWUFBSSxFQUFFO0FBQVIsT0FESyxFQUVMO0FBQUVDLFlBQUksRUFBRTtBQUFSLE9BRkssRUFHTDtBQUFFQSxZQUFJLEVBQUU7QUFBUixPQUhLLEVBSUw7QUFBRUEsWUFBSSxFQUFFO0FBQVIsT0FKSyxFQUtMO0FBQUVBLFlBQUksRUFBRTtBQUFSLE9BTEs7QUFEYSxLQUpsQjtBQWFKQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLE9BREw7QUFFSkMsZ0JBQVUsRUFBRTtBQUNWRixZQUFJLEVBQUU7QUFBRUQsY0FBSSxFQUFFO0FBQVI7QUFESSxPQUZSO0FBS0pJLGNBQVEsRUFBRSxDQUFDLE1BQUQ7QUFMTjtBQWJGO0FBRHlCLENBQTFCOztBQXdCUCxJQUFNQyxjQUFjLEdBQUdiLGlCQUF2Qjs7QUFFQSxJQUFNYyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUFDLEdBQUc7QUFBQSxTQUFJLFVBQUNDLE1BQUQsRUFBU0MsWUFBVCxFQUEwQjtBQUFBLGVBQ3ZCRCxNQUFNLElBQUksRUFEYTtBQUFBLFFBQ25ETixPQURtRCxRQUNuREEsT0FEbUQ7QUFBQSxRQUN2Q1EsV0FEdUM7O0FBRTNELFFBQU0xQixLQUFLLEdBQUdrQixPQUFPLElBQUkseUJBQVVBLE9BQVYsQ0FBekI7QUFFQSxXQUFPLFVBQUNTLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxXQUFmLEVBQTRCQyxXQUE1QixFQUE0QztBQUNqRCxVQUFNYixJQUFJLEdBQUcsaUJBQUssQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFMLEVBQWlCVSxJQUFqQixDQUFiO0FBRUEsVUFBSSxDQUFDVixJQUFELElBQVMsQ0FBQ0MsT0FBVixJQUFxQkQsSUFBSSxLQUFLYSxXQUFsQyxFQUErQyxPQUFPLEtBQVA7QUFDL0MsVUFBTUMsS0FBSyxHQUFHL0IsS0FBSyxDQUFDK0IsS0FBTixDQUFZZCxJQUFaLENBQWQ7QUFFQSxhQUFPYyxLQUFLLEdBQUdSLEdBQUcsQ0FBQ1MsT0FBSixDQUFZTixXQUFaLEVBQXlCSyxLQUF6QixDQUFILEdBQXFDLEtBQWpEO0FBQ0QsS0FQRDtBQVFELEdBWjhCO0FBQUEsQ0FBL0I7O0FBY0EsSUFBTUUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxPQUFELEVBQVVULFlBQVYsRUFBMkI7QUFDdEQsTUFBTVAsT0FBTyxHQUFHLGlCQUFLLENBQUMsTUFBRCxFQUFTLFNBQVQsQ0FBTCxFQUEwQk8sWUFBMUIsQ0FBaEI7QUFDQSxNQUFNekIsS0FBSyxHQUFHa0IsT0FBTyxJQUFJLHlCQUFVQSxPQUFWLENBQXpCO0FBRUEsU0FBTyxVQUFBUyxJQUFJLEVBQUk7QUFDYixRQUFNVixJQUFJLEdBQUcsaUJBQUssQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFMLEVBQWlCVSxJQUFqQixDQUFiO0FBQ0EsUUFBTVEsU0FBUyxHQUFHbkMsS0FBSyxDQUFDK0IsS0FBTixDQUFZZCxJQUFaLEtBQXFCLEVBQXZDO0FBRUEsV0FBTyxDQUFDLGlCQUFLaUIsT0FBTCxFQUFjRSxJQUFkLENBQW1CLFVBQUFDLFFBQVEsRUFBSTtBQUNyQyxVQUFJLEVBQUVBLFFBQVEsSUFBSVYsSUFBZCxDQUFKLEVBQXlCLE9BQU8sS0FBUDtBQUN6QixhQUFPLGlCQUFLVSxRQUFMLEVBQWVGLFNBQWYsTUFBOEIsaUJBQUssaUJBQUtFLFFBQUwsRUFBZUgsT0FBZixDQUFMLEVBQThCUCxJQUE5QixDQUFyQztBQUNELEtBSE8sQ0FBUjtBQUlELEdBUkQ7QUFTRCxDQWJEOztBQWVBLElBQU1XLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQWYsR0FBRztBQUFBLFNBQUksVUFBQUMsTUFBTTtBQUFBLFdBQUksVUFDN0NHLElBRDZDLEVBRTdDQyxNQUY2QyxFQUc3Q0MsV0FINkMsRUFJN0NDLFdBSjZDO0FBQUEsYUFLekNOLE1BQU0sR0FBRyxpQkFBSyxHQUFMLEVBQVVHLElBQVYsTUFBb0JHLFdBQXZCLEdBQXFDLElBTEY7QUFBQSxLQUFKO0FBQUEsR0FBVjtBQUFBLENBQWpDOztBQU9PLFNBQVNTLE9BQVQsR0FJQztBQUFBLGtGQUFKLEVBQUk7QUFBQSxnQ0FITkMsV0FHTTtBQUFBLE1BSE5BLFdBR00sa0NBSFEsSUFHUjtBQUFBLG9DQUZOQyxnQkFFTTtBQUFBLE1BRk5BLGdCQUVNLHNDQUZhLEtBRWI7QUFBQSxNQURIQyxNQUNHOztBQUNOLE1BQU1uQixHQUFHLEdBQUcsaUJBQVE7QUFBRWlCLGVBQVcsRUFBWEEsV0FBRjtBQUFlQyxvQkFBZ0IsRUFBaEJBLGdCQUFmO0FBQWlDLE9BQUdDO0FBQXBDLEdBQVIsQ0FBWjtBQUVBbkIsS0FBRyxDQUFDb0IsVUFBSixDQUFlLE1BQWYsRUFBdUI7QUFBRVgsV0FBTyxFQUFFVixtQkFBbUIsQ0FBQ0MsR0FBRDtBQUE5QixHQUF2QjtBQUNBQSxLQUFHLENBQUNvQixVQUFKLENBQWUsZ0JBQWYsRUFBaUM7QUFBRVgsV0FBTyxFQUFFTSxxQkFBcUIsQ0FBQ2YsR0FBRDtBQUFoQyxHQUFqQztBQUNBQSxLQUFHLENBQUNvQixVQUFKLENBQWUsZUFBZixFQUFnQztBQUFFWCxXQUFPLEVBQUVDO0FBQVgsR0FBaEM7QUFDQSxTQUFPVixHQUFQO0FBQ0Q7O0FBRU0sU0FBU3FCLGdCQUFULEdBT0M7QUFBQSxrRkFBSixFQUFJO0FBQUEseUJBTk5DLElBTU07QUFBQSxNQU5OQSxJQU1NLDJCQU5DTixPQU1EO0FBQUEsdUJBTE5PLEVBS007QUFBQSxNQUxOQSxFQUtNLHlCQUxELDRDQUtDO0FBQUEsK0JBSk5DLFVBSU07QUFBQSxNQUpOQSxVQUlNLGlDQUpPLHlDQUlQO0FBQUEsMEJBSE5yQyxLQUdNO0FBQUEsTUFITkEsS0FHTSw0QkFIRSxvQkFHRjtBQUFBLGdDQUZOQyxXQUVNO0FBQUEsTUFGTkEsV0FFTSxrQ0FGUSx5Q0FFUjtBQUFBLGdDQUROcUMsV0FDTTtBQUFBLE1BRE9DLFFBQ1Asa0NBRGtCNUIsY0FDbEI7O0FBQ04sTUFBTTZCLFNBQVMsR0FBRyxFQUFsQjtBQUNBLE1BQU1GLFdBQVcsR0FBRyxpQkFBS0MsUUFBTCxFQUFlRSxNQUFmLENBQXNCLFVBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUFBLGdCQUN4QyxpQkFBSyxDQUFDQSxRQUFELEVBQVcsTUFBWCxDQUFMLEVBQXlCRCxJQUF6QixLQUFrQyxFQURNO0FBQUEsUUFDcERsQyxPQURvRCxTQUNwREEsT0FEb0Q7O0FBRzVELFFBQUksQ0FBQ0EsT0FBTCxFQUFjLE9BQU9rQyxJQUFQO0FBQ2QsUUFBTXBELEtBQUssR0FBRyx5QkFBVWtCLE9BQVYsQ0FBZDs7QUFDQSxRQUFNb0MsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQUMsQ0FBQyxFQUFJO0FBQ3JCLFVBQU1DLEdBQUcsR0FBRyxpQkFBS0QsQ0FBTCxFQUFRSCxJQUFSLENBQVo7QUFDQSxVQUFNSyxHQUFHLEdBQUcsaUJBQUssT0FBTCxFQUFjRCxHQUFkLENBQVo7QUFDQSxVQUFNRSxPQUFPLEdBQUcsaUJBQUssU0FBTCxFQUFnQjVELFFBQVEsQ0FBQ2lDLEtBQVQsQ0FBZTBCLEdBQUcsSUFBSSxFQUF0QixDQUFoQixDQUFoQjtBQUVBLGFBQU9DLE9BQU8sR0FBRyxpQkFBS0EsT0FBTCxFQUFjTixJQUFkLENBQUgsR0FBeUJJLEdBQXZDO0FBQ0QsS0FORDs7QUFRQU4sYUFBUyxDQUFDUyxJQUFWLENBQWVOLFFBQWY7QUFDQSxXQUFPLG9CQUNMLHNCQUFVLENBQUNBLFFBQUQsRUFBVyxRQUFYLENBQVYsRUFBZ0MsSUFBaEMsQ0FESyxFQUVMLDRCQUFTQSxRQUFULFdBQXlCO0FBQ3ZCckMsVUFBSSxFQUFFLFFBRGlCO0FBRXZCRSxhQUFPLEVBQUVuQixlQUFlLENBQUNDLEtBQUQ7QUFGRCxLQUF6QixDQUZLLEVBTUwsNEJBQVNxRCxRQUFULFdBQXlCO0FBQ3ZCckMsVUFBSSxFQUFFLFFBRGlCO0FBRXZCSCwwQkFBb0IsRUFBRSxLQUZDO0FBR3ZCTSxnQkFBVSxFQUFFO0FBQ1YsYUFBSztBQUFFSixjQUFJLDBCQUFtQnNDLFFBQW5CO0FBQU4sU0FESyxDQUdaOztBQUhZO0FBSFcsS0FBekIsQ0FOSyxFQWNMLHNCQUNFLENBQUNBLFFBQUQsRUFBVyxVQUFYLENBREYsK0JBRU8saUJBQUssQ0FBQ0EsUUFBRCxFQUFXLFVBQVgsQ0FBTCxFQUE2QkQsSUFBN0IsS0FBc0MsRUFGN0MsSUFFa0QsR0FGbEQsR0FkSyxFQWtCTCxzQkFBVSxDQUFDQyxRQUFELEVBQVcsWUFBWCxFQUF5QixHQUF6QixDQUFWLEVBQXlDO0FBQ3ZDckMsVUFBSSxFQUFFLFFBRGlDO0FBRXZDNEMsV0FBSyxFQUFFLENBQUM7QUFBRTdDLFlBQUksRUFBRTtBQUFSLE9BQUQsQ0FGZ0M7QUFHdkNJLGdCQUFVLEVBQUU7QUFDVixhQUFLO0FBQUVKLGNBQUksMEJBQW1Cc0MsUUFBbkI7QUFBTixTQURLO0FBRVYsYUFBSztBQUNIckMsY0FBSSxFQUFFLFFBREg7QUFFSEcsb0JBQVUsRUFBRSxpQkFBS21DLFNBQVMsQ0FBQyxDQUFDRCxRQUFELEVBQVcsWUFBWCxDQUFELENBQWQsRUFBMENGLE1BQTFDLENBQ1YsVUFBQ1UsS0FBRCxFQUFRQyxHQUFSO0FBQUEsbUJBQWdCLGtCQUFNQSxHQUFOLEVBQVc7QUFBRTlDLGtCQUFJLEVBQUU7QUFBUixhQUFYLEVBQStCNkMsS0FBL0IsQ0FBaEI7QUFBQSxXQURVLEVBRVYsRUFGVSxDQUZUO0FBTUhFLDJCQUFpQixFQUFFLGlCQUNqQlQsU0FBUyxDQUFDLENBQUNELFFBQUQsRUFBVyxtQkFBWCxDQUFELENBRFEsRUFFakJGLE1BRmlCLENBRVYsVUFBQ1UsS0FBRCxFQUFRQyxHQUFSO0FBQUEsbUJBQWdCLGtCQUFNQSxHQUFOLEVBQVc7QUFBRTlDLGtCQUFJLEVBQUU7QUFBUixhQUFYLEVBQStCNkMsS0FBL0IsQ0FBaEI7QUFBQSxXQUZVLEVBRTZDLEVBRjdDO0FBTmhCO0FBRks7QUFIMkIsS0FBekMsQ0FsQkssRUFtQ0xULElBbkNLLENBQVA7QUFvQ0QsR0FsRG1CLEVBa0RqQkgsUUFsRGlCLENBQXBCO0FBb0RBLE1BQU16QixNQUFNLEdBQUc7QUFDYndDLE9BQUcsRUFBRWxCLEVBRFE7QUFFYm1CLFdBQU8sRUFBRWxCLFVBRkk7QUFHYm5DLFVBQU0sRUFBRSxJQUhLO0FBSWJGLFNBQUssRUFBTEEsS0FKYTtBQUtiQyxlQUFXLEVBQVhBLFdBTGE7QUFNYkcsU0FBSyxFQUFFLENBQUM7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FBRCxDQU5NO0FBT2JpQyxlQUFXLEVBQUU7QUFDWGtCLFlBQU0sRUFBRTtBQUNOdEQsY0FBTSxFQUFFLElBREY7QUFFTkksWUFBSSxFQUFFLFFBRkE7QUFHTkksZ0JBQVEsRUFBRSxDQUFDLEdBQUQsQ0FISjtBQUlOUCw0QkFBb0IsRUFBRSxLQUpoQjtBQUtOTSxrQkFBVSxFQUFFO0FBQ1YsZUFBSztBQUNIVCxpQkFBSyxFQUFFLG9CQURKO0FBRUhDLHVCQUFXLEVBQUUsNkNBRlY7QUFHSEssZ0JBQUksRUFBRTtBQUhILFdBREs7QUFNVixnQkFBTTtBQUNKTixpQkFBSyxFQUFFLGtCQURIO0FBRUpDLHVCQUFXLEVBQUUsdUNBRlQ7QUFHSkssZ0JBQUksRUFBRTtBQUhGLFdBTkk7QUFXVixlQUFLO0FBQ0hOLGlCQUFLLEVBQUUsZUFESjtBQUVIQyx1QkFBVyxFQUFFLHNEQUZWO0FBR0hLLGdCQUFJLEVBQUU7QUFISCxXQVhLO0FBZ0JWLGdCQUFNO0FBQ0pOLGlCQUFLLEVBQUUsZ0JBREg7QUFFSkMsdUJBQVcsRUFBRSxnQ0FGVDtBQUdKSyxnQkFBSSxFQUFFO0FBSEYsV0FoQkk7QUFxQlZtRCxZQUFFLEVBQUU7QUFDRnpELGlCQUFLLEVBQUUsSUFETDtBQUVGQyx1QkFBVyxFQUFFLHNDQUZYO0FBR0ZLLGdCQUFJLEVBQUU7QUFISixXQXJCTTtBQTBCVm9ELGFBQUcsRUFBRTtBQUNIMUQsaUJBQUssRUFBRSxvQkFESjtBQUVIQyx1QkFBVyxFQUFFLGtEQUZWO0FBR0hLLGdCQUFJLEVBQUU7QUFISCxXQTFCSztBQStCVnFELGNBQUksRUFBRTtBQUNKM0QsaUJBQUssRUFBRSxJQURIO0FBRUpDLHVCQUFXLEVBQUUsNkJBRlQ7QUFHSkssZ0JBQUksRUFBRTtBQUhGLFdBL0JJO0FBb0NWc0QsYUFBRyxFQUFFO0FBQ0h4RCxpQkFBSyxFQUFFLENBQUM7QUFBRUUsa0JBQUksRUFBRTtBQUFSLGFBQUQsRUFBbUI7QUFBRUEsa0JBQUksRUFBRTtBQUFSLGFBQW5CO0FBREosV0FwQ0s7QUF1Q1Z1RCxlQUFLLEVBQUU7QUFDTDdELGlCQUFLLEVBQUUsZUFERjtBQUVMQyx1QkFBVyxFQUFFLHdDQUZSO0FBR0xLLGdCQUFJLEVBQUU7QUFIRCxXQXZDRztBQTRDVndELGFBQUcsRUFBRTtBQUNIOUQsaUJBQUssRUFBRSxhQURKO0FBRUhDLHVCQUFXLEVBQUUsMEJBRlY7QUFHSEssZ0JBQUksRUFBRSxRQUhIO0FBSUhILGdDQUFvQixFQUFFLEtBSm5CO0FBS0hPLG9CQUFRLEVBQUUsQ0FBQyxHQUFELENBTFA7QUFNSEQsc0JBQVUsRUFBRTtBQUNWLG1CQUFLO0FBQ0hSLDJCQUFXLEVBQUUsOEJBRFY7QUFFSEcscUJBQUssRUFBRW9DLFNBQVMsQ0FBQ3VCLEdBQVYsQ0FBYyxVQUFBQyxJQUFJO0FBQUEseUJBQUs7QUFDNUIzRCx3QkFBSSwwQkFBbUIyRCxJQUFuQjtBQUR3QixtQkFBTDtBQUFBLGlCQUFsQjtBQUZKLGVBREs7QUFPVixtQkFBSztBQUNIL0QsMkJBQVcsRUFBRSw0QkFEVjtBQUVISyxvQkFBSSxFQUFFO0FBRkg7QUFQSztBQU5ULFdBNUNLO0FBK0RWMkQsYUFBRyxFQUFFO0FBQ0gvRCxrQkFBTSxFQUFFLElBREw7QUFFSEYsaUJBQUssRUFBRSxhQUZKO0FBR0hDLHVCQUFXLEVBQUUseUJBSFY7QUFJSEssZ0JBQUksRUFBRSxRQUpIO0FBS0hILGdDQUFvQixFQUFFO0FBQ3BCQyxtQkFBSyxFQUFFb0MsU0FBUyxDQUFDdUIsR0FBVixDQUFjLFVBQUFDLElBQUk7QUFBQSx1QkFBSztBQUM1QjNELHNCQUFJLDBCQUFtQjJELElBQW5CO0FBRHdCLGlCQUFMO0FBQUEsZUFBbEI7QUFEYTtBQUxuQjtBQS9ESztBQUxOLE9BREc7QUFrRlhFLHFCQUFlLEVBQUU7QUFDZjVELFlBQUksRUFBRSxRQURTO0FBRWZOLGFBQUssRUFBRSxtQkFGUTtBQUdmQyxtQkFBVyxFQUFFLDhDQUhFO0FBSWZvRCx5QkFBaUIsRUFBRTtBQUNqQixnQkFBTTtBQUNKL0MsZ0JBQUksRUFBRTtBQURGO0FBRFc7QUFKSixPQWxGTjtBQTRGWDZELGlCQUFXLEVBQUU7QUFDWG5FLGFBQUssRUFBRSxtQkFESTtBQUVYQyxtQkFBVyxFQUFFLHFDQUZGO0FBR1hLLFlBQUksRUFBRSxRQUhLO0FBSVhILDRCQUFvQixFQUFFLEtBSlg7QUFLWE0sa0JBQVUsRUFBRTtBQUNWLGVBQUs7QUFBRVQsaUJBQUssRUFBRSxNQUFUO0FBQWlCTSxnQkFBSSxFQUFFO0FBQXZCLFdBREs7QUFFVixlQUFLO0FBQUVELGdCQUFJLEVBQUU7QUFBUjtBQUZLLFNBTEQ7QUFTWEssZ0JBQVEsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOO0FBVEMsT0E1RkY7QUF1R1gwRCxhQUFPLEVBQUU7QUFDUDlELFlBQUksRUFBRSxRQURDO0FBRVBILDRCQUFvQixFQUFFLEtBRmY7QUFHUE0sa0JBQVUsRUFBRTtBQUNWLGVBQUs7QUFBRUgsZ0JBQUksRUFBRTtBQUFSO0FBREssU0FITDtBQU1QSSxnQkFBUSxFQUFFLENBQUMsR0FBRDtBQU5ILE9BdkdFO0FBK0dYLFNBQUc0QjtBQS9HUTtBQVBBLEdBQWY7QUF5SEEsTUFBTXpCLEdBQUcsR0FBR3NCLElBQUksRUFBaEI7QUFFQXRCLEtBQUcsQ0FBQ3dELFNBQUosQ0FBYztBQUNaZixPQUFHLEVBQUUsYUFETztBQUVaaEIsZUFBVyxFQUFFeEIsTUFBTSxDQUFDd0I7QUFGUixHQUFkO0FBSUEsU0FBTztBQUFFeEIsVUFBTSxFQUFOQSxNQUFGO0FBQVV3RCxZQUFRLEVBQUV6RCxHQUFHLENBQUNTLE9BQUosQ0FBWVIsTUFBWjtBQUFwQixHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUN0UkQsaUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsb0YiLCJmaWxlIjoiZ3VuLXN1cHByZXNzb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJhanZcIiksIHJlcXVpcmUoXCJyYW1kYVwiKSwgcmVxdWlyZShcInJvdXRlLXBhcnNlclwiKSwgcmVxdWlyZShcInJvdXRlLXBhcnNlci9saWIvcm91dGUvdmlzaXRvcnMvcmVnZXhwXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZ3VuLXN1cHByZXNzb3JcIiwgW1wiYWp2XCIsIFwicmFtZGFcIiwgXCJyb3V0ZS1wYXJzZXJcIiwgXCJyb3V0ZS1wYXJzZXIvbGliL3JvdXRlL3Zpc2l0b3JzL3JlZ2V4cFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJndW4tc3VwcHJlc3NvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImFqdlwiKSwgcmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwicm91dGUtcGFyc2VyXCIpLCByZXF1aXJlKFwicm91dGUtcGFyc2VyL2xpYi9yb3V0ZS92aXNpdG9ycy9yZWdleHBcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImd1bi1zdXBwcmVzc29yXCJdID0gZmFjdG9yeShyb290W1wiYWp2XCJdLCByb290W1wicmFtZGFcIl0sIHJvb3RbXCJyb3V0ZS1wYXJzZXJcIl0sIHJvb3RbXCJyb3V0ZS1wYXJzZXIvbGliL3JvdXRlL3Zpc2l0b3JzL3JlZ2V4cFwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9hanZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JvdXRlX3BhcnNlcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JvdXRlX3BhcnNlcl9saWJfcm91dGVfdmlzaXRvcnNfcmVnZXhwX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IGNvbXBvc2UsIGtleXMsIGFzc29jLCBhc3NvY1BhdGgsIHByb3AsIHBhdGggfSBmcm9tIFwicmFtZGFcIjtcbmltcG9ydCBSb3V0ZSBmcm9tIFwicm91dGUtcGFyc2VyXCI7XG5pbXBvcnQgUm91dGVSZWdleHBWaXNpdG9yIGZyb20gXCJyb3V0ZS1wYXJzZXIvbGliL3JvdXRlL3Zpc2l0b3JzL3JlZ2V4cFwiO1xuaW1wb3J0IEFqdiBmcm9tIFwiYWp2XCI7XG5cbmNvbnN0IHJlZlJvdXRlID0gbmV3IFJvdXRlKFwiIy9kZWZpbml0aW9ucy86cmVmTmFtZVwiKTtcblxuZnVuY3Rpb24gcm91dGVUb1JlZ2V4U3RyKHJvdXRlKSB7XG4gIGNvbnN0IHsgcmUgfSA9IFJvdXRlUmVnZXhwVmlzaXRvci52aXNpdChyb3V0ZS5hc3QpO1xuICBjb25zdCByZVN0ciA9IHJlLnRvU3RyaW5nKCk7XG5cbiAgcmV0dXJuIHJlU3RyLnNsaWNlKDEsIHJlU3RyLmxlbmd0aCAtIDEpO1xufVxuXG5leHBvcnQgY29uc3QgUEVSTUlTU0lWRV9TQ0hFTUEgPSB7XG4gIE5vZGU6IHtcbiAgICB0aXRsZTogXCJHdW4gTm9kZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFueSBub2RlIHN1cHBvcnRlZCBieSBndW5cIixcbiAgICAkYXN5bmM6IHRydWUsXG4gICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHtcbiAgICAgIGFueU9mOiBbXG4gICAgICAgIHsgJHJlZjogXCIjL2RlZmluaXRpb25zL0d1bkVkZ2VcIiB9LFxuICAgICAgICB7IHR5cGU6IFwibnVsbFwiIH0sXG4gICAgICAgIHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICB7IHR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgeyB0eXBlOiBcImJvb2xlYW5cIiB9XG4gICAgICBdXG4gICAgfSxcbiAgICBzb3VsOiB7XG4gICAgICBwYXR0ZXJuOiBcIipzb3VsXCIsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNvdWw6IHsgdHlwZTogXCJzdHJpbmdcIiB9XG4gICAgICB9LFxuICAgICAgcmVxdWlyZWQ6IFtcInNvdWxcIl1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IERFRkFVTFRfU0NIRU1BID0gUEVSTUlTU0lWRV9TQ0hFTUE7XG5cbmNvbnN0IGNvbXBpbGVWYWxpZGF0ZVNvdWwgPSBhanYgPT4gKHNjaGVtYSwgcGFyZW50U2NoZW1hKSA9PiB7XG4gIGNvbnN0IHsgcGF0dGVybiwgLi4ubWF0Y2hTY2hlbWEgfSA9IHNjaGVtYSB8fCB7fTtcbiAgY29uc3Qgcm91dGUgPSBwYXR0ZXJuICYmIG5ldyBSb3V0ZShwYXR0ZXJuKTtcblxuICByZXR1cm4gKGRhdGEsIF9jUGF0aCwgX3BhcmVudERhdGEsIGtleUluUGFyZW50KSA9PiB7XG4gICAgY29uc3Qgc291bCA9IHBhdGgoW1wiX1wiLCBcIiNcIl0sIGRhdGEpO1xuXG4gICAgaWYgKCFzb3VsIHx8ICFwYXR0ZXJuIHx8IHNvdWwgIT09IGtleUluUGFyZW50KSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgbWF0Y2ggPSByb3V0ZS5tYXRjaChzb3VsKTtcblxuICAgIHJldHVybiBtYXRjaCA/IGFqdi5jb21waWxlKG1hdGNoU2NoZW1hKShtYXRjaCkgOiBmYWxzZTtcbiAgfTtcbn07XG5cbmNvbnN0IGNvbXBpbGVQcm9wc0Zyb21Tb3VsID0gKHByb3BNYXAsIHBhcmVudFNjaGVtYSkgPT4ge1xuICBjb25zdCBwYXR0ZXJuID0gcGF0aChbXCJzb3VsXCIsIFwicGF0dGVyblwiXSwgcGFyZW50U2NoZW1hKTtcbiAgY29uc3Qgcm91dGUgPSBwYXR0ZXJuICYmIG5ldyBSb3V0ZShwYXR0ZXJuKTtcblxuICByZXR1cm4gZGF0YSA9PiB7XG4gICAgY29uc3Qgc291bCA9IHBhdGgoW1wiX1wiLCBcIiNcIl0sIGRhdGEpO1xuICAgIGNvbnN0IHNvdWxQcm9wcyA9IHJvdXRlLm1hdGNoKHNvdWwpIHx8IHt9O1xuXG4gICAgcmV0dXJuICFrZXlzKHByb3BNYXApLmZpbmQocHJvcE5hbWUgPT4ge1xuICAgICAgaWYgKCEocHJvcE5hbWUgaW4gZGF0YSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBwcm9wKHByb3BOYW1lLCBzb3VsUHJvcHMpICE9PSBwcm9wKHByb3AocHJvcE5hbWUsIHByb3BNYXApLCBkYXRhKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbmNvbnN0IGNvbXBpbGVFZGdlTWF0Y2hlc0tleSA9IGFqdiA9PiBzY2hlbWEgPT4gKFxuICBkYXRhLFxuICBfY1BhdGgsXG4gIF9wYXJlbnREYXRhLFxuICBrZXlJblBhcmVudFxuKSA9PiAoc2NoZW1hID8gcHJvcChcIiNcIiwgZGF0YSkgPT09IGtleUluUGFyZW50IDogdHJ1ZSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QWp2KHtcbiAgY29lcmNlVHlwZXMgPSB0cnVlLFxuICByZW1vdmVBZGRpdGlvbmFsID0gZmFsc2UsXG4gIC4uLmNvbmZpZ1xufSA9IHt9KSB7XG4gIGNvbnN0IGFqdiA9IG5ldyBBanYoeyBjb2VyY2VUeXBlcywgcmVtb3ZlQWRkaXRpb25hbCwgLi4uY29uZmlnIH0pO1xuXG4gIGFqdi5hZGRLZXl3b3JkKFwic291bFwiLCB7IGNvbXBpbGU6IGNvbXBpbGVWYWxpZGF0ZVNvdWwoYWp2KSB9KTtcbiAgYWp2LmFkZEtleXdvcmQoXCJlZGdlTWF0Y2hlc0tleVwiLCB7IGNvbXBpbGU6IGNvbXBpbGVFZGdlTWF0Y2hlc0tleShhanYpIH0pO1xuICBhanYuYWRkS2V5d29yZChcInByb3BzRnJvbVNvdWxcIiwgeyBjb21waWxlOiBjb21waWxlUHJvcHNGcm9tU291bCB9KTtcbiAgcmV0dXJuIGFqdjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN1cHByZXNzb3Ioe1xuICBpbml0ID0gaW5pdEFqdixcbiAgaWQgPSBcImh0dHA6Ly9leGFtcGxlLmNvbS9zY2hlbWFzL2d1bi1zY2hlbWEuanNvblwiLFxuICBqc29uU2NoZW1hID0gXCJodHRwOi8vanNvbi1zY2hlbWEub3JnL2RyYWZ0LTA3L3NjaGVtYSNcIixcbiAgdGl0bGUgPSBcIkd1biBNZXNzYWdlIFNjaGVtYVwiLFxuICBkZXNjcmlwdGlvbiA9IFwiQSBkZWZpbnRpb24gZm9yIHRoZSBndW5EQiB3aXJlIHByb3RvY29sXCIsXG4gIGRlZmluaXRpb25zOiBzdXBwbGllZCA9IERFRkFVTFRfU0NIRU1BXG59ID0ge30pIHtcbiAgY29uc3Qgbm9kZVR5cGVzID0gW107XG4gIGNvbnN0IGRlZmluaXRpb25zID0ga2V5cyhzdXBwbGllZCkucmVkdWNlKChkZWZzLCB0eXBlTmFtZSkgPT4ge1xuICAgIGNvbnN0IHsgcGF0dGVybiB9ID0gcGF0aChbdHlwZU5hbWUsIFwic291bFwiXSwgZGVmcykgfHwge307XG5cbiAgICBpZiAoIXBhdHRlcm4pIHJldHVybiBkZWZzO1xuICAgIGNvbnN0IHJvdXRlID0gbmV3IFJvdXRlKHBhdHRlcm4pO1xuICAgIGNvbnN0IHBhdGhPclJlZiA9IHAgPT4ge1xuICAgICAgY29uc3QgdmFsID0gcGF0aChwLCBkZWZzKTtcbiAgICAgIGNvbnN0IHJlZiA9IHByb3AoXCIkcmVmc1wiLCB2YWwpO1xuICAgICAgY29uc3QgcmVmTmFtZSA9IHByb3AoXCJyZWZOYW1lXCIsIHJlZlJvdXRlLm1hdGNoKHJlZiB8fCBcIlwiKSk7XG5cbiAgICAgIHJldHVybiByZWZOYW1lID8gcHJvcChyZWZOYW1lLCBkZWZzKSA6IHZhbDtcbiAgICB9O1xuXG4gICAgbm9kZVR5cGVzLnB1c2godHlwZU5hbWUpO1xuICAgIHJldHVybiBjb21wb3NlKFxuICAgICAgYXNzb2NQYXRoKFt0eXBlTmFtZSwgXCIkYXN5bmNcIl0sIHRydWUpLFxuICAgICAgYXNzb2MoYCR7dHlwZU5hbWV9U291bGAsIHtcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgcGF0dGVybjogcm91dGVUb1JlZ2V4U3RyKHJvdXRlKVxuICAgICAgfSksXG4gICAgICBhc3NvYyhgJHt0eXBlTmFtZX1FZGdlYCwge1xuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBcIiNcIjogeyAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke3R5cGVOYW1lfVNvdWxgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyByZXF1aXJlZDogW1wiI1wiXSAvLyBSZXF1aXJlZCBmb3Igc2VudCBtZXNzYWdlc1xuICAgICAgfSksXG4gICAgICBhc3NvY1BhdGgoXG4gICAgICAgIFt0eXBlTmFtZSwgXCJyZXF1aXJlZFwiXSxcbiAgICAgICAgWy4uLihwYXRoKFt0eXBlTmFtZSwgXCJyZXF1aXJlZFwiXSwgZGVmcykgfHwgW10pLCBcIl9cIl1cbiAgICAgICksXG4gICAgICBhc3NvY1BhdGgoW3R5cGVOYW1lLCBcInByb3BlcnRpZXNcIiwgXCJfXCJdLCB7XG4gICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgIGFsbE9mOiBbeyAkcmVmOiBcIiMvZGVmaW5pdGlvbnMvR3VuTm9kZU1ldGFcIiB9XSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIFwiI1wiOiB7ICRyZWY6IGAjL2RlZmluaXRpb25zLyR7dHlwZU5hbWV9U291bGAgfSxcbiAgICAgICAgICBcIj5cIjoge1xuICAgICAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IGtleXMocGF0aE9yUmVmKFt0eXBlTmFtZSwgXCJwcm9wZXJ0aWVzXCJdKSkucmVkdWNlKFxuICAgICAgICAgICAgICAocHJvcHMsIGtleSkgPT4gYXNzb2Moa2V5LCB7IHR5cGU6IFwibnVtYmVyXCIgfSwgcHJvcHMpLFxuICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHBhdHRlcm5Qcm9wZXJ0aWVzOiBrZXlzKFxuICAgICAgICAgICAgICBwYXRoT3JSZWYoW3R5cGVOYW1lLCBcInBhdHRlcm5Qcm9wZXJ0aWVzXCJdKVxuICAgICAgICAgICAgKS5yZWR1Y2UoKHByb3BzLCBrZXkpID0+IGFzc29jKGtleSwgeyB0eXBlOiBcIm51bWJlclwiIH0sIHByb3BzKSwge30pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICkoZGVmcyk7XG4gIH0sIHN1cHBsaWVkKTtcblxuICBjb25zdCBzY2hlbWEgPSB7XG4gICAgJGlkOiBpZCxcbiAgICAkc2NoZW1hOiBqc29uU2NoZW1hLFxuICAgICRhc3luYzogdHJ1ZSxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBhbnlPZjogW3sgJHJlZjogXCIjL2RlZmluaXRpb25zL0d1bk1zZ1wiIH1dLFxuICAgIGRlZmluaXRpb25zOiB7XG4gICAgICBHdW5Nc2c6IHtcbiAgICAgICAgJGFzeW5jOiB0cnVlLFxuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICByZXF1aXJlZDogW1wiI1wiXSxcbiAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgXCIjXCI6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIk1lc3NhZ2UgSWRlbnRpZmllclwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBzaG91bGQgYmUgYSBnbG9iYWxseSB1bmlxdWUgaWRlbnRpZmllclwiLFxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCIjI1wiOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJGYXN0IEhhc2ggVmFsdWU/XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJJIGhhdmUgbm8gaWRlYSBob3cgdGhpcyBpcyBjYWxjdWxhdGVkXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIkBcIjoge1xuICAgICAgICAgICAgdGl0bGU6IFwiUmVzcG9uZGluZyBUb1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIG1lc3NhZ2UgaWRlbnRpZmllciB0aGlzIG1lc3NhZ2UgaXMgcmVzcG9uZGluZyB0b1wiLFxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCI+PFwiOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJBZGphY2VudCBQZWVyc1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTm90IHJlYWxseSBzdXJlIGhvdyB0aGlzIHdvcmtzXCIsXG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvazoge1xuICAgICAgICAgICAgdGl0bGU6IFwiPz9cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNob3VsZG4ndCBhY3R1YWxseSBiZSBzZW50IG92ZXIgd2lyZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJib29sZWFuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhvdzoge1xuICAgICAgICAgICAgdGl0bGU6IFwiVXNlZCBmb3IgZGVidWdnaW5nXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTaG91bGRuJ3QgYWN0dWFsbHkgYmUgc2VudCBvdmVyIHdpcmUgKGJ1dCBpdCBpcylcIixcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lc2g6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIj8/XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTaG91bGRuJ3QgYmUgc2VudCBvdmVyIHdpcmVcIixcbiAgICAgICAgICAgIHR5cGU6IFwib2JqZWN0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycjoge1xuICAgICAgICAgICAgYW55T2Y6IFt7IHR5cGU6IFwibnVsbFwiIH0sIHsgdHlwZTogXCJzdHJpbmdcIiB9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGVlY2g6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkxlZWNoIENvbW1hbmRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkd1biBwcm90b2NvbCBleHRlbnNpb24gYWRkZWQgYnkgcGlzdG9sXCIsXG4gICAgICAgICAgICB0eXBlOiBcImJvb2xlYW5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgICB0aXRsZTogXCJHZXQgQ29tbWFuZFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSByZXF1ZXN0IGZvciBncmFwaCBkYXRhXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFtcIiNcIl0sXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIFwiI1wiOiB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHNvdWwgdG8gcmVxdWVzdCBkYXRhIGZvclwiLFxuICAgICAgICAgICAgICAgIGFueU9mOiBub2RlVHlwZXMubWFwKG5hbWUgPT4gKHtcbiAgICAgICAgICAgICAgICAgICRyZWY6IGAjL2RlZmluaXRpb25zLyR7bmFtZX1Tb3VsYFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcIi5cIjoge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlcXVlc3QgYSBzaW5nbGUgcHJvcGVydHk/XCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwdXQ6IHtcbiAgICAgICAgICAgICRhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIlB1dCBDb21tYW5kXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIHBheWxvYWQgb2YgZ3JhcGggZGF0YVwiLFxuICAgICAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIGFueU9mOiBub2RlVHlwZXMubWFwKG5hbWUgPT4gKHtcbiAgICAgICAgICAgICAgICAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke25hbWV9YFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBHdW5DaGFuZ2VTdGF0ZXM6IHtcbiAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgdGl0bGU6IFwiR3VuIENoYW5nZSBTdGF0ZXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBtYXAgb2YgcHJvcGVydHkgbmFtZXMgdG8gdXBkYXRlIHRpbWVzdGFtcHNcIixcbiAgICAgICAgcGF0dGVyblByb3BlcnRpZXM6IHtcbiAgICAgICAgICBcIi4qXCI6IHtcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBHdW5Ob2RlTWV0YToge1xuICAgICAgICB0aXRsZTogXCJHdW4gTm9kZSBNZXRhZGF0YVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDaGFuZ2UgU3RhdGUgYW5kIHNvdWwgb2YgYSBndW4gbm9kZVwiLFxuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBcIiNcIjogeyB0aXRsZTogXCJTb3VsXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICBcIj5cIjogeyAkcmVmOiBcIiMvZGVmaW5pdGlvbnMvR3VuQ2hhbmdlU3RhdGVzXCIgfVxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZDogW1wiI1wiLCBcIj5cIl1cbiAgICAgIH0sXG4gICAgICBHdW5FZGdlOiB7XG4gICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIFwiI1wiOiB7IHR5cGU6IFwic3RyaW5nXCIgfVxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZDogW1wiI1wiXVxuICAgICAgfSxcbiAgICAgIC4uLmRlZmluaXRpb25zXG4gICAgfVxuICB9O1xuICBjb25zdCBhanYgPSBpbml0KCk7XG5cbiAgYWp2LmFkZFNjaGVtYSh7XG4gICAgJGlkOiBcInNjaGVtYS5qc29uXCIsXG4gICAgZGVmaW5pdGlvbnM6IHNjaGVtYS5kZWZpbml0aW9uc1xuICB9KTtcbiAgcmV0dXJuIHsgc2NoZW1hLCB2YWxpZGF0ZTogYWp2LmNvbXBpbGUoc2NoZW1hKSB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Fqdl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yb3V0ZV9wYXJzZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcm91dGVfcGFyc2VyX2xpYl9yb3V0ZV92aXNpdG9yc19yZWdleHBfXzsiXSwic291cmNlUm9vdCI6IiJ9