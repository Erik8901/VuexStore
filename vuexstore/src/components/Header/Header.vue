<template>
    <div class="header">
       <div class="buttonsMenu">
            <div class="hamburgerBtn" v-on:click="openMenu"><i class="fas fa-bars fa-2x"></i></div>
                <div class="hamburger-menu" style="display:none;">
                      <router-link to="/"><button class="hamburger-buttons" >Home</button></router-link>
                      <router-link to="/Productpage"><button class="hamburger-buttons" >Products</button></router-link>
                      <router-link to="/Inspiration"><button class="hamburger-buttons">Inspiration</button></router-link>
                      <router-link to="/About"><button class="hamburger-buttons">About</button></router-link>
                      <router-link to="/"><button class="hamburger-buttons" >Jobs</button></router-link>
                      <router-link to="/Contactpage"><button class="hamburger-buttons">Contact</button></router-link>
                  </div>              
                  
                  <div class="desktop-menu">
                      <router-link to="/"><button class="buttons">Home</button></router-link>
                      <router-link to="/Productpage"><button class="buttons">Products</button></router-link>
                      <router-link to="/Inspiration"><button class="buttons">Inspiration</button></router-link>
                      <router-link to="/About"><button class="buttons">About</button></router-link>
                      <router-link to="/"><button class="buttons" >Jobs</button></router-link>
                      <router-link to="/Contactpage"><button class="buttons">Contact</button></router-link>
                  </div>
                </div>
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
         let buttonsMenu = document.querySelector(".buttonsMenu")
         let hamburgerBtn = document.querySelector(".hamburgerBtn")
         let deskTopMenu = document.querySelector(".desktop-menu")

             this.viewWidth < 1300 ? 
                companyName.style.display = "none" : 
                companyName.style.display = "flex"

            //  this.viewWidth < 1300 ? 
            //     buttonsMenu.style.display = "flex" : 
            //     buttonsMenu.style.display = "none"

              this.viewWidth < 1300 ? 
                hamburgerBtn.style.display = "flex" : 
                hamburgerBtn.style.display = "none"

              this.viewWidth < 1300 ? 
                deskTopMenu.style.display = "none" : 
                deskTopMenu.style.display = "flex"
                

          
     },
     openMenu() {
      let hamburgerMenu = document.querySelector(".hamburger-menu")
       
       
    hamburgerMenu.style.display === "none" ?
         hamburgerMenu.style.display = "flex" :
   
          hamburgerMenu.style.display = "none"
       
     },
    toProductPage() {
    
    }
  },
    mounted() {

  
       
  }//mounted
  
  }//export
</script>


