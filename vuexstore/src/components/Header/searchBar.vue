<template>
  <div class="search-container">
      <input @keydown="loadProductPage" @input="handleSearch()" placeholder="Search our store" class="searchField"/>
     
  </div>
</template>




<script>
//styles
import headerStyles from './styles/headerStyles.css';
import ProductPage from '../Products/ProductPage.vue'



export default {
  name: 'searchBar',
  components: {
    ProductPage
  },
  props: {
     
  },
  methods: {
    loadProductPage: function () {
     this.$router.push({ path: '/Productpage' })
    
    },
    handleSearch(e) {
    
    console.log("jeloqqw")
   
    }

  },
    
}
</script>


