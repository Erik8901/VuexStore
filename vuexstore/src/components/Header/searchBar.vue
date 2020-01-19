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
  computed: {
    items() {
      return this.$store.state.items
    }

  },
  data() {
    return {
      keyWords: '',
      viewWidth: 0
    }
},
created() {
      window.addEventListener('resize', this.handleWindowSize)
  },
methods: {
    loadSearchPage: function () {
    let minKeys = 3
   
  setTimeout(() =>{
    if(this.keyWords.length >= minKeys) {
      
       this.$store.commit('SET_SEARCH', {
        searchWords: this.keyWords,
        allItems: this.items
      })
      
      this.keyWords = ''
      this.$router.push({ path: '/SearchPage' })
   
      }
    }, 2000)
  }, //loadSearchPage

  handleWindowSize() {
      this.viewWidth = window.innerWidth;
        let searchField = document.querySelector(".searchField");

        this.viewWidth < 1300 ? 
          searchField.style.left = "0" :
          searchField.style.left = "31%"

        this.viewWidth < 1300 ? 
          searchField.style.width = "10rem" :
          searchField.style.width = "16rem"
  
    }
  } 
}
</script>


