import React from "react";
import { Grid, Paper } from "@mui/material";

const App = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3} md={4} lg={6}>
        <Paper style={{ padding: 20, textAlign: "center" }}>Column 1</Paper>
      </Grid>
      <Grid item xs={12} sm={3} md={4} lg={6}>
        <Paper style={{ padding: 20, textAlign: "center" }}>Column 2</Paper>
      </Grid>
      <Grid item xs={12} sm={3} md={4} lg={6}>
        <Paper style={{ padding: 20, textAlign: "center" }}>Column 3</Paper>
      </Grid>
      <Grid item xs={12} sm={3} md={4} lg={6}>
        <Paper style={{ padding: 20, textAlign: "center" }}>Column 4</Paper>
      </Grid>
      <Grid item xs={12} sm={3} md={4} lg={6}>
        <Paper style={{ padding: 20, textAlign: "center" }}>Column 4</Paper>
      </Grid>
    </Grid>
  );
};

export default App;
