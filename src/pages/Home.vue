<!-- home -->
<template>
  <div class="home">
    <!-- ===== HERO SECTION ===== -->
    <section class="hero">
      <div class="hero-bg-image" aria-hidden="true"></div>
      <div class="hero-overlay"></div>
      <!-- Floating particles -->
      <div class="hero-particles" aria-hidden="true">
        <span v-for="n in 15" :key="n" class="particle"
          :style="{
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 8 + 's',
            animationDuration: (8 + Math.random() * 10) + 's',
            width: (2 + Math.random() * 3) + 'px',
            height: (2 + Math.random() * 3) + 'px',
            opacity: 0.15 + Math.random() * 0.35
          }"
        ></span>
      </div>
      <div class="container hero-inner">
        <div class="hero-badge animate-hero" style="animation-delay: 0.2s">
          <span class="badge-dot"></span>
          PM-Surya Ghar Muft Bijli Yojna
        </div>
        <h1 class="hero-title animate-hero" style="animation-delay: 0.4s">
          Solar Panel Installation<br />That <span class="hero-highlight">Powers Your Future</span>
        </h1>
        <p class="hero-tagline animate-hero" style="animation-delay: 0.6s">
          Power your future with solar energy! Zero light bill is possible. Get ₹78,000 national subsidy, easy loan at 6% interest, and 30-year panel warranty.
        </p>
        <div class="hero-cta animate-hero" style="animation-delay: 0.8s">
          <button @click="goToContact" class="btn btn-primary btn-lg">
            <i class="bi bi-lightning-charge-fill" style="margin-right: 0.5rem"></i>Get a Free Quote
          </button>
        <!--  <button @click="goToProjects" class="btn btn-outline">
            <i class="bi bi-play-circle" style="margin-right: 0.5rem"></i>View Our Work
          </button>-->
        </div>
      </div>
      <!-- Scroll indicator -->
      <div class="scroll-indicator animate-hero" style="animation-delay: 1.2s">
        <div class="scroll-mouse">
          <div class="scroll-dot"></div>
        </div>
      </div>
    </section>

    <!-- ===== STATS BAR ===== -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div v-for="(stat, index) in stats" :key="index"
               class="stat-card animate-on-scroll"
               :class="'stagger-' + (index + 1)">
            <div class="stat-icon-wrap">
              <i :class="stat.icon" class="stat-bi-icon"></i>
            </div>
            <div class="stat-number">
              <span class="stat-value">{{ animatedStats[index] }}</span>
              <span class="stat-suffix">{{ stat.suffix }}</span>
            </div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== WHY GO SOLAR WITH GENESIS ===== -->
    <section class="benefits-section">
      <div class="container">
        <h2 class="section-title text-center animate-on-scroll">Why Go Solar with <span class="text-accent">Genesis?</span></h2>
        <p class="section-subtitle text-center animate-on-scroll" style="max-width: 650px; margin: 0 auto 3rem;">
          We combine cutting-edge technology with intelligent design to deliver a superior, hassle-free solar experience.
        </p>
        <div class="gb-grid">
          <div v-for="(b, i) in genesisBenefits" :key="i" class="gb-card animate-on-scroll" :class="'stagger-' + (i + 1)">
            <div class="gb-icon-wrap">
              <i class="bi" :class="b.icon"></i>
            </div>
            <h3 class="gb-title">{{ b.title }}</h3>
            <p class="gb-desc">{{ b.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SOLUTIONS SECTION ===== -->
    <section class="solutions-section">
      <div class="container">
        <div class="solutions-header">
          <h2 class="section-title text-white animate-on-scroll">Our Solar Solutions</h2>
          <p class="section-subtitle text-light animate-on-scroll">Smart choices in renewable energy for homes and businesses in India.</p>
        </div>
        <div class="solutions-grid">
          <div v-for="(sol, index) in solutions" :key="index"
               class="solution-card animate-on-scroll"
               :class="'stagger-' + (index + 1)"
               @click="goToContact">
            <div class="solution-icon-wrap">
              <span class="solution-icon">{{ sol.icon }}</span>
            </div>
            <h3>{{ sol.title }}</h3>
            <p>{{ sol.desc }}</p>
            <ul class="solution-features">
              <li v-for="(f, i) in sol.features" :key="i">{{ f }}</li>
            </ul>
            <button class="btn btn-outline-blue btn-sm">Get a Quote <i class="bi bi-arrow-right" style="margin-left: 0.35rem"></i></button>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== HOW IT WORKS ===== -->
    <section class="steps-section">
      <div class="container">
        <h2 class="section-title text-center animate-on-scroll">How It <span class="text-accent">Works</span></h2>
        <p class="section-subtitle text-center animate-on-scroll" style="max-width: 600px; margin: 0 auto 3rem;">From consultation to activation — we guide you at every step.</p>
        <div class="steps-grid">
          <div v-for="(step, index) in steps" :key="index"
               class="step-card animate-on-scroll"
               :class="'stagger-' + (index + 1)">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-icon">{{ step.icon }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CAROUSEL SECTION ===== -->
    <section class="carousel-section">
      <div class="container">
        <h2 class="section-title text-white animate-on-scroll">Our Solar Installations</h2>
        <p class="section-subtitle text-light animate-on-scroll">See our work transforming homes and businesses with clean energy</p>
        <div class="animate-on-scroll">
          <ImageCarousel :images="carouselImages" :autoplay="true" :interval="5000" />
        </div>
      </div>
    </section>

    <!-- ===== TESTIMONIALS SECTION ===== -->
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title text-center animate-on-scroll">What Our <span class="text-accent">Customers</span> Say</h2>
        <p class="section-subtitle text-center animate-on-scroll">Real feedback from homeowners and businesses who went solar.</p>
        <div class="testimonials-grid">
          <blockquote v-for="(t, index) in testimonials" :key="index"
                      class="testimonial animate-on-scroll"
                      :class="'stagger-' + (index + 1)">
            <div class="testimonial-stars">★★★★★</div>
            <p>"{{ t.text }}"</p>
            <footer>
              <div class="testimonial-avatar">{{ t.initials }}</div>
              <div>
                <strong>{{ t.name }}</strong>
                <span>{{ t.location }}</span>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import ImageCarousel from '../components/ImageCarousel.vue'
import solar1 from '../assets/projects/solar1.jpg'
import solar2 from '../assets/projects/solar2.jpg'
import solar3 from '../assets/projects/solar3.jpg'
import solar4 from '../assets/projects/solar4.jpg'
import solar5 from '../assets/projects/solar5.jpg'

export default {
  name: 'Home',
  components: {
    ImageCarousel
  },
  data() {
    return {
      statsAnimated: false,
      animatedStats: [0, 0, 0, 0],
      stats: [
        { icon: 'bi bi-sun-fill', value: 500, suffix: '+', label: 'Projects Completed' },
        { icon: 'bi bi-lightning-charge-fill', value: 2, suffix: 'MW+', label: 'Clean Energy' },
        { icon: 'bi bi-emoji-smile-fill', value: 300, suffix: '+', label: 'Happy Customers' },
        { icon: 'bi bi-shield-check', value: 5, suffix: 'Yrs', label: 'Free Service' }
      ],
      genesisBenefits: [
        { icon: 'bi-shield-check', title: 'Unmatched Reliability', desc: 'Built to withstand extreme weather, backed by a 25-year performance warranty and our commitment to excellence.' },
        { icon: 'bi-award', title: 'Industry Expertise', desc: 'Our advanced photovoltaic panels capture more sunlight and convert it more efficiently, maximizing your energy production.' },
        { icon: 'bi-headset', title: 'Dedicated Support', desc: 'From initial consultation to real-time smart app monitoring and post-installation service, we are here for the life of your system.' },
        { icon: 'bi-tools', title: 'Quality Installation', desc: 'Our certified installers manage everything in-house, ensuring a streamlined, fast, and high-quality setup without the hassle.' },
        { icon: 'bi-graph-up-arrow', title: 'Long-Term Savings', desc: 'Lower installation costs, faster ROI, and zero light bills. We make your transition to solar financially rewarding.' },
        { icon: 'bi-sun', title: 'Eco-Friendly Future', desc: 'Invest in a complete energy solution that reduces your carbon footprint significantly while bringing sustainability to your home.' }
      ],
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
      steps: [
        { icon: '📋', title: 'Free Consultation', desc: 'We review your roof, location, and energy usage and suggest the best system size.' },
        { icon: '✏️', title: 'Custom Design', desc: 'Tailored design for your property with clear cost and savings projection.' },
        { icon: '🔧', title: 'Professional Installation', desc: 'Certified installers complete the work to high safety and quality standards.' },
        { icon: '✅', title: 'Activation & Support', desc: 'We connect, test, and provide ongoing monitoring and support.' }
      ],
      carouselImages: [
        { url: solar1, alt: "Modern house with rooftop solar panels", title: "Residential Solar", description: "Custom solar systems designed for your home" },
        { url: solar2, alt: "Residential building with solar installation", title: "Residential Solar Power", description: "Scalable energy solutions for businesses" },
        { url: solar3, alt: "Commercial building with solar installation", title: "Commercial Solar Power", description: "Scalable energy solutions for businesses" },
        { url: solar4, alt: "Commercial building with solar installation", title: "Commercial Solar Power", description: "Scalable energy solutions for businesses" },
        { url: solar5, alt: "Commercial building with solar installation", title: "Commercial Solar Power", description: "Scalable energy solutions for businesses" }
      ],
      testimonials: [
        {
          text: 'They took care of all the paperwork. The install was quick and simple. My house is now on solar — one small step for the planet.',
          name: 'Rahul M.',
          location: 'Vadodara',
          initials: 'RM'
        },
        {
          text: 'Professional from start to finish. Delivered on time and on budget. We\'ll refer them again.',
          name: 'Dilip S.',
          location: 'Nadiad',
          initials: 'DS'
        },
        {
          text: 'One-stop approach was fast and efficient. Permits, discom — everything handled. By evening we were generating electricity.',
          name: 'Amit K.',
          location: 'Ahamedabad',
          initials: 'AK'
        }
      ]
    }
  },
  mounted() {
    this.initScrollAnimations()
  },
  beforeUnmount() {
    if (this.scrollObserver) this.scrollObserver.disconnect()
  },
  methods: {
    goToContact() { this.$router.push('/contact') },
    goToProjects() { this.$router.push('/projects') },
    initScrollAnimations() {
      const animateElements = this.$el.querySelectorAll('.animate-on-scroll')
      this.scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible')
            if (entry.target.closest('.stat-card') && !this.statsAnimated) {
              this.statsAnimated = true
              this.animateCounters()
            }
            this.scrollObserver.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
      animateElements.forEach(el => this.scrollObserver.observe(el))
    },
    animateCounters() {
      this.stats.forEach((stat, index) => {
        const target = stat.value
        const duration = 2000
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) { current = target; clearInterval(timer) }
          this.animatedStats[index] = Math.round(current)
          this.animatedStats = [...this.animatedStats]
        }, duration / steps)
      })
    }
  }
}
</script>

