// router/index.js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
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

// ✅ Use hash mode only if environment variable GH_PAGES is true
const isGitHubPages = import.meta.env.VITE_GH_PAGES === 'true'

const router = createRouter({
  history: isGitHubPages ? createWebHashHistory() : createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router