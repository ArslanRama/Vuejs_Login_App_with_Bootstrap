import Vue from 'vue'
import App from './App.vue'
import router from './router'

// we import Bootstrap path in the main.js file. It makes Bootstrap module available throughout our app.
import 'bootstrap/dist/css/bootstrap.min.css'
// we can also define global CSS here
import '@/assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
