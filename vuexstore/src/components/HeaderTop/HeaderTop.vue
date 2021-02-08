<template>
  <div class="headerTop">
      <div class="header-container">
            <div class="company-name-container">
                <router-link to="/"><span class="companyName">Kitchen Equipment</span></router-link>
            </div>
            <div class="search-bar-container">
                <searchBar class="searchBar"></searchBar>
            </div>
          
          <div class="cart-and-checkout">
              <i class="fas fa-shopping-cart"></i>
                  <router-link to="/checkoutPage">
                      <span class="mobileCartAmount">({{this.productsCart.length}})</span>
                  </router-link>

              <div class="empty-cart" v-if="!this.productsCart.length" @mouseover="checkIfCartIsEmpty()" @mouseleave="mouseleave()" >
                  <div class="if-empty" >Your cart is empty</div>
                      <span to="/checkoutPage" class="link-checkout" >
                      <span class="checkout-text">To Checkout (<span class="cartAmount" >{{this.productsCart.length}}</span>)
                      </span>
                      </span>
                  </div>

              <div class="cart-div" v-if="this.productsCart.length"  >
                  <router-link to="/checkoutPage" class="link-checkout"  >
                      <span class="checkout-text">To Checkout (<span class="cartAmount" >{{this.productsCart.length}}</span>)
                      </span>
                    </router-link>
              </div>
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
      viewWidth: 0,
      active: false
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
      handleWindowSize() {
          this.viewWidth = window.innerWidth;
          let checkoutText = document.querySelector(".checkout-text");
          let cartAndCheckOut = document.querySelector(".cart-and-checkout");
          let checkOutText = document.querySelector(".checkout-text");

          let mobileCartAmount = document.querySelector(".mobileCartAmount ")
         
          this.viewWidth < 1300 ?  
              checkoutText.style.display = "none" :
              checkoutText.style.display = "flex"

          this.viewWidth < 1300 ?
               cartAndCheckOut.style.left = "6%" :
               cartAndCheckOut.style.left = "20%"

          this.viewWidth < 1300 ? 
              mobileCartAmount.style.display = "flex" :
              mobileCartAmount.style.display = "none"

    },
    checkIfCartIsEmpty() {
      let ifEmpty = document.querySelector(".if-empty");
      ifEmpty.style.display = "flex"
    },
    mouseleave() {
       let ifEmpty = document.querySelector(".if-empty");
            ifEmpty.style.display = "none"
    }
  }
}
</script>


