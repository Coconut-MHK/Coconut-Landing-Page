/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import VueMediaQueryPlugin from './plugins/vue-mq.js'
import VueScrollPlugin from './plugins/vue-scroll.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
