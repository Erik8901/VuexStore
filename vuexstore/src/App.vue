<template>
  <div id="app">
    <HeaderTop></HeaderTop>
    <Header></Header> 
     <div class="scrollDiv">
      <Banner></Banner>
      <Products></Products>
      <div id="nav">
        <router-link to="/">ProductPage</router-link>
      </div>
      <router-view/>
      <BannerTwo></BannerTwo>
      <ContactInfo></ContactInfo>

      <GoogleMap></GoogleMap>
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
import ContactInfo from './components/ContactInfo/ContactInfo.vue'
import GoogleMap from './components/GoogleMap/GoogleMap.vue'
import ProductPage from './components/Products/ProductPage.vue'





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
    BannerTwo,
    GoogleMap,
    ContactInfo,
    ProductPage
    

  }
}
</script>

