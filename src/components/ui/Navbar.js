import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1 }}
            style={{ textDecoration: "none", color: "white" }}
          >
            Rick And Morty
          </Typography>
          <MenuItem component={Link} to="/characters">
            <Typography textAlign="center">CHARACTERS</Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
