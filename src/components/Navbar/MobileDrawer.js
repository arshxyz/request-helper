import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  fullList: {
    width: "250px",
  },
}));
export const MobileDrawer = ({ menuItems, ...drawerOptions }) => {
  const classes = useStyles();
  return (
    <Drawer
      {...drawerOptions}
      className={classes.fullList}
    >
      <div className={classes.fullList}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item}>
              <ListItemIcon onClick={item.action}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} onClick={item.action} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};
