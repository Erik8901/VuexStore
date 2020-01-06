<template>
    <div class="header">
        <h3 class="companyName">Kitchen Equipment</h3> 
            <i class="far fa-home"></i>
              <div class="buttonsMenu">
                  <router-link to="/"><button class="buttons" >Home</button></router-link>
                  <router-link to="/Productpage"><button class="buttons" >Products</button></router-link>
                  <router-link to="/Inspiration"><button class="buttons">Inspiration</button></router-link>
                  <router-link to="/About"><button class="buttons">About</button></router-link>
                  <router-link to="/"><button class="buttons" >Jobs</button></router-link>
                  <button class="buttons" @click="scrollTo()">Contact</button>
                </div>
                
        <searchBar class="searchBar"></searchBar>
      </div>
  </template>

<script>

//styles
import headerStyles from './styles/headerStyles.css';
import searchBar from './searchBar.vue';

export default {
    name: 'Header',
    components: {
        searchBar
    },
  data() {
    return {
      viewWidth: 0
      }
    },
  created() {
      window.addEventListener('resize', this.handleWindowSize)
  },
  methods: {
    scrollTo() {
     window.scrollTo(0, 3900);
  },
      handleWindowSize() {
         this.viewWidth = window.innerWidth;
         let companyName = document.querySelector(".companyName")
            if(this.viewWidth < 1300) {
                companyName.style.display = "none"
            } else {
                companyName.style.display = "flex"
          }
     },
    toProductPage() {
      console.log("qqq")
    }
  },
    mounted() {

  
       
  }//mounted
  
  }//export
</script>


