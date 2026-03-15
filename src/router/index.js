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
  { path: '/', name: 'Home', component: Home, meta: { title: 'Home | Genesis' } },
  { path: '/about', name: 'About', component: About, meta: { title: 'About Us | Genesis' } },
  { path: '/team', name: 'Team', component: Team, meta: { title: 'Our Team | Genesis' } },
  { path: '/contact', name: 'Contact', component: Contact, meta: { title: 'Contact Us | Genesis' } },
  { path: '/blog', name: 'Blog', component: Blog, meta: { title: 'Blog | Genesis' } },
  { path: '/genesis', name: 'Genesis', component: Genesis, meta: { title: 'Genesis Solar System | Genesis' } },
  { path: '/pricing', name: 'Pricing', component: Pricing, meta: { title: 'Pricing | Genesis' } },
  { path: '/projects', name: 'Projects', component: Projects, meta: { title: 'Projects | Genesis' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

// Dynamically set the page title based on the route
router.beforeEach((to, from, next) => {
  document.title = (to.meta.title || 'Genesis')
  next()
})

export default router