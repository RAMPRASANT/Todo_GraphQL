import React from 'react';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {

    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    return (
        <div>
            <label> username</label>
            <input type="text" required />
            <label> password</label>
            <input type="password" required />
            <button type='submit' onClick={handleSignIn}> Login</button>
            <p>Didn't signed in yet, <a onClick={handleSignUp} href=''>click here</a> to signup</p>
        </div>
    )

}

export default LoginPage;