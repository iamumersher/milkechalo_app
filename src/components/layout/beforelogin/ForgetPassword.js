import * as React from 'react';
import {CssBaseline,Grid,Typography,Container} from '@mui/material';
import TextFieldWithlabel from '../../mui components/TextFieldWithlabel';
import Copyright from '../../mui components/CopyRight';
import Box from '@mui/material/Box';
import Logo from '../logo';
import MyButton from '../../mui components/MyButton';
import { Link } from 'react-router-dom';

export default  function ForgetPassword(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
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
               Forget Password
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
               
                <MyButton
               value='Forget Password'
               type="submit"
               fullWidth
               variant="contained"
               sx={{ mt: 3, mb: 2 , color:'white', bgcolor:'black'}}
             />
                <Grid container>
                  
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