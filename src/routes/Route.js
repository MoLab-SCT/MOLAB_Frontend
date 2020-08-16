import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainContainer from "../components/main/Main";
import IntroduceContainer from "../components/introduce/Introduce";
import LoginContainer from "../components/login/LoginContainer";
import ReviewPage from "../components/review/ReviewPage";
import Example from "../components/Example";
function Router() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route path="/introduce" component={IntroduceContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/review" component={ReviewPage} />
          <Route path="/example" component={Example} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
