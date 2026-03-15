<template>
  <div class="pricing-page">

    <!-- ===== HERO ===== -->
    <section class="pricing-hero">
      <div class="pricing-hero-bg" aria-hidden="true"></div>
      <div class="pricing-hero-overlay"></div>
      <div class="container pricing-hero-inner">
        <h1 class="animate-hero">Solar <span class="text-accent">Pricing</span></h1>
        <p class="animate-hero" style="animation-delay: 0.3s">Transparent pricing for residential and commercial solar installations under PM-Surya Ghar Muft Bijli Yojna.</p>
      </div>
    </section>

    <!-- ===== BENEFITS BAR ===== -->
    <section class="benefits-bar">
      <div class="container">
        <div class="benefits-row animate-on-scroll">
          <span v-for="(b, i) in topBenefits" :key="i" class="benefit-pill">
            <i class="bi bi-check-circle-fill"></i> {{ b }}
          </span>
        </div>
      </div>
    </section>

    <!-- ===== PACKAGES ===== -->
    <section class="packages-section">
      <div class="container">
        <h2 class="section-title text-center animate-on-scroll">Our Solar <span class="text-accent">Packages</span></h2>
        <p class="section-subtitle text-center animate-on-scroll" style="max-width:560px; margin:0 auto 3rem;">Choose the right system size for your home or business. All packages include installation, warranty, and subsidy support.</p>

        <div class="packages-grid">
          <div v-for="(pkg, index) in packages" :key="index"
               class="package-card animate-on-scroll"
               :class="[{ popular: pkg.popular }, 'stagger-' + (index + 1)]">
            <div v-if="pkg.popular" class="popular-badge">Most Popular</div>
            <h3 class="pkg-name">{{ pkg.name }}</h3>
            <p class="pkg-panels">{{ pkg.panels }}</p>

            <div class="pkg-specs">
              <div class="spec-row" v-for="(spec, si) in pkg.specs" :key="si">
                <span class="spec-label">{{ spec.label }}</span>
                <span class="spec-value">{{ spec.value }}</span>
              </div>
            </div>

            <div class="pkg-pricing">
              <div class="price-row">
                <span>Total Cost</span>
                <strong class="price-main">{{ pkg.cost }}</strong>
              </div>
              <div class="price-row highlight">
                <span>After Subsidy</span>
                <strong class="price-after">{{ pkg.afterSubsidy }}</strong>
              </div>
            </div>

            <div class="pkg-savings">
              <i class="bi bi-piggy-bank"></i>
              <span>Savings: <strong>{{ pkg.savings }}</strong></span>
            </div>

            <button @click="goToContact" class="btn" :class="pkg.popular ? 'btn-primary' : 'btn-outline-blue'">
              Get a Free Quote
            </button>
          </div>
        </div>

        <p class="pricing-note animate-on-scroll">* Prices are estimates. Final pricing depends on roof size, location, and requirements. Loan available at 6% interest. Contact us for a custom quote.</p>
      </div>
    </section>

    <!-- ===== WHAT'S INCLUDED ===== -->
    <section class="included-section">
      <div class="container">
        <h2 class="section-title text-white text-center animate-on-scroll">What's <span class="text-accent">Included</span></h2>
        <div class="included-grid">
          <div v-for="(item, i) in included" :key="i"
               class="included-item animate-on-scroll" :class="'stagger-' + (i + 1)">
            <i :class="item.icon"></i>
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="pricing-cta">
      <div class="container cta-inner animate-on-scroll">
        <h2>Not Sure Which <span class="text-accent">Package?</span></h2>
        <p>Get in touch and we'll recommend the best system for your roof and budget — 100% free.</p>
        <button @click="goToContact" class="btn btn-primary btn-lg">
          <i class="bi bi-chat-dots" style="margin-right: 0.5rem"></i>Get a Free Consultation
        </button>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Pricing',
  data() {
    return {
      topBenefits: [
        '₹78,000 National Subsidy',
        '₹0 Light Bill',
        '30-Year Panel Warranty',
        '5 Years Free Service',
        'No Advance Payment'
      ],
      packages: [
        {
          name: 'Small System',
          panels: '3–6 Solar Panels',
          popular: false,
          specs: [
            { label: 'System Size', value: '1 – 2 kW' },
            { label: 'Roof Space', value: '100 – 200 sq ft' },
            { label: 'Annual Production', value: '1,500 – 3,000 kWh' },
            { label: 'Best For', value: '1–2 BHK homes' }
          ],
          cost: '₹70,000 – ₹1,40,000',
          afterSubsidy: '₹40,000 – ₹62,000',
          savings: '₹10,000 – ₹20,000/year'
        },
        {
          name: 'Medium System',
          panels: '6–15 Solar Panels',
          popular: true,
          specs: [
            { label: 'System Size', value: '3 – 5 kW' },
            { label: 'Roof Space', value: '300 – 500 sq ft' },
            { label: 'Annual Production', value: '4,500 – 7,500 kWh' },
            { label: 'Best For', value: '3–4 BHK homes' }
          ],
          cost: '₹1,80,000 – ₹3,00,000',
          afterSubsidy: '₹1,02,000 – ₹2,22,000',
          savings: '₹30,000 – ₹50,000/year'
        },
        {
          name: 'Large System',
          panels: '15+ Solar Panels',
          popular: false,
          specs: [
            { label: 'System Size', value: '5 – 10 kW' },
            { label: 'Roof Space', value: '500 – 1,000 sq ft' },
            { label: 'Annual Production', value: '7,500 – 15,000 kWh' },
            { label: 'Best For', value: 'Bungalows & offices' }
          ],
          cost: '₹3,00,000 – ₹6,00,000',
          afterSubsidy: '₹2,22,000 – ₹5,22,000',
          savings: '₹50,000 – ₹1,00,000/year'
        }
      ],
      included: [
        { icon: 'bi bi-tools', text: 'Professional Installation' },
        { icon: 'bi bi-file-earmark-check', text: 'DISCOM & Permit Handling' },
        { icon: 'bi bi-speedometer2', text: 'Net Metering Setup' },
        { icon: 'bi bi-shield-check', text: '30-Year Panel Warranty' },
        { icon: 'bi bi-headset', text: '5 Years Free Service' },
        { icon: 'bi bi-graph-up-arrow', text: 'Performance Monitoring' }
      ]
    }
  },
  mounted() { this.initScrollAnimations() },
  beforeUnmount() { if (this.scrollObserver) this.scrollObserver.disconnect() },
  methods: {
    goToContact() { this.$router.push('/contact') },
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
.pricing-page { width: 100%; }
.text-accent { color: var(--sun); }
.text-white { color: var(--white); }
.text-center { text-align: center; }

/* HERO */
.pricing-hero {
  position: relative;
  padding: 9rem 0 5rem;
  text-align: center;
  overflow: hidden;
}
.pricing-hero-bg {
  position: absolute; inset: 0;
  background-image: url('https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1920&q=80');
  background-size: cover; background-position: center;
}
.pricing-hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(15,42,74,0.93), rgba(15,42,74,0.82));
}
.pricing-hero-inner { position: relative; z-index: 2; max-width: 620px; margin: 0 auto; }
.animate-hero {
  opacity: 0; transform: translateY(25px);
  animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards;
}
.pricing-hero h1 { font-size: clamp(2rem, 5vw, 3rem); color: var(--white); margin-bottom: 1rem; }
.pricing-hero p { font-size: 1.1rem; color: rgba(255,255,255,0.75); line-height: 1.7; }

