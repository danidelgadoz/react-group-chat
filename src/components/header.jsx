import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import MoreVert from "@mui/icons-material/MoreVert";
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';


const Header = ({ nickname }) => {

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Hi {nickname}
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton aria-label="delete" color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton aria-label="delete" color="inherit">
          <MoreVert />
        </IconButton>
      </Toolbar>
    </AppBar>
  );

}

export default Header;
