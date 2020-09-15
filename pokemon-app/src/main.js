import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

// const router = new VueRouter()

Vue.config.productionTip = false

// router.map({
//   '/home': {
//     component: Home
//   },
//   '/componente-b': {
//     component: ComponentB
//   },
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
