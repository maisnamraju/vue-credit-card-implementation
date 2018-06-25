<template>
  <div>
    <form v-on:submit="validateCoupon" >
      <input v-model="couponCode" placeholder="Coupon Code"/>
      <p v-if="error">{{ error }}</p>
      <button>Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  props: ["productId", "price"],
  data: () => ({
    couponCode: "",
    error: ""
  }),
  methods: {
    async validateCoupon() {
      try {
        this.$http.post("/validate-coupon", {
          productId: this.productId,
          couponCode: this.couponCode
        });
        return false;
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>
