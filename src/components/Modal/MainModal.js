import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SaveRequest from "../SaveRequest";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 2),
  },
}));

export default function TransitionsModal({
  saveModal,
  setSaveModal,
  modalType,
  curlState,
}) {
  const classes = useStyles();

  const handleClose = () => {
    setSaveModal(false);
  };

  return (
    <Modal
      className={classes.modal}
      open={saveModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={saveModal}>
        <div className={classes.paper}>
          <SaveRequest {...{ curlState }} />
        </div>
      </Fade>
    </Modal>
  );
}
