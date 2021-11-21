import { Stack } from "@mui/material";
import { observer } from "mobx-react-lite";
import React, { Fragment, SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../App/Models/activity";
import { useStore } from "../../../App/stores/store";
import ActivityListItem from "./ActivityListItem";

export default observer(function Activitylist() {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color="teal">
            {group}
          </Header>

          {activities.map((activity) => (
            <ActivityListItem activity={activity} key={activity.id} />
          ))}
        </Fragment>
      ))}
    </>
  );
});
