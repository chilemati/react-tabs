import React from 'react'
import { useRecoilState } from 'recoil'
import { onboardingShowing } from '../atoms/onboarding'
import { onboardingData } from '../onboarding/data';

const useOnboardingTabs = () => {
  let [showing,setShowing] = useRecoilState(onboardingShowing);


  function handleSwitch(name) {
   onboardingData.map(each=> {
    if(each.name === name) {
      setShowing({...showing,active:each.component})
    }
   })
  }

  return {
    handleSwitch,
  }
}

export default useOnboardingTabs