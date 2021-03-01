import Vue from 'vue'
import App from './App.vue'
import ProductPage from './components/Products/ProductPage.vue'
import LandingPage from './components/LandingPage/LandingPage.vue'
import About from './components/About/About.vue'
import SearchPage from './components/Products/SearchPage.vue'
import ContactPage from './components/ContactPage/contactPage.vue'
import Inspiration from './components/Inspiration/Inspiration.vue'
import CheckoutPage from './components/CheckoutPage/checkoutPage.vue'
import Billinginfo from './components/CheckoutPage/billingInfo.vue'
import ProductInfo from './components/ProductInfoPage/productInfo.vue'
import VueRouter from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import store from "./utils/store.js";
import { StripePlugin } from '@vue-stripe/vue-stripe';
library.add(faCoffee)



Vue.component('font-awesome-icon', FontAwesomeIcon)

const options = {
  pk: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeAccount: process.env.STRIPE_ACCOUNT,
  apiVersion: process.env.API_VERSION,
  locale: process.env.LOCALE,
};

Vue.config.productionTip = false
Vue.use(VueRouter, StripePlugin, options);

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
        },
        { path: '/searchPage',
          component: SearchPage
        },
        { path: '/contactPage',
        component: ContactPage
      },
      { path: '/checkoutPage',
        component: CheckoutPage
      },
      { path: '/productInfo',
        component: ProductInfo
      },
      {
        path: '/billingInfo',
        component: Billinginfo
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
