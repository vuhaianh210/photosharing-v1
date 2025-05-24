import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import models from "../../modelData/models";
import "./styles.css";

function TopBar () {
    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Vũ Hải Anh
          </Typography>
        </Toolbar>
      </AppBar>
    );
}

export default TopBar;
