/*
 * @Date: 2021-02-23 16:26:03
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-02-24 11:27:29
 * @description: 
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
{{#router}}
import router from './router'
{{/router}}
import store from './store'

Vue.config.productionTip = false

new Vue({
  {{#router}}
  router,
  {{/router}}
  store,
  render: h => h(App)
}).$mount('#app')
