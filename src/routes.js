import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Register from "./pages/Register";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
