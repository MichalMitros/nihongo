import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kanji from '../views/Kanji.vue'
import Classifiers from '../views/Classifiers.vue'
import Dictionary from '../views/Dictionary.vue'
import Tests from '../views/Tests.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/kanji',
    name: 'Kanji',
    component: Kanji
  },
  {
    path: '/classifiers',
    name: 'Classifiers',
    component: Classifiers
  },
  {
    path: '/dictionary',
    name: 'Dictionary',
    component: Dictionary
  },
  {
    path: '/tests',
    name: 'Tests',
    component: Tests
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
