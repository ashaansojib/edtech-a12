import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51NH97YSBspciXS81P9nqnC6L6GFnDd0fczu3gBsA22dMJPwQaCdrBgyDIK563uRsIZ7jgB2rRxArLdH76oFgt7vG00PS37U148');
const Payment = () => {
    const { price, id } = useParams();
    
    return (
        <Elements stripe={stripePromise}>
            <div className='w-[700px] mt-10 mx-auto bg-slate-100 p-4'>
                <CheckOut id={id} price={price}></CheckOut>
            </div>
        </Elements>
    );
};

export default Payment;