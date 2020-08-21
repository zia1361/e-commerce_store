import React from 'react';

import './checkoutpage.style.scss';

import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

import {selectcartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout/checkout-item.component';
import PaymentButton from '../../components/payment/payment.component';

const CheckOutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>{`TOTAL: Rs ${total}`}</div>
    <div className='test-warning'>
     { cartItems.length ? '*Please use the following test card for payment* \n 4242 4242 4242 4242 EXP: 01/20 CVV: 123' : 
     'No item in Cart'
     }
    </div>
    {cartItems.length ? <PaymentButton price={total}/> : null}
  </div>
   );

const mapStateToProps = createStructuredSelector({
    cartItems: selectcartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);