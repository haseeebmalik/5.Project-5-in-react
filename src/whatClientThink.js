import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import img1 from "./clientsImgs/businessmen1.jpg";
import img2 from "./clientsImgs/businessmen2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  p: {
    marginRight: "10px",
    marginLeft: "30px",
    paddingTop: "20px",
  },
}));

export default function WhatClientsThink() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>What Our Clients Think Of Us</h2>
      <Grid container spacing={3}>
        <Grid item md={6} sm={6} xs={12}>
          <Paper elevation={3}>
            <Avatar alt="Remy Sharp" src={img1} className={classes.large} />
            <p className={classes.p}>
              RNS “Blockchain Lab, RAIET, Design Lab, Investment and Consultancy
              ” -Programmably Agile, Empowered by Innovation. RNS is a pioneer
              in developing Blockchain, Cybersecurity and AI solutions. Bringing
              people and technology together for a better future, diversity and
              innovation.
              <p>"David" </p>
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
          </Paper>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Paper elevation={3}>
            <Avatar alt="Remy Sharp" src={img2} className={classes.large} />

            <p className={classes.p}>
              RNS “Blockchain Lab, RAIET, Design Lab, Investment and Consultancy
              ” -Programmably Agile, Empowered by Innovation. RNS is a pioneer
              in developing Blockchain, Cybersecurity and AI solutions. Bringing
              people and technology together for a better future, diversity and
              innovation.
              <p>"Johns" </p>
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
