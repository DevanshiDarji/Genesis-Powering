<!-- home -->
<template>
  <div class="home">
    
    <section class="hero">
      <div class="hero-bg-image" aria-hidden="true"></div>
      <div class="hero-overlay"></div>
      <div class="container hero-inner">
        <h1 class="hero-title">Solar Panel Installation<br />That Powers Your Future</h1>
        <p class="hero-tagline">Power your future with solar energy! Zero light bill is possible under PM-Surya Ghar Muft Bijli Yojna.</p>
        <div class="hero-cta">
          <button @click="goToContact" class="btn btn-primary">Get a Free Quote</button>
          <button @click="goToProjects" class="btn btn-outline">View Our Work</button>
        </div>
      </div>
    </section>


    <!--<section class="benefits-section">
      <div class="container">
        <h2 class="section-title">Why Go Solar with Genesis?</h2>
        <p class="section-subtitle">Switch to solar under PM-Surya Ghar Muft Bijli Yojna and start saving today.</p>
        <div class="benefits-box">
          <h3 class="benefits-heading">Benefits</h3>
          <ul class="benefits-list">
            <li><span class="benefit-check">✓</span> <strong>₹78,000/- National Subsidy</strong> — Govt. support under PM-Surya</li>
            <li><span class="benefit-check">✓</span> <strong>₹0/- Light Bill</strong> — Generate your own power</li>
            <li><span class="benefit-check">✓</span> <strong>Easy Loan @ 6% Interest</strong> — Simple bank financing</li>
            <li><span class="benefit-check">✓</span> <strong>30 Years Solar Panel Warranty</strong></li>
            <li><span class="benefit-check">✓</span> <strong>5 Years Free Service</strong></li>
            <li><span class="benefit-check">✓</span> <strong>Quick Installation</strong> — Hassle-free setup</li>
            <li><span class="benefit-check">✓</span> <strong>No Advance Payment</strong> — Get started with ease</li>
          </ul>
          <button @click="goToContact" class="btn btn-primary benefits-cta">More Information / Get Quote</button>
        </div>
      </div>
    </section>-->

  
    <section class="solutions-section">
      <div class="container">
        <h2 class="section-title">Our Solar Solutions</h2>
        <p class="section-subtitle">Smart choices in renewable energy for homes and businesses in India.</p>
        <div class="solutions-grid">
          <div v-for="(sol, index) in solutions" :key="index" class="solution-card" @click="goToContact">
            <div class="solution-icon-wrap">
              <span class="solution-icon">{{ sol.icon }}</span>
            </div>
            <h3>{{ sol.title }}</h3>
            <p>{{ sol.desc }}</p>
            <ul class="solution-features">
              <li v-for="(f, i) in sol.features" :key="i">{{ f }}</li>
            </ul>
            <button class="btn btn-outline">Get a Quote</button>
          </div>
        </div>
      </div>
    </section>

    
    <section class="carousel-section">
      <div class="container">
        <h2 class="section-title">Our Solar Installations</h2>
        <p class="section-subtitle">See our work transforming homes and businesses with clean energy</p>
        <ImageCarousel :images="carouselImages" :autoplay="true" :interval="5000" />
      </div>
    </section>

    <!--<section class="solar-types-section">
      <div class="container">
        <h2 class="section-title">Types of Solar Systems</h2>
        <p class="section-subtitle">Choose the right solution for your needs</p>
        <div class="solar-types-grid">
          <div v-for="(type, index) in solarTypes" :key="index" class="solar-type-card">
            <span class="type-icon">{{ type.icon }}</span>
            <h3>{{ type.title }}</h3>
            <p>{{ type.desc }}</p>
            <ul class="type-features">
              <li v-for="(feature, i) in type.features" :key="i">{{ feature }}</li>
            </ul>
            <button @click="goToContact" class="btn btn-outline">Learn More</button>
          </div>
        </div>
      </div>
    </section>-->

    
    <!--<section class="how-section how-bg">
      <div class="how-bg-image" aria-hidden="true"></div>
      <div class="how-overlay"></div>
      <div class="container how-inner">
        <h2 class="section-title">How Our Solar Installation Works</h2>
        <p class="section-subtitle">From consultation to activation — we guide you at every step.</p>
        <div class="steps">
          <article class="step">
            <span class="step-num">1</span>
            <h3>Free Consultation</h3>
            <p>We review your roof, location, and energy usage and suggest the best system size.</p>
          </article>
          <article class="step">
            <span class="step-num">2</span>
            <h3>Custom Design</h3>
            <p>Tailored design for your property with clear cost and savings projection.</p>
          </article>
          <article class="step">
            <span class="step-num">3</span>
            <h3>Professional Installation</h3>
            <p>Certified installers complete the work to high safety and quality standards.</p>
          </article>
          <article class="step">
            <span class="step-num">4</span>
            <h3>Activation & Support</h3>
            <p>We connect your system, test it, and provide ongoing monitoring and support.</p>
          </article>
        </div>
      </div>
    </section>-->

    
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title">What Our Customers Say</h2>
        <p class="section-subtitle">Real feedback from homeowners and businesses who went solar.</p>
        <div class="testimonials-grid">
          <blockquote class="testimonial">
            <p>"They took care of all the paperwork. The install was quick and simple. My house is now on solar — one small step for the planet."</p>
            <footer>— Rahul M., Vadodara</footer>
          </blockquote>
          <blockquote class="testimonial">
            <p>"Professional from start to finish. Delivered on time and on budget. We'll refer them again."</p>
            <footer>— Priya S., Nadiad</footer>
          </blockquote>
          <blockquote class="testimonial">
            <p>"One-stop approach was fast and efficient. Permits, discom — everything handled. By evening we were generating electricity."</p>
            <footer>— Amit K., Ahamedabad</footer>
          </blockquote>
        </div>
      </div>
    </section>

  
    <!--<section class="faq-section">
      <div class="container faq-container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="faq-list">
          <FAQItem
            v-for="(faq, i) in faqs"
            :key="i"
            :question="faq.q"
            :answer="faq.a"
            :is-open="faqOpen === i"
            @toggle="() => toggleFaq(i)"
          />
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2 class="section-title">Ready to Go Solar?</h2>
        <p class="section-subtitle">Get a free quote and see how much you can save.</p>
        <div class="cta-box">
          <button @click="goToContact" class="btn btn-primary cta-btn">Get Your Free Quote</button>
          <p class="cta-note">Contact us: <a href="tel:+918200480623">Ronak Khristi +91 82004 80623</a> | <a href="tel:+918160604745">Kalpesh Macwan +91 81606 04745</a></p>
        </div>
      </div>
    </section>-->
  </div>
