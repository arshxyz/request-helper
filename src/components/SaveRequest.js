import { Grid, TextField, Button } from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';
import { Hidden } from "@material-ui/core";
import { makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";

const { customAlphabet } = require('nanoid');
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const nanoid = customAlphabet(alphabet, 9);
function generateLink() {
  let id = nanoid();
  let res = "";
  for (let i = 0; i < 9; i+=3){
    res = res + id.substr(i, 3) + "-";
  }
  return res.slice(0,-1);
} 

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
    padding: theme.spacing(2, 0, 0, 0),
    "& div": {
      margin: theme.spacing(1, 0)
    }
  },
  shareConfirm: {
    padding: theme.spacing(1, 0)
  },
  flexGrow: {
    flexGrow: "1",
  },
  submitBtn: {
    marginTop: "1rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "2rem",
    },
  },
  input: {
    height: "200px",
    display: "none",
  }
}));

export default function SaveRequest({ curlState }) {
  const [link, setLink] = useState(generateLink())
  const classes = useStyles();
  const [linkShared, setLinkShared] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareLink = async() => {
    if (linkShared) {
      toast.success("Code already published");
      return;
    }
    const linkRef = await db.collection("requests").doc(link)
    linkRef.set(curlState)
    .then(() => {
      toast.success("Code published!");
      setLinkShared(true);
    })
    .catch((e) => toast.error(e))


  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location + link);
    setCopied(true);
  }


  return (
    <div>
      <Typography variant="h5" className={classes.heading}>
        Share request
      </Typography>

      <div className={classes.modalContent}>
        <Typography className={classes.confirmText}>
          Share this request?
        </Typography>
        <Grid container justify="space-evenly" className={classes.shareConfirm}>
          <Grid item md={6} container className={classes.content}>
            <div>
              A public URL will be created. You can use this link to share your
              code with others. Anyone with the link will be able to access the
              request.
              <br />
              <br />
              Ensure that your request does not include any personal info or
              private cookies/auth tokens.
              <br />
              <br />
              Click the generated link to generate a different one
            </div>
            <div className={classes.flexGrow} />
            <TextField variant="outlined" fullWidth value={window.location + link} inputProps={{readOnly: true}} onClick={() => {setLink(generateLink())}} />
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.submitBtn}
              onClick={shareLink}
            >
              Share Link
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.submitBtn}
              disabled={!linkShared}
              onClick={copyLink}
            >
              {copied ? <span>Copied to clipboard</span> : <span>Copy link</span>}
            </Button>
          </Grid>
          <Hidden smDown>
            <Grid item container md={6} justify={"center"}>
              <TextField
                variant="outlined"
                multiline
                rows={20}
                inputProps={{ readOnly: true,}}
                style={{ width: "90%"}}
                value={curlState.result}
              />
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
}
