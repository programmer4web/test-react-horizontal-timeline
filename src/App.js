import React, { useState } from 'react';
import  { Grid, Typography } from '@mui/material';
import TimelineDemo from './TimelineDemo';

const App = () => {
  return (
    <div className="App" style={{margin: '2em'}}>
        <Grid container spacing={2} sx={{ mb: 2 }} >
          <Grid item xs={12} sm={10}>
            <Typography>React Horizontal Timeline Demo</Typography>
          </Grid>
        </Grid>
        <TimelineDemo />
    </div>

    
  );
}

export default App;