</template>

<script>
import ImageCarousel from '../components/ImageCarousel.vue'
import FAQItem from '../components/FAQItem.vue'

export default {
  name: 'Home',
  components: {
    ImageCarousel,
    FAQItem
  },
  data() {
    return {
      faqOpen: 0,
      solutions: [
        {
          icon: '🏢',
          title: 'Commercial Solar',
          desc: 'Solar panel installation for businesses, offices, and industries. Lower operating costs and meet sustainability goals.',
          features: ['Rooftop & ground-mount', 'Custom design', 'Net metering', 'Monitoring']
        },
        {
          icon: '🏠',
          title: 'Residential Solar',
          desc: 'Solar solutions for homes. Reduce electricity bills and add long-term value to your property.',
          features: ['On-grid & hybrid', 'Subsidy support', '25-year warranty', 'Free consultation']
        },
        {
          icon: '⚡',
          title: 'EV Charging',
          desc: 'EV charging solutions that pair with your solar system for cleaner, cheaper charging.',
          features: ['AC & DC chargers', 'Solar integration', 'Smart scheduling']
        },
        {
          icon: '🔋',
          title: 'Battery Storage',
          desc: 'Store excess solar energy for use at night or during power cuts. More independence from the grid.',
          features: ['Backup power', 'Peak shaving', 'Modular capacity']
        }
      ],
      carouselImages: [
      {
        url: "src/assets/projects/solar1.jpg",
        alt: "Modern house with rooftop solar panels",
        title: "Residential Solar",
        description: "Custom solar systems designed for your home"
      },
      {
        url: "src/assets/projects/solar2.jpg",
        alt: "Residential building with solar installation",
        title: "Residential Solar Power",
        description: "Scalable energy solutions for businesses"
      },
      {
        url: "src/assets/projects/solar3.jpg",
        alt: "Commercial building with solar installation",
        title: "Commercial Solar Power",
        description: "Scalable energy solutions for businesses"
      },
      {
        url: "src/assets/projects/solar4.jpg",
        alt: "Commercial building with solar installation",
        title: "Commercial Solar Power",
        description: "Scalable energy solutions for businesses"
      },
      {
        url: "@/assets/projects/solar5.jpg",
        alt: "Commercial building with solar installation",
        title: "Commercial Solar Power",
        description: "Scalable energy solutions for businesses"
      },

    ],
      solarTypes: [
        { icon: '🏠', title: 'Residential Solar', desc: 'Perfect for homes. Reduce bills and increase property value.', features: ['Net Metering', 'Subsidy guidance', '25-Year Warranty'] },
        { icon: '🏢', title: 'Commercial Solar', desc: 'For businesses, warehouses, and industries.', features: ['Tax benefits', 'ROI tracking', 'Maintenance'] },
        { icon: '🔋', title: 'Battery Storage', desc: 'Store excess energy for backup and peak use.', features: ['24/7 backup', 'Smart management'] },
        { icon: '⚡', title: 'EV Charging', desc: 'Charge your EV with solar energy.', features: ['Fast charging', 'Solar integration'] },
        { icon: '🌐', title: 'Off-Grid', desc: 'Energy independence for remote locations.', features: ['No grid needed', 'Reliable power'] },
        { icon: '☀️', title: 'Hybrid', desc: 'Solar + grid for maximum flexibility.', features: ['Best of both', 'Optimized savings'] }
      ],
      faqs: [
        { q: 'What is the cost of solar panel installation?', a: 'Cost depends on system size (kW), roof type, and location. We give a transparent quote after a free site visit. Subsidies and financing can reduce upfront cost.' },
        { q: 'How long does installation take?', a: 'Most residential projects are completed in 3–7 days after approval. We handle discom approval and paperwork to keep timelines smooth.' },
        { q: 'What warranty do you offer?', a: 'We use panels with up to 25-year performance warranty. Workmanship is also covered so your investment is protected.' },
        { q: 'Do you handle discom and paperwork?', a: 'Yes. We manage applications, net meter, and grid connection so you don’t have to run around.' }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.faqOpen = this.faqOpen === index ? -1 : index
    },
    goToContact() {
      this.$router.push('/contact')
    },
    goToProjects() {
      this.$router.push('/projects')
    }
  }
}
</script>

<style scoped>
.home { width: 100%; }

/* Hero with background image */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 4rem 0;
  overflow: hidden;
}
.hero-bg-image {
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(12, 25, 41, 0.92) 0%, rgba(12, 25, 41, 0.75) 100%);
}
.hero-inner { position: relative; z-index: 2; }
.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1.25rem;
  color: var(--white);
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.hero-tagline {
  font-size: 1.1rem;
  color: var(--gray);
  max-width: 520px;
  margin-bottom: 2rem;
}
.hero-cta { display: flex; flex-wrap: wrap; gap: 1rem; }

