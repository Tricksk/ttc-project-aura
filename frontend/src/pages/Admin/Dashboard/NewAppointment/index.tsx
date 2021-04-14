import { Grid, TextField } from '@material-ui/core';
import React from 'react';

// import { Container } from './styles';

const NewAppointment: React.FC = () => {
  return (
    <Grid xs={12}>
      <TextField size="small" label="Outlined" variant="outlined" />
    </Grid>
  );
}

export default NewAppointment;