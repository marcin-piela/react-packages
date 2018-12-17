'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
Object.defineProperty(exports, 'permissionsStrategy', {
  enumerable: true,
  get: function get() {
    return _authorizationStrategy.permissionsStrategy;
  },
});
Object.defineProperty(exports, 'roleBasedStrategy', {
  enumerable: true,
  get: function get() {
    return _authorizationStrategy.roleBasedStrategy;
  },
});
Object.defineProperty(exports, 'atLeastOneStrategy', {
  enumerable: true,
  get: function get() {
    return _authorizationStrategy.atLeastOneStrategy;
  },
});
Object.defineProperty(exports, 'AuthorizedRoute', {
  enumerable: true,
  get: function get() {
    return _authorizedRoute.AuthorizedRoute;
  },
});
Object.defineProperty(exports, 'AuthorizedSection', {
  enumerable: true,
  get: function get() {
    return _authorizedSection.AuthorizedSection;
  },
});
Object.defineProperty(exports, 'PermissionsProvider', {
  enumerable: true,
  get: function get() {
    return _permissionsProvider.PermissionsProvider;
  },
});

var _authorizationStrategy = require('./authorization-strategy/authorization-strategy');

var _authorizedRoute = require('./authorized-route/authorized-route');

var _authorizedSection = require('./authorized-section/authorized-section');

var _permissionsProvider = require('./permissions-provider/permissions-provider');
