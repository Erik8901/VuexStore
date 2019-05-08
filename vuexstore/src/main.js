import Vue from 'vue'
import App from './App.vue'
import ProductPage from './components/Products/ProductPage.vue'
import LandingPage from './components/LandingPage/LandingPage.vue'
import About from './components/About/About.vue'
import Inspiration from './components/Inspiration/Inspiration.vue'
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from "@/components/Products/_store";
library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
        { path: '/productpage',
          component: ProductPage
         },
        { path: '/',
          component: LandingPage
        },
        { path: '/about',
          component: About
        },
        { path: '/inspiration',
          component: Inspiration
        }



];


const router = new VueRouter({
    routes


})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
