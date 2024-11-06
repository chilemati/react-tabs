import { atom } from "recoil";
import { onboardingData } from "../onboarding/data";
import Welcome from "../onboarding/Welcome";

export const onboardingShowing = atom({
    key: 'onboardingShowing',
    default: {
        active: '',
    }
})