import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AUTH_TOKEN } from '../helper';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return (
    <Route
      {...rest}
      render={props => token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: {
              from: props.location
            }
          }}
        />
      )  
    }
  />
  )
}

export default ProtectedRoute;