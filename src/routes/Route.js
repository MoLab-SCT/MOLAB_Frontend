import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import MainPage from "../components/main/Main";
import IntroducePage from "../components/introduce/Introduce";
import LoginPage from "../components/login/LoginContainer";
import ReviewPage from "../components/review/ReviewPage";
import AnnouncePage from "../components/announce/AnnouncePage";
import CommunicationPage from "../components/communication/CommunicationPage";
import ProjectFormPage from "../components/communication/ProjectForm";

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
            <MainPage loginStatus={loginStatus} />
          </Route>
          <Route path="/introduce">
            <IntroducePage loginStatus={loginStatus} />
          </Route>
          <Route path="/review">
            <ReviewPage loginStatus={loginStatus} />
          </Route>
          <Route path="/announce">
            <AnnouncePage loginStatus={loginStatus} />
          </Route>
          <Route path="/communication">
            <CommunicationPage loginStatus={loginStatus} />
          </Route>
          <Route path="/login" component={LoginPage} />
          <Route path="/register-project">
            <ProjectFormPage loginStatus={loginStatus} />
          </Route>
          </Route>
          <Redirect from="/logout" to="/" />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
