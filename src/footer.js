import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  fb: {
    width: "50px",
    height: "50px",
    color: "",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <p> © 2019 Foody . All Rights Reserved | Powered by Foody</p>
          <p>
            <Button>
              <FacebookIcon className={classes.fb} />
            </Button>

            <Button>
              <LinkedInIcon className={classes.fb} />
            </Button>

            <Button>
              <GitHubIcon className={classes.fb} />
            </Button>
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
