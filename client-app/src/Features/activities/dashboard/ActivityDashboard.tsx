import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid, GridColumn, List } from "semantic-ui-react";
import LoadingComponents from "../../../App/Layout/LoadingComponents";
import { Activity } from "../../../App/Models/activity";
import { useStore } from "../../../App/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import Activitylist from "./ActivityList";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { selectedActivity, editMode, loadActivities, activityRegistry } =
    activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponents content="Loading app" />;
  return (
    <Grid>
      <Grid.Column width="10">
        <Activitylist />
      </Grid.Column>
      <Grid.Column width="6"></Grid.Column>
    </Grid>
  );
});
