<template>
  <div class="headerTop">
    <div class="container">
      <h3 class="companyName">Kitchen Equipment</h3>
        <searchBar class="searchBar"></searchBar>
    <div class="loginButtonsDiv">
        <button class="buttonsCustomers">Login</button>
        <button class="buttonsCustomers">Register</button>
    </div>
    </div>
  </div>
</template>


<script>
//styles
import headerStyles from './styles/stylesHeaderTop.css';
import searchBar from '../Header/searchBar.vue'


export default {
  name: 'HeaderTop',
   components: {
        searchBar
    },
    methods: {
     
    }
}
</script>


