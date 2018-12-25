import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button, Row, Col, Swipe, SwipeItem, Lazyload ,List,Field,NavBar} from "vant";

Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload)
    .use(List).use(Field).use(NavBar)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
