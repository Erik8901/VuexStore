<template>
  <div class="LandingPage">
     <Banner></Banner>
     <Products></Products>
      <BannerTwo></BannerTwo>
      <ContactInfo></ContactInfo>
      <GoogleMap></GoogleMap> 
  </div>
</template>




<script>

import Banner from '../Banner/Banner.vue'
import Products from '../Products/Products.vue'
import BannerTwo from '../BannerTwo/BannerTwo.vue'
import ContactInfo from '../ContactInfo/ContactInfo.vue'
import GoogleMap from '../GoogleMap/GoogleMap.vue'
//styles
import headerStyles from './styles/stylesLandingPage.css';


export default {
  name: 'HeaderTop',
  components: {
      Banner,
      BannerTwo,
      Products,
      ContactInfo,
      GoogleMap
     }
}
</script>


