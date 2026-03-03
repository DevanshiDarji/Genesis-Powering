<template>
  <div class="pricing-page">
    <section class="pricing-hero">
      <div class="container">
        <h1 class="page-title">Genesis Powering Tomorrow Pricing</h1>
        <p class="page-subtitle">Transparent pricing for residential and commercial solar installations</p>
      </div>
    </section>

    <section class="pricing-intro section">
      <div class="container">
        <div class="intro-content">
          <h2>Investment in Your Future</h2>
          <p>Go solar under <strong>PM-Surya Ghar Muft Bijli Yojna</strong>. Our pricing is transparent and competitive. Financing available at 6% interest.</p>
          <div class="plan-benefits-inline">
            <p>✓ ₹78,000/- National Subsidy &nbsp;|&nbsp; ✓ ₹0 Light Bill &nbsp;|&nbsp; ✓ 30 Years Panel Warranty &nbsp;|&nbsp; ✓ 5 Years Free Service &nbsp;|&nbsp; ✓ No Advance Payment</p>
          </div>
          <p class="note">* Prices are estimates. Final pricing depends on roof size, location, and requirements. Contact us for a custom quote.</p>
        </div>
      </div>
    </section>
<!--
    <section class="residential-pricing section">
      <div class="container">
        <h2 class="section-title">Residential Solar Packages</h2>
        <p class="section-subtitle">Perfect for homes of all sizes</p>
        <div class="pricing-grid">
          <div v-for="(plan, index) in pricingPlans" :key="index" :class="['pricing-card', { popular: plan.popular }]">
            <div v-if="plan.popular" class="popular-badge">Most Popular</div>
            <h3>{{ plan.name }}</h3>
            <div class="plan-size">{{ plan.size }}</div>
            <div class="plan-price">{{ plan.price }}</div>
            <div class="plan-savings">Save {{ plan.savings }}</div>
            <ul class="plan-features">
              <li v-for="(feature, i) in plan.features" :key="i">✓ {{ feature }}</li>
            </ul>
            <button @click="goToContact" class="btn" :class="plan.popular ? 'btn-primary' : 'btn-outline'">Get Quote</button>
          </div>
        </div>
      </div>
    </section>

    <section class="commercial-pricing section">
      <div class="container">
        <h2 class="section-title">Commercial Solar Packages</h2>
        <p class="section-subtitle">Scalable solutions for businesses</p>
        <div class="pricing-grid">
          <div v-for="(plan, index) in commercialPlans" :key="index" class="pricing-card commercial">
            <h3>{{ plan.name }}</h3>
            <div class="plan-size">{{ plan.size }}</div>
            <div class="plan-price">{{ plan.price }}</div>
            <div class="plan-savings">Save {{ plan.savings }}</div>
            <ul class="plan-features">
              <li v-for="(feature, i) in plan.features" :key="i">✓ {{ feature }}</li>
            </ul>
            <button @click="goToContact" class="btn btn-outline">Get Quote</button>
          </div>
        </div>
      </div>
    </section>-->
  </div>
</template>

