<template>
    <div class="contactInfo" >
        <h3 class="companyName2">Kitchen Equipment</h3>
                <p class="city">Göteborg</p>
                <p class="street">Teststreet 4D</p>
                <p class="adress">416 99 Göteborg</p>
                <p class="tele">Tel: 031 - 01 01 01</p>
                <button id="btnq" class="dropLine" @click="isHidden = !isHidden">{{ this.text }}</button>
                <contactUs id="test" class="sendForm" v-if="!isHidden"/>
                
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
        isHidden: true,
        text: "Drop us a line!",
        text2: "Close"
      }
  },
    mounted() {
      

  },
    updated() {
        if(!this.isHidden) {
           this.text = this.text2
       } else if(this.isHidden) {
           this.text = "Drop us a line!"
    }
    // let sendForm = document.getElementById("test");
    // let btnq = document.getElementById("btnq");
    //   //   console.log(sendForm)
    //  document.onclick = function(e, data) {
    //     if(e.target.id !== "btnq" && e.target.id !== "test") {
    //           console.log("outsidez")
    //           sendForm.style.display = "none"
    //            }
    //         }
    //   window.onkeydown = function(e) {
    //       if(e.keyCode == 27)  {
    //           sendForm.style.display = "none"
    //       }
    //   }

},
    methods: {
     
  }
}
</script>


