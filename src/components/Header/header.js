import { Switch } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function Header() {
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { theme, changeTheme } = useContext(ThemeContext);

  const isLightTheme = theme.name === "light";

  return (
    <div className={classes.root}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p>Dark theme</p>
        <Switch
          checked={isLightTheme}
          onChange={() => changeTheme(isLightTheme ? "dark" : "light")}
        />
        <p>Light theme</p>
      </div>
      <AppBar style={{ backgroundColor: theme.theme.color }} position="static">
        <Toolbar>
          <Typography
            style={{ display: "flex", alignItems: "center" }}
            variant="h6"
            className={classes.title}
          >
            <Link to="/chat">
              <img className="header_img" src={"/img/GB.png"} alt="GB" />
            </Link>
            <Link style={{ color: "yellow", marginLeft: "15px" }} to="/gists">
              Gists
            </Link>
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem>
                  <Link to="/profile">Profile</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>History</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
