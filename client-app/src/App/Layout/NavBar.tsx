import React from "react";
import "../Layout/styles.css";
import { Button, Container, Icon, Menu } from "semantic-ui-react";

//import { Container, Menu } from "semantic-ui-react";
interface Props {
  openForm: () => void;
}
export default function NavBar({ openForm }: Props) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <Icon name="connectdevelop" size="large" />
        </Menu.Item>
        <Menu.Item name="Activities" />

        <Menu.Item>
          <Button onClick={openForm} positive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