<script>
export default {
  name: 'Pricing',
  data() {
    return {
      pricingPlans: [
        { name: 'Residential Starter', size: '5 kW', price: '$12,500', savings: '$1,500/year', panels: 16, features: ['16 Premium Solar Panels', 'Grid-Tied System', '25-Year Warranty', 'Free Installation', 'Net Metering Setup', 'Monitoring App'], popular: false },
        { name: 'Residential Standard', size: '10 kW', price: '$22,000', savings: '$2,800/year', panels: 32, features: ['32 Premium Solar Panels', 'Grid-Tied System', '25-Year Warranty', 'Free Installation', 'Net Metering Setup', 'Monitoring App', 'Battery Ready', 'EV Charger Compatible'], popular: true },
        { name: 'Residential Premium', size: '15 kW', price: '$30,000', savings: '$4,200/year', panels: 48, features: ['48 Premium Solar Panels', 'Grid-Tied System', '25-Year Warranty', 'Free Installation', 'Net Metering Setup', 'Monitoring App', 'Battery Storage Included', 'EV Charger Included', 'Smart Home Integration'], popular: false }
      ],
      commercialPlans: [
        { name: 'Commercial Small', size: '50 kW', price: '$75,000', savings: '$7,500/year', panels: 150, features: ['150 Commercial Panels', 'Commercial Inverter', '25-Year Warranty', 'Professional Installation', 'Net Metering', 'Monitoring Dashboard', 'Maintenance Plan'] },
        { name: 'Commercial Medium', size: '150 kW', price: '$200,000', savings: '$22,500/year', panels: 450, features: ['450 Commercial Panels', 'Commercial Inverter', '25-Year Warranty', 'Professional Installation', 'Net Metering', 'Monitoring Dashboard', 'Maintenance Plan', 'Tax Incentives', 'ROI Tracking'] },
        { name: 'Commercial Large', size: '300 kW', price: '$375,000', savings: '$45,000/year', panels: 900, features: ['900 Commercial Panels', 'Commercial Inverter', '25-Year Warranty', 'Professional Installation', 'Net Metering', 'Monitoring Dashboard', 'Maintenance Plan', 'Tax Incentives', 'ROI Tracking', 'Custom Design', 'Dedicated Support'] }
      ],
      incentives: [
        'Federal Tax Credits Available',
        'Provincial Rebates',
        'Net Metering Programs',
        'Accelerated Depreciation',
        'Property Tax Exemptions'
      ]
    }
  },
  methods: {
    goToContact() {
      this.$router.push('/contact')
    }
  }
}
</script>

<style scoped>
.pricing-page { width: 100%; }
.pricing-hero { padding: 4rem 0 2rem; background: linear-gradient(180deg, var(--navy) 0%, var(--navy-light) 100%); text-align: center; }
.page-title { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem; }
.page-subtitle { font-size: 1.2rem; color: var(--gray); }
.pricing-intro { background: var(--navy); text-align: center; }
.intro-content { max-width: 800px; margin: 0 auto; }
.intro-content h2 { font-size: 2rem; margin-bottom: 1rem; }
.intro-content p { color: var(--gray); line-height: 1.7; margin-bottom: 1rem; }
.plan-benefits-inline { margin: 1.25rem 0; padding: 1rem; background: rgba(34, 197, 94, 0.1); border-radius: var(--radius); }
.plan-benefits-inline p { margin: 0; color: var(--off-white); font-size: 0.95rem; }
.cta-section .section-subtitle a { color: var(--sun-light); }
.note { font-size: 0.9rem; color: var(--gray-dark); font-style: italic; }
.residential-pricing { background: var(--navy-light); }
.commercial-pricing { background: var(--navy); }
.pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem; }
.pricing-card { position: relative; background: var(--navy); border: 2px solid var(--border); border-radius: var(--radius-lg); padding: 2rem; text-align: center; transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition); }
.pricing-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); }
.pricing-card.popular { border-color: var(--sun); background: var(--navy-light); }
.pricing-card.commercial { background: var(--navy-light); }
.popular-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--sun); color: var(--navy); padding: 0.5rem 1.5rem; border-radius: 20px; font-weight: 600; font-size: 0.85rem; }
.pricing-card h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }
.plan-size { color: var(--sun-light); font-weight: 600; margin-bottom: 1rem; }
.plan-price { font-size: 2.5rem; font-weight: 700; color: var(--white); margin-bottom: 0.5rem; }
.plan-savings { color: var(--gray); margin-bottom: 2rem; font-size: 1rem; }
.plan-features { list-style: none; text-align: left; margin-bottom: 2rem; min-height: 200px; }
.plan-features li { padding: 0.75rem 0; color: var(--gray); border-bottom: 1px solid var(--border); }
.plan-features li:last-child { border-bottom: none; }
.incentives-section { background: var(--navy-light); }
.incentives-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 2rem; }
.incentive-item { display: flex; align-items: center; gap: 1rem; padding: 1.5rem; background: var(--navy); border: 1px solid var(--border); border-radius: var(--radius); }
.incentive-icon { font-size: 2rem; flex-shrink: 0; }
.incentive-item p { color: var(--gray); margin: 0; }
.incentives-note { text-align: center; color: var(--gray); margin-top: 2rem; font-style: italic; }
.cta-section { background: var(--navy); text-align: center; }
</style>
