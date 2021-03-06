import Vue from 'vue'
import App from './App.vue'
import Carousel from 'element-ui'
import CarouselItem from 'element-ui'
import router from './router'
import store from './store'
import Router from 'vue-router'
import './plugins/element.js'

const axios = require('axios');
const baseUrl = process.env.VUE_APP_API_URL;
axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
        if (to.meta.requireAuth) {
            if (store.state.user.username) {
                axios
                    .get('/authentication')
                    .then(resp => {
                        if (resp.data && resp.data.code === 200) {
                            next()
                        } else {
                            next({
                                path: '/login',
                                query: {redirect: to.fullPath}
                            })
                        }
                    })
            } else {
                next({
                    path: '/login',
                    query: {redirect: to.fullPath}
                })
            }
        } else {
            next()
        }
    }
);

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
