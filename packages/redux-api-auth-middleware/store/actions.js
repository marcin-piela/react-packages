'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.setTokenAction = setTokenAction;
exports.refreshTokenAction = refreshTokenAction;
exports.clearTokenAction = clearTokenAction;

var _reduxApiMiddleware = require('redux-api-middleware');

var _types = require('./types');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

function setTokenAction(_ref) {
  var authToken = _ref.authToken,
    refreshToken = _ref.refreshToken;
  return {
    type: _types.SET_TOKEN,
    payload: {
      authToken: authToken,
      refreshToken: refreshToken,
    },
  };
}

function refreshTokenAction(_ref2) {
  var refreshToken = _ref2.refreshToken,
    endpoint = _ref2.endpoint;
  return _defineProperty({}, _reduxApiMiddleware.RSAA, {
    types: [_types.REFRESH_TOKEN_REQUEST, _types.REFRESH_TOKEN_SUCCESS, _types.REFRESH_TOKEN_FAILURE],
    endpoint: endpoint,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
    skipAuth: true,
  });
}

function clearTokenAction() {
  return {
    type: _types.CLEAR_TOKEN,
  };
}
