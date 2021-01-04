import React from "react";
import Lottie from "react-lottie";
import "./App.css";
import animationData from "./lottie/23741-home-delivery-man.json";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button2: {
    marginLeft: "10px",
  },
}));
export default function Lottie1() {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    animationData: animationData,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <h1>It's the food you love, delivered</h1>
          <h3>Faster than you can imagine</h3>

          <p> Always on Time</p>
          <br />
          <br />
          <Button variant="outlined" color="primary">
            ORDER NOW
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Lottie options={defaultOptions} height={350} width={450} />
        </Grid>
      </Grid>
    </div>
  );
}
