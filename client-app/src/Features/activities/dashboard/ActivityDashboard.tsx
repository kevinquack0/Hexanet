import React from "react";
import { Grid, List } from "@mui/material";
import { Activity } from "../../../App/Models/activity";

interface Props {
  activities: Activity[];
}
export default function ActivityDashboard(props: Props) {
  return (
    <Grid>
      <ul>
        {props.activities.map((activity) => (
          <li key={activity.id}>
            <div className="item">{activity.title}</div>
          </li>
        ))}
      </ul>
    </Grid>
  );
}
