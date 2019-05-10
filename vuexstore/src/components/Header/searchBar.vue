<template>
  <div class="search-container">
      <input placeholder="Search our store" class="searchField"
      type="text"
      @keyup="loadSearchPage"
      v-model="keyWords"
   />
   
     <!-- <SearchPage/> -->
  </div>
</template>

<script>
//styles
import headerStyles from './styles/headerStyles.css';
import ProductPage from '../Products/ProductPage.vue'
import { mapGetters } from "vuex";
import store from "@/utils/store.js";
import SearchPage from '../Products/SearchPage.vue'

export default {
  name: 'searchBar',
  components: {
    SearchPage
  },
  data() {
    return {
      keyWords: ''
    }
     },
  mounted() {
   
    },
  methods: {
    loadSearchPage: function () {
    let minKeys = 3
   
  setTimeout(() =>{
    if(this.keyWords.length >= minKeys) {
      
      
      this.$router.push({ path: '/SearchPage' })
      this.$store.commit('SET_SEARCH', this.keyWords)


      this.keyWords = ''
   
   }
   }, 2000);

   
   
   
   
   }
   
    
   
    
  

  
  } 
}
</script>


