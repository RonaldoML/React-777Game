import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Button, Collapse, TextField } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { loginAuth, logoutAuth } from "../../redux/actions/auth";
import { getBalance, getSesion } from "../../utils/util";
import { setNewBalance } from "../../redux/actions/play";
import Logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
  },
  text: {
    padding: "6px",
    paddingLeft: "20px",
  },
  LoginText: {
    padding: "6px",
    margingLeft: "20px",
    cursor: "pointer",
    borderRadius: 5,
    "&:hover": {
      background: "#2a377f",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  sectionDesktop: {
    display: "flex",
  },
  root: {
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: "5px",
  },
}));

export const Header = () => {
  const dispatch = useDispatch();

  const { balance } = useSelector((state) => state.play);
  const { logged, user } = useSelector((state) => state.auth);

  const classes = useStyles();
  const [username, setUsername] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorLI, setAnchorLI] = React.useState(null);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);

  const isMenuOpen = Boolean(anchorEl);
  const isLIOpen = Boolean(anchorLI);

  useEffect(() => {
    const sesion = getSesion();
    if (sesion) {
      dispatch(loginAuth(sesion));
    }
  }, []);

  useEffect(() => {
    const savedBalance = getBalance();
    if (savedBalance) {
      return dispatch(setNewBalance(savedBalance));
    }
  }, []);

  useEffect(() => {
    if (!username) setDisabled(true);
  }, [username]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLoginFormOpen = (event) => {
    setAnchorLI(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setAnchorLI(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    setAnchorLI(null);
    dispatch(logoutAuth());
    setOpenAlert(true);
    setTimeout(() => {
      setOpenAlert(false);
    }, 1000);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
    setDisabled(false);
  };
  const handleLogin = () => {
    setAnchorLI(null);
    setOpenAlert(true);
    dispatch(loginAuth(username));
    setTimeout(() => {
      setOpenAlert(false);
      setUsername("");
    }, 1000);
  };

  const menuId = "primary-search-account-menu";

  const renderAlert = (
    <Collapse in={openAlert}>
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpenAlert(false);
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {logged ? `${username} Logged In ` : "Logged Out"}
      </Alert>
    </Collapse>
  );
  const renderForm = (
    <Menu
      anchorEl={anchorLI}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isLIOpen}
      onClose={handleMenuClose}
    >
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          type="text"
          label="Username"
          variant="outlined"
          value={username}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleLogin}
          disabled={disabled}
        >
          Login
        </Button>
      </form>
    </Menu>
  );

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {logged ? (
            <Typography className={classes.title} variant="h5" noWrap>
              {user}
            </Typography>
          ) : (
            <div className={{ padding: 10 }}>
              <img src={Logo} width={50} />
            </div>
          )}

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Typography className={classes.text} variant="h6" noWrap>
              ${balance.toFixed(2)}
            </Typography>
            {logged ? (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            ) : (
              <Typography
                className={classes.LoginText}
                variant="h6"
                noWrap
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleLoginFormOpen}
              >
                Login
              </Typography>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderForm}
      {renderAlert}
    </div>
  );
};
