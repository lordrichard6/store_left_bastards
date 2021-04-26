import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from "../img/logo_b&w_flame.png";
import useStyles from "../styles/Navbar";

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="logo"
              height="30px"
              className={classes.image}
            />
            Left Bastards
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Items in Cart" color="inherit">
              <Badge badgeContent={6} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
