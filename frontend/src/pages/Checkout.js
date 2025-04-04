import { useState } from "react";

function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState("");

    return (
        <div>
            <h2>Checkout</h2>
            <h3>Choose Payment Method:</h3>
            <label>
                <input type="radio" value="stripe" onChange={(e) => setPaymentMethod(e.target.value)} /> Stripe
            </label>
            <label>
                <input type="radio" value="paypal" onChange={(e) => setPaymentMethod(e.target.value)} /> PayPal
            </label>
            <button>Proceed to Pay</button>
        </div>
    );
}

export default Checkout;
