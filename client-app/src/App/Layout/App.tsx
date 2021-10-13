import React, { useEffect, useState } from "react";
import { Activity } from "../Models/activity";
import "../Layout/styles.css";
import axios from "axios";
import NavBar from "./NavBar";
import ActivityDashboard from "../../Features/activities/dashboard/ActivityDashboard";
function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);
  return (
    <div>
      <NavBar />
      <ActivityDashboard activities={activities} />
    </div>
  );
}

export default App;
