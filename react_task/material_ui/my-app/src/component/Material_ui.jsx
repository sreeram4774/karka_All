import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

const Material_ui = () => {
  return (
    <Box sx={{ bgcolor: "red", p: 2 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Welcome to Material-UI
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Box
            sx={{
              p: 2,
              backgroundColor: '#f5f5f5',
              textAlign: 'center',
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6">Item 1</Typography>
            <Typography variant="body2">This is a responsive box.</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              p: 2,
              backgroundColor: '#f5f5f5',
              textAlign: 'center',
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6">Item 2</Typography>
            <Typography variant="body2">This is a responsive box.</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              p: 2,
              backgroundColor: '#f5f5f5',
              textAlign: 'center',
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="h6">Item 3</Typography>
            <Typography variant="body2">This is a responsive box.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Material_ui;
