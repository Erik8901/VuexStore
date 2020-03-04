<template>
  <div class="checkout">
      <span class="checkout-title">Checkout Page</span>
        <div>
            <ul class="checkoutUl">
              <li class="checkoutLi" v-for="(product, index) in productsCart" :key="product.name" @click="getProductInfo(product)">
                <router-link to="/productInfo" class="link-productInfo" >
                    <img class="img" :src="product.img" @click="getProductInfo(product)"/>
                 </router-link>
                <span>{{product.name}}</span>
                <span>{{product.price}}</span>
                <span>{{product.type}}</span>
                <button @click="removeProduct(index)">remove product</button>
                <router-link to="/productInfo" class="link-productInfo" >
                    <button class="getInfo" @click="getProductInfo(product)">Info</button>
                </router-link>
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
  name: 'CheckoutPage',
  data() {
      return {
         productGetInfo: {
          name: '',
          price: 0,
          info: '',
          img: ''
        }
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
    },
    getProductInfo: function(product) {
        this.productGetInfo.name = product.name
        this.productGetInfo.price = product.price
        this.productGetInfo.info = product.info
        this.productGetInfo.img = product.img

        this.$store.commit('SET_PRODUCT_INFO', {
          productInfo: this.productGetInfo
    })
  }
  },
}
</script>


