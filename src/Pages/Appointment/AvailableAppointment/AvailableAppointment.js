import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import TimeSlots from '../TimeSlots/TimeSlots';


const timeSlots = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08:00A.M - 09:00A.M',
        price: 20,
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10.05A.M - 11.30A.M',
        price: 15,
        space: 10
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '05:00P.M - 06:30P.M',
        price: 17,
        space: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '07:00P.M - 08:30P.M',
        price: 19,
        space: 10
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06:00P.M - 07:00P.M',
        price: 25,
        space: 10
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07:00P.M - 08:00P.M',
        price: 35,
        space: 10
    }
]


const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3, fontWeight: 600 }}>Available Appointments on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked Successfully</Alert>}
            <Grid container spacing={2}>
                {
                    timeSlots.map(timeSlot => <TimeSlots
                        key={timeSlot.id}
                        timeSlot={timeSlot}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></TimeSlots>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;