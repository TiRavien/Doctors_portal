import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51Jvli6HcqBeXGSsXFuH7a8pw6fB1m9T6q3nc898R9cZZiKML2dJ4zHWClF8TqCx46Zdz7nPPD7Etq0egUIXo7l5r001iCDSH2R')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://https://quiet-forest-14021.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [])
    return (
        <div>
            <h2>Please pay for:{appointmentId}</h2>
            <h4>Pay: ${appointment.price}</h4>

            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;

// 1. install stripe and stripe-react
// 2. set publishable day
// 3. Elements
// 4. Checkout Form
//-----------------//
// 5. create payment Method
// 6. server: create payment intent api
// 7. Load client secret
// 8. ConfirmCard payment
// 9. handle user error