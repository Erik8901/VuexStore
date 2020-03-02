<template>
    <div class="contactInfo" >
        <h1 class="companyName2">Kitchen Equipment</h1>
            <div class="align-contact">
                <span class="city">City: Göteborg</span >
                <span  class="street">Address: Teststreet 4D</span >
                <span  class="adress">Areacode: 416 99 Göteborg</span >
                <span  class="tele">Tel: 031 - 01 01 01</span >
            </div>
          <h3 class="companyName2">Drop Us a Line!</h3>
              <div class="user-info">
                    Name:<input type="text" />
                    Email:<input type="text" />
            </div>
                <span class="msg">Messege:</span><textarea textarea maxlength="400" />
            <button class="btnSend">{{ this.text }}</button>
                <!-- <contactUs id="test" class="sendForm" v-if="!isHidden"/> -->
                
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
        text: "Send Messege!",
        viewWidth: 0,
        text2: "Close"
      }
  },
    mounted() {
      

  },
    updated() {
       
    //    if(!this.isHidden) {
    //        this.text = this.text2
    //    } else if(this.isHidden) {
    //        this.text = "Drop us a line!"
    
    // }
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
 created() {
      window.addEventListener('resize', this.handleWindowSize)
  },
    methods: {
       handleWindowSize() {
         this.viewWidth = window.innerWidth;
         
         let contactInfo  = document.querySelector(".contactInfo");
         this.viewWidth < 1300 ? 
           contactInfo.style.width = "100%" : 
          contactInfo.style.width = "50%"
     }
  }
}
</script>


