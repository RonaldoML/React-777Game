import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { PlayGrid } from "./PlayGrid";
import { Button, Grid } from "@material-ui/core";
import { rand } from "../../utils/util";

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const GameModal = ({ open, setOpen }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [spacing, setSpacing] = React.useState(2);

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid container justify="center" spacing={spacing}>
        <Grid item>
          <PlayGrid />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            className={classes.Button}
            onClick={handleClose}
          >
            Close
          </Button>
        </Grid>
      </Grid>
      <GameModal />
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        disableEnforceFocus
      >
        {body}
      </Modal>
    </div>
  );
};
