import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { RenderIf } from "../../Utils";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

function Navbar({ login, handleLogin, logout }) {
  const settings = ["Logout"];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <AppBar
        position="absolute"
        style={{ background: "linear-gradient(to right, #118d97, #032f4c)" }}
      >
        <Toolbar style={{ minHeight: "65px !important" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex" }}
          >
            <Link style={{ display: "flex" }} to="/">
              <img
                src="/Images/healthcredit2.png"
                alt="Slide 1"
                style={{ width: "128px", paddingTop: 8, paddingBottom: 8 }}
              />
            </Link>
          </Typography>
          <RenderIf predicate={logout}>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    style={{ marginRight: 8, backgroundColor: "white" }}
                    alt="Matias"
                    src="images/matias.png"
                  />
                  <Typography color="white" variant="body1">
                    Guilherme Thomé
                  </Typography>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleLogout}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </RenderIf>
          <RenderIf predicate={login === true}>
            <Button
              onClick={handleLogin}
              size={"small"}
              variant="outlined"
              style={{ cursor: "pointer" }}
              color="inherit"
            >
              LOGIN
            </Button>
          </RenderIf>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
