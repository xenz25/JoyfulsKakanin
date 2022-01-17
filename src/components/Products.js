import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@mui/material/Grid';
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
      <Grid sx={{ flexGrow: 1 }} container spacing={2} justifyContent="center">
      <Grid item md={6} lg={4} xl={4} sm={8}>
        <Grid container justifyContent="center">
              <ImageCard food={foods[0]} />
            </Grid>
        </Grid>
        <Grid item md={6} lg={4} xl={4} sm={8}>
        <Grid container justifyContent="center">
              <ImageCard food={foods[1]} />
            </Grid>
        </Grid>
        <Grid item md={6} lg={4} xl={4} sm={8}>
        <Grid container justifyContent="center">
              <ImageCard food={foods[2]} />
            </Grid>
        </Grid>
        <Grid item md={6} lg={4} xl={4} sm={8}>
        <Grid container justifyContent="center">
              <ImageCard food={foods[3]} />
            </Grid>
        </Grid>
        <Grid item md={6} lg={4} xl={4} sm={8}>
        <Grid container justifyContent="center">
              <ImageCard food={foods[4]} />
            </Grid>
        </Grid>
        <Grid item md={6} lg={4} xl={4} sm={8}>
        <Grid container justifyContent="center">
              <ImageCard food={foods[5]} />
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
