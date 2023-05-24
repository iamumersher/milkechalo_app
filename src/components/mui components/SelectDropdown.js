import * as React from 'react';
import{Select,FormControl,MenuItem,InputLabel } from '@mui/material';

export default function SelectDropdown() {
  const [gender, setGender] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
     
      <FormControl required sx={{ m: 1, minWidth: 120, }}>
        <InputLabel id="genderdropdown">Gender</InputLabel>
        <Select
          labelId="gender"
          id="gender"
          value={gender}
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
    </div>
  );
}