/* Benefits section - solar plan */
.benefits-section {
  padding: 5rem 0;
  background: var(--navy-light);
}
.benefits-box {
  max-width: 640px;
  margin: 2rem auto 0;
  padding: 2.5rem;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(232, 163, 23, 0.12) 100%);
  border: 2px solid rgba(34, 197, 94, 0.4);
  border-radius: var(--radius-lg);
  text-align: left;
}
.benefits-heading {
  font-size: 1.5rem;
  color: var(--sun);
  margin-bottom: 1.5rem;
  text-align: center;
}
.benefits-list {
  list-style: none;
  margin-bottom: 2rem;
}
.benefits-list li {
  padding: 0.6rem 0;
  color: var(--white);
  font-size: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}
.benefit-check {
  color: #22c55e;
  font-weight: 700;
  flex-shrink: 0;
}
.benefits-cta {
  display: block;
  margin: 0 auto;
}

/* Solar Solutions grid */
.solutions-section {
  padding: 5rem 0;
  background: var(--navy);
}
.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}
.solution-card {
  padding: 2rem;
  background: var(--navy-light);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.solution-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.3);
  border-color: rgba(232, 163, 23, 0.4);
}
.solution-icon-wrap { margin-bottom: 1rem; }
.solution-icon { font-size: 3rem; display: inline-block; }
.solution-card h3 { font-size: 1.35rem; margin-bottom: 0.75rem; }
.solution-card > p { color: var(--gray); font-size: 0.95rem; margin-bottom: 1.25rem; line-height: 1.5; }
.solution-features {
  list-style: none;
  margin-bottom: 1.5rem;
  text-align: left;
}
.solution-features li {
  padding: 0.4rem 0;
  color: var(--gray);
  font-size: 0.9rem;
  padding-left: 1.25rem;
  position: relative;
}
.solution-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--sun);
  font-weight: 700;
}

