import Vue from 'vue'
import App from './App.vue'
import NinjaName from './components/NinjaName.vue'

Vue.config.productionTip = false

Vue.component('ninja-name', NinjaName)

new Vue({
  render: h => h(App),
}).$mount('#app')
