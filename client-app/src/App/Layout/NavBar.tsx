import React from "react";
import "../Layout/styles.css";
import { Button, Container, Icon, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

//import { Container, Menu } from "semantic-ui-react";

export default function NavBar() {
  const { activityStore } = useStore();

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <Icon name="connectdevelop" size="large" />
        </Menu.Item>
        <Menu.Item name="Activities" />

        <Menu.Item>
          <Button
            onClick={() => activityStore.openForm()}
            positive
            content="Create Activity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
