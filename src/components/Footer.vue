<!-- footer.vue -->

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-section">
        <p class="footer-desc">Leading solar panel installation and clean energy solutions. Powering homes and businesses with renewable energy.</p>
        <div class="social-links">
          <a href="https://instagram.com/__ronak.here__" target="_blank" rel="noopener" class="instagram-link"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
      <div class="footer-section">
        <h4 class="footer-heading">Quick Links</h4>
        <ul class="footer-links">
          <li><a @click="navigate('/')">Home</a></li>
          <li><a @click="navigate('/about')">About Us</a></li>
          <li><a @click="navigate('/team')">Our Team</a></li>
          <li><a @click="navigate('/projects')">Projects</a></li>
          <li><a @click="navigate('/pricing')">Pricing</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4 class="footer-heading">Services</h4>
        <ul class="footer-links">
          <li><a @click="navigate('/genesis')">Genesis Solar System</a></li>
          <li><a @click="navigate('/')">Residential Solar</a></li>
          <li><a @click="navigate('/')">Commercial Solar</a></li>
          <li><a @click="navigate('/')">Battery Storage</a></li>
          <li><a @click="navigate('/')">EV Charging</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4 class="footer-heading">Contact</h4>
        <p>📍 Mission Road, Nadiad, Gujarat, India</p>
        <p>📞 <a href="tel:+918200480623">Ronak Khristi +91 82004 80623</a></p>
        <p>📞 <a href="tel:+918160604745">Kalpesh Macwan +91 81606 04745</a></p>
        <p>✉️ <a href="mailto:info@genesispoweringtomorrow.com">info@genesispoweringtomorrow.com</a></p>
        <p>🕐 Mon-Sat: 9AM - 6PM</p>
      </div>
    </div>
    <div class="footer-bottom"><p>© {{ currentYear }} Genesis Powering Tomorrow. All rights reserved.</p></div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: { currentYear() { return new Date().getFullYear() } },
  methods: { navigate(path) { this.$router.push(path) } }
}
</script>

<style scoped>
.footer { background: var(--navy); color: var(--gray); padding: 4rem 0 1rem; border-top: 1px solid var(--border); }
.footer-inner { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2.5rem; margin-bottom: 2rem; }
.footer-heading { font-size: 1.1rem; font-weight: 600; margin-bottom: 1rem; color: var(--white); }
.footer-links li { margin-bottom: 0.5rem; }
.footer-links a { color: var(--gray); transition: color 0.3s; }
.footer-links a:hover { color: var(--sun-light); }
.footer-bottom { border-top: 1px solid var(--border); padding: 1rem 0; text-align: center; color: var(--gray-dark); font-size: 0.9rem; }
.instagram-link { font-size: 1.5rem; color: white; transition: 0.3s; }
.instagram-link:hover { color: #E1306C; transform: scale(1.1); }
</style>
