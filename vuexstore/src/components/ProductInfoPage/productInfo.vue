<template>
  <div class="product-info-page">
      <h1>{{selectedProductinfo.name}}</h1>
      <img class="img-info" :src="selectedProductinfo.img" />

      <div class="info-btn-div">
        <h3>{{selectedProductinfo.info}}</h3>
        <button class="addToCartInfoPage" @click="addToCart()">Add to cart</button>
      </div>
    </div>
</template>

<script>
//styles
import StylesProductInfo from './styles/StylesProductInfo.css';

export default {
  name: 'ProductInfo',
  data() {
      return {
        productAddToCart: {
          name: '',
          price: 0,
          type: '',
          img: ''
        },
          selectedProductinfo: {
            name: '',
            price: 0,
            info: '',
            img: ''
          },
          viewWidth: 0,
        }
     },
computed: {
    productInfo() {
        return this.$store.state.productInfo
      }
    },
     mounted() {
      window.scrollTo(0, 0);
      this.selectedProductinfo.name = this.productInfo.name
      this.selectedProductinfo.price = this.productInfo.price
      this.selectedProductinfo.info = this.productInfo.info
      this.selectedProductinfo.img = this.productInfo.img
    },
  created() {
      window.addEventListener('resize', this.handleWindowSize)
  },
  methods: {
      addToCart: function() {
        this.productAddToCart.name = this.productInfo.name
        this.productAddToCart.price = this.productInfo.price
        this.productAddToCart.info = this.productInfo.info
        this.productAddToCart.img = this.productInfo.img
      
      this.$store.commit('SET_CART', {
        productsCart: this.productAddToCart
      })
   },
   handleWindowSize() {
     
     
     
     }
  },
}
</script>


