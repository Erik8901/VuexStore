<template>
  <div class="checkout">
      <h1 class="checkout-title">Your Cart:</h1>
          <div v-if="this.productsCart.length === 0">
              <h1 class="emptyH1">Your Cart is Empty</h1>
          </div>
      <div v-else>
        <div class=checkout-container>
            <ul class="checkoutUl">
                <li class="checkoutLi" v-for="(product, index) in productsCart" :key="product.name" @click="getProductInfo(product)">
                    <router-link to="/productInfo" class="link-productInfo" >
                        <img class="img" :src="product.img" @click="getProductInfo(product)"/>
                    </router-link>
                    <span class="checkout-name">{{product.name}}</span>
                    <span class="checkout-price">Price: {{product.price}} €</span>
                    <!-- <span>{{product.type}}</span> -->
                    <router-link to="/productInfo" class="link-productInfo" >
                        <button class="checkout-getInfo" @click="getProductInfo(product)">Info</button>
                    </router-link>
                    <button class="removeProduct" @click="removeProduct(index, product)">X</button>
              </li>
              <button class="emptyCart" @click="emptyCart()">Empty Cart</button>
            <span class="totals">Your Total: {{this.totalPrice}} €</span>
          </ul>
          <billingInfo class="billingInfo"></billingInfo>
      </div>
    </div><!-- //v-else -->
  </div>
</template>

<script>
//styles
import stylesCheckoutPage from './styles/stylesCheckoutPage.css';
import billingInfo from './billingInfo.vue'

export default {
  name: 'CheckoutPage',
   components: {
     billingInfo
   },
  data() {
      return {
         productGetInfo: {
          name: '',
          price: 0,
          info: '',
          img: ''
        },
        totalPrice: 0
      }
     },
computed: {
    productsCart() {
       return this.$store.state.productsCart
      },
    productsPrice() {
      return this.$store.state.totalPrice
        this.totalPrice = this.$store.state.totalPrice
    }
    },
mounted()  {
  let prices = []  
     for(let i=0; i < this.productsCart.length; i++) {
        let nums = parseInt(this.productsCart[i].price)
          prices.push(nums)
    }
  
  let total = prices.reduce((a, b) => a + b, 0)
      this.$store.commit('SET_TOTAL_PRICE', {
          price: total
    })
    this.totalPrice = this.$store.state.totalPrice
},
methods: {
    emptyCart() {
        this.$store.state.productsCart = []
    },
    removeProduct(index, product) {
      let newTotal = this.totalPrice - product.price
        this.$store.commit('SET_TOTAL_PRICE', {
          price: newTotal
    })
       this.totalPrice = this.$store.state.totalPrice
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


