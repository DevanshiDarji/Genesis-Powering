<template>
  <div class="about-page">

    <!-- ===== HERO ===== -->
    <section class="about-hero">
      <div class="about-hero-bg" aria-hidden="true"></div>
      <div class="about-hero-overlay"></div>
      <div class="container about-hero-inner">
        <h1 class="animate-hero">About <span class="text-accent">Genesis</span></h1>
        <p class="animate-hero" style="animation-delay: 0.3s">
          Making clean energy simple, affordable, and accessible for every home and business in Gujarat.
        </p>
      </div>
    </section>

    <!-- ===== STORY ===== -->
    <section class="story-section">
      <div class="container">
        <div class="story-layout">
          <div class="story-content animate-on-scroll">
            <h2 class="section-title">Our <span class="text-accent">Story</span></h2>
            <p>
              Genesis was founded with one mission: to make clean energy accessible. What began as a passionate team in Nadiad, Gujarat has grown into a trusted solar installation company serving <strong>500+ satisfied customers</strong> across the region.
            </p>
            <p>
              Led by <strong>Ronak Khristi</strong> and <strong>Kalpesh Macwan</strong>, we handle everything in-house — from consultation and engineering to permitting, installation, and lifetime support — ensuring quality and a seamless experience.
            </p>
            <div class="story-tags">
              <span><i class="bi bi-geo-alt-fill"></i> Nadiad, Gujarat</span>
              <span><i class="bi bi-patch-check-fill"></i> Govt-Approved Installer</span>
            </div>
          </div>
          <div class="story-image animate-on-scroll stagger-2">
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80" alt="Solar panels" />
          </div>
        </div>
      </div>
    </section>

    <!-- ===== MISSION VISION VALUES ===== -->
    <section class="values-section">
      <div class="container">
        <div class="values-grid">
          <div v-for="(v, i) in values" :key="i" class="value-card animate-on-scroll" :class="'stagger-' + (i + 1)">
            <span class="value-icon">{{ v.icon }}</span>
            <h3>{{ v.title }}</h3>
            <p>{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="about-cta">
      <div class="container cta-inner animate-on-scroll">
        <h2>Ready to Go <span class="text-accent">Solar?</span></h2>
        <button @click="$router.push('/contact')" class="btn btn-primary">
          <i class="bi bi-lightning-charge-fill" style="margin-right: 0.5rem"></i>Get a Free Quote
        </button>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      values: [
        { icon: '🌍', title: 'Our Mission', desc: 'To accelerate India\'s transition to renewable energy by delivering affordable, high-performance solar solutions.' },
        { icon: '⚡', title: 'Our Vision', desc: 'An India powered by clean energy where every rooftop contributes to a greener planet and zero electricity bills.' },
        { icon: '🤝', title: 'Our Values', desc: 'Integrity, innovation, craftsmanship, and long-term customer relationships guide every project we undertake.' }
      ]
    }
  },
  mounted() { this.initScrollAnimations() },
  beforeUnmount() { if (this.scrollObserver) this.scrollObserver.disconnect() },
  methods: {
    initScrollAnimations() {
      const els = this.$el.querySelectorAll('.animate-on-scroll')
      this.scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible')
            this.scrollObserver.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12 })
      els.forEach(el => this.scrollObserver.observe(el))
    }
  }
}
</script>

<style scoped>
.about-page { width: 100%; }
.text-accent { color: var(--sun); }

/* HERO */
.about-hero {
  position: relative;
  padding: 9rem 0 5rem;
  text-align: center;
  overflow: hidden;
}
.about-hero-bg {
  position: absolute; inset: 0;
  background-image: url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&q=80');
  background-size: cover; background-position: center;
}
.about-hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(15,42,74,0.93), rgba(15,42,74,0.82));
}
.about-hero-inner { position: relative; z-index: 2; max-width: 620px; margin: 0 auto; }
.animate-hero {
  opacity: 0; transform: translateY(25px);
  animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards;
}
.about-hero h1 { font-size: clamp(2rem, 5vw, 3rem); color: var(--white); margin-bottom: 1rem; }
.about-hero p { font-size: 1.1rem; color: rgba(255,255,255,0.75); line-height: 1.8; }

/* STORY */
.story-section { padding: 5rem 0; background: var(--white); }
.story-layout {
  display: grid; grid-template-columns: 1.2fr 1fr;
  gap: 3.5rem; align-items: center;
}
@media (max-width: 768px) { .story-layout { grid-template-columns: 1fr; } }
.story-content h2 { color: var(--navy); margin-bottom: 1rem; }
.story-content p { color: var(--gray-dark); line-height: 1.8; margin-bottom: 0.75rem; font-size: 1rem; }
.story-content strong { color: var(--navy); }
.story-tags { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.25rem; }
.story-tags span {
  display: flex; align-items: center; gap: 0.4rem;
  padding: 0.4rem 0.85rem; background: var(--off-white);
  border-radius: var(--radius); font-size: 0.85rem; color: var(--navy); font-weight: 500;
}
.story-tags i { color: var(--blue); }
.story-image img {
  width: 100%; height: 340px; object-fit: cover;
  border-radius: var(--radius-xl); box-shadow: var(--shadow);
}

/* VALUES */
.values-section { padding: 5rem 0; background: var(--off-white); }
.values-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.75rem;
}
@media (max-width: 768px) { .values-grid { grid-template-columns: 1fr; } }
.value-card {
  padding: 2rem; background: var(--white);
  border-radius: var(--radius-lg); text-align: center;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.value-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
.value-icon { font-size: 2.5rem; display: block; margin-bottom: 1rem; }
.value-card h3 { font-size: 1.15rem; color: var(--navy); margin-bottom: 0.5rem; }
.value-card p { color: var(--gray-dark); font-size: 0.93rem; line-height: 1.7; }

/* CTA */
.about-cta { padding: 4rem 0; background: var(--navy); }
.cta-inner { text-align: center; }
.cta-inner h2 { color: var(--white); font-size: clamp(1.5rem, 3vw, 2rem); margin-bottom: 1.25rem; }
</style>