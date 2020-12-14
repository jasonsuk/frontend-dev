import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// Documentation : https://github.com/azmenak/react-stripe-checkout

const StripeCheckoutButton = ({ price }) => {
    // Stripe wants value in cents : need conversion by * 100
    const stripePrice = price * 100;
    const publishableKey =
        'pk_test_51Hy4GDLHfxmeAMyxMeCUvI6aAJoLDnhq1WyvGMCkWQIPMYway5xZSfqiVl2VvknVV7YvOnSH5SL0kRJYteGU9MmM00aMMfFdWt';

    // In this app, we don't need actual payment to be made,
    // so the below function is for a simple message pop up
    const onToken = (token) => {
        console.log(token);
        alert('Payment successful');
    };

    return (
        <StripeCheckout
            stripeKey={publishableKey}
            token={onToken}
            name="ecomm-clothing Co."
            description={`Your total is ${price}`}
            image="https://svgshare.com/i/CUz.svg"
            label="Pay Now"
            amount={stripePrice} // cents
            billingAddress
            shippingAddress
        />
    );
};

export default StripeCheckoutButton;
