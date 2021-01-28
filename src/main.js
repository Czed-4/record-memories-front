import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:8444';
axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
        if (to.meta.requireAuth) {
            if (store.state.user.username) {
                next()
            } else {
                next({
                    path: 'login',
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