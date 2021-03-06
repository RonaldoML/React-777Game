import { Box, Button, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBalance,
  addRecord,
  substractBalance,
} from "../../redux/actions/play";
import { numberCompare, rand } from "../../utils/util";
import { GameBox } from "../utility/GameBox";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 15,
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
}));

export const PlayGrid = () => {
  const dispatch = useDispatch();

  const { counter } = useSelector((state) => state.play);
  const { user } = useSelector((state) => state.auth);

  const [spacing, setSpacing] = React.useState(2);
  const [isDebug, setIsDebug] = React.useState(false);
  const classes = useStyles();

  const [values, setValues] = React.useState({
    first: "-",
    second: "-",
    third: "-",
  });

  const { first, second, third } = values;

  React.useEffect(() => {
    if (first !== "-") {
      dispatch(
        addRecord({
          username: user,
          slots: Object.values(values),
          time: new Date().toLocaleString().replace(" ", " - "),
        })
      );

      if (first === "7" && second === "7" && third === "7") {
        return dispatch(addBalance(10));
      }
      let com = numberCompare(values);
      switch (com) {
        case 2:
          dispatch(substractBalance());
          return dispatch(addBalance(0.5));
        case 3:
          dispatch(substractBalance());
          return dispatch(addBalance(5));
        default:
          return dispatch(substractBalance());
      }
    }
  }, [values]);

  const handleDebbug = () => {
    setValues({
      first: "7",
      second: "7",
      third: "7",
    });
  };

  const handlePlay = () => {
    setValues({
      first: `${rand()}`,
      second: `${rand()}`,
      third: `${rand()}`,
    });
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Grid item>
            <GameBox value={first} />
          </Grid>
          <Grid item>
            <GameBox value={second} />
          </Grid>
          <Grid item>
            <GameBox value={third} />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handlePlay}
          >
            Play
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleDebbug}
          >
            Debug
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
