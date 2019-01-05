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
          "$": {
            title: "??"
          },
          "I": {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3IvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3IvZXh0ZXJuYWwgXCJhanZcIiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci9leHRlcm5hbCBcInJhbWRhXCIiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3IvZXh0ZXJuYWwgXCJyb3V0ZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci9leHRlcm5hbCBcInJvdXRlLXBhcnNlci9saWIvcm91dGUvdmlzaXRvcnMvcmVnZXhwXCIiXSwibmFtZXMiOlsicmVmUm91dGUiLCJyb3V0ZVRvUmVnZXhTdHIiLCJyb3V0ZSIsInZpc2l0IiwiYXN0IiwicmUiLCJyZVN0ciIsInRvU3RyaW5nIiwic2xpY2UiLCJsZW5ndGgiLCJQRVJNSVNTSVZFX1NDSEVNQSIsIk5vZGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiJGFzeW5jIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJhbnlPZiIsIiRyZWYiLCJ0eXBlIiwic291bCIsInBhdHRlcm4iLCJwcm9wZXJ0aWVzIiwicmVxdWlyZWQiLCJERUZBVUxUX1NDSEVNQSIsImNvbXBpbGVWYWxpZGF0ZVNvdWwiLCJhanYiLCJzY2hlbWEiLCJwYXJlbnRTY2hlbWEiLCJtYXRjaFNjaGVtYSIsImRhdGEiLCJfY1BhdGgiLCJfcGFyZW50RGF0YSIsImtleUluUGFyZW50IiwibWF0Y2giLCJjb21waWxlIiwiY29tcGlsZVByb3BzRnJvbVNvdWwiLCJwcm9wTWFwIiwic291bFByb3BzIiwiZmluZCIsInByb3BOYW1lIiwiY29tcGlsZUVkZ2VNYXRjaGVzS2V5IiwiaW5pdEFqdiIsImNvZXJjZVR5cGVzIiwicmVtb3ZlQWRkaXRpb25hbCIsImNvbmZpZyIsImFkZEtleXdvcmQiLCJjcmVhdGVTdXBwcmVzc29yIiwiaW5pdCIsImlkIiwianNvblNjaGVtYSIsImRlZmluaXRpb25zIiwic3VwcGxpZWQiLCJub2RlVHlwZXMiLCJyZWR1Y2UiLCJkZWZzIiwidHlwZU5hbWUiLCJwYXRoT3JSZWYiLCJwIiwidmFsIiwicmVmIiwicmVmTmFtZSIsInB1c2giLCJhbGxPZiIsInByb3BzIiwia2V5IiwicGF0dGVyblByb3BlcnRpZXMiLCIkaWQiLCIkc2NoZW1hIiwiR3VuTXNnIiwib2siLCJob3ciLCJtZXNoIiwiZXJyIiwibGVlY2giLCJwaW5nIiwiZ2V0IiwibWFwIiwibmFtZSIsInB1dCIsIkd1bkNoYW5nZVN0YXRlcyIsIkd1bk5vZGVNZXRhIiwiR3VuRWRnZSIsImFkZFNjaGVtYSIsInZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Es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QkFBSSxFQUFFO0FBQXZCLFdBREs7QUFFVixlQUFLO0FBQUVELGdCQUFJLEVBQUU7QUFBUjtBQUZLLFNBTEQ7QUFTWEssZ0JBQVEsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOO0FBVEMsT0F0R0Y7QUFpSFgyRCxhQUFPLEVBQUU7QUFDUC9ELFlBQUksRUFBRSxRQURDO0FBRVBILDRCQUFvQixFQUFFLEtBRmY7QUFHUE0sa0JBQVUsRUFBRTtBQUNWLGVBQUs7QUFBRUgsZ0JBQUksRUFBRTtBQUFSO0FBREssU0FITDtBQU1QSSxnQkFBUSxFQUFFLENBQUMsR0FBRDtBQU5ILE9BakhFO0FBeUhYLFNBQUc0QjtBQXpIUTtBQVBBLEdBQWY7QUFtSUEsTUFBTXpCLEdBQUcsR0FBR3NCLElBQUksRUFBaEI7QUFFQXRCLEtBQUcsQ0FBQ3lELFNBQUosQ0FBYztBQUNaaEIsT0FBRyxFQUFFLGFBRE87QUFFWmhCLGVBQVcsRUFBRXhCLE1BQU0sQ0FBQ3dCO0FBRlIsR0FBZDtBQUlBLFNBQU87QUFBRXhCLFVBQU0sRUFBTkEsTUFBRjtBQUFVeUQsWUFBUSxFQUFFMUQsR0FBRyxDQUFDUyxPQUFKLENBQVlSLE1BQVo7QUFBcEIsR0FBUDtBQUNELEM7Ozs7Ozs7Ozs7O0FDaFNELGlEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG9GIiwiZmlsZSI6Imd1bi1zdXBwcmVzc29yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiYWp2XCIpLCByZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJyb3V0ZS1wYXJzZXJcIiksIHJlcXVpcmUoXCJyb3V0ZS1wYXJzZXIvbGliL3JvdXRlL3Zpc2l0b3JzL3JlZ2V4cFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImd1bi1zdXBwcmVzc29yXCIsIFtcImFqdlwiLCBcInJhbWRhXCIsIFwicm91dGUtcGFyc2VyXCIsIFwicm91dGUtcGFyc2VyL2xpYi9yb3V0ZS92aXNpdG9ycy9yZWdleHBcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3VuLXN1cHByZXNzb3JcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJhanZcIiksIHJlcXVpcmUoXCJyYW1kYVwiKSwgcmVxdWlyZShcInJvdXRlLXBhcnNlclwiKSwgcmVxdWlyZShcInJvdXRlLXBhcnNlci9saWIvcm91dGUvdmlzaXRvcnMvcmVnZXhwXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndW4tc3VwcHJlc3NvclwiXSA9IGZhY3Rvcnkocm9vdFtcImFqdlwiXSwgcm9vdFtcInJhbWRhXCJdLCByb290W1wicm91dGUtcGFyc2VyXCJdLCByb290W1wicm91dGUtcGFyc2VyL2xpYi9yb3V0ZS92aXNpdG9ycy9yZWdleHBcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYWp2X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFtZGFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yb3V0ZV9wYXJzZXJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yb3V0ZV9wYXJzZXJfbGliX3JvdXRlX3Zpc2l0b3JzX3JlZ2V4cF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBjb21wb3NlLCBrZXlzLCBhc3NvYywgYXNzb2NQYXRoLCBwcm9wLCBwYXRoIH0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgUm91dGUgZnJvbSBcInJvdXRlLXBhcnNlclwiO1xuaW1wb3J0IFJvdXRlUmVnZXhwVmlzaXRvciBmcm9tIFwicm91dGUtcGFyc2VyL2xpYi9yb3V0ZS92aXNpdG9ycy9yZWdleHBcIjtcbmltcG9ydCBBanYgZnJvbSBcImFqdlwiO1xuXG5jb25zdCByZWZSb3V0ZSA9IG5ldyBSb3V0ZShcIiMvZGVmaW5pdGlvbnMvOnJlZk5hbWVcIik7XG5cbmZ1bmN0aW9uIHJvdXRlVG9SZWdleFN0cihyb3V0ZSkge1xuICBjb25zdCB7IHJlIH0gPSBSb3V0ZVJlZ2V4cFZpc2l0b3IudmlzaXQocm91dGUuYXN0KTtcbiAgY29uc3QgcmVTdHIgPSByZS50b1N0cmluZygpO1xuXG4gIHJldHVybiByZVN0ci5zbGljZSgxLCByZVN0ci5sZW5ndGggLSAxKTtcbn1cblxuZXhwb3J0IGNvbnN0IFBFUk1JU1NJVkVfU0NIRU1BID0ge1xuICBOb2RlOiB7XG4gICAgdGl0bGU6IFwiR3VuIE5vZGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbnkgbm9kZSBzdXBwb3J0ZWQgYnkgZ3VuXCIsXG4gICAgJGFzeW5jOiB0cnVlLFxuICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgICBhbnlPZjogW1xuICAgICAgICB7ICRyZWY6IFwiIy9kZWZpbml0aW9ucy9HdW5FZGdlXCIgfSxcbiAgICAgICAgeyB0eXBlOiBcIm51bGxcIiB9LFxuICAgICAgICB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgeyB0eXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgIHsgdHlwZTogXCJib29sZWFuXCIgfVxuICAgICAgXVxuICAgIH0sXG4gICAgc291bDoge1xuICAgICAgcGF0dGVybjogXCIqc291bFwiLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBzb3VsOiB7IHR5cGU6IFwic3RyaW5nXCIgfVxuICAgICAgfSxcbiAgICAgIHJlcXVpcmVkOiBbXCJzb3VsXCJdXG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBERUZBVUxUX1NDSEVNQSA9IFBFUk1JU1NJVkVfU0NIRU1BO1xuXG5jb25zdCBjb21waWxlVmFsaWRhdGVTb3VsID0gYWp2ID0+IChzY2hlbWEsIHBhcmVudFNjaGVtYSkgPT4ge1xuICBjb25zdCB7IHBhdHRlcm4sIC4uLm1hdGNoU2NoZW1hIH0gPSBzY2hlbWEgfHwge307XG4gIGNvbnN0IHJvdXRlID0gcGF0dGVybiAmJiBuZXcgUm91dGUocGF0dGVybik7XG5cbiAgcmV0dXJuIChkYXRhLCBfY1BhdGgsIF9wYXJlbnREYXRhLCBrZXlJblBhcmVudCkgPT4ge1xuICAgIGNvbnN0IHNvdWwgPSBwYXRoKFtcIl9cIiwgXCIjXCJdLCBkYXRhKTtcblxuICAgIGlmICghc291bCB8fCAhcGF0dGVybiB8fCBzb3VsICE9PSBrZXlJblBhcmVudCkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IG1hdGNoID0gcm91dGUubWF0Y2goc291bCk7XG5cbiAgICByZXR1cm4gbWF0Y2ggPyBhanYuY29tcGlsZShtYXRjaFNjaGVtYSkobWF0Y2gpIDogZmFsc2U7XG4gIH07XG59O1xuXG5jb25zdCBjb21waWxlUHJvcHNGcm9tU291bCA9IChwcm9wTWFwLCBwYXJlbnRTY2hlbWEpID0+IHtcbiAgY29uc3QgcGF0dGVybiA9IHBhdGgoW1wic291bFwiLCBcInBhdHRlcm5cIl0sIHBhcmVudFNjaGVtYSk7XG4gIGNvbnN0IHJvdXRlID0gcGF0dGVybiAmJiBuZXcgUm91dGUocGF0dGVybik7XG5cbiAgcmV0dXJuIGRhdGEgPT4ge1xuICAgIGNvbnN0IHNvdWwgPSBwYXRoKFtcIl9cIiwgXCIjXCJdLCBkYXRhKTtcbiAgICBjb25zdCBzb3VsUHJvcHMgPSByb3V0ZS5tYXRjaChzb3VsKSB8fCB7fTtcblxuICAgIHJldHVybiAha2V5cyhwcm9wTWFwKS5maW5kKHByb3BOYW1lID0+IHtcbiAgICAgIGlmICghKHByb3BOYW1lIGluIGRhdGEpKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gcHJvcChwcm9wTmFtZSwgc291bFByb3BzKSAhPT0gcHJvcChwcm9wKHByb3BOYW1lLCBwcm9wTWFwKSwgZGF0YSk7XG4gICAgfSk7XG4gIH07XG59O1xuXG5jb25zdCBjb21waWxlRWRnZU1hdGNoZXNLZXkgPSBhanYgPT4gc2NoZW1hID0+IChcbiAgZGF0YSxcbiAgX2NQYXRoLFxuICBfcGFyZW50RGF0YSxcbiAga2V5SW5QYXJlbnRcbikgPT4gKHNjaGVtYSA/IHByb3AoXCIjXCIsIGRhdGEpID09PSBrZXlJblBhcmVudCA6IHRydWUpO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFqdih7XG4gIGNvZXJjZVR5cGVzID0gdHJ1ZSxcbiAgcmVtb3ZlQWRkaXRpb25hbCA9IGZhbHNlLFxuICAuLi5jb25maWdcbn0gPSB7fSkge1xuICBjb25zdCBhanYgPSBuZXcgQWp2KHsgY29lcmNlVHlwZXMsIHJlbW92ZUFkZGl0aW9uYWwsIC4uLmNvbmZpZyB9KTtcblxuICBhanYuYWRkS2V5d29yZChcInNvdWxcIiwgeyBjb21waWxlOiBjb21waWxlVmFsaWRhdGVTb3VsKGFqdikgfSk7XG4gIGFqdi5hZGRLZXl3b3JkKFwiZWRnZU1hdGNoZXNLZXlcIiwgeyBjb21waWxlOiBjb21waWxlRWRnZU1hdGNoZXNLZXkoYWp2KSB9KTtcbiAgYWp2LmFkZEtleXdvcmQoXCJwcm9wc0Zyb21Tb3VsXCIsIHsgY29tcGlsZTogY29tcGlsZVByb3BzRnJvbVNvdWwgfSk7XG4gIHJldHVybiBhanY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdXBwcmVzc29yKHtcbiAgaW5pdCA9IGluaXRBanYsXG4gIGlkID0gXCJodHRwOi8vZXhhbXBsZS5jb20vc2NoZW1hcy9ndW4tc2NoZW1hLmpzb25cIixcbiAganNvblNjaGVtYSA9IFwiaHR0cDovL2pzb24tc2NoZW1hLm9yZy9kcmFmdC0wNy9zY2hlbWEjXCIsXG4gIHRpdGxlID0gXCJHdW4gTWVzc2FnZSBTY2hlbWFcIixcbiAgZGVzY3JpcHRpb24gPSBcIkEgZGVmaW50aW9uIGZvciB0aGUgZ3VuREIgd2lyZSBwcm90b2NvbFwiLFxuICBkZWZpbml0aW9uczogc3VwcGxpZWQgPSBERUZBVUxUX1NDSEVNQVxufSA9IHt9KSB7XG4gIGNvbnN0IG5vZGVUeXBlcyA9IFtdO1xuICBjb25zdCBkZWZpbml0aW9ucyA9IGtleXMoc3VwcGxpZWQpLnJlZHVjZSgoZGVmcywgdHlwZU5hbWUpID0+IHtcbiAgICBjb25zdCB7IHBhdHRlcm4gfSA9IHBhdGgoW3R5cGVOYW1lLCBcInNvdWxcIl0sIGRlZnMpIHx8IHt9O1xuXG4gICAgaWYgKCFwYXR0ZXJuKSByZXR1cm4gZGVmcztcbiAgICBjb25zdCByb3V0ZSA9IG5ldyBSb3V0ZShwYXR0ZXJuKTtcbiAgICBjb25zdCBwYXRoT3JSZWYgPSBwID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHBhdGgocCwgZGVmcyk7XG4gICAgICBjb25zdCByZWYgPSBwcm9wKFwiJHJlZnNcIiwgdmFsKTtcbiAgICAgIGNvbnN0IHJlZk5hbWUgPSBwcm9wKFwicmVmTmFtZVwiLCByZWZSb3V0ZS5tYXRjaChyZWYgfHwgXCJcIikpO1xuXG4gICAgICByZXR1cm4gcmVmTmFtZSA/IHByb3AocmVmTmFtZSwgZGVmcykgOiB2YWw7XG4gICAgfTtcblxuICAgIG5vZGVUeXBlcy5wdXNoKHR5cGVOYW1lKTtcbiAgICByZXR1cm4gY29tcG9zZShcbiAgICAgIGFzc29jUGF0aChbdHlwZU5hbWUsIFwiJGFzeW5jXCJdLCB0cnVlKSxcbiAgICAgIGFzc29jKGAke3R5cGVOYW1lfVNvdWxgLCB7XG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgIHBhdHRlcm46IHJvdXRlVG9SZWdleFN0cihyb3V0ZSlcbiAgICAgIH0pLFxuICAgICAgYXNzb2MoYCR7dHlwZU5hbWV9RWRnZWAsIHtcbiAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgXCIjXCI6IHsgJHJlZjogYCMvZGVmaW5pdGlvbnMvJHt0eXBlTmFtZX1Tb3VsYCB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVpcmVkOiBbXCIjXCJdXG4gICAgICB9KSxcbiAgICAgIGFzc29jUGF0aChcbiAgICAgICAgW3R5cGVOYW1lLCBcInJlcXVpcmVkXCJdLFxuICAgICAgICBbLi4uKHBhdGgoW3R5cGVOYW1lLCBcInJlcXVpcmVkXCJdLCBkZWZzKSB8fCBbXSksIFwiX1wiXVxuICAgICAgKSxcbiAgICAgIGFzc29jUGF0aChbdHlwZU5hbWUsIFwicHJvcGVydGllc1wiLCBcIl9cIl0sIHtcbiAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgYWxsT2Y6IFt7ICRyZWY6IFwiIy9kZWZpbml0aW9ucy9HdW5Ob2RlTWV0YVwiIH1dLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgXCIjXCI6IHsgJHJlZjogYCMvZGVmaW5pdGlvbnMvJHt0eXBlTmFtZX1Tb3VsYCB9LFxuICAgICAgICAgIFwiPlwiOiB7XG4gICAgICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgcHJvcGVydGllczoga2V5cyhwYXRoT3JSZWYoW3R5cGVOYW1lLCBcInByb3BlcnRpZXNcIl0pKS5yZWR1Y2UoXG4gICAgICAgICAgICAgIChwcm9wcywga2V5KSA9PiBhc3NvYyhrZXksIHsgdHlwZTogXCJudW1iZXJcIiB9LCBwcm9wcyksXG4gICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcGF0dGVyblByb3BlcnRpZXM6IGtleXMoXG4gICAgICAgICAgICAgIHBhdGhPclJlZihbdHlwZU5hbWUsIFwicGF0dGVyblByb3BlcnRpZXNcIl0pXG4gICAgICAgICAgICApLnJlZHVjZSgocHJvcHMsIGtleSkgPT4gYXNzb2Moa2V5LCB7IHR5cGU6IFwibnVtYmVyXCIgfSwgcHJvcHMpLCB7fSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKShkZWZzKTtcbiAgfSwgc3VwcGxpZWQpO1xuXG4gIGNvbnN0IHNjaGVtYSA9IHtcbiAgICAkaWQ6IGlkLFxuICAgICRzY2hlbWE6IGpzb25TY2hlbWEsXG4gICAgJGFzeW5jOiB0cnVlLFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGFueU9mOiBbeyAkcmVmOiBcIiMvZGVmaW5pdGlvbnMvR3VuTXNnXCIgfV0sXG4gICAgZGVmaW5pdGlvbnM6IHtcbiAgICAgIEd1bk1zZzoge1xuICAgICAgICAkYXN5bmM6IHRydWUsXG4gICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgIC8vIHJlcXVpcmVkOiBbXCIjXCJdLCAvLyBuZWNlc3Nhcnkgb3ZlciB3aXJlXG4gICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIFwiI1wiOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJNZXNzYWdlIElkZW50aWZpZXJcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgc2hvdWxkIGJlIGEgZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXJcIixcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiIyNcIjoge1xuICAgICAgICAgICAgdGl0bGU6IFwiRmFzdCBIYXNoIFZhbHVlP1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSSBoYXZlIG5vIGlkZWEgaG93IHRoaXMgaXMgY2FsY3VsYXRlZFwiLFxuICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJAXCI6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlJlc3BvbmRpbmcgVG9cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBtZXNzYWdlIGlkZW50aWZpZXIgdGhpcyBtZXNzYWdlIGlzIHJlc3BvbmRpbmcgdG9cIixcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiPjxcIjoge1xuICAgICAgICAgICAgdGl0bGU6IFwiQWRqYWNlbnQgUGVlcnNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk5vdCByZWFsbHkgc3VyZSBob3cgdGhpcyB3b3Jrc1wiLFxuICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCIkXCI6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIj8/XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiSVwiOiB7XG4gICAgICAgICAgICB0aXRsZTogXCI/P1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvazoge1xuICAgICAgICAgICAgdGl0bGU6IFwiPz9cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNob3VsZG4ndCBhY3R1YWxseSBiZSBzZW50IG92ZXIgd2lyZVwiLFxuICAgICAgICAgICAgdHlwZTogXCJib29sZWFuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGhvdzoge1xuICAgICAgICAgICAgdGl0bGU6IFwiVXNlZCBmb3IgZGVidWdnaW5nXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTaG91bGRuJ3QgYWN0dWFsbHkgYmUgc2VudCBvdmVyIHdpcmUgKGJ1dCBpdCBpcylcIixcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1lc2g6IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIj8/XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTaG91bGRuJ3QgYmUgc2VudCBvdmVyIHdpcmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyOiB7XG4gICAgICAgICAgICBhbnlPZjogW3sgdHlwZTogXCJudWxsXCIgfSwgeyB0eXBlOiBcInN0cmluZ1wiIH1dXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsZWVjaDoge1xuICAgICAgICAgICAgdGl0bGU6IFwiTGVlY2ggQ29tbWFuZFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiR3VuIHByb3RvY29sIGV4dGVuc2lvbiBhZGRlZCBieSBwaXN0b2xcIixcbiAgICAgICAgICAgIHR5cGU6IFwiYm9vbGVhblwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwaW5nOiB7XG4gICAgICAgICAgICB0aXRsZTogXCJQaW5nIENvbW1hbmRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkd1biBwcm90b2NvbCBleHRlbnNpb24gYWRkZWQgYnkgcGlzdG9sXCIsXG4gICAgICAgICAgICB0eXBlOiBcImJvb2xlYW5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgICB0aXRsZTogXCJHZXQgQ29tbWFuZFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSByZXF1ZXN0IGZvciBncmFwaCBkYXRhXCIsXG4gICAgICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IGZhbHNlLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFtcIiNcIl0sXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIFwiI1wiOiB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIHNvdWwgdG8gcmVxdWVzdCBkYXRhIGZvclwiLFxuICAgICAgICAgICAgICAgIGFueU9mOiBub2RlVHlwZXMubWFwKG5hbWUgPT4gKHtcbiAgICAgICAgICAgICAgICAgICRyZWY6IGAjL2RlZmluaXRpb25zLyR7bmFtZX1Tb3VsYFxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcIi5cIjoge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlcXVlc3QgYSBzaW5nbGUgcHJvcGVydHk/XCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwdXQ6IHtcbiAgICAgICAgICAgICRhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiBcIlB1dCBDb21tYW5kXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIHBheWxvYWQgb2YgZ3JhcGggZGF0YVwiLFxuICAgICAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIGFueU9mOiBub2RlVHlwZXMubWFwKG5hbWUgPT4gKHtcbiAgICAgICAgICAgICAgICAkcmVmOiBgIy9kZWZpbml0aW9ucy8ke25hbWV9YFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBHdW5DaGFuZ2VTdGF0ZXM6IHtcbiAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgdGl0bGU6IFwiR3VuIENoYW5nZSBTdGF0ZXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQSBtYXAgb2YgcHJvcGVydHkgbmFtZXMgdG8gdXBkYXRlIHRpbWVzdGFtcHNcIixcbiAgICAgICAgcGF0dGVyblByb3BlcnRpZXM6IHtcbiAgICAgICAgICBcIi4qXCI6IHtcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBHdW5Ob2RlTWV0YToge1xuICAgICAgICB0aXRsZTogXCJHdW4gTm9kZSBNZXRhZGF0YVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDaGFuZ2UgU3RhdGUgYW5kIHNvdWwgb2YgYSBndW4gbm9kZVwiLFxuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2UsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBcIiNcIjogeyB0aXRsZTogXCJTb3VsXCIsIHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICBcIj5cIjogeyAkcmVmOiBcIiMvZGVmaW5pdGlvbnMvR3VuQ2hhbmdlU3RhdGVzXCIgfVxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZDogW1wiI1wiLCBcIj5cIl1cbiAgICAgIH0sXG4gICAgICBHdW5FZGdlOiB7XG4gICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIFwiI1wiOiB7IHR5cGU6IFwic3RyaW5nXCIgfVxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZDogW1wiI1wiXVxuICAgICAgfSxcbiAgICAgIC4uLmRlZmluaXRpb25zXG4gICAgfVxuICB9O1xuICBjb25zdCBhanYgPSBpbml0KCk7XG5cbiAgYWp2LmFkZFNjaGVtYSh7XG4gICAgJGlkOiBcInNjaGVtYS5qc29uXCIsXG4gICAgZGVmaW5pdGlvbnM6IHNjaGVtYS5kZWZpbml0aW9uc1xuICB9KTtcbiAgcmV0dXJuIHsgc2NoZW1hLCB2YWxpZGF0ZTogYWp2LmNvbXBpbGUoc2NoZW1hKSB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2Fqdl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yb3V0ZV9wYXJzZXJfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcm91dGVfcGFyc2VyX2xpYl9yb3V0ZV92aXNpdG9yc19yZWdleHBfXzsiXSwic291cmNlUm9vdCI6IiJ9