import React, { useContext } from 'react';
import CustomNavbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import "./Login.css"
import AuthContext from '../context/AuthContext';


const LoginForm = () => {
    const { loginUser } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value;
        loginUser(email, password)
    }
    return (
        <div>
            <CustomNavbar />
            <div className="L-Container"> 
                <div className="Form">
                    <form onSubmit={handleSubmit} >
                    <h2>Login</h2>
                    <div className="InputBox"> 
                        <input className="Input" type="email" placeholder='Email' name='email'/> {/* Use input instead of styled components */}
                    </div>
                    <div className="InputBox"> 
                        <input className="Input" type="password" name="password" placeholder='Password'/> {/* Use input instead of styled components */}
                    </div>
                    <div className="InputBox"> 
                        <input
                            className="SubmitButton"
                            type="submit"
                            value="Sign In"
                        /> 
                    </div>
                    </form>
                    {/* <p className="ForgotPassword">
                        Forgot Password? <a href="#">Click Here</a>
                    </p> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LoginForm;
