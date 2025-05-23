import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Two = () => {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Component Two</Typography>
        </Toolbar>
      </AppBar>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Welcome to Component Two</h2>
      </div>
    </div>
  );
};

export default Two;
