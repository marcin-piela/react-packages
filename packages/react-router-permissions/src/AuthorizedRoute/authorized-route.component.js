// @flow

import React from 'react';
import { Route } from 'react-router';
import { AuthorizedSection } from '../AuthorizedSection/authorized-section.component';
import type { Route as RouteType, ContextRouter } from 'react-router';
import type { AuthorizedSectionProps } from '../AuthorizedSection/authorized-section.component';

export type AuthorizedRouteProps = {
  path: string,
} & AuthorizedSectionProps &
  RouteType;

export class AuthorizedRoute extends React.Component<AuthorizedRouteProps> {
  render() {
    const { authorizationStrategy, requires, children, ...rest } = this.props;
    return (
      <Route
        {...rest}
        children={(routerProps: ContextRouter) =>
          routerProps.match ? (
            <AuthorizedSection
              {...routerProps}
              requires={requires}
              authorizationStrategy={authorizationStrategy}
              children={children}
            />
          ) : null
        }
      />
    );
  }
}

export default AuthorizedRoute;
