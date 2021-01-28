import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Index from '../views/home/Index'
import Home from "../views/Home";
import User from "../views/user/User";
import Memories from "../views/memories/Memories";

Vue.use(VueRouter)

export default new VueRouter({
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
            component: Home,
            redirect: '/index',
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