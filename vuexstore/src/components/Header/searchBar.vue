<template>
  <div class="search-container">
      <input placeholder="Search our store" class="searchField"
      @keyup="loadSearchPage"

      v-on:input="keyWords = $event.target.value"
     :value="keyWords"
   />
   
     <ProductPage v-show="false" :search="keyWords"/>
  </div>
</template>




<script>
//styles
import headerStyles from './styles/headerStyles.css';
import ProductPage from '../Products/ProductPage.vue'
import { mapGetters } from "vuex";
import store from "@/utils/store.js";



export default {
  name: 'searchBar',
  
  components: {
    ProductPage
  },
  data() {
    return {
      keyWords: 'hej'
      
      }
     },
  mounted() {
    
    },
  methods: {
    loadSearchPage: function () {
    let minKeys = 3
    let searchText = this.keyWords
   
  
   console.log(searchText)
    if(searchText.length >= minKeys) {
      console.log("more then 3")
      this.$router.push({ path: '/SearchPage+' + searchText })

     

       
     }
     
     console.log(this.keyWords)

     
     
    //  this.$store.dispatch("$_Search/getSearch", { 
    //     type: "search",
    //     query: searchText });
     
     
     
     
     
     
     
    console.log("iohbni")
   
    // console.log(this.$store.state.items)
    }
   
    
   
    
  

  
  } 
}
</script>


