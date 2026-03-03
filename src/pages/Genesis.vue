<template>
  <div class="genesis-page">
    <section class="genesis-hero">
      <div class="container">
        <h1 class="page-title">Genesis Solar System</h1>
        <p class="page-subtitle">Next-generation solar technology for maximum efficiency and reliability</p>
      </div>
    </section>

    <section class="genesis-intro section">
      <div class="container">
       
        <h2>Revolutionary Solar Technology</h2>
        <br/>
            <p>The Genesis Solar System represents the pinnacle of solar panel innovation. Combining cutting-edge photovoltaic technology with intelligent design, Genesis delivers superior performance, durability, and value.</p>
            <p>Whether you're powering a home or a business, Genesis systems are engineered to maximize energy production while minimizing installation complexity. Our advanced panels capture more sunlight, convert it more efficiently, and maintain peak performance for decades.</p>
            <p>With Genesis, you're not just buying solar panels—you're investing in a complete energy solution backed by industry-leading warranties and our commitment to excellence.</p>
       
       
      </div>
    </section>

    <section class="features-section section">
      <div class="container">
        <h2 class="section-title">Why Choose Genesis?</h2>
        <div class="features-grid">
          <div v-for="(feature, index) in features" :key="index" class="feature-card">
            <span class="feature-icon">{{ feature.icon }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="specs-section section">
      <div class="container">
        <h2 class="section-title">Technical Specifications</h2>
        <div class="specs-grid">
          <div v-for="(spec, index) in specs" :key="index" class="spec-item">
            <div class="spec-label">{{ spec.label }}</div>
            <div class="spec-value">{{ spec.value }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="comparison-section section">
      <div class="container">
        <h2 class="section-title">Genesis vs. Standard Solar</h2>
        <div class="comparison-table">
          <div class="comparison-row header">
            <div class="comparison-cell">Feature</div>
            <div class="comparison-cell">Standard Solar</div>
            <div class="comparison-cell genesis">Genesis Solar</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">Efficiency</div>
            <div class="comparison-cell">18-20%</div>
            <div class="comparison-cell genesis">22.5%</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">Warranty</div>
            <div class="comparison-cell">20 years</div>
            <div class="comparison-cell genesis">25 years</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">Monitoring</div>
            <div class="comparison-cell">Basic</div>
            <div class="comparison-cell genesis">Smart App</div>
          </div>
          <div class="comparison-row">
            <div class="comparison-cell">Installation Time</div>
            <div class="comparison-cell">3-5 days</div>
            <div class="comparison-cell genesis">2-3 days</div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section section">
      <div class="container">
        <h2 class="section-title">Ready for Genesis?</h2>
        <p class="section-subtitle">Experience the future of solar energy. Get a free quote for your Genesis system today.</p>
        <div class="cta-buttons">
          <button @click="goToContact" class="btn btn-primary">Get Genesis Quote</button>
          <button @click="goToPricing" class="btn btn-outline">View Pricing</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Genesis',
  data() {
    return {
      features: [
        { icon: '⚡', title: 'High Efficiency', desc: 'Advanced photovoltaic technology delivers maximum energy output from every ray of sunlight.' },
        { icon: '🛡️', title: 'Durable Design', desc: 'Built to withstand extreme weather conditions with 25-year performance warranty.' },
        { icon: '📱', title: 'Smart Monitoring', desc: 'Real-time monitoring app lets you track energy production and savings from anywhere.' },
        { icon: '🌱', title: 'Eco-Friendly', desc: 'Zero emissions, sustainable energy that reduces your carbon footprint significantly.' },
        { icon: '💰', title: 'Cost Effective', desc: 'Lower installation costs and faster ROI compared to traditional solar systems.' },
        { icon: '🔧', title: 'Easy Installation', desc: 'Streamlined installation process means your system is up and running faster.' }
      ],
      specs: [
        { label: 'Panel Efficiency', value: '22.5%' },
        { label: 'Warranty', value: '25 Years' },
        { label: 'Temperature Coefficient', value: '-0.35%/°C' },
        { label: 'Power Tolerance', value: '0 to +5W' },
        { label: 'Max System Voltage', value: '1500V' },
        { label: 'Fire Rating', value: 'Class A' }
      ]
    }
  },
  methods: {
    goToContact() {
      this.$router.push('/contact')
    },
    goToPricing() {
      this.$router.push('/pricing')
    }
  }
}
</script>

<style scoped>
.genesis-page { width: 100%; }
.genesis-hero { padding: 4rem 0 2rem; background: linear-gradient(180deg, var(--navy) 0%, var(--navy-light) 100%); text-align: center; }
.page-title { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem; }
.page-subtitle { font-size: 1.2rem; color: var(--gray); }
.genesis-intro { background: var(--navy); }
.intro-content { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; }
@media (min-width: 768px) { .intro-content { grid-template-columns: 1fr 1fr; } }
.intro-text h2 { font-size: 2rem; margin-bottom: 1.5rem; }
.intro-text p { color: var(--gray); line-height: 1.8; margin-bottom: 1.25rem; font-size: 1.05rem; }
.intro-image { position: relative; }
.image-placeholder { aspect-ratio: 4/3; background: var(--navy-light); border: 1px solid var(--border); border-radius: var(--radius-lg); display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 4rem; }
.image-placeholder p { margin-top: 1rem; color: var(--gray); font-size: 1rem; }
.features-section { background: var(--navy-light); }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 3rem; }
.feature-card { padding: 2rem; background: var(--navy); border: 1px solid var(--border); border-radius: var(--radius-lg); text-align: center; transition: transform var(--transition), border-color var(--transition); }
.feature-card:hover { transform: translateY(-4px); border-color: rgba(232, 163, 23, 0.3); }
.feature-icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
.feature-card h3 { font-size: 1.25rem; margin-bottom: 0.75rem; }
.feature-card p { color: var(--gray); line-height: 1.6; }
.specs-section { background: var(--navy); }
.specs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 3rem; }
.spec-item { padding: 1.5rem; background: var(--navy-light); border: 1px solid var(--border); border-radius: var(--radius); text-align: center; }
.spec-label { color: var(--gray); font-size: 0.95rem; margin-bottom: 0.5rem; }
.spec-value { color: var(--sun); font-size: 1.5rem; font-weight: 700; }
.comparison-section { background: var(--navy-light); }
.comparison-table { margin-top: 3rem; border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
.comparison-row { display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 1px solid var(--border); }
.comparison-row:last-child { border-bottom: none; }
.comparison-row.header { background: var(--navy); }
.comparison-cell { padding: 1.25rem; color: var(--white); border-right: 1px solid var(--border); }
.comparison-cell:last-child { border-right: none; }
.comparison-row.header .comparison-cell { font-weight: 700; color: var(--sun); }
.comparison-cell.genesis { background: rgba(232, 163, 23, 0.1); color: var(--sun-light); font-weight: 600; }
.cta-section { background: var(--navy); text-align: center; }
.cta-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem; }
@media (max-width: 768px) { .comparison-row { grid-template-columns: 1fr; } .comparison-cell { border-right: none; border-bottom: 1px solid var(--border); } .comparison-cell:last-child { border-bottom: none; } }
</style>