/* BENEFITS BAR */
.benefits-bar {
  padding: 1.25rem 0;
  background: var(--navy);
}
.benefits-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}
.benefit-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.85rem;
  background: rgba(59, 170, 53, 0.12);
  border: 1px solid rgba(59, 170, 53, 0.25);
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--green-light);
}
.benefit-pill i { font-size: 0.75rem; }

/* PACKAGES */
.packages-section { padding: 5rem 0; background: var(--white); }
.packages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}
@media (max-width: 900px) { .packages-grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto; } }

.package-card {
  position: relative;
  padding: 2rem;
  background: var(--off-white);
  border: 2px solid transparent;
  border-radius: var(--radius-xl);
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease;
}
.package-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
}
.package-card.popular {
  background: var(--white);
  border-color: var(--sun);
  box-shadow: 0 8px 30px rgba(247, 147, 30, 0.15);
}

.popular-badge {
  position: absolute;
  top: -13px; left: 50%; transform: translateX(-50%);
  background: linear-gradient(135deg, var(--sun), var(--sun-dark));
  color: var(--white);
  padding: 0.4rem 1.25rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.pkg-name {
  font-size: 1.4rem;
  color: var(--navy);
  margin-bottom: 0.25rem;
}
.pkg-panels {
  font-size: 0.9rem;
  color: var(--blue);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.pkg-specs {
  margin-bottom: 1.5rem;
  text-align: left;
}
.spec-row {
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(15,42,74,0.06);
  font-size: 0.9rem;
}
.spec-row:last-child { border-bottom: none; }
.spec-label { color: var(--gray-dark); }
.spec-value { color: var(--navy); font-weight: 600; }

.pkg-pricing {
  margin-bottom: 1rem;
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
}
.popular .pkg-pricing { background: var(--off-white); }
.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
}
.price-row span { color: var(--gray-dark); }
.price-main { color: var(--navy); font-size: 1rem; }
.price-row.highlight {
  background: rgba(59, 170, 53, 0.08);
}
.price-after { color: var(--green); font-size: 1.05rem; }

.pkg-savings {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
  font-size: 0.88rem;
  color: var(--blue);
}
.pkg-savings i { font-size: 1rem; }
.pkg-savings strong { color: var(--navy); }

.package-card .btn { width: 100%; }

.pricing-note {
  text-align: center;
  color: var(--gray-dark);
  font-size: 0.85rem;
  font-style: italic;
  margin-top: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* INCLUDED */
.included-section {
  padding: 5rem 0;
  background: var(--navy);
}
.included-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 2.5rem;
}
@media (max-width: 768px) { .included-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .included-grid { grid-template-columns: 1fr; } }
.included-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--radius);
  color: rgba(255,255,255,0.85);
  font-size: 0.93rem;
  font-weight: 500;
  transition: background 0.3s;
}
.included-item:hover { background: rgba(255,255,255,0.08); }
.included-item i { color: var(--green); font-size: 1.15rem; flex-shrink: 0; }

/* CTA */
.pricing-cta {
  padding: 5rem 0;
  background: var(--off-white);
}
.cta-inner { text-align: center; max-width: 550px; margin: 0 auto; }
.cta-inner h2 { color: var(--navy); font-size: clamp(1.5rem, 3vw, 2rem); margin-bottom: 0.75rem; }
.cta-inner p { color: var(--gray-dark); margin-bottom: 1.5rem; line-height: 1.7; }
.btn-lg { padding: 1rem 2rem; font-size: 1.05rem; }
</style>
