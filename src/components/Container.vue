<template>
  <div>
    <vue-good-wizard 
      :steps="steps"
      :onNext="nextClicked" 
      :onBack="backClicked">
      <div slot="page1">
       <product-description price="$200" product-id="12323" title="Test Product" description="Some Description of the product"></product-description> 
       <coupon-form product-id="dsafds" price="$200"></coupon-form>
      </div>
      <div slot="page2">
        <h4>Step 2</h4>
        <credit-card></credit-card>
      </div>
      <div slot="page3">
        <h4>Step 3</h4>
        <p>This is step 3</p>
      </div>
    </vue-good-wizard>
  </div>
</template>

<script>
import ProductDescription from "./ProductDescription";
import CouponForm from "./Coupon";
import CreditCard from "./CreditCard";

export default {
  name: "demo",
  components: {
    ProductDescription,
    CouponForm,
    CreditCard
  },
  data() {
    return {
      steps: [
        {
          label: "Select Items",
          slot: "page1"
        },
        {
          label: "Add Constraints",
          slot: "page2"
        },
        {
          label: "Review",
          slot: "page3"
        }
      ]
    };
  },
  methods: {
    nextClicked(currentPage) {
      console.log("next clicked", currentPage);
      return true; //return false if you want to prevent moving to next page
    },
    backClicked(currentPage) {
      console.log("back clicked", currentPage);
      return true; //return false if you want to prevent moving to previous page
    }
  }
};
</script>
