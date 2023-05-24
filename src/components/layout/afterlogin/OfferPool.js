import * as React from 'react';
import { useState } from 'react';
import {CssBaseline,Grid,Container} from '@mui/material';
import TextFieldWithlabel from '../../mui components/TextFieldWithlabel';
import Box from '@mui/material/Box';
import DateSelect from '../../mui components/DateSelect';
import MyButton from '../../mui components/MyButton';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

  
export default function OfferPool(){
     const [selectedTime, setSelectedTime] = useState(null);
     const [date,setDate] = useState(new Date().toLocaleDateString('fr-FR'));
     const handleSubmit = (event) => {
     event.preventDefault();
     const data = new FormData(event.currentTarget);
     console.log({
     pickup: data.get('pickup'),
     dropoff: data.get('dropoff'),
     
    });
    console.log(date);
    console.log(selectedTime);

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
          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextFieldWithlabel
                  name="carmodel"
                  required
                  fullWidth
                  id="carmodel"
                  label="Enter Car Model"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextFieldWithlabel
                  required
                  fullWidth
                  id="carnumber"
                  label="Enter Car Number"
                  name="carnumber"
                  type='number'
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextFieldWithlabel
                  required
                  fullWidth
                  id="phonenumber"
                  label="Enter Phone Number"
                  name="phonenumber"
                  type='tel'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker label="Starting Time"  name="starttime" id="starttime" value={selectedTime} 
        onChange={(e)=>{
            const t= new Date(e).toLocaleTimeString('fr-FR');
            setSelectedTime(t)}}/>
    </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <DateSelect 

                id="date"
                  name="date" label="Date"
                  disablePast
        
        slotProps={{
          textField: {
            helperText: 'MM/DD/YYYY' , fullWidth:true
          },
        } }
        value={date}
        onChange={(e)=>{ 
        const d = new Date(e).toLocaleDateString('fr-FR');
        setDate(d);
    }
    }
        />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextFieldWithlabel
                  name="startlocation"
                  required
                  fullWidth
                  id="startlocation"
                  label="Enter Start Location"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextFieldWithlabel
                  required
                  fullWidth
                  id="endlocation"
                  label="Enter End Location"
                  name="endlocation"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextFieldWithlabel
                  required
                  fullWidth
                  id="route"
                  label="Enter Route"
                  name="route"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextFieldWithlabel
                  required
                  fullWidth
                  id="noofseats"
                  label="Enter No of Seats"
                  name="noofseats"
                  type='number'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextFieldWithlabel
                  required
                  fullWidth
                  id="fare"
                  label="Enter Fare"
                  name="fare"
                  type='number'
                />
              </Grid>
 
            </Grid>
            <MyButton
             value='Offer Pool'
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