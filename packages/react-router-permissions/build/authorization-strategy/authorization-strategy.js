'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.permissionsStrategy = permissionsStrategy;
exports.roleBasedStrategy = roleBasedStrategy;
exports.atLeastOneStrategy = atLeastOneStrategy;

function permissionsStrategy(permissions, requirement) {
  return permissions[requirement] || false;
}

function roleBasedStrategy(roles, requirement) {
  return !!roles.find(function(role) {
    return role === requirement;
  });
}

function atLeastOneStrategy(permissions, requirement) {
  if (Array.isArray(requirement)) {
    return !!requirement.find(function(x) {
      return permissions[x];
    });
  }

  return permissions[requirement] || false;
}
