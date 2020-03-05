<template>
  <div class="products">
    <ul id="example-1">
        <li v-for="product in products.slice(0,4)" :key="product.name" @click="getProductInfo(product)">
          <router-link to="/productInfo" class="link-productInfo" >
            <img class="imgs-landpage" :src="product.img" @click="getProductInfo(product)"/>
          </router-link>
                <div class="product-info">
                    <span class="product-name">{{ product.name }}</span>
                    <span class="product-text">{{ product.info }}</span> 
                    <span class="product-price">Price: {{ product.price }} €</span>
                </div>
              <div class="btns">
                    <button class="addToCart" @click="addToCart(product)">Add to cart</button>
                     <router-link to="/productInfo" class="link-productInfo" >
                        <button class="getInfo" @click="getProductInfo(product)">Info</button>
                     </router-link>
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
  // props: ["items"],
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
        },
         productGetInfo: {
          name: '',
          info: '',
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
   computed: {
    items() {
      return this.$store.state.products
    },
  },
  methods: {
    addToCart: function(product) {
   
      // this.productAddToCart.name = product.name
      // this.productAddToCart.price = product.price
      // this.productAddToCart.type = product.type
      // this.productAddToCart.img = product.img
      
      this.$store.commit('SET_CART', {
        productsCart: product
      })
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