.carousel-section { padding: 5rem 0; background: var(--navy-light); }
.solar-types-section { padding: 5rem 0; background: var(--navy-light); }
.solar-types-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 3rem; }
.solar-type-card {
  padding: 2rem;
  background: var(--navy);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  text-align: center;
  transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
}
.solar-type-card:hover {
  transform: translateY(-6px);
  border-color: rgba(232, 163, 23, 0.3);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}
.type-icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
.solar-type-card h3 { font-size: 1.25rem; margin-bottom: 0.75rem; }
.solar-type-card > p { color: var(--gray); margin-bottom: 1.5rem; font-size: 0.95rem; }
.type-features { list-style: none; margin-bottom: 1.5rem; text-align: left; }
.type-features li { padding: 0.5rem 0; color: var(--gray); font-size: 0.9rem; position: relative; padding-left: 1.5rem; }
.type-features li::before { content: '✓'; position: absolute; left: 0; color: var(--sun); font-weight: 700; }

/* How section with subtle background image */
.how-section { padding: 5rem 0; position: relative; overflow: hidden; }
.how-bg-image {
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&q=60');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.how-overlay {
  position: absolute;
  inset: 0;
  background: rgba(12, 25, 41, 0.9);
}
.how-inner { position: relative; z-index: 2; }
.how-inner .section-title { color: var(--white); }
.how-inner .section-subtitle { color: var(--gray); }
.steps { display: grid; gap: 2rem; margin-top: 3rem; }
@media (min-width: 640px) { .steps { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .steps { grid-template-columns: repeat(4, 1fr); } }
.step {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: border-color var(--transition), box-shadow var(--transition);
}
.step:hover { border-color: rgba(232, 163, 23, 0.3); box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2); }
.step-num {
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  background: var(--sun);
  color: var(--navy);
  font-weight: 700;
  font-size: 1rem;
  border-radius: 50%;
  margin-bottom: 1rem;
}
.step h3 { font-size: 1.2rem; margin-bottom: 0.5rem; }
.step p { color: var(--gray); font-size: 0.95rem; line-height: 1.6; }

.testimonials-section { padding: 5rem 0; background: var(--navy-light); }
.testimonials-grid { display: grid; gap: 2rem; margin-top: 3rem; }
@media (min-width: 768px) { .testimonials-grid { grid-template-columns: repeat(3, 1fr); } }
.testimonial { padding: 2rem; background: rgba(255, 255, 255, 0.03); border-left: 4px solid var(--sun); border-radius: var(--radius); }
.testimonial p { color: var(--off-white); font-size: 1rem; line-height: 1.7; margin-bottom: 1rem; }
.testimonial footer { color: var(--gray); font-size: 0.9rem; }

.faq-section { padding: 5rem 0; background: var(--navy); }
.faq-container { max-width: 720px; }
.faq-list { margin-top: 2rem; }

.cta-section { padding: 5rem 0; background: linear-gradient(180deg, var(--navy-light) 0%, var(--navy) 100%); }
.cta-box { margin-top: 2rem; text-align: center; }
.cta-btn { font-size: 1.1rem; padding: 1rem 2rem; }
.cta-note { margin-top: 1rem; color: var(--gray); font-size: 0.95rem; }
.cta-note a { color: var(--sun-light); text-decoration: underline; }
</style>
