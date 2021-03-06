import { Button, Icon, makeStyles } from "@material-ui/core";
import React from "react";
import { GameModal } from "./GameModal";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export const PlayButton = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleClick}
      >
        Start to play
      </Button>
      <GameModal open={open} setOpen={setOpen} />
    </div>
  );
};
