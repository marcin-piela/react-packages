'use strict';

var _authorizationStrategy = require('./authorization-strategy');

test('permission strategy', function() {
  expect((0, _authorizationStrategy.permissionsStrategy)({}, 'isLogged')).toBe(false);
  expect(
    (0, _authorizationStrategy.permissionsStrategy)(
      {
        isLogged: false,
      },
      'isLogged',
    ),
  ).toBe(false);
  expect(
    (0, _authorizationStrategy.permissionsStrategy)(
      {
        isLogged: true,
      },
      'isLogged',
    ),
  ).toBe(true);
});
test('role based strategy', function() {
  expect((0, _authorizationStrategy.roleBasedStrategy)([], 'ADMIN')).toBe(false);
  expect((0, _authorizationStrategy.roleBasedStrategy)(['AUTHOR'], 'ADMIN')).toBe(false);
  expect((0, _authorizationStrategy.roleBasedStrategy)(['AUTHOR', 'MODERATOR'], 'ADMIN')).toBe(false);
  expect((0, _authorizationStrategy.roleBasedStrategy)(['ADMIN'], 'ADMIN')).toBe(true);
});
test('permission strategy can get multiple requirements, at least one must be satisfied', function() {
  var permisions = {
    isAdmin: false,
    isModerator: false,
    isUser: true,
  };
  expect((0, _authorizationStrategy.atLeastOneStrategy)(permisions, 'isAdmin')).toBe(false);
  expect((0, _authorizationStrategy.atLeastOneStrategy)(permisions, ['isAdmin'])).toBe(false);
  expect((0, _authorizationStrategy.atLeastOneStrategy)(permisions, ['isAdmin', 'isModerator'])).toBe(false);
  expect((0, _authorizationStrategy.atLeastOneStrategy)(permisions, ['isUser'])).toBe(true);
  expect((0, _authorizationStrategy.atLeastOneStrategy)(permisions, ['isUser', 'isModerator'])).toBe(true);
  expect((0, _authorizationStrategy.atLeastOneStrategy)(permisions, 'isUser')).toBe(true);
});
