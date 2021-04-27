import React, { useState } from 'react'
import { connect } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user-action';
import CustomButton from '../customButton/CustomButton';
import FormInput from '../form-input/FormInput';
import './SignIn.scss'

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''})
    const { email, password } = userCredentials;


    const handleSubmit = async event => {
        event.preventDefault();    
        emailSignInStart(email, password);
    };
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setCredentials({...userCredentials, [name]: value})
    }
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}> 
            <FormInput 
                name="email" 
                type="email"
                handleChange={handleChange} 
                value={email} 
                label="email"
                required
            />
            <FormInput 
                name="password" 
                type="password" 
                label="Password"
                handleChange={handleChange} 
                value={password} 
                required 
            />
            <div className="buttons">
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
            </div>
            </form>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn)
