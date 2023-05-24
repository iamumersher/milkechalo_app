import * as React from 'react';
import {CssBaseline,FormControlLabel,Checkbox,Grid,Typography,Container} from '@mui/material';
import TextFieldWithlabel from '../../mui components/TextFieldWithlabel';
import Box from '@mui/material/Box';
import Logo from '../logo';
import Copyright from '../../mui components/CopyRight';
import MyButton from '../../mui components/MyButton';
import { Link } from 'react-router-dom';




export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextFieldWithlabel
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextFieldWithlabel
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Link to='/dashboard'>
            <MyButton
            value='Sign In'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , color:'white', bgcolor:'black'}}
             
              
            /></Link>
              
             
            <Grid container>
              <Grid item xs>
                <Link to="/forgetpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright date="2023" sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}