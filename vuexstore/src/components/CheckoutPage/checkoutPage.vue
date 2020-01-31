<template>
  <div class="checkout">
      <span class="checkout-title">Checkout Page</span>
        <div>
            <ul class="checkoutUl">
              <li class="checkoutLi" v-for="product in productsCart" :key="product.name">
                <img class="img" :src="product.img"/>
                <span>{{product.name}}</span>
                <span>{{product.price}}</span>
                <span>{{product.type}}</span>
                <button>remove product</button>
              </li>
               <button class="emptyCart">Empty Cart</button>
          </ul>
      </div>
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
      }
    },
}
</script>


