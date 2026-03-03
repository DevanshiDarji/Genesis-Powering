import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Team from '../pages/Team.vue'
import Contact from '../pages/Contact.vue'
import Blog from '../pages/Blog.vue'
import Genesis from '../pages/Genesis.vue'
import Pricing from '../pages/Pricing.vue'
import Projects from '../pages/Projects.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/team', name: 'Team', component: Team },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/genesis', name: 'Genesis', component: Genesis },
  { path: '/pricing', name: 'Pricing', component: Pricing },
  { path: '/projects', name: 'Projects', component: Projects }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
