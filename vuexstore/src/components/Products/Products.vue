<template>
  <div class="products">
    <ul id="example-1">
        <li v-for="product in products.slice(0,4)" :key="product.name">
        <img class="img" :src="product.img"/>
        <p class="name">{{ product.name }}</p>
        <p class="price">Price: {{ product.price }} €</p>
        <p class="info">{{ product.info }}</p> <hr/>
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


export default {
  name: 'Products',
  data() {
      return {
      products: []
      }
    },
  mounted () {
    axios
      .get("products.json")
      .then(response => (this.products = response.data))
     }

}
</script>


