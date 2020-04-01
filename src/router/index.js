import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Kanji from '../views/Kanji.vue'
import Classifiers from '../views/Classifiers.vue'
import Dictionary from '../views/Dictionary.vue'
import Learning from '../views/Learning.vue'
import Categories from '../views/Categories.vue'
import Range from '../views/Range.vue'

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
    path: '/learning',
    name: 'Learning',
    component: Learning
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/range',
    name: 'Range',
    component: Range
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