<style scoped>
.home { width: 100%; }

/* ===== TEXT UTILITIES ===== */
.text-white { color: var(--white); }
.text-light { color: rgba(255,255,255,0.7); }
.text-accent { color: var(--sun); }
.text-center { text-align: center; }

/* ===== HERO ===== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0 4rem;
  overflow: hidden;
  background: var(--navy);
}
.hero-bg-image {
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80');
  background-size: cover;
  background-position: center;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(15, 42, 74, 0.93) 0%, rgba(15, 42, 74, 0.78) 100%);
}
.hero-inner { position: relative; z-index: 2; }

.animate-hero {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: rgba(59, 170, 53, 0.15);
  border: 1px solid rgba(59, 170, 53, 0.35);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--green-light);
  margin-bottom: 1.5rem;
}
.badge-dot {
  width: 8px; height: 8px;
  background: var(--green);
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(59, 170, 53, 0.6);
  animation: float 2s ease-in-out infinite;
}

.hero-title {
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  margin-bottom: 1.25rem;
  color: var(--white);
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}
.hero-highlight {
  background: linear-gradient(135deg, var(--sun) 0%, var(--sun-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-tagline {
  font-size: 1.15rem;
  color: rgba(255,255,255,0.75);
  max-width: 580px;
  margin-bottom: 2.25rem;
  line-height: 1.8;
}
.hero-cta { display: flex; flex-wrap: wrap; gap: 1rem; }
.btn-lg { padding: 1rem 2rem; font-size: 1.05rem; }

/* Floating particles */
.hero-particles {
  position: absolute;
  inset: 0; z-index: 1;
  overflow: hidden;
  pointer-events: none;
}
.particle {
  position: absolute;
  bottom: -10px;
  background: var(--sun);
  border-radius: 50%;
  animation: particleDrift linear infinite;
}

