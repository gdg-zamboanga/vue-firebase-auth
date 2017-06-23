import Vue from 'vue'
import App from './App.vue'

import firebase from 'firebase'
import VueRouter from 'vue-router'
import {config} from './config'
import {router} from './router'

Vue.use(VueRouter)

new Vue({
  router,
  created(){
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/')
      }
    })
  },
  el: '#app',
  render: h => h(App)
})
