import { Grid } from '@mui/material';
import * as React from 'react';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointment from '../Appointment/Appointment';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
                <Calendar
                    date={date}
                    setDate={setDate}
                ></Calendar>
            </Grid>
            <Grid item xs={12} md={7}>
                <Appointment date={date}></Appointment>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;