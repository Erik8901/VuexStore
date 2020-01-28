<template>
  <div class="productsPage">
      
      <ul class=" productsUl">
        <li class="productsLi" v-for="(item) in items" :key="item.id" >
            <img class="productImg" :src="item.img"/>
            <p class="productName">{{item.name}}</p>
            <p class="productPrice">Price: {{item.price}}</p>
            <p class="info">{{ item.info }}</p> <hr/>
            <button class="addToCart" @click="addToCart(item)">Add to cart</button>
            <button class="getInfo">Info</button>
        </li>
      </ul>
  </div>
</template>

<script>
//styles
import productsStyles from './styles/productsStyles.css';
import axios from 'axios'
//import { mapGetters } from "vuex";

export default {
  name: 'ProductPage',
    data() {
      return {
        
      }
    },
  computed: {
    items() {
      return this.$store.state.items
    },
  },
  methods: {
    addToCart: function(item) {
      console.log(item)

    }
},

mounted () {
  
    }
}



</script>


