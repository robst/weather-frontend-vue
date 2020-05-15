import Vue from 'vue'
import App from './App.vue'
import store from "@/store/store";
import 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
