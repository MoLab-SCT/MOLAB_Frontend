import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainContainer from "../components/main/Main";
import IntroduceContainer from "../components/introduce/Introduce";
import LoginContainer from "../components/login/LoginContainer";
import ReviewPage from "../components/review/ReviewPage";
import AnnouncePage from "../components/announce/AnnouncePage";

function Router() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route path="/introduce" component={IntroduceContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/review" component={ReviewPage} />
          <Route path="/announce" component={AnnouncePage} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
