import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import MainPage from "../components/main/Main";
import IntroduceLivingLabPage from "../components/introduce/IntroduceLivingLabPage";
import IntroduceSctPage from "../components/introduce/IntroduceSctPage";
import LoginPage from "../components/login/LoginContainer";
import ReviewPage from "../components/review/ReviewPage";
import AnnouncePage from "../components/announce/AnnouncePage";
import CommunicationPage from "../components/communication/CommunicationPage";
import ProjectFormPage from "../components/communication/ProjectForm";
import SignupPage from "../components/signup/SignupPage";
import ProjectPage from "../components/communication/ProjectPage";
import NetworkPage from "../components/network/NetworkPage";
import AnnounceDetail from "../components/announce/AnnounceDetail";
import { getUserInfo } from "../components/login/LoginFunction";

function Router() {
  const [loginStatus, setStatus] = useState(false);
  const [loginName, setName] = useState("");
  const [loginId, setId] = useState("");

  useEffect(() => {
    const isLogin = async () => {
      const response = await axios({
        method: "get",
        withCredentials: true,
        url: "/auth/islogin",
      });
      setStatus(response.data);
    };

    getUserInfo().then((res) => {
      if (res.data.name) setName(res.data.name);
      if (res.data.id) setId(res.data.id);
    });

    console.log(loginName);

    isLogin();
  }, [loginStatus, setStatus, loginName]);

  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/">
            <MainPage loginStatus={loginStatus} />
          </Route>
          <Route exact path="/whatisLivingLab">
            <IntroduceLivingLabPage loginStatus={loginStatus} />
          </Route>
          <Route exact path="/teamSCT">
            <IntroduceSctPage loginStatus={loginStatus} />
          </Route>
          <Route exact path="/review">
            <ReviewPage loginStatus={loginStatus} />
          </Route>
          <Route exact path="/network">
            <NetworkPage loginStatus={loginStatus} />
          </Route>
          <Route exact path="/announce">
            <AnnouncePage
              loginStatus={loginStatus}
              loginName={loginName}
              loginId={loginId}
            />
          </Route>
          <Route
            exact
            path="/announce/:no"
            render={(props) => (
              <AnnounceDetail
                loginStatus={loginStatus}
                loginName={loginName}
                loginId={loginId}
                {...props}
              />
            )}
          />
          <Route exact path="/communication">
            <CommunicationPage loginStatus={loginStatus} loginId={loginId} />
          </Route>
          <Route exact path="/communication/project/:id">
            <ProjectPage
              loginStatus={loginStatus}
              loginName={loginName}
              loginId={loginId}
            />
          </Route>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup">
            <SignupPage loginStatus={loginStatus} />
          </Route>
          <Route exact path="/register-project">
            <ProjectFormPage loginStatus={loginStatus} />
          </Route>
          <Redirect from="/logout" to="/" />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
