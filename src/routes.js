import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/isAuthenticated";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register">
          <Register />
        </Route>
        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}
