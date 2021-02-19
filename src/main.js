import Vue from 'vue'
import App from './App.vue'
import './quasar'

import vueNumeralFilterInstaller from 'vue-numeral-filter';

Vue.use(vueNumeralFilterInstaller)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
