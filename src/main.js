// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueGoodWizard from "vue-good-wizard";
import axios from "axios";

// add a public key in the header
// and get a token from the api
// and add to bearer token

const ROOT_URL = "http://localhost:9000/";
Vue.prototype.$http = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000
  // headers: { 'Authorization': `Bearer ${token}` }
});
Vue.use(VueGoodWizard);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
