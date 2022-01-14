import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Image from "./assets/bg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: `url(${process.env.PUBLIC_URL + '/assets/bg.png'})`,
    backgroundRepeat: 'no-reapeat',
    backgroundSize: 'cover',
  },
}));

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
    </div>
  );
}
