<template>
  <div class="products">
    <ul id="example-1">
        <li v-for="product in products.slice(0,4)" :key="product.name">
            <img class="img" :src="product.img"/>
                <div class="product-info">
                    <span class="product-name">{{ product.name }}</span>
                    <span class="product-text">{{ product.info }}</span> 
                    <span class="product-price">Price: {{ product.price }} €</span>
                </div>
                <div class="btns">
                    <button class="addToCart" @click="addToCart(product)">Add to cart</button>
                    <button class="getInfo">Info</button>
                </div>
          </li>
    </ul>   
  </div>
</template>

<script>
//styles
import productsStyles from './styles/productsStyles.css';
import axios from 'axios'
import { mapGetters } from "vuex";
import store from "@/utils/store.js";


export default {
  name: 'Products',
  props: ["items"],
  components: {
    store
  },
  data() {
    return {
      products: [],
         productAddToCart: {
          name: '',
          price: 0,
          type: '',
          img: ''
        }
      
      }
    },
  // computed: {
  //   ...mapGetters({
  //    Items: "$_Cart/items",
  //     // cartItemsCount: "$_Cart/itemsCount",
  //     // cartTotalPrice: "$_Cart/totalPrice",
  //     // loading: "$_Cart/loading"
  //   })
  // },
  methods: {
  addToCart: function(product) {
    
     this.productAddToCart.name = product.name
      this.productAddToCart.price = product.price
      this.productAddToCart.type = product.type
      this.productAddToCart.img = product.img
      
      this.$store.commit('SET_CART', {
        productsCart: this.productAddToCart
      })
    }
},
  mounted () {
    axios
      .get("products.json")
      .then(response => {
      this.$store.commit('SET_ITEMS', response.data)
      this.products = store.state.items
      })
},

}
</script>


