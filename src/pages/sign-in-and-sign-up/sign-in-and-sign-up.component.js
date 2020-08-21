import React from 'react';

import './sign-in-and-sign-up.style.scss';

import SignIn from '../../components/sign-in/sign-in.components';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = () => {
    return(
        <div className='signin-and-signup'>
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInAndSignUp;