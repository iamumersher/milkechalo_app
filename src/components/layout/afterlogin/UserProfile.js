import * as React from 'react';
import {CssBaseline,Grid,Typography,Container,Select,MenuItem,InputLabel,FormControl} from '@mui/material';
import TextFieldWithlabel from '../../mui components/TextFieldWithlabel';
import Box from '@mui/material/Box';
import Logo from '../logo';
import MyButton from '../../mui components/MyButton';
import { Link } from 'react-router-dom';
import UserAvatar from '../../mui components/UserAvatar';




export default function UserProfile(){

    
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      Gender : data.get('gender'),
    });
  };
return(
    <Container component="main" maxWidth="xs">
        <CssBaseline />
<Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
<UserAvatar sx={{ m: 1, width:'150px' ,height:'150px' }}/>
<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        
        
<Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextFieldWithlabel
                  autoComplete="given-name"
                  name="firstName" 
                  value='Umer'
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextFieldWithlabel
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value='Sher'
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWithlabel
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value='iamumersher@gmail.com'
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWithlabel
                  required
                  fullWidth
                  id="cnic"
                  label="Cnic"
                  name="cnic"
                  autoComplete="cnic"
                  value='5150383022011'

                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWithlabel
                  required
                  fullWidth
                  name="phone_no"
                  label="Phone no"
                  type="tel"
                  id="phone_no"
                  value='+923108739518'

                />
              </Grid>
              <Grid item xs={12}>
              <TextFieldWithlabel
                  required
                  fullWidth
                  name="dob"
                  label="Date Of Birth"
                  id="dob"
                  value='03/04/1997'

                />
              </Grid>
              

              
            <Grid item xs={12} sm={6}>
               

            <TextFieldWithlabel
                  required
                  fullWidth
                  name="gender"
                  label="Gender"
                  id="gender"
                  value='Male'

                />
              </Grid>
              <Grid item xs={12} sm={6} sx={{marginTop: '6px',}}>
                <TextFieldWithlabel
                  
                  fullWidth
                  id="carnumber"
                  label="car number (Optional)"
                  name="car_number"
                  value='RZ-840'
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextFieldWithlabel
                  required
                  fullWidth
                  name="password"
                  label="New Password"
                  type="password"
                  id="password"
                />
              </Grid>
            
             
            </Grid>
            <MyButton
             value='Update Profile'
             type="submit"
             fullWidth
             variant="contained"
             sx={{ mt: 3, mb: 2 , color:'white', bgcolor:'black'}}
           />
            
        </Box>
        </Box>
        </Container>    
);

}