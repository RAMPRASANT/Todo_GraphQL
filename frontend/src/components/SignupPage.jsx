import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const [userCred, setUserCred] = useState({})
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/');
    };

    const handleSignUp = async () => {
        console.log(userCred)
        await fetch('http://localhost:4000/signup', {
            method: 'POST',
            body: JSON.stringify({
                email: userCred.email,
                password: userCred.password,
            })
        })
    };

    const handleChange = (e, id) => {
        setUserCred({ ...userCred, [id]: e.target.value })
    }

    return (
        <div>
            <label> password</label>
            <input type="password" required value={userCred.password} onChange={(e) => handleChange(e, 'password')} />
            <label> emailId</label>
            <input type="email" required value={userCred.email} onChange={(e) => handleChange(e, 'email')} />
            <button type='submit' onClick={handleSignUp}> Signup</button>
            <p><a onClick={handleSignIn} href=''>click here</a> to Login</p>
        </div>
    )

}

export default SignupPage;