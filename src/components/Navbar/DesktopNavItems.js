import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  desktopMenuItems: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  rightButton: {
    margin: theme.spacing(0, 0, 0, 2),
  },
}));

export const DesktopMenuItems = ({ menuItems }) => {
  const classes = useStyles();

  return (
    <div className={classes.desktopMenuItems}>
      {menuItems.map((item) => (
        <Button
          variant="contained"
          className={classes.rightButton}
          key={item.title}
          endIcon={item.icon}
          onClick={item.action}
          // disabled={true}
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
};
