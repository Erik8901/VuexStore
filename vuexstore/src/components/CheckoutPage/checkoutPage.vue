<template>
  <div class="checkout">
      <h1 class="checkout-title">Shopping Cart</h1>
          <div v-if="this.productsCart.length === 0" class="if-empty-div">
              <h1 class="emptyH1">Your Cart is Empty</h1>
          </div>
      <div v-else>
        
        <div class=checkout-container>
            <div class="checkout-header-info">
                <div class="product-details-container">
                    <span class="details-title" style="padding-left: 1rem;">PRODUCT DETAILS</span>
                </div>
                <div class="product-price-container">
                    <span class="details-title">QUANTITY</span>
                    <span class="details-title">PRICE</span>
                    <span class="details-title">TOTAL</span>
                </div>
            </div>
            
            <div class="shopping-cart-products-container">
                <li class="checkout-li" v-for="(product, index) in productsCart" :key="product.name" @click="getProductInfo(product)">
                    <div class="product-cart-details">
                        <div class="product-details-container">
                            <span class="checkout-product-name">{{product.name}}</span>
                                <router-link to="/productInfo" class="link-productInfo" >
                                    <img class="img" :src="product.img" @click="getProductInfo(product)"/>
                                </router-link>
                        </div>
                        <div class="product-price-info-container">
                            <span class="product-price" >1 X</span>
                            <span class="product-price">€{{product.price}}</span>
                        </div>
                            <div class="removeProduct" @click="removeProduct(index, product)"><span class="delete-product">X</span></div>
                      </div>
                  </li>
              </div>
         
            
        </div><!-- checkout-containers -->
        <div class="to-checkout-div">
                <div class="emptyCart" @click="emptyCart()">
                    <span class="empty-btn-text">Empty Cart X</span>
                </div>
                <div class="emptyCart">
                    <span class="checkout-btn-text">Your Total: {{this.totalPrice}} €</span>
                </div>
                <router-link to="/BillingInfo" class="checkout-link-text">
                    <div class="emptyCart-checkout">
                        <span class="checkout-btn-text">Proceed To Checkout</span>
                    </div>
                </router-link>
        </div>
        <div class="to-checkout-div-mobile">
            <div class="emptyCart-mobile" @click="emptyCart()">
                <span class="total-text-mobile">Your Total: {{this.totalPrice}} €</span>
            </div>
        </div>
       
            <div class="emptyCart-checkout-mobile">
                 <router-link to="/BillingInfo" class="checkout-link-text">
                <span class="checkout-btn-text-mobile">Proceed To Checkout</span>
                </router-link>
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


