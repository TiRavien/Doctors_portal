import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import { Button, Typography } from '@mui/material';
import appointmentbanner from '../../../images/appointment-bg.png';


const banner = {
    background: `url(${appointmentbanner})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}
const AppointmentBanner = () => {
    return (
        <Box style={banner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant="h6" sx={{mb: 5}} style={{ color: '#52C9A4' }}>
                            APPOINTMENT
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appointment today!
                        </Typography>
                        <Typography variant="h6" sx={{my: 5}} style={{ color: 'white', fontSize: 14, fontWeight: 300}} >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores iste voluptatum accusantium illum reiciendis.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#52C9A4' }} >Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;