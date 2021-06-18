import { Container, Typography, OutlinedInput, Grid, makeStyles, Button, Icon } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    curlInput: {
        height: "20rem",
    },
    sendBtnCtr: {
        padding: `1rem 0`,
    },
    sendBtn: {
        margin: theme.spacing(1),
    }
  
}));

export const CurlInput = (props) => {
    const classes = useStyles();
    const [curl, setCurl] = useState("");
    return (
        <Container >
        <Grid container  spacing={4} justify="center">
          <Grid item xs={"12"}>
        <Typography align={"center"} variant={"h3"} gutterBottom>
 
          Curl2Shit
        </Typography>
          </Grid>
          <Grid item xs={"12"} md={"6"} >
        <OutlinedInput fullWidth multiline rows={10} value={curl} onChange={(e) => {setCurl(e.value)}}>
        </OutlinedInput>
        <Grid container xs={12} item justify="flex-end" className={classes.sendBtnCtr}>
              <Button 
              variant="contained" 
              color="primary" 
              endIcon={<SendIcon />}
              >
                  Start
                  </Button>

        </Grid>
          </Grid>

        </Grid>
      </Container>
    )
}