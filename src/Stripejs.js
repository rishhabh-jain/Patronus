import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements} from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);

function Stripejs() {
    return (
        <div>
            <Elements stripe={stripePromise}></Elements>
        </div>
    )
}

export default Stripejs
