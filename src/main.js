import Vue from 'vue'
import AppLayout from './components/AppLayout.vue'
import router from './router'
import store from './store'
import attemptToAuthoriseTokens from "./helpers/authorise-tokens"

new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router,
  store,
})

store.dispatch("auth/initAuth")

//TODO: This is not guranteed to run. It seems to gets skipped when a route gets redirected. Needs tweaking. 
attemptToAuthoriseTokens()

//Redirect to journals if user is already logged in
if(Boolean(store.getters["auth/currentUser"])){
  router.push('journals')
}

Vue.config.productionTip = false