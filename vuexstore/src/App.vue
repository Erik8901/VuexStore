<template>
  <div id="app">
    <HeaderTop></HeaderTop>
    <Header></Header>
    <div class="scrollDiv">
      <Banner></Banner>
      <Products></Products>
      
      <BannerTwo></BannerTwo>
      <div class="testdiv"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop/HeaderTop.vue'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Banner from './components/Banner/Banner.vue'
import Products from './components/Products/Products.vue'
import BannerTwo from './components/BannerTwo/BannerTwo.vue'



//styles
import styles from './styles/styles.css';




export default {
  name: 'app',
  components: {
    Header,
    HeaderTop,
    Footer,
    Banner,
    Products,
    BannerTwo

  }
}
</script>

