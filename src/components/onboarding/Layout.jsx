import React, { useEffect } from 'react'
import { onboardingData } from './data'
import { useRecoilValue } from 'recoil'
import { onboardingShowing } from '../atoms/onboarding'
import useOnboardingTabs from '../myHooks/useOnboardingTabs'

const Layout = () => {
    const {handleSwitch} = useOnboardingTabs();
    let showing = useRecoilValue(onboardingShowing);
    useEffect(()=> {
        handleSwitch('Welcome')
    },[])
  return (
    <div className='flexBetween h-[100vh]' >
        <div className="h-[100vh] w-[40%] bg-pri pt-[198px] px-[127px] ">left</div>
        <div className="h-[100vh] w-[60%] pt-[130px] px-[154px] ">
            {showing.active}
        </div>
    </div>
  )
}

export default Layout