import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Index from '../views/home/Index'
import Home from "../views/Home";
import User from "../views/user/User";
import Memories from "../views/memories/Memories";

Vue.use(VueRouter)

export default new VueRouter({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            redirect: '/index',
            component: Index,
            meta: {requireAuth: true}
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            redirect: '/index',
            component: Home,
            meta: {requireAuth: true},
            children: [
                {
                    path: '/index',
                    name: 'Index',
                    component: Index,
                    meta: {requireAuth: true}
                },
                {
                    path: '/memories',
                    name: 'Memories',
                    component: Memories,
                    meta: {requireAuth: true}
                },
                {
                    path: '/user',
                    name: 'User',
                    component: User,
                    meta: {requireAuth: true}
                }]
        }
    ]
})