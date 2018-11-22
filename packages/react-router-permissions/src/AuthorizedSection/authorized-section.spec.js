import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { AuthorizedSection } from './authorized-section.component';
import PermissionsProvider from '../PermissionsProvider/permissions-provider.component';

Enzyme.configure({ adapter: new Adapter() });

describe('Authorized Section', () => {
  function strategy(permissions, requirement) {
    return permissions[requirement] || false;
  }

  function otherStrategy(permissions, requirement) {
    return !permissions[requirement] || false;
  }

  it('display logout portion when not logged-in', () => {
    const authorization = jest.fn();
    mount(
      <PermissionsProvider permissions={{ isLogged: false }} authorizationStrategy={strategy}>
        <AuthorizedSection requires="isLogged">{({ isAuthorized }) => authorization(isAuthorized)}</AuthorizedSection>
      </PermissionsProvider>,
    );

    expect(authorization).toBeCalledWith(false);
  });

  it('display login portion when logged-in', () => {
    const authorization = jest.fn();
    mount(
      <PermissionsProvider permissions={{ isLogged: true }} authorizationStrategy={strategy}>
        <AuthorizedSection requires="isLogged">{({ isAuthorized }) => authorization(isAuthorized)}</AuthorizedSection>
      </PermissionsProvider>,
    );

    expect(authorization).toBeCalledWith(true);
  });

  it('authorization strategy may be overridden for given section', () => {
    const authorization = jest.fn();
    mount(
      <PermissionsProvider permissions={{ isLogged: true }} authorizationStrategy={strategy}>
        <AuthorizedSection requires="isLogged" authorizationStrategy={otherStrategy}>
          {({ isAuthorized }) => authorization(isAuthorized)}
        </AuthorizedSection>
      </PermissionsProvider>,
    );

    expect(authorization).toBeCalledWith(false);
  });

  it('passes cuctom props along isAuthorized', () => {
    const trapForFoo = jest.fn();
    mount(
      <PermissionsProvider permissions={{ isLogged: true }} authorizationStrategy={strategy}>
        <AuthorizedSection requires="isLogged" foo="bar">
          {({ foo }) => trapForFoo(foo)}
        </AuthorizedSection>
      </PermissionsProvider>,
    );

    expect(trapForFoo).toBeCalledWith('bar');
  });
});
