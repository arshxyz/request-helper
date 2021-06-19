import { TextField, makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({

  sendBtn: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(2)
  },

}));

export const InputGenerator = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <TextField
        {...props.inputProps}
        inputProps={{ spellCheck: false }}
        fullWidth
        multiline
        rows={10}
        variant={"outlined"}
      />
      <Grid
        container
        xs={12}
        item
        justify="flex-end"
        alignItems="center"
      >
        {props.Btns.map((item) => <span className={classes.sendBtn}> {item} </span>)}
      </Grid>
    </Grid>
  );
};
