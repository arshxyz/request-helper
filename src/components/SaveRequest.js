import { Grid, TextField, Button } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  heading: {
    borderBottom: "1px solid lightgray",
    padding: theme.spacing(1, 0, 1, 2),
  },
  modalContent: {
    padding: theme.spacing(2),
    width: "60vw",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  confirmText: {
    fontSize: "large",
    // padding: theme.spacing(0, 1, 1, 0),
  },
  content: {
    color: "#6e6e6e",
    display: "flex",
    flexDirection: "column",
    // margin: theme.spacing(1, 0)
    padding: theme.spacing(2, 0, 0, 0),
    // "& div": {
    //     // margin:theme.spacing(2, 0, 1, 0)
    // }
  },
  flexGrow: {
    flexGrow: "1",
  },
  submitBtn: {
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
  },
}));

export default function SaveRequest({ curlState }) {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h5" className={classes.heading}>
        {" "}
        Share request{" "}
      </Typography>

      <div className={classes.modalContent}>
        <Typography className={classes.confirmText}>
          {" "}
          Share this request?{" "}
        </Typography>
        <Grid container justify="space-evenly">
          <Grid item md={6} container className={classes.content}>
            <div>
              A public URL will be created. You can use this link to share your
              code with others. Anyone with the link will be able to access the
              request.
              <br />
              <br />
              Ensure that your request does not include any personal info or
              private cookies/auth tokens.
            </div>
            <div className={classes.flexGrow} />
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.submitBtn}
            >
              Share Link
            </Button>
          </Grid>
          <Hidden smDown>
            <Grid item container md={6} justify={"center"}>
              <TextField
                variant="outlined"
                multiline
                rows={8}
                inputProps={{ readOnly: true }}
                style={{ width: "90%" }}
                defaultValue={curlState.result}
              />
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
}
