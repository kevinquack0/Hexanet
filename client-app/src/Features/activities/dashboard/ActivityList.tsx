import { Stack, Item } from "@mui/material";
import React from "react";
import { Activity } from "../../../App/Models/activity";

interface Props {
  activities: Activity[];
}
export default function Activitylist(props: Props) {
  return (
    <Stack spacing={2}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  );
}
