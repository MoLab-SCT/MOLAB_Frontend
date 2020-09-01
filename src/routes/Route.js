import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import MainContainer from "../components/main/Main";
import IntroduceContainer from "../components/introduce/Introduce";
import LoginContainer from "../components/login/LoginContainer";
import ReviewContainer from "../components/review/ReviewPage";
import AnnounceContainer from "../components/announce/AnnouncePage";

function Router() {
  const [loginStatus, setStatus] = useState(false);

  useEffect(() => {
    const isLogin = async () => {
      const response = await axios({
        method: "get",
        withCredentials: true,
        url: "/auth/islogin",
      });
      setStatus(response.data);
    };

    isLogin();
  }, [loginStatus, setStatus]);

  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/">
            <MainContainer loginStatus={loginStatus} />
          </Route>
          <Route exact path="/introduce">
            <IntroduceContainer loginStatus={loginStatus} />
          </Route>
          <Route exact path="/review">
            <ReviewContainer loginStatus={loginStatus} />
          </Route>
          <Route exact path="/announce">
            <AnnounceContainer loginStatus={loginStatus} />
          </Route>
          <Route path="/login" component={LoginContainer} />
          <Redirect from="/logout" to="/" />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
