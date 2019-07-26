<template>
  <div class="SearchPage" >
      <ul class="productsUl">
        <li class="productsLi" v-for="item in filteredList" :key="item.name">
            <img class="productImg" :src="item.img"/>
            <p class="productName">{{item.name}}</p>
            <p class="productPrice">Price: {{item.price}}</p>
            <p class="info">{{ item.info }}</p> <hr/>
            <button class="addToCart">Add to cart</button>
            <button class="getInfo">Info</button>
        </li>
      </ul>
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
    
  },
  methods: {
    
      
    }
  }
    
  
  


</script>


