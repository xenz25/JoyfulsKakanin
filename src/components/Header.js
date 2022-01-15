import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbar: {},
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <h1>Test</h1>
          <IconButton></IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
