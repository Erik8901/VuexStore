<template>
  <div class="productspage">
      <h1 class="ppage">PRODUCT PAGE  </h1>
      <ul class="productsUl">
        <li v-for="item in items" :key="item.name">
            <p>{{item.price}}</p>
        </li>
        

        </ul>
  </div>
</template>




<script>
//styles
import productsStyles from './styles/productPageStyles.css';
import axios from 'axios'


export default {
  name: 'ProductPage',
  data() {
    return {
      items: []
      }
     },
  mounted () {
    var self = this;
    axios
      .get("products.json")
      .then(response => (this.items = response.data))
     
    

     


  }
}
</script>


