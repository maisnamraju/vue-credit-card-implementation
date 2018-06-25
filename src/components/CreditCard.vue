<template>
  <div>
        <div class="card-wrapper">
          <card v-model="cardDetail"></card>
        </div>
        <input name="number" placeholder="Card number" type="tel" v-model="cardDetail.number" v-card-focus>
        <input name="name" placeholder="Full name" type="text" v-model="cardDetail.name" v-card-focus>
        <input name="expiry" placeholder="MM/YY" type="tel" v-model="cardDetail.expiry" v-card-focus>
        <input name="cvc" placeholder="CVC" type="number" v-model="cardDetail.cvc" v-card-focus>
  </div>
</template>
<script>
import Card from "vue-credit-card";

export default {
  components: {
    Card
  },
  data: () => ({
    form: {
      name: "",
      cc: "",
      cvv: "",
      dd: "",
      mm: ""
    }
  }),
  methods: {}
};
</script>
