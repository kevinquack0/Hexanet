import React from "react";
import "../Layout/styles.css";
import { makeStyles } from "@mui/styles";
import {
  Menu,
  Container,
  MenuItem,
  Button,
  Toolbar,
  AppBar,
  IconButton,
  Typography,
} from "@mui/material";

//import { Container, Menu } from "semantic-ui-react";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});
export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ marginRight: 3, marginLeft: 10 }}
        >
          Reactivities
        </Typography>
        <Typography variant="h6" component="div" sx={{ marginRight: 3 }}>
          Activities
        </Typography>
        <Button variant="contained" color="success">
          Create Activity
        </Button>
      </Toolbar>
    </AppBar>
  );
}
