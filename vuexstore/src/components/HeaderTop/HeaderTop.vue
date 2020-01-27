<template>
  <div class="headerTop">
    <div class="container">
      <router-link to="/"><h3 class="companyName">Kitchen Equipment</h3></router-link>
        <searchBar class="searchBar"></searchBar>
          <div class="cart-and-checkout">
          <i class="fas fa-shopping-cart"></i>
          <span class="checkout-text">To Checkout()</span>
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
      viewWidth: 0
      }
    },
     created() {
      window.addEventListener('resize', this.handleWindowSize)
  },
    methods: {
      handleWindowSize() {
          this.viewWidth = window.innerWidth;
          let checkoutText = document.querySelector(".checkout-text");
          let cartAndCheckOut = document.querySelector(".cart-and-checkout");
          // let brackets = document.createElement("span") 
          // brackets.innerHTML = "()"
          
          this.viewWidth < 1300 ?  
            checkoutText.style.display = "none" :
            checkoutText.style.display = "flex"

          this.viewWidth < 1300 ?
               cartAndCheckOut.style.left = "6%" :
               cartAndCheckOut.style.left = "29%"

          // this.viewWidth < 1300 ?
          //      cartAndCheckOut.appendChild(brackets[0]) :
          //      cartAndCheckOut.removeChild(brackets)


          
    }
  }
}
</script>


