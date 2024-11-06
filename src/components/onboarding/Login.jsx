import React from 'react'
import useOnboardingTabs from '../myHooks/useOnboardingTabs';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {handleSwitch} = useOnboardingTabs();
    let redir = useNavigate();
    function handleSubmit() {
        console.log('Login successfull!')
        redir('/home')

    }
  return (
    <div>
        <h2>Login</h2>
        <div className="flexCol gap-3 ">
        <button onClick={()=> handleSubmit() } >Login</button>
        <button onClick={()=> handleSwitch('Forgot') } >Forgot Password</button>
        <button onClick={()=> handleSwitch('Signup') } >Signup</button>
        </div>
    </div>
  )
}

export default Login