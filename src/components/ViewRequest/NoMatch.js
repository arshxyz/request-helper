import { makeStyles, Typography, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  centerDiv: {
    borderRadius: "20px",
    // border: "2px solid black",
    background: "#ffffff",
    height: "10rem",
    boxShadow: `5px 5px 10px #d9d9d9,
        -5px -5px 10px #ffffff;`,
    display: "flex",
    alignContent: "center",
    "& *": {
      padding: theme.spacing(1),
    },
  },
}));

export const NoMatch = ({ error }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.centerDiv}>
      <Grid item container justify="center" xs={12}>
        <Typography variant="h5">Invalid URL</Typography>
      </Grid>
      <Grid item container justify="center" xs={12}>
        <Link to="/">
          <Button variant="contained" color="primary">
            Go back to home
          </Button>{" "}
        </Link>
      </Grid>
    </Grid>
  );
};
