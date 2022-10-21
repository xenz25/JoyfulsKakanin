import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    background: `url(${process.env.PUBLIC_URL + '/assets/bg.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Products />
      <AboutUs />
    </div>
  );
}