/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
.scroll-mouse {
  width: 24px; height: 38px;
  border: 2px solid rgba(255,255,255,0.4);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}
.scroll-dot {
  width: 4px; height: 8px;
  background: var(--sun);
  border-radius: 4px;
  animation: float 2s ease-in-out infinite;
}

/* ===== STATS ===== */
.stats-section {
  padding: 0;
  position: relative;
  z-index: 3;
  margin-top: -3.5rem;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  background: var(--white);
  border-radius: var(--radius-xl);
  box-shadow: 0 20px 60px rgba(15, 42, 74, 0.15);
  overflow: hidden;
}
.stat-card {
  text-align: center;
  padding: 2.25rem 1.5rem;
  border-right: 1px solid var(--off-white);
  transition: background 0.3s ease;
}
.stat-card:last-child { border-right: none; }
.stat-card:hover { background: var(--off-white); }

.stat-icon-wrap {
  width: 52px; height: 52px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(37, 116, 181, 0.1), rgba(37, 116, 181, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
}
.stat-bi-icon {
  font-size: 1.4rem;
  color: var(--blue);
}
.stat-number {
  font-family: 'Fraunces', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--navy);
  line-height: 1;
  margin-bottom: 0.35rem;
}
.stat-suffix { font-size: 1.5rem; color: var(--sun); }
.stat-label {
  color: var(--gray-dark);
  font-size: 0.9rem;
  font-weight: 500;
}

