import React from 'react'
import useOnboardingTabs from '../myHooks/useOnboardingTabs'

const Welcome = () => {
    const {handleSwitch} = useOnboardingTabs();
  return (
    <div>
        <h2>Signup</h2>
        <div className="flexCol gap-3 ">
        <button onClick={()=> handleSwitch('Signup') } >Create new account</button>
        <button onClick={()=> handleSwitch('Login') } >Login</button>
        </div>
    </div>
  )
}

export default Welcome