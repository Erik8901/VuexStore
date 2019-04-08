<template>
  <div id="app">
    <Header></Header>
    <div class="scrollDiv">
      <Banner></Banner>
      <Products></Products>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Banner from './components/Banner/Banner.vue'
import Products from './components/Products/Products.vue'


//styles
import styles from './styles/styles.css';




export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Banner,
    Products

  }
}
</script>

