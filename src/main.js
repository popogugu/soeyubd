import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false;
Vue.use(Button);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
