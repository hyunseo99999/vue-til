import Vue from "vue";
import VueRouter from 'vue-router';
import LoginPage from "@/views/LoginPage";
import SignPage from "@/views/SignPage";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: LoginPage
        }, {
            path: '/signup',
            component: SignPage
        }
    ]
});
