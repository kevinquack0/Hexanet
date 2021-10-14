import { observer } from "mobx-react-lite";
import React from "react";
import { Grid, GridColumn, List } from "semantic-ui-react";
import { Activity } from "../../../App/Models/activity";
import { useStore } from "../../../App/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import Activitylist from "./ActivityList";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;
  return (
    <Grid>
      <Grid.Column width="10">
        <Activitylist />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && <ActivityForm />}
      </Grid.Column>
    </Grid>
  );
});
