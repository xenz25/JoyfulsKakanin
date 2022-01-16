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
    height: 450,
    background: "rbga(0,0,0,0.5)",
    color: "black",
    
    "&:hover": {
      transition: "background 0.5s, color 0.5s, transform 0.5s",
      transform: "scale3d(1.02, 1.02, 1)",
      background: "#953d8d",
      color: "#f7e508",
      boxShadow: "0 3px 5px 2px gray",
    },
  },
  media: {
    height: 250,
    width: "100%",
  },
  card_actions: {
    justifyContent: "space-between",
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
          sx={{ fontWeight: 'bold' }}
          variant="h5"
          component="div"
        >
          {food.title}
        </Typography>
        <Typography
          variant="body2"
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
