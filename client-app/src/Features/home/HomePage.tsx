import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  Segment,
  Image,
  Button,
  Icon,
} from "semantic-ui-react";

export default function HomePage() {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Icon name="connectdevelop" size="large" />
          Hexanet
        </Header>
        <Header as="h2" inverted content="Welcome to Hexanet" />
        <Button as={Link} to="/activities" size="huge" inverted>
          Enter
        </Button>
      </Container>
    </Segment>
  );
}
