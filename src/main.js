import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

import router from "./router"; //引入路由

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
