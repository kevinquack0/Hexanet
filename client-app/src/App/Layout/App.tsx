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

function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponents content="Loading app" />;

  return (
    <div>
      <NavBar />
      <Container style={{ marginTop: " 7em" }}>
        <ActivityDashboard />
      </Container>
    </div>
  );
}

export default observer(App);
