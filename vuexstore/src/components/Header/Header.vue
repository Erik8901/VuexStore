<template>
  <div class="header">
    <div class="buttonsMenu">
      <div class="hamburgerBtn" v-on:click="showHamMenu = !showHamMenu">
        <i class="fas fa-bars fa-2x"></i>
      </div>
      
      <div class="hamburger-menu"  v-if="!showHamMenu">
          <div class="close-btn-div">
            <span class="close-menu" v-if="!showHamMenu">X</span>
          </div>
          <div class="hamburger-buttons-home">
              <router-link to="/" class="mobile-menu-btns">
                  <span>Home</span>
                  <i class="fas fa-arrow-right"></i>
              </router-link>
          </div>
        
          <div class="hamburger-buttons">
              <router-link to="/Productpage" class="mobile-menu-btns">
                  <span>Products</span>
                  <i class="fas fa-arrow-right"></i>
              </router-link>
          </div>
        
        <div class="hamburger-buttons">
            <router-link to="/Inspiration" class="mobile-menu-btns">
                <span>Inspiration</span>
                <i class="fas fa-arrow-right"></i>
            </router-link>
        </div>
        
        <div class="hamburger-buttons">
            <router-link to="/About" class="mobile-menu-btns">
                <span>About</span>
                <i class="fas fa-arrow-right"></i>
            </router-link>
        </div>
        
        <div class="hamburger-buttons">
            <router-link to="/" class="mobile-menu-btns">
                <span>Jobs</span>
                <i class="fas fa-arrow-right"></i>
            </router-link>
        </div>
        
        <div class="hamburger-buttons">
            <router-link to="/Contactpage" class="mobile-menu-btns">
                <span>Contact</span>
                <i class="fas fa-arrow-right"></i>
            </router-link>
        </div>
    </div>

      <div class="desktop-menu">
          <router-link to="/">
              <div class="buttons">
                  <span class="btn-text-desktop">Home</span>
              </div>
          </router-link>
        
          <router-link to="/Productpage">
                <div class="buttons">
                    <span class="btn-text-desktop">Products</span>
                </div>
          </router-link>
        
          <router-link to="/Inspiration">
              <div class="buttons">
                  <span class="btn-text-desktop">Inspiration</span>
              </div>
          </router-link>
        
          <router-link to="/About">
              <div class="buttons">
                  <span class="btn-text-desktop">About</span>
              </div>
          </router-link>
        
          <router-link to="/">
              <div class="buttons">
                  <span class="btn-text-desktop">Jobs</span>
              </div>
          </router-link>
        
          <router-link to="/Contactpage">
              <div class="buttons">
                  <span class="btn-text-desktop">Contact</span>
              </div>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
//styles
import headerStyles from "./styles/headerStyles.css";
import searchBar from "./searchBar.vue";

export default {
  name: "Header",
  components: {
    searchBar,
  },
  data() {
    return {
      viewWidth: 0,
      showHamMenu: true
    };
  },
  created() {
    window.addEventListener("resize", this.handleWindowSize);
  },
  methods: {
    toProductPage() {},
  },
  mounted() {}, //mounted
}; //export
</script>