/* ===== WHY GO SOLAR WITH GENESIS ===== */
.benefits-section {
  padding: 6rem 0;
  background: var(--off-white);
}
.gb-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.gb-card {
  background: var(--white);
  padding: 2.5rem 2rem;
  border-radius: var(--radius-xl);
  text-align: center;
  box-shadow: 0 4px 15px rgba(15, 42, 74, 0.03);
  border: 1px solid rgba(15, 42, 74, 0.05);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
}
.gb-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(15, 42, 74, 0.08);
}
.gb-icon-wrap {
  width: 76px; height: 76px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(37, 116, 181, 0.1), rgba(37, 116, 181, 0.03));
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease, background 0.4s ease;
}
.gb-card:hover .gb-icon-wrap {
  transform: scale(1.05);
  background: linear-gradient(135deg, rgba(247, 147, 30, 0.15), rgba(247, 147, 30, 0.05));
}
.gb-icon-wrap i {
  font-size: 2rem;
  color: var(--blue);
  transition: color 0.4s ease;
}
.gb-card:hover .gb-icon-wrap i {
  color: var(--sun);
}
.gb-title {
  color: var(--navy);
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
}
.gb-desc {
  color: var(--gray-dark);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* ===== SOLUTIONS ===== */
.solutions-section {
  padding: 6rem 0;
  background: var(--navy);
  position: relative;
}
.solutions-header { margin-bottom: 3rem; }
.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.75rem;
}
.solution-card {
  padding: 2rem;
  background: var(--white);
  border: none;
  border-radius: var(--radius-lg);
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
}
.solution-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(15, 42, 74, 0.18);
}
.solution-icon-wrap {
  width: 72px; height: 72px;
  margin: 0 auto 1.25rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(37, 116, 181, 0.12), rgba(37, 116, 181, 0.04));
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s ease;
}
.solution-card:hover .solution-icon-wrap {
  transform: scale(1.1) rotate(5deg);
}
.solution-icon { font-size: 2.5rem; display: inline-block; }
.solution-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: var(--navy);
  transition: color 0.3s;
}
.solution-card:hover h3 { color: var(--blue); }
.solution-card > p {
  color: var(--gray-dark);
  font-size: 0.93rem;
  margin-bottom: 1.25rem;
  line-height: 1.6;
}
.solution-features {
  list-style: none;
  margin-bottom: 1.5rem;
  text-align: left;
}
.solution-features li {
  padding: 0.35rem 0;
  color: var(--gray-dark);
  font-size: 0.88rem;
  padding-left: 1.25rem;
  position: relative;
}
.solution-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--green);
  font-weight: 700;
}
.btn-sm { padding: 0.6rem 1.25rem; font-size: 0.9rem; }

