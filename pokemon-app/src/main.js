import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

// Rotas
import Home from "./views/Home.vue";

Vue.use(VueRouter);

// Vuesax Component Framework
import Vuesax from "vuesax";
import "material-icons/iconfont/material-icons.css"; //Material Icons
import "vuesax/dist/vuesax.css"; // Vuesax
Vue.use(Vuesax);

const routes = [{ path: "/", component: Home }];

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
