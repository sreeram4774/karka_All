import React, { useState } from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const One = () => {
  const [timer, setTimer] = useState(5);  
  const navigate = useNavigate();


  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);  
          navigate('/two');  
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Timer Page - Component One
          </Typography>
        </Toolbar>
      </AppBar>

      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Welcome to Component One</h2>
        <p>The page will automatically redirect in {timer} seconds.</p>
        <Button variant="contained" color="primary" onClick={startTimer}>
          Start Timer
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/two')}
          style={{ marginLeft: '10px' }}
        >
          Go to Two Now
        </Button>
      </div>
    </div>
  );
};
export default One