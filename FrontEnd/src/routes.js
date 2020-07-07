//Todas as rotas do sistema

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/signup";
import System from "./pages/system";
import Profile from "./pages/profile";
import EditPassword from "./pages/editPasswordUser";
import Userlist from "./pages/userlist";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path={`/Profile/:id`}>
        <Profile />
      </Route>

      <Route path={`/EditPassword/:id`}>
        <EditPassword />
      </Route>

      <Route path="/signup" component={SignUp} />
      <Route path="/system" component={System} />
      <Route path="/userlist" component={Userlist} />

      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
