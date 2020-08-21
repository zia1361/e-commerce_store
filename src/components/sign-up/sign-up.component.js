import React from 'react'

import FormInput from '../form-input/form-input.compoent';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUser} from '../../firebase/firebase.utils';

import './sign-up.style.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('password donot match');
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUser(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });


        }catch(error){
            console.log('error while signup: ', error.message);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });

    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(

            <div className='sign-up'>
                <div className='title'>
                    <h1>I donot have an account</h1>
                    <span>Sign up with your email and password</span>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    value={displayName}
                    name='displayName'
                    label='Display Name'
                    onChange={this.handleChange}
                    required
                    />
                     <FormInput
                    type='email'
                    value={email}
                    name='email'
                    label='Email'
                    onChange={this.handleChange}
                    required
                    />
                     <FormInput
                    type='password'
                    value={password}
                    name='password'
                    label='Password'
                    onChange={this.handleChange}
                    required
                    />
                    <FormInput
                    type='password'
                    value={confirmPassword}
                    name='confirmPassword'
                    label='Confirm Password'
                    onChange={this.handleChange}
                    required
                    />
                   
                        <CustomButton type='submit'> 
                            SIGN UP
                        </CustomButton>
                    
                </form>
            </div>
        );
    }
}

export default SignUp;