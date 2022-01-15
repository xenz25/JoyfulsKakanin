import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Fade, IconButton, Toolbar } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "white",
  },
  wrapper: {
    width: "100%",
    margin: "0 auto",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  icon: {
    color: "#598f1e",
    fontSize: "2rem",
  },
  logo: {
    color: "#000000",
    flexGrow: "1",
  },
  button: {
    color: "#598f1e",
  },
  content: {
    textAlign: "center",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.wrapper}>
          <h1 className={classes.logo}>LogoHere</h1>

          <Button className={classes.button}>Home</Button>

          <Button className={classes.button}>Products</Button>

          <Button className={classes.button}>About Us</Button>

          <Button className={classes.button}>Contact Us</Button>

          <IconButton>
            <PhoneIcon className={classes.icon} />
          </IconButton>

          <IconButton>
            <MailIcon className={classes.icon} />
          </IconButton>

          <IconButton>
            <FacebookIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Fade 
      in={true}
      {...(true ? {timeout: 1000 } : {})}
      >
        <div className={classes.content}>
          <h1>
            Content here <br />
            use grid here
          </h1>
        </div>
      </Fade>
    </div>
  );
}
