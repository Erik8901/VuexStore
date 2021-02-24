<template>
    <div class="headerTop">
        <div class="header-container">
            <div class="company-name-container">
                <router-link to="/"><span class="companyName">Kitchen Equipment |||</span></router-link>
            </div>
            <div class="search-bar-container">
                <searchBar class="searchBar"></searchBar>
            </div>
            <div class="cart-div-header-top">
                <router-link to="/checkoutPage" class="link-checkout">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="cartAmount"> {{this.productsCart.length}}</span>
                </router-link>
            </div>
            <div class="loginButtonsDiv">
                <button class="buttonsCustomers">Login</button>
                <button class="buttonsCustomers">Register</button>
            </div>
        </div>
    </div>
</template>


<script>
//styles
import headerStyles from './styles/stylesHeaderTop.css';
import searchBar from '../Header/searchBar.vue'

export default {
  name: 'HeaderTop',
   components: {
        searchBar
    },
  data() {
    return {
     
      }
    },
    computed: {
      productsCart() {
        return this.$store.state.productsCart
      }
    },
     created() {
      window.addEventListener('resize', this.handleWindowSize)
  },
    methods: {
     
  }
}
</script>


