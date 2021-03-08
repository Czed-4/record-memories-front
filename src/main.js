import Vue from 'vue'
import App from './App.vue'
import Carousel from 'element-ui'
import CarouselItem from 'element-ui'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.use(Carousel)
Vue.use(CarouselItem)
const axios = require('axios');
const baseUrl = process.env.VUE_APP_API_URL
axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;

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

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
