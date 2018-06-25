<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <p>{{ price }}</p>
    <select v-model="paymentOption">
      <option default selected>Select Payment Method</option>
      <option v-for="option in options" :key="option.id" :value="option.id">{{ option.text }}</option>
    </select>
  </div>
</template>
<script>
export default {
  props: ["title", "description", "productId", "price"],
  data: () => ({
    paymentOption: "Select Payment Method",
    options: [
      {
        id: "paypal",
        text: "PayPal"
      },
      {
        id: "ccdd",
        text: "Credit/Debit Card"
      }
    ]
  }),
  watch: {
    paymentOption: "setPaymentOption"
  },
  methods: {
    setPaymentOption(val) {
      this.$emit("select-payment-option", {
        val,
        price: this.price,
        productId: this.productId
      });
    }
  }
};
</script>
