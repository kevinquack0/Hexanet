import React, { useEffect, useState } from "react";
import { Activity } from "../Models/activity";
import "../Layout/styles.css";
import NavBar from "./NavBar";
import ActivityDashboard from "../../Features/activities/dashboard/ActivityDashboard";
import { Button, Container, List, Menu } from "semantic-ui-react";
import { v4 as uuid } from "uuid";
import agent from "../api/Agent";
import LoadingComponents from "./LoadingComponents";
import { observer } from "mobx-react-lite";
import HomePage from "../../Features/home/HomePage";
import { Route, Switch, useLocation } from "react-router-dom";
import ActivityForm from "../../Features/activities/form/ActivityForm";
import ActivityDetails from "../../Features/activities/details/ActivityDetails";
import TestErrors from "../../Features/errors/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "../../Features/errors/NotFound";
import ServerError from "../../Features/errors/ServerError";
import LoginForm from "../../Features/users/LoginForm";
import { useStore } from "../stores/store";
import ModalContainer from "../common/modals/ModalContainer";
import ProfilePage from "../../Features/profiles/ProfilePage";
import PrivateRoute from "./PrivateRoute";

function App() {
  const location = useLocation();
  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, useStore]);

  if (!commonStore.appLoaded) {
    return <LoadingComponents content="Loading app..." />;
  }
  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar />
      <ModalContainer />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: " 7em" }}>
              <Switch>
                <PrivateRoute
                  exact
                  path="/activities"
                  component={ActivityDashboard}
                />
                <PrivateRoute
                  path="/activities/:id"
                  component={ActivityDetails}
                />
                <PrivateRoute
                  key={location.key}
                  path={["/createActivity", "/manage/:id"]}
                  component={ActivityForm}
                />
                <PrivateRoute
                  path="/profiles/:username"
                  component={ProfilePage}
                />
                <PrivateRoute path="/errors" component={TestErrors} />
                <Route path="/server-error" component={ServerError} />

                <Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
