<!-- header.vue-->

<template>
  <header class="header">
    <div class="container header-inner">
      <h2 class="logo">Genesis Powering</h2>
      <nav class="nav" :class="{ open: mobileMenuOpen }">
        <a @click="navigate('/')">Home</a>
        <a @click="navigate('/about')">About Us</a>
        <a @click="navigate('/team')">Our Team</a>
        <a @click="navigate('/projects')">Projects</a>
        <a @click="navigate('/pricing')">Pricing</a>
        
      </nav>
      <button class="menu-btn" @click="toggleMenu" aria-label="Menu">
        <span v-if="!mobileMenuOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return { mobileMenuOpen: false }
  },
  methods: {
    navigate(path) {
      this.$router.push(path)
      this.mobileMenuOpen = false
    },
    toggleMenu() { this.mobileMenuOpen = !this.mobileMenuOpen }
  }
}
</script>

<style scoped>
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(12,25,41,0.95); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); }
.header-inner { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; }
.logo { color: var(--sun); font-weight: 700; font-size: 1.5rem; cursor: pointer; }
.nav { display: none; align-items: center; gap: 2rem; }
.nav a { color: var(--white); font-weight: 500; transition: color 0.3s; cursor: pointer; }
.nav a:hover { color: var(--sun-light); }
.menu-btn { background: none; border: none; font-size: 1.7rem; color: var(--white); cursor: pointer; }
@media (min-width: 1024px) { .nav { display: flex; } .menu-btn { display: none; } }
@media (max-width: 1023px) {
  .nav { position: fixed; top: 60px; left: 0; right: 0; background: var(--navy); flex-direction: column; padding: 2rem; transform: translateY(-100%); opacity: 0; pointer-events: none; transition: transform 0.3s, opacity 0.3s; }
  .nav.open { transform: translateY(0); opacity: 1; pointer-events: all; }
  .nav a { width: 100%; padding: 0.75rem 0; }
}
</style>
