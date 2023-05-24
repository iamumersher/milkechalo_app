import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MyButton(props) {
    const {value} = props;
  return (
    <Stack spacing={2} direction="row">
      <Button {...props}>{value}</Button>
    </Stack>
  );
}