
import React from 'react'
import { useState } from 'react';

const AuthForm = ({ isLogin,onSubmitHandler }) => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    // console.log(name, email, password);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSubmitHandler({ name, email, password });
    }

    return (  

        <form onSubmit={handleSubmit}>
            {!isLogin && <input type="text" placeholder="Username" required onChange={e => setName(e.target.value)} />}
            <input  type="email" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AuthForm;