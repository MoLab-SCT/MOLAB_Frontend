import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainContainer from "../components/main/Main";
import IntroduceContainer from "../components/introduce/Introduce";
import LoginContainer from "../components/login/LoginContainer";

function Router() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route path="/introduce" component={IntroduceContainer} />
          <Route path="/login" component={LoginContainer} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
