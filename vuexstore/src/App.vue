<template>
  <div id="app" @click="test()">
    <HeaderTop></HeaderTop>
    <Header></Header> 
    <router-view>
     <div class="scrollDiv">
      <!-- <div id="nav">
      
      </div> -->
    </div>
      </router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop/HeaderTop.vue'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import LandingPage from './components/LandingPage/LandingPage.vue'
import ProductPage from './components/Products/ProductPage.vue'


//styles
import styles from './styles/styles.css';

export default {
  name: 'app',
  components: {
    Header,
    HeaderTop,
    Footer,
    LandingPage,
    ProductPage
  
  },
    methods: {
    test: function test () {
      console.log("test")
     
      // document.body.style.backgroundColor = "yellow";
      //  if(event.key == 27) {
        
      //   console.log("jibpi")
      // }
    }
  }

 
  
}
</script>

