<template>
  <div class="contact-page">
    <section class="contact-hero">
      <div class="container">
        <h1 class="page-title">Get Your Free Quote</h1>
        <p class="page-subtitle">Contact us today and let's discuss your solar energy needs</p>
      </div>
    </section>

    <section class="contact-section section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Get in Touch</h2>
            <p>Ready to go solar? Fill out the form or reach us directly. We're here to help you every step of the way.</p>
            <div class="contact-details">
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>Mission Road, Nadiad, Gujarat, India</p>
                </div>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📞</span>
                <div>
                  <strong>Contact</strong>
                  <p><a href="tel:+918200480623">Ronak Khristi — +91 82004 80623</a></p>
                  <p><a href="tel:+918160604745">Kalpesh Macwan — +91 81606 04745</a></p>
                </div>
              </div>
              <div class="contact-item">
                <span class="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:info@genesispoweringtomorrow.com">info@genesispoweringtomorrow.com</a></p>
                </div>
              </div>
              <div class="contact-item">
                <span class="contact-icon">🕐</span>
                <div>
                  <strong>Hours</strong>
                  <p>Mon-Sat: 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <form @submit="handleSubmit" class="contact-form">
              <div v-if="submitted" class="success-message">
                ✓ Thank you! We'll contact you within 24 hours.
              </div>
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input type="text" id="name" v-model="formData.name" required placeholder="John Doe" />
              </div>
              <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" v-model="formData.email" required placeholder="john@example.com" />
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" v-model="formData.phone" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div class="form-group">
                <label for="systemType">System Type</label>
                <select id="systemType" v-model="formData.systemType">
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="battery">Battery Storage</option>
                  <option value="ev">EV Charging</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="address">Property Address</label>
                <input type="text" id="address" v-model="formData.address" placeholder="City, State, Pincode" />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="formData.message" rows="5" placeholder="Tell us about your solar energy needs..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit Request</button>
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
        address: '',
        message: '',
        systemType: 'residential'
      }
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      console.log('Form submitted:', this.formData)
      this.submitted = true
      const self = this
      setTimeout(function () {
        self.submitted = false
        self.formData = {
          name: '',
          email: '',
          phone: '',
          address: '',
          message: '',
          systemType: 'residential'
        }
      }, 3000)
    }
  }
}
</script>

<style scoped>
.contact-page { width: 100%; }
.contact-hero { padding: 4rem 0 2rem; background: linear-gradient(180deg, var(--navy) 0%, var(--navy-light) 100%); text-align: center; }
.page-title { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem; }
.page-subtitle { font-size: 1.2rem; color: var(--gray); }
.contact-section { background: var(--navy); }
.contact-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; }
@media (min-width: 1024px) { .contact-grid { grid-template-columns: 1fr 1.5fr; } }
.contact-info h2 { font-size: 2rem; margin-bottom: 1rem; }
.contact-info > p { color: var(--gray); margin-bottom: 2rem; line-height: 1.7; }
.contact-details { display: flex; flex-direction: column; gap: 1.5rem; }
.contact-item { display: flex; gap: 1rem; align-items: flex-start; }
.contact-icon { font-size: 1.5rem; flex-shrink: 0; }
.contact-item strong { display: block; color: var(--white); margin-bottom: 0.25rem; }
.contact-item p { margin: 0; line-height: 1.6; }
.contact-item a { color: var(--sun-light); transition: color var(--transition); }
.contact-item a:hover { color: var(--sun); }
.contact-form-wrapper { background: var(--navy-light); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border); }
.contact-form { display: flex; flex-direction: column; gap: 1.5rem; }
.success-message { padding: 1rem; background: rgba(34, 197, 94, 0.2); border: 1px solid rgba(34, 197, 94, 0.5); border-radius: var(--radius); color: #86efac; text-align: center; font-weight: 500; }
.form-group { display: flex; flex-direction: column; gap: 0.5rem; }
.form-group label { color: var(--white); font-weight: 500; font-size: 0.95rem; }
.form-group input, .form-group select, .form-group textarea { padding: 0.875rem; background: var(--navy); border: 1px solid var(--border); border-radius: var(--radius); color: var(--white); font-family: inherit; font-size: 1rem; transition: border-color var(--transition); }
.form-group input:focus, .form-group select:focus, .form-group textarea:focus { outline: none; border-color: var(--sun); }
.form-group textarea { resize: vertical; min-height: 120px; }
.contact-form .btn { margin-top: 0.5rem; }
</style>
