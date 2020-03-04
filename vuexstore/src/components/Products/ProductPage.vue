<template>
  <div class="productsPage">
      
      <ul class=" productsUl">
        <li class="productsLi" v-for="(item) in items" :key="item.name" @click="getProductInfo(item)" >
             <router-link to="/productInfo" class="link-productInfo" >
                <img class="productImg" :src="item.img" @click="getProductInfo(item)"/>
            </router-link>
            <p class="productName">{{item.name}}</p>
            <p class="productPrice">Price: {{item.price}}</p>
            <p class="info">{{ item.info }}</p> <hr/>
            <button class="addToCart" @click="addToCart(item)">Add to cart</button>
            <router-link to="/productInfo" class="link-productInfo" >
                <button class="getInfo" @click="getProductInfo(item)">Info</button>
            </router-link>
        </li>
      </ul>
  </div>
</template>

<script>
//styles
import productsStyles from './styles/productsStyles.css';
import axios from 'axios'
import store from "@/utils/store.js";
//import { mapGetters } from "vuex";

export default {
  name: 'ProductPage',
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
    items() {
      return this.$store.state.items
    },
  },
  methods: {
    addToCart: function(item) {
     this.$store.commit('SET_CART', {
        productsCart:item
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
  }
}



</script>


