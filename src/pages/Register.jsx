import React from 'react';  
import AuthForm from '../components/AuthForm';
import { registerUser } from '../api/auth';
const Register = () => {

 const onSubmitHandler = async(data) => {
    try {
        const response = await registerUser(data);
        console.log('Registration successful:', response);
    }
    catch(error) {
        // Handle registration errors


     const message =
    error.response?.data?.message || "Registration failed";

     alert(message)
        
        // console.error('Registration failed:', error);

    }
    // Handle registration form submission
  }

  return (
    <>
      <h1>Register</h1>
        <AuthForm isLogin={false} onSubmitHandler={onSubmitHandler} />
    </>
  );
};

export default Register;