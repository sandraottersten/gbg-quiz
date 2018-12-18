import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
import { fb } from './firebase'
import VueFire from 'vuefire'

Vue.config.productionTip = false
Vue.use(VueFire)
let app = '';

fb.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
})