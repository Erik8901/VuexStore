<template>
  <div class="checkout">
      <span class="checkout-title">Checkout Page</span>
        <div>
            <ul class="checkoutUl">
              <li class="checkoutLi" v-for="(product, index) in productsCart" :key="product.name">
                <img class="img" :src="product.img"/>
                <span>{{product.name}}</span>
                <span>{{product.price}}</span>
                <span>{{product.type}}</span>
                <button @click="removeProduct(index)">remove product</button>
              </li>
               <button class="emptyCart" @click="emptyCart()">Empty Cart</button>
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

  methods: {
      emptyCart() {
        this.$store.state.productsCart = []
    },
    removeProduct(index) {
     this.$delete(this.$store.state.productsCart, index)
    }
  },
}
</script>


