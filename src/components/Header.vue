<!-- header.vue-->

<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container header-inner">
      <h2 class="logo" @click="navigate('/')">
        <span class="logo-icon">☀️</span>
        <div class="logo-text">
          <span class="company-name">Genesis</span>
          <span class="tagline">Powering Tomorrow</span>
        </div>
      </h2>
      <nav class="nav" :class="{ open: mobileMenuOpen }">
        <a @click="navigate('/')">Home</a>
        <a @click="navigate('/about')">About Us</a>
        <a @click="navigate('/team')">Our Team</a>
       <!-- <a @click="navigate('/projects')">Projects</a>-->
        <a @click="navigate('/pricing')">Pricing</a>
        <a @click="navigate('/contact')" class="nav-cta">Contact Us</a>
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
    return {
      mobileMenuOpen: false,
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    navigate(path) {
      this.$router.push(path)
      this.mobileMenuOpen = false
    },
    toggleMenu() { this.mobileMenuOpen = !this.mobileMenuOpen },
    handleScroll() {
      this.isScrolled = window.scrollY > 40
    }
  }
}
</script>

<style scoped>
.header {
  background: rgba(15, 42, 74, 0.97);
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
 
  transition: background 0.4s ease, box-shadow 0.4s ease;
}
.header.scrolled {
  background: rgba(15, 42, 74, 0.97);
  box-shadow: 0 4px 24px rgba(15, 42, 74, 0.25);
  backdrop-filter: blur(12px);
}
.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--white);
}
.logo-icon { font-size: 1.6rem; }
.logo-text {
  display: flex;
  flex-direction: column;
}
.company-name {
  font-size: 1.5rem;
  line-height: 1;
}
.tagline {
  font-size: 0.7rem;
  color: var(--sun);
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-top: 3px;
}

.nav { display: none; align-items: center; gap: 1.75rem; }
.nav a {
  color: var(--white);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s;
  cursor: pointer;
  position: relative;
}
.nav a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 2px;
  background: var(--sun);
  transition: width 0.3s ease;
}
.nav a:hover { color: var(--sun-light); }
.nav a:hover::after { width: 100%; }

.nav-cta {
  background: linear-gradient(135deg, var(--sun), #f57f17);
  color: var(--white) !important;
  padding: 0.6rem 1.4rem;
  border-radius: 50px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(247, 147, 30, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  letter-spacing: 0.5px;
}
.nav-cta::after { display: none !important; }
.nav-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(247, 147, 30, 0.55);
  color: var(--white) !important;
}

.menu-btn {
  background: none; border: none;
  font-size: 1.7rem;
  color: var(--white);
  cursor: pointer;
}

@media (min-width: 1024px) {
  .nav { display: flex; }
  .menu-btn { display: none; }
}
@media (max-width: 1023px) {
  .nav {
    position: fixed; top: 60px; left: 0; right: 0;
    background: var(--navy);
    flex-direction: column; padding: 2rem;
    transform: translateY(-100%); opacity: 0; pointer-events: none;
    transition: transform 0.3s, opacity 0.3s;
    border-bottom: 3px solid var(--sun);
  }
  .nav.open { transform: translateY(0); opacity: 1; pointer-events: all; display: flex; }
  .nav a { width: 100%; padding: 0.75rem 0; }
  .nav-cta { text-align: center; margin-top: 0.5rem; }
}
</style>
