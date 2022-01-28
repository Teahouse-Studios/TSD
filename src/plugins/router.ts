import VueRouter from 'vue-router'

import About from './views/About.vue'
import Home from './views/Home.vue'
import Definition from './views/Definition.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/d/:term', name: 'def',component: Definition, props: true },

  { path: '/:pathMatch(.*)', name: '404', component: NotFound },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,

})
