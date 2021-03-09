import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import("../views/home/Index")
const Login = () => import("../views/Login")
const Home = () => import("../views/Home")
const User = () => import("../views/user/User")
const Memories = () => import("../views/memories/Memories")
const UserInfo = () => import("../views/user/UserInfo")

Vue.use(VueRouter)

export default new VueRouter({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Login',
            redirect: '/login',
            component: Login,
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
                    meta: {requireAuth: true},
                    children: [
                        {
                            path: '/userInfo',
                            name: 'UserInfo',
                            component: UserInfo,
                            meta: {requireAuth: true}
                        }
                    ]
                }]
        }
    ]
})