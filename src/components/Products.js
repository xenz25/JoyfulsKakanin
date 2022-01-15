import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import foods from "../static/food";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]:{
      flexDirection: 'column',
    }
  },
}));

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.root} id="foods-to-try">
      <ImageCard food={foods[0]} />
      <ImageCard food={foods[1]} />
      <ImageCard food={foods[2]} />
    </div>
  );
}
