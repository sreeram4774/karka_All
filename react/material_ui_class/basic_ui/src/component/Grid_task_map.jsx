import React from 'react'
import { Grid, Box, Typography } from "@mui/material";

const Grid_task_map = () => {
  return (
            <Grid container>
                {["blue","yellow","pink","red","orange"].map((color,index)=>(
                    <Grid item xs={12} sm={12} md={4} lg={2} key={index}>
                        <Box sx={{  backgroundColor: color,height: "100px",display: "flex",justifyContent: "center",alignItems: "center",}}>
                            <Typography variant="h1">
                                {index+1}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
  )
}

export default Grid_task_map