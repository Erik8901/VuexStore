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
      <button @click="submit">Pay now!</button>
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
    };
  },
  // You will be redirected to Stripe's secure checkout page
  submit() {
    console.log("hereqz");
    this.$refs.checkoutRef.redirectToCheckout();
  },
};
</script>