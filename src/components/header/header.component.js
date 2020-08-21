import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

import './header.style.scss';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                <Link to='/conatct' className='option'>
                    CONTACT
                </Link>
                {currentUser ? <div className='option' onClick={async () => {
                    try {
                        const response = await auth.signOut();
                        console.log("response", response, auth);
                    } catch (error) {
                        console.log('error', error.response, error)                        
                    }
                    
                    }}>
                    SIGN OUT
                </div> :
                    <Link to='/signin' className='option'>
                        SIGN IN
                </Link>
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}

        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);