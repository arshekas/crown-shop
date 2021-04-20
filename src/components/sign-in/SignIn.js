import React, { Component } from 'react'
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
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email:'', password:''})
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
                    value={this.state.email} 
                    required 
                />
                <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn
