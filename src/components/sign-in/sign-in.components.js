import React from 'react';

import './sign-in.style.scss';

import FormInput from '../form-input/form-input.compoent';
import CustomButton from '../custom-button/custom-button.component';

import {signInwithgoogle, auth} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e =>{
        e.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        }catch(error){
            alert(error.message);
        }
        
    }

    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <div className='sign-in'>
                <div className='title'>
                <h1>I alreday have an account</h1>
                <span>Sign in with your email and password</span>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label='Email'
                    required
                    name='email'
                    type='email'
                    />
                    <FormInput 
                    value={this.state.password}
                    handleChange={this.handleChange}
                    required
                    name='password'
                    type='password'
                    label='Password'
                    />
                    <div className='buttons'>
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={signInwithgoogle} type='button' isGoogleSignin>
                        Sign In with Google
                    </CustomButton>
                </div>
                </form>
                
            </div>
        );
    }
}

export default SignIn;