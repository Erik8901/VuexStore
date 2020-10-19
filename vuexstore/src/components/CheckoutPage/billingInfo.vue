<template>
  <div class="billing-info">
    <div class="billing-text">
      <span class="contact-title">Contact Information</span>
        <div class="account-text">
          <span class="accountTitle">Already have an acccount?</span>
          <span class="loginTitle">Log in</span>
      </div>
    </div>
      <div class="inputFields">
        <div class="userInputs">
          <input class="input-email" placeholder="Email" type="text" />
            <div class="checkbox-div">
            <input type="checkbox" class="checkbox" value="subscribe" />
            <span class="subscribe-text">Keep me up to date with news and special offers</span>
          </div>
        <div class="personal-info-container">
            <span class="personal-title">Personal Information</span>
              <div class="names-container">
                <input class="input-names" placeholder="First Name" type="text" />
                <input class="input-names" placeholder="Last Name" type="text" />
              </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//styles
import stylesBillingInfo from './styles/stylesBillingInfo.css';
import stylesCheckoutPage from './styles/stylesCheckoutPage.css';

export default {
  name: 'BillingInfo',
  data() {
      return {
         
      }
     },
computed: {
   
},
mounted()  {
  
},
methods: {
    
  },
}
</script>


