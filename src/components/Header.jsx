import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Avatar, Box } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/user.reducer";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const onLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          > */}
          <Box mr={2}>
            <Avatar alt={user.data.username} src="/broken-image.jpg" />
          </Box>
          {/* </IconButton> */}

          <Typography align="center" variant="h6">
            {user.data.username}
          </Typography>

          <Typography align="center" variant="h5" className={classes.title}>
            <code style={{ fontWeight: "600" }}>OMDB APP </code>
          </Typography>
          <Button
            onClick={onLogout}
            variant="contained"
            color="secondary"
            startIcon={<ExitToAppIcon />}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
