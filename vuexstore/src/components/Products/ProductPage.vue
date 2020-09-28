<template>
    <div class="productsPage">
        <div class="categories-div">
            <h3 class="titleCategories">Categories</h3>
            <div class="checkboxes">
                <div class="checkbox-div">
                    <span class="cat" @click="sortArrayByKnifes()">Knifes</span>
                    <span class="amountOf">{{this.knifes}} st</span>
                </div>
                <div class="checkbox-div">
                    <span class="cat" @click="sortArrayByCutlery()">Cutlery</span>
                    <span class="amountOf">{{this.cutlery}} st</span>
                </div>
                <div class="checkbox-div">
                    <span class="cat">Pans</span>
                    <span class="amountOf">12 st</span>
                </div>
                  <div class="checkbox-div">
                    <span class="cat">Storage</span>
                    <span class="amountOf">12 st</span>
              </div>
        </div>
    </div>
  
      <div class="products-div">
          <ul class="productsUl">
              <li class="productsLi" v-for="(item) in items" :key="item.name" @click="getProductInfo(item)" >
                  <router-link to="/productInfo" class="link-productInfo" >
                      <img class="productImg" :src="item.img" @click="getProductInfo(item)"/>
                  </router-link>
              <div class="spans">
                <router-link to="/productInfo" class="link-productInfo-name" >
                  <span class="productName"  @click="getProductInfo(item)">{{item.name}}</span>
                 </router-link>

                  <span class="productInfo">{{ item.info }}</span> 
                  <span class="productPrice">Price {{item.price}}</span>
            </div>
            <!-- <div class="products-buttons">
                <button class="addToCart" @click="addToCart(item)">Add to cart</button>
                    <router-link to="/productInfo" class="link-productInfo" >
                        <button class="getInfo" @click="getProductInfo(item)">Info</button>
                      </router-link>
                </div> -->
              </li>
            </ul>
      </div>
  </div>
</template>

<script>
//styles
import productsStyles from './styles/productsStyles.css';
import axios from 'axios'
import store from "@/utils/store.js";
//import { mapGetters } from "vuex";

export default {
  name: 'ProductPage',
    data() {
      return {
          productGetInfo: {
              name: '',
              price: 0,
              type: '',
              info: '',
              img: ''
        },
        knifes: 0,
        cutlery: 0
      }
    },
  computed: {
    items() {
      return this.$store.state.items
    },
  },
  methods: {
    addToCart: function(item) {
     this.$store.commit('SET_CART', {
        productsCart:item
      })
  },
     getProductInfo: function(product) {
        this.productGetInfo.name = product.name
        this.productGetInfo.price = product.price
        this.productGetInfo.info = product.info
        this.productGetInfo.img = product.img

        this.$store.commit('SET_PRODUCT_INFO', {
          productInfo: this.productGetInfo
    })
  },
  sortArrayByKnifes: function() {
    this.$store.state.items = this.products
    let filter = this.$store.state.items.filter(arr => arr.type === "knifes")
    this.$store.state.items = filter
  },
  sortArrayByCutlery: function() {
    this.$store.state.items = this.products
    let filter = this.$store.state.items.filter(arr => arr.type === "cutlery")
    this.$store.state.items = filter
  }
},
mounted () {
  axios
      .get("products.json")
      .then(response => {
      this.$store.commit('SET_ITEMS', response.data)
      this.products = store.state.items
     
      var amountOfCutlery = 0;
      var amountOfKnifes = 0;
        
      for(var i = 0; i <  this.products.length; ++i){
        if(this.products[i].type == "cutlery") {
            amountOfCutlery++;
            this.cutlery = amountOfCutlery
        }
        if(this.products[i].type == "knifes") {
          amountOfKnifes++;
          this.knifes = amountOfKnifes
          }
      }//for loop
    })
  }
  
}




</script>



