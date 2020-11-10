export default[
        {
            path: "/home",
            name: "Home",
            component: () => import('./views/Home.vue'),
        
        },
        {
            path: "/problem",
            name: "Problem",
            component: () => import('./views/Problem.vue'),
        },
        {
            path: "/",
            name: "Login",
            component: () => import('./views/Login.vue'),
        },
        {
            path: "/signup",
            name: "Signup",
            component: () => import('./views/Signup.vue'),
        },
        {
            path: "/contest",
            name: "Contest",
            component: () => import('./views/Contest.vue'),
        }
]; 