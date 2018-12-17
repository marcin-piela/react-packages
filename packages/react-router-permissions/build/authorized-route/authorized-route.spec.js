'use strict';

var _react = _interopRequireDefault(require('react'));

var _enzyme = _interopRequireWildcard(require('enzyme'));

var _enzymeAdapterReact = _interopRequireDefault(require('enzyme-adapter-react-16'));

var _reactRouter = require('react-router');

var _authorizedRoute = _interopRequireDefault(require('./authorized-route'));

var _permissionsProvider = _interopRequireDefault(require('../permissions-provider/permissions-provider'));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default(),
});

describe('Authorized Route', function() {
  function strategy(permissions, requirement) {
    return permissions[requirement] || false;
  }

  function otherStrategy(permissions, requirement) {
    return !permissions[requirement] || false;
  }

  it('display logout portion when is not authorized', function() {
    var authorization = jest.fn();
    (0, _enzyme.mount)(
      _react.default.createElement(
        _permissionsProvider.default,
        {
          permissions: {
            isLogged: false,
          },
          authorizationStrategy: strategy,
        },
        _react.default.createElement(
          _reactRouter.MemoryRouter,
          {
            initialEntries: ['/restricted'],
          },
          _react.default.createElement(
            _reactRouter.Switch,
            null,
            _react.default.createElement(
              _authorizedRoute.default,
              {
                path: '/restricted',
                requires: 'isLogged',
              },
              function(_ref) {
                var isAuthorized = _ref.isAuthorized;
                return authorization(isAuthorized);
              },
            ),
          ),
        ),
      ),
    );
    expect(authorization).toBeCalledWith(false);
  });
  it('display login portion when is authorized', function() {
    var authorization = jest.fn();
    (0, _enzyme.mount)(
      _react.default.createElement(
        _permissionsProvider.default,
        {
          permissions: {
            isLogged: true,
          },
          authorizationStrategy: strategy,
        },
        _react.default.createElement(
          _reactRouter.MemoryRouter,
          {
            initialEntries: ['/restricted'],
          },
          _react.default.createElement(
            _reactRouter.Switch,
            null,
            _react.default.createElement(
              _authorizedRoute.default,
              {
                path: '/restricted',
                requires: 'isLogged',
              },
              function(_ref2) {
                var isAuthorized = _ref2.isAuthorized;
                return authorization(isAuthorized);
              },
            ),
          ),
        ),
      ),
    );
    expect(authorization).toBeCalledWith(true);
  });
  it('authorization strategy may be overridden for particular route', function() {
    var authorization = jest.fn();
    (0, _enzyme.mount)(
      _react.default.createElement(
        _permissionsProvider.default,
        {
          permissions: {
            isLogged: true,
          },
          authorizationStrategy: strategy,
        },
        _react.default.createElement(
          _reactRouter.MemoryRouter,
          {
            initialEntries: ['/restricted'],
          },
          _react.default.createElement(
            _reactRouter.Switch,
            null,
            _react.default.createElement(
              _authorizedRoute.default,
              {
                path: '/restricted',
                requires: 'isLogged',
                authorizationStrategy: otherStrategy,
              },
              function(_ref3) {
                var isAuthorized = _ref3.isAuthorized;
                return authorization(isAuthorized);
              },
            ),
          ),
        ),
      ),
    );
    expect(authorization).toBeCalledWith(false);
  });
});
