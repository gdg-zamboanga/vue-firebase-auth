import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Dashboard from './components/Dashboard.vue'

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Login},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/dashboard', component: Dashboard}
  ]
})
