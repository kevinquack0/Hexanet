import React, { useEffect, useState } from "react";
import { Activity } from "../Models/activity";
import "../Layout/styles.css";
import NavBar from "./NavBar";
import ActivityDashboard from "../../Features/activities/dashboard/ActivityDashboard";
import { Button, Container, List, Menu } from "semantic-ui-react";
import { v4 as uuid } from "uuid";
import agent from "../api/Agent";
import LoadingComponents from "./LoadingComponents";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import HomePage from "../../Features/home/HomePage";
import { Route, useLocation } from "react-router-dom";
import ActivityForm from "../../Features/activities/form/ActivityForm";
import ActivityDetails from "../../Features/activities/details/ActivityDetails";

function App() {
  const location = useLocation();
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: " 7em" }}>
              <Route exact path="/activities" component={ActivityDashboard} />
              <Route path="/activities/:id" component={ActivityDetails} />
              <Route
                key={location.key}
                path={["/createActivity", "/manage/:id"]}
                component={ActivityForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
