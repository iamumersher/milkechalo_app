import * as React from 'react';
import {CssBaseline,Grid,Typography,Container,Select,MenuItem,InputLabel,FormControl} from '@mui/material';
import TextFieldWithlabel from '../../mui components/TextFieldWithlabel';
import Box from '@mui/material/Box';
import Logo from '../logo';
import Copyright from '../../mui components/CopyRight';
import DateSelect from '../../mui components/DateSelect';
import MyButton from '../../mui components/MyButton';
import { Link } from 'react-router-dom';
  



export default function SignUp() {
    const [gender, setGender] = React.useState('');

    const handleChange = (event) => {
      setGender(event.target.value);
    };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      Gender : data.get('gender'),
    });
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Logo logo_type='circle' sx={{ m: 1, width:'150px' ,height:'150px' }}/>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextFieldWithlabel
                  autoComplete="given-name"
                  name="firstName"
                  required
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
                  
                />
              </Grid>
              <Grid item xs={12}>
                <DateSelect  id="dob"
                  name="dob" label="Date Of Birth"
        disableFuture
        slotProps={{
          textField: {
            helperText: 'MM/DD/YYYY' , fullWidth:true
          },
        } }
        />
              </Grid>
              

              
            <Grid item xs={12} sm={6}>
               

            <FormControl required sx={{ m: 1, minWidth : 160, }}>
        <InputLabel id="genderdropdown">Gender</InputLabel>
        <Select
          labelId="gender"
          id="gender"
          value={gender}
          name="gender"
          label="Gender *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={'male'}>male</MenuItem>
          <MenuItem value={'female'}>female</MenuItem>
        </Select>
      </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} sx={{marginTop: '6px',}}>
                <TextFieldWithlabel
                  
                  fullWidth
                  id="carnumber"
                  label="car number (Optional)"
                  name="car_number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWithlabel
                  required
                  fullWidth
                  id="username"
                  label="username"
                  name="user_name"
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
             value='Sign Up'
             type="submit"
             fullWidth
             variant="contained"
             sx={{ mt: 3, mb: 2 , color:'white', bgcolor:'black'}}
           />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright date="2023" sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}