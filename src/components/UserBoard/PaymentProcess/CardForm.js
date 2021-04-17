import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CardForm = ({ handlePayment }) => {
  const [paymentError, setPaymentError] = useState(null)
  const [success, setSuccess] = useState(null)
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }


    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setSuccess(null)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      handlePayment(paymentMethod.id);
      setSuccess(paymentMethod.id);
      setPaymentError(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
      </button>
      </form>
      {
        paymentError && <p className="text-danger">{paymentError}</p>
      }
      {
        success && <p className="text-success">Your Payment was successfully</p>
      }
    </div>
  );
};

export default CardForm;