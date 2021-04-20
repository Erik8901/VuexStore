<template>
  <div class="stripe-checkout-page">
    <h1 class="billing-title">COMPLETE ORDER</h1>
    <div class="payment-container">
      <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="(v) => (loading = v)"
      />
      <!-- <button @click="submit">Confirm Purchase</button> -->

      <div class="credit-card-form">
        <span class="card-info-title">Credit Card Information</span>

        <div class="card-inputs-container">
          <div class="expiry-container">
            <select name="expireMM" class="card-expireMM">
              <option value="">Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select name="expireYY" class="card-expireYY">
              <option value="">Year</option>
              <option value="20">2020</option>
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
            </select>
          </div>
          <input
            class="input-card-CCV"
            placeholder="CVV"
            v-model="cardCCV"
            type="text"
          />
        </div>
        <div class="card-number-div">
          <input
            class="input-card-number"
            placeholder="Card Number"
            v-model="cardNumber"
            type="text"
          />
        </div>
        <div class="btn-complete" @click="completePurchase()">
          <span class="txt-complete-purchase">Complete Purchase</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";

//styles
import stylesStripCheckout from "./styles/stylesStripCheckout.css";

export default {
  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    return {
      loading: false,
      lineItems: [
        {
          price: "prod_J0LnnYdWYlgCnJ", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: "your-success-url",
      cancelURL: "your-cancel-url",
      cardExpiryDate: "",
      cardCCV: "",
      cardNumber: "",
    };
  },
  methods: {
    completePurchase: function () {
      console.log("test");
      console.log(this.cardExpiryDate);

      this.cardExpiryDate = "";
    },
  },
  // You will be redirected to Stripe's secure checkout page
  submit() {
    console.log("hereqz");
    this.$refs.checkoutRef.redirectToCheckout();
  },
};
</script>