/* ===== HOW IT WORKS ===== */
.steps-section {
  padding: 6rem 0;
  background: var(--off-white);
}
.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
@media (max-width: 768px) {
  .steps-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .steps-grid { grid-template-columns: 1fr; }
}
.step-card {
  text-align: center;
  padding: 2rem 1.5rem;
  background: var(--white);
  border-radius: var(--radius-lg);
  position: relative;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.step-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
}
.step-number {
  position: absolute;
  top: -14px; left: 50%;
  transform: translateX(-50%);
  width: 32px; height: 32px;
  background: linear-gradient(135deg, var(--blue), var(--blue-dark));
  color: var(--white);
  font-weight: 700;
  font-size: 0.85rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(37, 116, 181, 0.35);
}
.step-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.step-card h3 {
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  color: var(--navy);
}
.step-card p {
  color: var(--gray-dark);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* ===== CAROUSEL ===== */
.carousel-section {
  padding: 6rem 0;
  background: var(--navy-light);
}

/* ===== TESTIMONIALS ===== */
.testimonials-section {
  padding: 6rem 0;
  background: var(--white);
}
.testimonials-grid { display: grid; gap: 2rem; margin-top: 3rem; }
@media (min-width: 768px) { .testimonials-grid { grid-template-columns: repeat(3, 1fr); } }

.testimonial {
  padding: 2rem;
  background: var(--off-white);
  border: none;
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--blue);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
}
.testimonial:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}
.testimonial-stars {
  color: var(--sun);
  font-size: 1.1rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
}
.testimonial p {
  color: var(--gray-dark);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.25rem;
  font-style: italic;
}
.testimonial footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.testimonial-avatar {
  width: 42px; height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue), var(--blue-dark));
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
}
.testimonial footer strong {
  display: block;
  font-size: 0.95rem;
  color: var(--navy);
}
.testimonial footer span {
  font-size: 0.8rem;
  color: var(--gray-dark);
}

/* ===== CTA ===== */
.cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
}
.cta-inner {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}
.cta-title {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  color: var(--white);
  margin-bottom: 0.75rem;
}
.cta-subtitle {
  color: rgba(255,255,255,0.7);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}
.cta-buttons {
  margin-bottom: 1.5rem;
}
.cta-contacts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}
.cta-phone {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255,255,255,0.75);
  font-size: 0.95rem;
  transition: color 0.3s;
}
.cta-phone:hover { color: var(--sun-light); }
.cta-phone i { color: var(--green); }

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .stat-card { border-right: none; border-bottom: 1px solid var(--off-white); }
  .stat-card:nth-child(odd) { border-right: 1px solid var(--off-white); }
  .stat-card:nth-last-child(-n+2) { border-bottom: none; }
  .scroll-indicator { display: none; }
  .stat-number { font-size: 2rem; }
}
@media (max-width: 480px) {
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .stats-section { margin-top: -2rem; }
}
</style>
