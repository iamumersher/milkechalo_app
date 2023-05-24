import * as React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import RideCard from './RideCard';
export default function RidesDisplay(){
    return(
        <>       
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            float:'left',
            marginLeft:'860px'}}>       
              <h1>Available Rides</h1>
</Box>

        <Box columnGap={1} gridRow={2} sx={{
            display: 'flex',
            alignItems: 'center',
            float:'left',
            marginLeft:'230px',
            flexDirection:'row'
            
          }}>
        <Grid >
             <RideCard/>
           

              </Grid>
              <Grid >
             <RideCard/>
              </Grid>
              <Grid >
             <RideCard/>
              </Grid>
              <Grid >
             <RideCard/>
              </Grid>
              <Grid >
             <RideCard/>
              </Grid>
              
              
        </Box></>
    );
}