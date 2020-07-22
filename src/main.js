import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueAnalytics from 'vue-analytics'
import './plugins/github'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'UA-173273195-1',
  router
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
