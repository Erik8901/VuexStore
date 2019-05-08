<template>
  <div class="productsPage">
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
import productsStyles from './styles/productPageStyles.css';
import axios from 'axios'
import { mapGetters } from "vuex";

export default {
  name: 'ProductPage',

  props: ["product"],
data() {
    return {
      items: null
      }
     },
mounted () {
     axios
      .get("products.json")
      .then(response => (this.items = response.data))
      
}

}

</script>


