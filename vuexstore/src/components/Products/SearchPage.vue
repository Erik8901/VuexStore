<template>
  <div class="SearchPage">
  <searchBar v-show="false" />{{search}}
    SearchPage
      <!-- <p class="ppage">Checkout our online Store!</p> -->
      <ul class="productsUl">
        <li class="productsLi" v-for="item in items" :key="item.name">
            <img class="productImg" :src="item.img"/>
            <p class="productName">{{item.name}}</p>
            <p class="productPrice">Price: {{item.price}}</p>
            <p class="info">{{ item.info }}</p> <hr/>
            <button class="addToCart">Add to cart</button>
            <button class="getInfo">Info</button>
        </li>
      </ul>
  </div>
</template>

<script>
//styles
import productsStyles from './styles/productsStyles.css';
import axios from 'axios'
import searchBar from '../Header/searchBar.vue';

export default {
  name: 'SearchPage',
  props: ['search'],
  components: {
    searchBar
  },
data() {
    return {
      items: [],
      //terms: this.props
      }
     },
mounted () {
console.log(this.search.keyWords)
//let filter = searchText.toUpperCase();
    //  for(let i=0; i < productList.length; i++) {
    //       if(searchText.toUpperCase().indexOf(filter)) {
    //          return filter
    //       }
    //        console.log(filter)
    //  }
  
  //this.items = this.$store.state.items
   axios
      .get("products.json")
      .then(response => {
        this.items = response.data
      })
    }
}

</script>


