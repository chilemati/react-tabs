import React from 'react'
import useOnboardingTabs from '../myHooks/useOnboardingTabs';

const NewPassword = () => {
    const {handleSwitch} = useOnboardingTabs();
    function handleSubmit() {
        console.log('saved to db')
        handleSwitch('Login');

    }
    return (
      <div>
          <h2>Set a new password</h2>
          <div className="flexCol gap-3 ">
          <button onClick={()=> handleSwitch('Login') } >Back to login</button>
          <button onClick={()=> handleSubmit()} >Set New Password</button>
          </div>
      </div>
  )
}

export default NewPassword