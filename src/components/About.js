import { Grid, makeStyles, Typography } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

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
  aboutSection: {
    // border: "1px solid black",
    borderRadius: "20px",
    padding: theme.spacing(4),
    // height: "5rem",
    transition: "0.5s ease",
    display: "flex",
    // width:"2px",
    justifyContent: 'center',
    alignItems: "center",
    boxShadow: `5px 5px 10px #bfbfbf,
    -5px -5px 10px #ffffff;`,
    "&:hover": {
      boxShadow: `15px 15px 30px #bfbfbf,
      -15px -15px 30px #ffffff;`,
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
          <Typography paragraph variant="subtitle2">cURLBin = Pastebin but for requests </Typography>
          <Typography variant="subtitle1" paragraph align="center">

            <Grid container spacing={2} justify="center">
        
        <Grid item xs={12} md={3}>
            <a href="https://github.com/arshxyz" target="_blank" rel="noreferrer"> 
          <div className={classes.aboutSection}>
          <GitHubIcon />
          </div>
          </a>
        </Grid>
        <Grid item xs={12} md={3}>
            <a href="https://www.linkedin.com/in/arsh-kohli-815b1b1b8/" target="_blank" rel="noreferrer"> 
          <div className={classes.aboutSection}>
          <LinkedInIcon />
          </div>
          </a>
        </Grid>
        <Grid item xs={12} md={3}>
            <a href="mailto:spamprotect.arsh.citral@simplelogin.co" target="_blank" rel="noreferrer"> 
          <div className={classes.aboutSection}>
          <EmailIcon />
          </div>
          </a>
        </Grid>

      </Grid>
          </Typography>
          <Typography variant="body2">
            Created with ❤️ as a tool for personal use (and for fun).
            Code hosted on Github and deployed on Netlify.
            <br/>
            <a href="https://github.com/arshyz">  - Arsh </a>
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
