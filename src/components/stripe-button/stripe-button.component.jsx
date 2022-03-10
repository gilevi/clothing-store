import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KblNHClY6JxxptPyEU4jlIs6uA9crxwCJWuayFYR4S9OWzwEssVjx71XshfFPJi0sAQKJ5B5Uyl7MkvR1nJ9llN00BaU0Sz7P'
    const onToken = token => {
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd. "
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton