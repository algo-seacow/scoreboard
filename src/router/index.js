import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Scoreboard from '../views/Scoreboard.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/scoreboard',
    name: 'Scoreboard',
    component: Scoreboard,
    props: route => ({
      user: route.query.user,
      repo: route.query.repo,
      gist: route.query.gist
    })
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
