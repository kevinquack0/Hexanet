import React, { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import { List, Header } from "semantic-ui-react";
function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1> Reactivities</h1>
      </header>
      <ul>
        {activities.map((activity: any) => (
          <li key={activity.id}>
            <div className="item">{activity.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
