import React from 'react';
import Box from '@mui/material/Box';

const Boxs = () => {
    return (
        <>
            <Box sx={{ display: 'flex', backgroundColor: 'grey', height: '100px' }}>
                <Box sx={{ flex: 1 }}>
                    <h1>hello</h1>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <h1>karka</h1>
                </Box>
            </Box>
        </>
    );
};

export default Boxs;
