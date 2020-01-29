<template>
  <div class="SearchPage" >
    <div class="title-div">
      <h3 class="search-title">Search results ({{this.filteredList.length}}):</h3>
      <ul class="productsUl">
        <li class="productsLi" v-for="item in filteredList" :key="item.name">
            <img class="productImg" :src="item.img"/>
            <p class="productName">{{item.name}}</p>
            <p class="productPrice">Price: {{item.price}}</p>
            <p class="productInfo">{{ item.info }}</p> <hr/>
            <button class="addToCart" @click="addToCart(item)">Add to cart</button>
            <button class="getInfo">Info</button>
        </li>
      </ul>
      </div>
  </div>
</template>

<script>
//styles
import productsStyles from './styles/productsStyles.css';
import axios from 'axios'


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
        }
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
     
    }
      
    }
  }
    
  
  


</script>


