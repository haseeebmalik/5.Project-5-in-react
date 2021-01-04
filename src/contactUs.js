import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    paper: {
      padding: theme.spacing(2),

      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  },
  button: {
    color: "white",
  },
}));

export default function ContactUs() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div id="contactUs">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md>
          <Paper className={classes.paper} elevation={3}>
            <h2>Contact Us</h2>
            <br />
            <br />
            <br />

            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Name" />
              <br />
              <TextField id="standard-basic" label="Email" />
              <br />
              <TextField
                id="standard-multiline-flexible"
                label="Comment"
                multiline
                rowsMax={4}
                value={value}
                onChange={handleChange}
              />
            </form>
            <br />
            <br />
            <Button
              className={classes.button}
              variant="contained"
              size="medium"
              color="primary"
              className={classes.margin}
            >
              Submit
            </Button>
            <br />
            <br />
            <p className={classes.button}>...</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
