import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, Button, Grid } from '@mui/material';
import UserAvatar from '../../mui components/UserAvatar';

const RideCard = () => {
    const cardStyle = {
        maxWidth: 300,
        margin: 'auto',
        marginBottom: 20,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        borderRadius: 8,
        overflow: 'hidden',
      };
    
      
      const buttonStyle = {
        marginTop: 10,
        marginLeft:'200px'
      };
    
  return (
    <Card style={cardStyle}>
      <CardContent>
        <Grid  container spacing={2} alignItems="center">
          <Grid item>
        <UserAvatar sx={{ m: 1, width:'150px' ,height:'150px' }}/>
        </Grid>

        <Grid item xl={12}  >
            <Typography variant="h6">Umer Sher</Typography>
            <Typography variant="body1">"Ride no 1"</Typography>
          </Grid>
          <Grid item xs={4} >
            <Button variant="contained" color="primary" style={buttonStyle}>Join</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};


 

export default RideCard;