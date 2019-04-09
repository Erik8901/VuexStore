<template>
  <div class="header">
    <h3 class="companyName">Kitchen Equipment</h3>
    <div class="buttonsMenu">
      <button class="buttons">Products</button>
      <button class="buttons">Inspiration</button>
      <button class="buttons">About</button>
      <button class="buttons">Contact</button>
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
     }
}
</script>


