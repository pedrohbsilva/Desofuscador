//Todas as rotas do sistema

import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import SignUp from "./pages/signup";
import System from "./pages/system";
import Edit from "./pages/editUser";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <h1>
            <p>criar página de login</p>
            <Link to="SignUp">cadastre-se aqui</Link>
            <p>Tela desofuscação</p>
            <Link to="System">Desofuscador</Link>
          </h1>
        )}
      />
      <Route path={`/Edit/:id`}>
        <Edit/>
      </Route>
      <Route path="/signup" component={SignUp} />
      <Route path="/system" component={System} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
