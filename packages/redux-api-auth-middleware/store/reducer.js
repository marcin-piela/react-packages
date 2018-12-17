'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = _default;
exports.initialState = void 0;

var _helpers = require('../helpers');

var _types = require('./types');

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }),
      );
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

var initialState = {
  authToken: null,
  refreshToken: null,
  expires: 0,
};
exports.initialState = initialState;

function _default() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$getExpirationTim = _ref.getExpirationTimestamp,
    getExpirationTimestamp =
      _ref$getExpirationTim === void 0 ? _helpers.calculateJWTTokenExpirationDate : _ref$getExpirationTim;

  return function authReducer() {
    var _action$payload, _action$payload2, _action$payload3, _action$payload4;

    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case _types.SET_TOKEN:
        return _objectSpread({}, state, {
          authToken:
            (_action$payload = action.payload) === null || _action$payload === void 0
              ? void 0
              : _action$payload.authToken,
          refreshToken:
            (_action$payload2 = action.payload) === null || _action$payload2 === void 0
              ? void 0
              : _action$payload2.refreshToken,
          expires: getExpirationTimestamp(action.payload),
        });

      case _types.REFRESH_TOKEN_SUCCESS:
        return _objectSpread({}, state, {
          authToken:
            (_action$payload3 = action.payload) === null || _action$payload3 === void 0
              ? void 0
              : _action$payload3.authToken,
          refreshToken:
            (_action$payload4 = action.payload) === null || _action$payload4 === void 0
              ? void 0
              : _action$payload4.refreshToken,
          expires: getExpirationTimestamp(action.payload),
        });

      case _types.CLEAR_TOKEN:
        return initialState;

      case _types.REFRESH_TOKEN_FAILURE:
        return initialState;

      default:
        return state;
    }
  };
}
