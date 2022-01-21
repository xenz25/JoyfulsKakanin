import React from "react";
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
    width: "100vh",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
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
  home: {
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
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
            <img
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
        <div className={classes.home} id="home">
          <h1
            style={{
              textAlign: "center",
              fontSize: "50px",
              fontWeight: "bold",
              color: "purple",
            }}
          >
            {" "}
            About Us
          </h1>
          <div className="HomeContents">
            <img className="homeAssorted" src="./assets/logo.png" alt="" />
            <div className="HometDetails">
              <h2 className="homeHeading">
                <span>Welcome to</span> Joyful's Kakanin
              </h2>
              <p className="aboutText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                nihil molestias harum doloribus necessitatibus! Ipsam tenetur
                doloremque, iste, ipsa labore laborum in sed ipsum qui fuga quis
                distinctio aliquid? Aspernatur sed id quos adipisci ab,
                cupiditate, dolor reprehenderit qui, facilis aut ut eos! Rem nam
                sed harum optio sit quis temporibus, similique vero debitis illo
                inventore cum quo ducimus quam voluptatum deleniti veniam, modi,
                est dolores delectus? Fugiat, pariatur cum corporis cumque
                magnam atque totam asperiores omnis eius explicabo obcaecati
                veniam neque facilis officia consequuntur autem magni doloremque
                voluptas nisi, quas id. Iste suscipit dicta perspiciatis nobis
                error alias minus.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
