<template>
  <div class="SearchPage" >
    <div class="title-div">
      <h3 class="search-title">Search results ({{this.filteredList.length}}):</h3>
      <ul class="productsUl">
        <li class="productsLi" v-for="(item) in filteredList" :key="item.name">
           <router-link to="/productInfo" class="link-productInfo" @click="getProductInfo(item)" >
              <img class="productImg" :src="item.img" @click="getProductInfo(item)"/>
            </router-link>
              <div class="spans">
                <router-link to="/productInfo" class="link-productInfo" @click="getProductInfo(item)" >
                  <span class="link-productInfo-name"  @click="getProductInfo(item)">{{item.name}}</span>
                </router-link>
                  <span class="productInfo">{{ item.info }}</span> 
                  <span class="productPrice">Price: {{item.price}}</span>
              </div>
            <!-- <button class="addToCart" @click="addToCart(item)">Add to cart</button>
            <button class="getInfoSearchPage">Info</button> -->
        </li>
      </ul>
      </div>
  </div>
</template>

<script>
//styles
import productsStyles from './styles/productsStyles.css';
import axios from 'axios'
import store from "@/utils/store.js";


export default {
  name: 'SearchPage',
  props:['keyWords'],
  components: {
    
  },
  data() {
    return {
      productAddToCart: {
          name: '',
          price: 0,
          type: '',
          img: ''
        },
         productGetInfo: {
              name: '',
              price: 0,
              type: '',
              info: '',
              img: ''
        },
    }
  },
 computed: {
    items() {
      return this.$store.state.items
    },
    searchInput() {
      return this.$store.state.searchText
    },
    filteredList() {
      return this.items.filter(item => {
      return item.name.toLowerCase().includes(this.searchInput.toLowerCase())
      })
      
    },

  },
  
  mounted () {

   // console.log(this.filteredList)
    
  },
  methods: {
     addToCart: function(item) {
      this.productAddToCart.name = item.name
      this.productAddToCart.price = item.price
      this.productAddToCart.type = item.type
      this.productAddToCart.img = item.img
      
      this.$store.commit('SET_CART', {
        productsCart: this.productAddToCart
      })
     
    },
     getProductInfo: function(product) {
       console.log("hej")
       console.log(product)
        this.productGetInfo.name = product.name
        this.productGetInfo.price = product.price
        this.productGetInfo.info = product.info
        this.productGetInfo.img = product.img

        this.$store.commit('SET_PRODUCT_INFO', {
          productInfo: this.productGetInfo
    })
  },
      
    }
  }
    
  
  


</script>


