import React, { Component } from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase';
import CustomButton from '../customButton/CustomButton';
import FormInput from '../form-input/FormInput';
import './SignIn.scss'

class SignIn extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''})
        }catch(error) {
            console.log(error.message)
        }
    }
    handleChange = (e) =>{
        const {name, value} = e.target;
        this.setState({ [name]: value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}> 
                <FormInput 
                    name="email" 
                    type="email"
                    handleChange={this.handleChange} 
                    value={this.state.email} 
                    label="email"
                    required
                />
                <FormInput 
                    name="password" 
                    type="password" 
                    label="Password"
                    handleChange={this.handleChange} 
                    value={this.state.password} 
                    required 
                />
               <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
               </div>
                </form>
            </div>
        )
    }
}

export default SignIn
