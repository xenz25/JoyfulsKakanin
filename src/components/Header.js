import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

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
          <IconButton>
            <PhoneIcon />
            <MailIcon />
            <FacebookIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
