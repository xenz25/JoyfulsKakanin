import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./AboutUs.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.root} id="about-us">
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
      <div className="aboutContents">
        <img className="aboutLogo" src="./assets/logo.png" alt="" />
        <div className="aboutDetails">
          <h2 className="aboutHeading">
            <span>Welcome to</span> Joyful's Kakanin
          </h2>
          <p className="aboutText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nihil
            molestias harum doloribus necessitatibus! Ipsam tenetur doloremque,
            iste, ipsa labore laborum in sed ipsum qui fuga quis distinctio
            aliquid? Aspernatur sed id quos adipisci ab, cupiditate, dolor
            reprehenderit qui, facilis aut ut eos! Rem nam sed harum optio sit
            quis temporibus, similique vero debitis illo inventore cum quo
            ducimus quam voluptatum deleniti veniam, modi, est dolores delectus?
            Fugiat, pariatur cum corporis cumque magnam atque totam asperiores
            omnis eius explicabo obcaecati veniam neque facilis officia
            consequuntur autem magni doloremque voluptas nisi, quas id. Iste
            suscipit dicta perspiciatis nobis error alias minus.
          </p>
        </div>
      </div>
    </div>
  );
}
