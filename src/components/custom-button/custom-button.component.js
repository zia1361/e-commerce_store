import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSignin, inverted, ...otherprops}) => {
    return(
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...otherprops}>
            {children}
        </button>
    );
}

export default CustomButton;