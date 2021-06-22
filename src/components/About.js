import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    borderBottom: "1px solid lightgray",
    padding: theme.spacing(1, 2),
  },
  modalContent: {
    padding: theme.spacing(2),
    width: "60vw",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1, 2),
    "& div": {
      margin: theme.spacing(1, 0),
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.modalContent}>
      <Typography variant="h5" className={classes.heading}>
        About
      </Typography>
      <Grid container justify="space-evenly" className={classes.shareConfirm}>
        <Grid item container className={classes.content}>
          <div>
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
            Lorem Lorem
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
