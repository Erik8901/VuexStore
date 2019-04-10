<template>
    <div class="contactInfo" >
        <h3 class="companyName2">Kitchen Equipment</h3>
                <p class="city">Göteborg</p>
                <p class="street">Teststreet 4D</p>
                <p class="adress">416 99 Göteborg</p>
                <p class="tele">Tel: 031 - 01 01 01</p>
                <button class="dropLine" @click="isHidden = !isHidden">Drop us a line!</button>
                <contactUs v-if="!isHidden"/>
    </div>
</template>

<script>
import contactUs from '../contactUs/contactUs.vue'
//styles
import contactInfoStyles from './styles/contactInfoStyles.css';


export default {
  name: 'contactInfo',
  components: {
      contactUs
  },
  data() {
      return {
        isHidden: true
      }
  },
  updated(isHidden) {
      
      window.onkeydown = function(e) {
          if(e.keyCode == 27)  {
              console.log("iuoboiboi")
              !this.isHidden
              console.log(this.isHidden)
          }
      }

  },
  methods: {
     showContactUs() {
         console.log("bvobphpi")

         
      }
  }
}
</script>


