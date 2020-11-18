export default[
        {
            path: "/home",
            name: "Home",
            component: () => import('./views/Home.vue'),
        
        },
        {
            path: "/problem/:id",
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
            path: "/contest/:id",
            name: "Contest",
            component: () => import('./views/Contest.vue'),
        },
        {
            path: "/user/:id",
            name: "User",
            component: () => import('./views/User.vue'),
        },
        {
            path: "/rank",
            name: "Rank",
            component: () => import('./views/Rank.vue'),
        }
]; 