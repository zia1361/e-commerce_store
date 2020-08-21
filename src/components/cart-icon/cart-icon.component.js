import React from 'react';

import './cart-icon.style.scss';

import {ReactComponent as ShoppingIcon} from '../../assets/11.2 shopping-bag.svg.svg';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';
import {selectItemsCount} from '../../redux/cart/cart.selectors';

import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden, cartItemsCount}) => {
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartItemsCount}</span>
    </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    cartItemsCount: selectItemsCount
});

export default connect(mapStateToProps,
    mapDispatchToProps)(CartIcon);