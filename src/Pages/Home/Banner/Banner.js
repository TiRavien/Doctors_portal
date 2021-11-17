import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
    
}

const Banner = () => {
    return (
        <Container style={ bannerBg } sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter , textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="p" sx={{ my:3, fontSize: 13, color: 'gray', fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ut aspernatur soluta reprehenderit distinctio fugiat exercitationem amet voluptatibus blanditiis dolor.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#52C9A4' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={{ verticalCenter }}>
                    <img style={{ width: '350px', marginTop: '25%' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;