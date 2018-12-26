import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button, Row, Col, Swipe, SwipeItem, Lazyload ,List,Field,NavBar,Tab,Tabs} from "vant";

Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload)
    .use(List).use(Field).use(NavBar).use(Tab).use(Tabs)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
