<template>
  <div class="search-container">
      <input @keydown="loadProductPage" @input="handleSearch()" placeholder="Search our store" class="searchField"/>
     
  </div>
</template>




<script>
//styles
import headerStyles from './styles/headerStyles.css';
import ProductPage from '../Products/ProductPage.vue'
import { mapGetters } from "vuex";


export default {
  name: 'searchBar',
  components: {
    ProductPage
  },
  props: {
     
  },
  computed: {
    ...mapGetters({
     Items: "$_Prod/items",
      // cartItemsCount: "$_Cart/itemsCount",
      // cartTotalPrice: "$_Cart/totalPrice",
      // loading: "$_Cart/loading"
    })
  },
  methods: {
    loadProductPage: function () {
     this.$router.push({ path: '/Productpage' })
    
    },
    handleSearch(e) {
    
    console.log("jeloqqw")
   this.$store.dispatch("$_Prod/setItems", { 
        productList: response.data,
        type: "search" });
    }

  },
    
}
</script>


