import VueRouter from "vue-router";
import store from "@/store";
const HomePage = () => import("@/pages/HomePage")
const ApartmentPage = () => import("@/pages/ApartmentPage");
const NotFoundPage = () => import("@/pages/NotFoundPage.vue");
const LoginPage = () => import("@/pages/LoginPage");
const TestPage = () => import("@/pages/TestPage");
const RegistrationPage = () => import("@/pages/RegistrationPage");
const MyOrders = () => import("@/pages/MyOrders");


const routes = [
    {
        path: '/',
        component: HomePage,
        name: 'homepage'
    },
    {
        path: "/apartment/:id",
        component: ApartmentPage,
        name: "apartment",
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/login",
        component: LoginPage,
        name: "login",
        meta: {
            hideForAuth: true,
        }
    },
    {
        path: "/registration",
        component: RegistrationPage,
        name: "registration",
        meta: {
            hideForAuth: true,
        }
    },
    {
        path: "/my-orders",
        component: MyOrders,
        name: "my-orders",
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/test",
        component: TestPage,
        name: "test"
    },
    {
        path: "*",
        component: NotFoundPage,
        name: "not-found"
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

router.beforeEach((to, from, next) => {
    const isLoggedIn = store.getters['auth/isLoggedIn']

    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(!isLoggedIn) {
            next({name: 'login'})
        }
    }

    if(to.matched.some(record => record.meta.hideForAuth)) {
        if(isLoggedIn) {
            next({name: 'homepage'})
        }
    }

    next();
})

export default router;