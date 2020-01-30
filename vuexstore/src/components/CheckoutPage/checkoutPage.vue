<template>
  <div class="checkout">
      <span class="checkout-title">Checkout Page</span>
        <span>{{this.productsCart}}</span>

      

  </div>
</template>




<script>
//styles
import stylesCheckoutPage from './styles/stylesCheckoutPage.css';


export default {
  name: 'Inspiration',
  data() {
      return {
      
      }
     },
computed: {
    productsCart() {
        return this.$store.state.productsCart
        console.log(this.productsCart)
      }
    },
}
</script>


