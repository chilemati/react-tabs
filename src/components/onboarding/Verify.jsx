import React from 'react'
import useOnboardingTabs from '../myHooks/useOnboardingTabs';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const {handleSwitch} = useOnboardingTabs();
    let redir = useNavigate();
    return (
      <div>
          <h2>Verify Code</h2>
          <div className="flexCol gap-3 ">
          <button onClick={()=> handleSwitch('Login') } >Back to login</button>
          <button onClick={()=> handleSwitch('NewPassword') } >Verify</button>
          </div>
      </div>
  )
}

export default Verify