import React from 'react';

import './cart-dropdown.style.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import {connect} from 'react-redux';
import {selectcartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length?
            cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>)):
            <span className='empty-message'>your cart is empty</span>
        }
        </div>
        <CustomButton onClick={() => {history.push('/checkout');
        dispatch(toggleCartHidden());
    }}>CHECKOUT</CustomButton>
    </div>
);

const mapStatToProps = createStructuredSelector({
    cartItems: selectcartItems
});

export default withRouter(connect(mapStatToProps)(CartDropDown));