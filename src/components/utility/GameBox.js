import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  text: {
    fontSize: "30px",
  },
}));

export const GameBox = ({ value }) => {
  const classes = useStyles();
  return (
    <Box
      border={1}
      borderRadius="borderRadius"
      className={classes.paper}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <p className={classes.text}>{value}</p>
    </Box>
  );
};
