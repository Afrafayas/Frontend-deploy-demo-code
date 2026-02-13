import { registerUser } from "../api/auth";
import AuthForm from "../components/AuthForm";
import { loginUser } from "../api/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {

const navigate = useNavigate();  

const onSubmitHandler = async(data) => {

  try { 

     
      

      // Handle login form submission
      // console.log('Login data submitted:', data);
      const response = await loginUser(data);
      localStorage.setItem('token', response.token);
      console.log('Login successful');
      navigate('/profile');
    }

    catch(error) {
      console.error('Login failed:', error);
    }}

  return (
    <>    
      <h1>Login</h1>
      <AuthForm isLogin={true} onSubmitHandler={onSubmitHandler}/>
    </>
  );
}; 

export default Login;  
