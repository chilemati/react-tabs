import React from 'react'
import { useNavigate } from 'react-router-dom';
import useOnboardingTabs from '../myHooks/useOnboardingTabs';

const Forgot = () => {
    const {handleSwitch} = useOnboardingTabs();
    let redir = useNavigate();
    return (
      <div>
          <h2>Forgot Password?t</h2>
          <div className="flexCol gap-3 ">
          <button onClick={()=> handleSwitch('Login') } >Back to login</button>
          <button onClick={()=> handleSwitch('Verify') } >Next</button>
          </div>
      </div>
  )
}

export default Forgot