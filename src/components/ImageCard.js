import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    background: "rbga(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 250,
  },
  title: {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#598f1e",
  },
  desc: {
    fontSize: "1.1rem",
    color: "#00000",
  }
}));

export default function ImageCard({ food }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        image={food.imageUrl}
        alt="turon"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={classes.title}
        >
          {food.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={classes.desc}
        >
          {food.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
