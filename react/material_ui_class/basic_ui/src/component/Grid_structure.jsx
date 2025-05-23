import React from "react";
import { Grid, Typography, Paper } from "@mui/material";

const MyGrid = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 3,border:'1px solid black', justifyContent:"center" ,
        alignItems:"center"}}>  
      <Grid item xs={12} sm={6} md={4} lg={2}> 
        <Paper sx={{ padding: 2, textAlign: "center" }}>
          <Typography variant="h6">Item 1</Typography>  
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={2}>  
        <Paper sx={{ padding: 2, textAlign: "center" }}>
          <Typography variant="h6">Item 2</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={2}>  
        <Paper sx={{ padding: 2, textAlign: "center" }}>
          <Typography variant="h6">Item 3</Typography>
        </Paper>
      </Grid>

    </Grid>
  );
};

export default MyGrid;
