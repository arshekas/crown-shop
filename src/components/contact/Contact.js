import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import CustomButton from '../customButton/CustomButton';
import FormInput from '../form-input/FormInput';
import './Contact.scss'

function Contact({currentUser}) {
    const [userCredentials, setCredentials] = useState({email: '', comments: ''})
    const [result, setresult] = useState('')
    const {email, comments} = userCredentials;
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setCredentials({...userCredentials, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setresult("Thank you, we'll contact you ASAP!");
    }
    return (
        <div className="contact">
            <h2>Send us your email and concerns, we'll get back to you very soon!</h2>
            {console.log(currentUser)}
            {!currentUser ? (
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
                    name="comments" 
                    type="comments" 
                    label="comments"
                    handleChange={handleChange} 
                    value={comments} 
                    required 
                />
                <div className="buttons">
                    <CustomButton type="submit">Send</CustomButton>
                </div>
                <h3>{result}</h3>
            </form>
            ) : (
                <form onSubmit={handleSubmit}> 
                <FormInput 
                    name="comments" 
                    type="comments" 
                    label="comments"
                    handleChange={handleChange} 
                    value={comments} 
                    required 
                />
                <div className="buttons">
                    <CustomButton type="submit">Send</CustomButton>
                </div>
                <h3>{result}</h3>
            </form>
            )   
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
  });

export default connect(mapStateToProps)(Contact)
