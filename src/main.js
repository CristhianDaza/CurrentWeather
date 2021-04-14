import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import moment from "moment";

Vue.config.productionTip = false;
Vue.prototype.moment = moment;
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
