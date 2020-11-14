import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from '@/components/Home.vue'
import Profile from '@/components/Profile.vue'
import Work from '@/components/Work.vue'
import Skill from '@/components/Skill.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/Profile', component: Profile },
  { path: '/Work', component: Work },
  { path: '/Skill', component: Skill }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

app.$mount('#app')
