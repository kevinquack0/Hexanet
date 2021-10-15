import React from "react";
import "../Layout/styles.css";
import { Button, Container, Icon, Menu } from "semantic-ui-react";

import { NavLink } from "react-router-dom";

//import { Container, Menu } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" exact header>
          <Icon name="connectdevelop" size="large" />
          Hexanet
        </Menu.Item>
        <Menu.Item name="Activities" as={NavLink} to="/activities" />

        <Menu.Item>
          <Button
            as={NavLink}
            to="/createActivity"
            positive
            content="Create Activity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
