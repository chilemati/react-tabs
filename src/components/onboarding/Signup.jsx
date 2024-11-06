import React from 'react'
import useOnboardingTabs from '../myHooks/useOnboardingTabs';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const {handleSwitch} = useOnboardingTabs();
    let redir = useNavigate();
    function handleSubmit() {
        console.log('Login successfull!')
        redir('/home')

    }
    return (
      <div>
          <h2>Create your Account</h2>
          <div className="flexCol gap-3 ">
          <button onClick={()=> handleSubmit() } >Next</button>
          <button onClick={()=> handleSwitch('Login') } >Login</button>
          </div>
      </div>
  )
}

export default Signup