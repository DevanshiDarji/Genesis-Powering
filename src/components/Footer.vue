<!-- footer.vue -->

<template>
  <footer class="footer">
    
    <div class="container footer-inner">
      <div class="footer-section footer-brand">
        <h3 class="footer-logo">
          <span class="footer-logo-icon">☀️</span> 
          <div class="logo-text">
            <span class="company-name">Genesis</span>
            <span class="tagline">Powering Tomorrow</span>
          </div>
        </h3>
        <p class="footer-desc">Leading solar panel installation and clean energy solutions. Powering homes and businesses across Gujarat with renewable energy.</p>
        <div class="social-links">
          <a href="https://instagram.com/__ronak.here__" target="_blank" rel="noopener" class="social-link">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
      </div>
      <div class="footer-section">
        <h4 class="footer-heading">Quick Links</h4>
        <ul class="footer-links">
          <li><a @click="navigate('/')">Home</a></li>
          <li><a @click="navigate('/about')">About Us</a></li>
          <li><a @click="navigate('/team')">Our Team</a></li>
         <!-- <li><a @click="navigate('/projects')">Projects</a></li>-->
          <li><a @click="navigate('/pricing')">Pricing</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4 class="footer-heading">Contact</h4>
        <ul class="footer-contact">
          <li><i class="bi bi-geo-alt-fill"></i> Mission Road, Nadiad, Gujarat</li>
          <li><i class="bi bi-telephone-fill"></i> <a href="tel:+918200480623">Ronak Khristi +91 82004 80623</a></li>
          <li><i class="bi bi-telephone-fill"></i> <a href="tel:+918160604745">Kalpesh Macwan +91 81606 04745</a></li>
          <li><i class="bi bi-envelope-fill"></i> <a href="mailto:info@genesispoweringtomorrow.com">info@genesispoweringtomorrow.com</a></li>
          <li><i class="bi bi-clock-fill"></i> Mon-Sat: 9AM - 6PM</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>© {{ currentYear }} Genesis. All rights reserved.</p>
      </div>
    </div>
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
.footer {
  position: relative;
  background: var(--navy);
  color: rgba(255,255,255,0.8);
  padding: 5rem 0 0;
}
.footer-wave {
  position: absolute;
  top: -1px;
  left: 0; right: 0;
  color: var(--off-white);
  line-height: 0;
}
.footer-wave svg { width: 100%; height: 80px; }

.footer-inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.5fr;
  gap: 3rem;
  padding-bottom: 2.5rem;
}
@media (max-width: 768px) {
  .footer-inner { grid-template-columns: 1fr; }
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--white);
  margin-bottom: 1rem;
}
.footer-logo-icon { font-size: 1.6rem; }
.logo-text {
  display: flex;
  flex-direction: column;
}
.company-name {
  font-size: 1.5rem;
  font-weight: 700;
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
.footer-desc {
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.65);
  margin-bottom: 1.25rem;
}

.social-links { display: flex; gap: 0.75rem; }
.social-link {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex; align-items: center; justify-content: center;
  color: var(--white);
  font-size: 1.15rem;
  transition: background 0.3s, transform 0.3s;
}
.social-link:hover {
  background: #E1306C;
  transform: translateY(-3px);
}

.footer-heading {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: var(--white);
  position: relative;
  padding-bottom: 0.75rem;
}
.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 32px; height: 3px;
  background: var(--sun);
  border-radius: 2px;
}

.footer-links { list-style: none; }
.footer-links li { margin-bottom: 0.65rem; }
.footer-links a {
  color: rgba(255,255,255,0.65);
  font-size: 0.95rem;
  transition: color 0.3s, padding-left 0.3s;
  cursor: pointer;
}
.footer-links a:hover { color: var(--sun-light); padding-left: 4px; }

.footer-contact { list-style: none; }
.footer-contact li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin-bottom: 0.75rem;
  color: rgba(255,255,255,0.65);
  font-size: 0.9rem;
  line-height: 1.5;
}
.footer-contact li i { color: var(--sun); margin-top: 3px; flex-shrink: 0; }
.footer-contact a { color: rgba(255,255,255,0.65); transition: color 0.3s; }
.footer-contact a:hover { color: var(--sun-light); }

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 1.25rem 0;
  text-align: center;
  color: rgba(255,255,255,0.45);
  font-size: 0.9rem;
}
</style>
