import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ data }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('')
    const { total, _id } = data;
    const [user, loading] = useAuthState(auth)
    const navigate=useNavigate()



    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("jwt-token")}`
            },
            body: JSON.stringify({ total })
        })
            .then(res => res.json())
            .then(data => {
                data?.clientSecret && setClientSecret(data.clientSecret)
            })
    }, [total])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!elements || !stripe) {
            return;
        }


        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        error ? setPaymentError(error.message) : setPaymentError('')
        // console.log(clientSecret, card, name, email)
        //pay 
        const { paymentIntent, paymentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                },
            },
        );

        if (paymentError) {
            setPaymentError(paymentError)
            setSuccess('')
        }
        else {
            setPaymentError('')
            setSuccess("congratulations !  your payment is successful ")
            if (paymentIntent?.id) {
                fetch(`http://localhost:5000/paid-order/${_id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                        "authorization": `Bearer ${localStorage.getItem("jwt-token")}`
                    },
                    body:JSON.stringify({tranxId:paymentIntent.id})
                })
                    .then(res => res.json())
                    .then(data => {
                        data?.acknowledged && toast.success("payment successful"); navigate("/dashboard")
                    })
            }
        }


    };

    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <form className='' onSubmit={handleSubmit}>
            <CardElement />
            {
                paymentError && <p className='text-red-600 text-center'>{paymentError}</p>
            }
            <div className='flex items-center justify-center'>
                <button className=' w-20 text-accent btn btn-secondary btn-sm px-6 mt-4' type="submit" disabled={!stripe || !elements || !clientSecret}>
                    Pay
                </button>
            </div>
            {
                success && <p className='text-green-600 text-center mt-2'>{success}</p>
            }
        </form>
    );
};

export default CheckoutForm;