import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Box,
  Button,
  Container,
  Fade,
  Grid,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link as Scroll } from "react-scroll";
import image from "../logo.png";
import "./Header.css";
import { flexbox } from "@mui/system";


const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "white",
  },
  wrapper: {
    width: "100%",
    height: 100,
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
    <div
      className={classes.root}
      id="home"
      smooth={true}
      duration={500}
      spy={true}
      exact="true"
      offset={-80}
    >
      <Grid>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.wrapper}>
            <img alt="logo"
              src={image}
              width={182}
              height={64}
              className={classes.logo}
            ></img>

            <Grid item xs={10}>
              <Scroll to="home" smooth={true}>
                <Button className={classes.button}>Home</Button>
              </Scroll>

              <Scroll to="foods-to-try" smooth={true}>
                <Button className={classes.button}>Products</Button>
              </Scroll>

              <Scroll to="about-us" smooth={true}>
                <Button className={classes.button}>About Us</Button>
              </Scroll>

              <Button className={classes.button}>Contact Us</Button>
            </Grid>

            <Grid item xs={2}>
              <IconButton>
                <PhoneIcon className={classes.icon} />
              </IconButton>

              <IconButton>
                <MailIcon className={classes.icon} />
              </IconButton>

              <IconButton>
                <FacebookIcon className={classes.icon} />
              </IconButton>
              
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>

      <Fade in={true} {...(true ? { timeout: 1000 } : {})}>
      <div className="home">
      <h1
        style={{
          textAlign: "center",
          fontSize: "70px",
          fontWeight: "900",
          color: "#953d8d",
        }}
      >
        {""}
        JOYFUL'S KAKANIN
      </h1>
      
      <div className="homeline2"></div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "200",
          fontStyle: "italic",
          color: "#953d8d",
          marginTop: -60,
          marginLeft: 340,
        }}
      >
        {""}
        "Gawang Kapampangan"
      </h2>
      <div className="homeline3">
      <h3
        style={{
          textAlign: "left",
          fontSize: "20px",
          fontWeight: "360",
          fontStyle: "italic",
          color: "#598f1e",
          marginLeft: 230,
          marginRight: 250,
          marginButtom: 30,
        }}
      >
    
        <p>Have an occasion?  Or just want some kakanins?  Come and explore
        what Joyful's Kakanin can bring to your tables!"</p>
      </h3>

      <div className="App">
        <Scroll to="foods-to-try" smooth={true}>
        <Button
        style={{
          textAlign: "center",
          fontSize: "25px",
          fontWeight: "900",
          color: "white",
          background: "#24640E",
          borderRadius: 25,
          width: 280,
          height: 70,
          marginLeft: 400,
        }}>Products</Button>
        </Scroll>
      </div>
      </div>
        </div>
      
      </Fade>
      <div><img className="HomeContents" src="./assets/assorted2.png" alt="" /></div>
    </div>
    
    
  );

}
