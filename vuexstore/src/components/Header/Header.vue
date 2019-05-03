<template>
  <div class="header">
    <h3 class="companyName">Kitchen Equipment</h3>
    <i class="far fa-home"></i>
    <div class="buttonsMenu">
      <router-link to="/Productpage"><button class="buttons" >Products</button></router-link>
      <router-link to="/Inspiration"><button class="buttons">Inspiration</button></router-link>
      <router-link to="/About"><button class="buttons">About</button></router-link>
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
  props: {
     },
  methods: {
    scrollTo() {
      console.log("ihp")
      window.scrollTo(0, 3900);
    },
    toProductPage() {
      console.log("qqq")
    }
  }
}
</script>


