import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainContainer from "../components/main/Main";
import IntroduceContainer from "../components/introduce/Introduce";
import Footer from "../components/footer/Footer";

function Router() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route path="/introduce" component={IntroduceContainer} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default Router;
