import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import logo from './crown.svg'

function StripeButton({price}) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ij99XEtYdn1Gtv0GIfAF0nl7b4NhbZlHhkZD27A7pFALx2qeCKlfkKaMi1CL8XJMSakyQNf6Metr21welABgcWq004Xji3jv4';
    const onToken = token => {
        alert("Payment Successful");
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name="Crown Closet ltd."
            billingAddress
            shippingAddress
            image={logo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton
