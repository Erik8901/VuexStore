<template>
  <div class="SearchPage" >
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


export default {
  name: 'SearchPage',
  props:['keyWords'],
  components: {
    
  },
 computed: {
    items() {
      return this.$store.state.items
    }

  },
    mounted () {
//console.log(this.keyWords)
// let filter = searchText.toUpperCase();
//      for(let i=0; i < productList.length; i++) {
//           if(searchText.toUpperCase().indexOf(filter)) {
//              return filter
//           }
//            console.log(filter)
//      }
  
  //this.items = this.$store.state.items
   
    }
}

</script>


