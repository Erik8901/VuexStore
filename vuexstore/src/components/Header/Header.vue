<template>
  <div class="header">
    <div class="buttonsMenu">
      <div class="hamburgerBtn" v-on:click="showHamMenu = !showHamMenu">
        <i class="fas fa-bars fa-2x"></i>
      </div>
      
      <div class="hamburger-menu"  v-if="!showHamMenu">
          <div class="hamburger-buttons">
              <router-link to="/">
                  <span>Home</span>
              </router-link>
          </div>
        
          <div class="hamburger-buttons">
              <router-link to="/Productpage">
                  <span>Products</span>
              </router-link>
          </div>
        
        <div class="hamburger-buttons">
            <router-link to="/Inspiration">
                <span>Inspiration</span>
            </router-link>
        </div>
        
        <div class="hamburger-buttons">
            <router-link to="/About">
                <span>About</span>
            </router-link>
        </div>
        
        <div class="hamburger-buttons">
            <router-link to="/">
                <span>Jobs</span>
            </router-link>
        </div>
        
        <div class="hamburger-buttons">
            <router-link to="/Contactpage">
                <span>Contact</span>
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


