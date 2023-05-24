import * as React from 'react';
import {Typography,Link} from '@mui/material';
export default function Copyright(props) {
    return (
      <Typography variant="body2" color="text.primary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          MilkeChalo
        </Link>{' '}
        {props.date}
        {'.'}
      </Typography>
    );
  }