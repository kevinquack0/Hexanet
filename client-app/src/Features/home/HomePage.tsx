import { observer } from "mobx-react-lite";
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
import { useStore } from "../../App/stores/store";
import LoginForm from "../users/LoginForm";
import RegisterForm from "../users/RegisterForm";

export default observer(function HomePage() {
  const { userStore, modalStore } = useStore();
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Icon name="connectdevelop" size="large" />
          Hexanet
        </Header>
        {userStore.isLoggedIn ? (
          <>
            <Header as="h2" inverted content="Welcome to Hexanet" />
            <Button as={Link} to="/activities" size="huge" inverted>
              Go to Activities
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => modalStore.openModal(<LoginForm />)}
              size="huge"
              inverted
            >
              Login
            </Button>
            <Button
              onClick={() => modalStore.openModal(<RegisterForm />)}
              size="huge"
              inverted
            >
              Register
            </Button>
          </>
        )}
      </Container>
    </Segment>
  );
});