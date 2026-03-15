<template>
  <div class="contact-page">

    <!-- ===== HERO ===== -->
    <section class="contact-hero">
      <div class="contact-hero-bg" aria-hidden="true"></div>
      <div class="contact-hero-overlay"></div>
      <div class="container contact-hero-inner text-center position-relative z-10">
        <h1 class="animate-hero">Contact <span class="text-accent">Us</span></h1>
        <p class="animate-hero" style="animation-delay: 0.3s; max-width: 600px; margin: 0 auto;">
          Ready to make the switch to solar? Reach out today for a free consultation and personalized quote.
        </p>
      </div>
    </section>

    <!-- ===== CONTACT INFO & FORM ===== -->
    <section class="contact-main">
      <div class="container">
        <div class="contact-layout">
          
          <!-- Left: Contact Details -->
          <div class="contact-info animate-on-scroll">
            <h2 class="section-title">Let's <span class="text-accent">Talk</span></h2>
            <p class="info-desc">Whether you have questions about our services, pricing, or government subsidies, our team is here to assist you.</p>

            <div class="info-cards">
              
              <div class="info-card">
                <div class="info-icon">
                  <i class="bi bi-geo-alt-fill"></i>
                </div>
                <div class="info-content">
                  <h3>Our Office</h3>
                  <p>Mission Road, Nadiad<br>Gujarat, India</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-icon">
                  <i class="bi bi-telephone-fill"></i>
                </div>
                <div class="info-content">
                  <h3>Call Us</h3>
                  <p><a href="tel:+918200480623">+91 82004 80623 (Ronak)</a></p>
                  <p><a href="tel:+918160604745">+91 81606 04745 (Kalpesh)</a></p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-icon">
                  <i class="bi bi-envelope-fill"></i>
                </div>
                <div class="info-content">
                  <h3>Email Us</h3>
                  <p><a href="mailto:info@genesispoweringtomorrow.com">info@genesispoweringtomorrow.com</a></p>
                </div>
              </div>

            </div>
          </div>

          <!-- Right: Contact Form -->
          <div class="contact-form-wrapper animate-on-scroll stagger-2">
            <form @submit.prevent="handleSubmit" class="contact-form">
              <h3>Send a Message</h3>
              <p class="form-sub">We'll get back to you within 24 hours.</p>

              <div v-if="submitted" class="success-message">
                <i class="bi bi-check-circle-fill"></i> Thank you! Your message has been sent successfully.
              </div>

              <div class="form-grid">
                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input type="text" id="name" v-model="formData.name" required />
                </div>
                
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input type="email" id="email" v-model="formData.email" required />
                </div>
                
                <div class="form-group full-width">
                  <label for="phone">Phone Number *</label>
                  <input type="tel" id="phone" v-model="formData.phone" required />
                </div>
                
                <div class="form-group full-width">
                  <label for="message">Your Message *</label>
                  <textarea id="message" v-model="formData.message" rows="5" required></textarea>
                </div>
              </div>

              <button type="submit" class="btn btn-primary submit-btn">
                <i class="bi bi-send-fill" style="margin-right: 0.5rem;"></i> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>

    

  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      submitted: false,
      formData: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  mounted() { 
    this.initScrollAnimations();
  },
  beforeUnmount() { 
    if (this.scrollObserver) this.scrollObserver.disconnect();
  },
  methods: {
    initScrollAnimations() {
      const els = this.$el.querySelectorAll('.animate-on-scroll');
      this.scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            this.scrollObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      els.forEach(el => this.scrollObserver.observe(el));
    },
    handleSubmit() {
      // Logic for submitting the form goes here
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
        this.formData = { name: '', email: '', phone: '', message: '' };
      }, 4000);
    }
  }
}
</script>

<style scoped>
.contact-page { width: 100%; }

/* UTILS */
.text-accent { color: var(--sun); }
.text-center { text-align: center; }
.position-relative { position: relative; }
.z-10 { z-index: 10; }

/* ===== HERO ===== */
.contact-hero {
  position: relative;
  padding: 8rem 0 4rem;
  overflow: hidden;
}
.contact-hero-bg {
  position: absolute; inset: 0;
  background-image: url('https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?w=1920&q=80');
  background-size: cover; 
  background-position: center;
}
.contact-hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(15,42,74,0.95), rgba(15,42,74,0.85));
}
.contact-hero-inner { max-width: 620px; margin: 0 auto; }
.animate-hero {
  opacity: 0; 
  transform: translateY(25px);
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.contact-hero h1 { 
  font-size: clamp(2.5rem, 5vw, 3.5rem); 
  color: var(--white); 
  margin-bottom: 1rem; 
}
.contact-hero p { 
  font-size: 1.15rem; 
  color: rgba(255, 255, 255, 0.85); 
  line-height: 1.7; 
}

/* ===== CONTACT MAIN ===== */
.contact-main {
  padding: 6rem 0;
  background: var(--off-white);
}
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: flex-start;
}
@media (max-width: 900px) {
  .contact-layout { grid-template-columns: 1fr; gap: 3rem; }
}

/* Left: Info */
.contact-info .section-title {
  margin-bottom: 0.5rem;
  color: var(--navy);
}
.info-desc {
  color: var(--gray-dark);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.info-card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.5rem;
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.info-card:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow);
}
.info-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(37, 116, 181, 0.1), rgba(37, 116, 181, 0.03));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.info-icon i {
  font-size: 1.35rem;
  color: var(--blue);
}
.info-content h3 {
  font-size: 1.15rem;
  color: var(--navy);
  margin-bottom: 0.4rem;
}
.info-content p {
  color: var(--gray-dark);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}
.info-content a {
  color: var(--gray-dark);
  transition: color 0.3s;
}
.info-content a:hover {
  color: var(--sun);
}

/* Right: Form */
.contact-form-wrapper {
  background: var(--white);
  padding: 3rem;
  border-radius: var(--radius-xl);
  box-shadow: 0 10px 40px rgba(15, 42, 74, 0.05);
  border: 1px solid rgba(15, 42, 74, 0.05);
}
@media (max-width: 600px) {
  .contact-form-wrapper { padding: 2rem 1.5rem; }
}

.contact-form h3 {
  font-size: 1.75rem;
  color: var(--navy);
  margin-bottom: 0.25rem;
}
.form-sub {
  color: var(--gray-dark);
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.success-message {
  padding: 1rem 1.5rem;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: var(--radius);
  color: var(--green);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.full-width {
  grid-column: 1 / -1;
}
@media (max-width: 600px) {
  .form-grid { grid-template-columns: 1fr; }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--navy);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.9rem 1rem;
  font-family: inherit;
  font-size: 0.95rem;
  color: var(--navy);
  background: var(--off-white);
  border: 1px solid transparent;
  border-radius: var(--radius);
  transition: all 0.3s ease;
}
.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(15, 42, 74, 0.3);
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  background: var(--white);
  border-color: rgba(37, 116, 181, 0.4);
  box-shadow: 0 0 0 4px rgba(37, 116, 181, 0.1);
}
.form-group textarea {
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  font-size: 1.05rem;
  border-radius: var(--radius);
}

/* ===== MAP ===== */
.map-section {
  width: 100%;
  height: 450px;
  background: var(--off-white);
}
.map-wrapper {
  width: 100%;
  height: 100%;
}
.map-wrapper iframe {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
