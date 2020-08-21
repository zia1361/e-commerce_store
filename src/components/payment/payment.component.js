import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import {clearItems} from '../../redux/cart/cart.actions';

const PaymentButton = ({price, clearItems}) => {
    const publishablekey = 'pk_test_51HDlAHHRrbwFVMBD8qbInlUlgYMOyGJHVOxECvrTFtGnTyBv9b0WMYXUQ8Pubo7Dqi7YnQASIyEGIwWUc4rfgcP100ua5qM3JH';
    const onToken = token => {
        console.log(token);
        alert('Payment successful');
        clearItems();
    }
    return(
        <StripeCheckout 
        name='E-Commerce Store co.'
        label='Pay Now'
        panelLabel='Pay Now'
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $ ${price}`}
        amount={price*100}
        token={onToken}
        stripeKey={publishablekey}
        />
    );
}

const mapDispatchToProps = dispatch => ({
    clearItems: () => dispatch(clearItems())
})

export default connect(null,
    mapDispatchToProps
    )(PaymentButton);