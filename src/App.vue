<template>
  <div id="vue-payment-app">
    <container></container>
  </div>
</template>

<script>
import Container from "./components/Container";

export default {
  name: "App",
  components: {
    Container
  }
};
</script>
<style lang="scss">
#vue-payment-app {
  position: fixed;
  box-shadow: 16px -8px 5px 3px #f5f5f5;
  background-color: rgba(107, 100, 100, 0.15);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  opacity: 1;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

#vue-payment-app > div {
  position: relative;
  margin: 2% 2% 2% 2%;
  padding: 2rem;
  background: #fff;
  color: #444;
}
</style>
