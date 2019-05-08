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
import { mapGetters } from "vuex";


export default {
  name: 'Products',
  props: ["items"],
  data() {
    return {
      products: []
      }
    },
  computed: {
    ...mapGetters({
     Items: "$_Cart/items",
      // cartItemsCount: "$_Cart/itemsCount",
      // cartTotalPrice: "$_Cart/totalPrice",
      // loading: "$_Cart/loading"
    })
  },
  mounted () {
    axios
      .get("products.json")
      .then(response => {
      this.$store.dispatch("$_productList/setItems", { 
        productList: response.data,
        type: "search" 
      })
      })
}
}
</script>


