import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',

  }
}));

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.root} id="about-us">
      <h1>About Us</h1>
    </div>
  );
}
