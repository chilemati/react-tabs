import Forgot from "./Forgot";
import Login from "./Login";
import NewPassword from "./NewPassword";
import Signup from "./Signup";
import Verify from "./Verify";
import Welcome from "./Welcome";

let id = 0;
export const onboardingData = [
    {
        id: id++,
        name: 'Welcome',
        component: <Welcome />
    },
    {
        id: id++,
        name: 'Forgot',
        component: <Forgot />
    },
    {
        id: id++,
        name: 'Login',
        component: <Login />
    },
    {
        id: id++,
        name: 'NewPassword',
        component: <NewPassword />
    },
    {
        id: id++,
        name: 'Signup',
        component: <Signup />
    },
    {
        id: id++,
        name: 'Verify',
        component: <Verify />
    },
    
]