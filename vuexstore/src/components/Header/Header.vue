<template>
  <div class="header">
    <div class="buttonsMenu">
      <div class="hamburgerBtn" v-on:click="openMenu">
        <i class="fas fa-bars fa-2x"></i>
      </div>
      
      <div class="hamburger-menu" style="display: none">
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
    };
  },
  created() {
    window.addEventListener("resize", this.handleWindowSize);
  },
  methods: {
    scrollTo() {
      window.scrollTo(0, 3900);
    },
    // handleWindowSize() {
    //   this.viewWidth = window.innerWidth;

    //   let companyName = document.querySelector(".companyName");
    //   let buttonsMenu = document.querySelector(".buttonsMenu");
    //   let hamburgerBtn = document.querySelector(".hamburgerBtn");
    //   let deskTopMenu = document.querySelector(".desktop-menu");

    //   this.viewWidth < 1300
    //     ? (companyName.style.display = "none")
    //     : (companyName.style.display = "flex");

    //   //  this.viewWidth < 1300 ?
    //   //     buttonsMenu.style.display = "flex" :
    //   //     buttonsMenu.style.display = "none"

    //   this.viewWidth < 1300
    //     ? (hamburgerBtn.style.display = "flex")
    //     : (hamburgerBtn.style.display = "none");

    //   this.viewWidth < 1300
    //     ? (deskTopMenu.style.display = "none")
    //     : (deskTopMenu.style.display = "flex");
    // },
    openMenu() {
      let hamburgerMenu = document.querySelector(".hamburger-menu");

      hamburgerMenu.style.display === "none"
        ? (hamburgerMenu.style.display = "flex")
        : (hamburgerMenu.style.display = "none");
    },
    toProductPage() {},
  },
  mounted() {}, //mounted
}; //export
</script>


