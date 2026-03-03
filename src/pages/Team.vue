<template>
  <div class="team-page">
    <section class="team-hero">
      <div class="container">
        <h1 class="page-title">Our Team</h1>
        <p class="page-subtitle">Meet the experts behind Genesis Powering Tomorrow</p>
      </div>
    </section>

   
    <section class="team-grid-section section">
      <div class="container">
        <div class="team-grid">
          <div v-for="(member, index) in teamMembers" :key="index" class="team-card">
            <div class="member-image">
              <span class="avatar">{{ member.image }}</span>
            </div>
            <h3>{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
            <p class="member-bio">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section section">
      <div class="container">
        <h2 class="section-title">Work With Our Team</h2>
        <p class="section-subtitle">Ready to meet our experts? Get in touch for a consultation.</p>
        <button @click="goToContact" class="btn btn-primary">Contact Us</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      teamMembers: [
        { name: 'Ronak Khristi', role: 'Founder & CEO', bio: 'With 15+ years in renewable energy, Ronak founded Genesis Powering Tomorrow to make solar accessible to everyone.', image: '👨‍💼' },
        { name: 'Sippy', role: 'Lead Solar Engineer', bio: 'Certified solar PV installer with expertise in system design and optimization for maximum efficiency.', image: '👩‍🔧' },
        { name: 'Xyz', role: 'Installation Manager', bio: 'Oversees all installations ensuring quality, safety, and customer satisfaction on every project.', image: '👨‍🔧' },
        { name: 'Emily', role: 'Customer Success', bio: 'Dedicated to ensuring every customer has a smooth experience from consultation to activation.', image: '👩‍💼' },
        { name: 'David', role: 'Sales & Consultation', bio: 'Helps customers understand their solar options and find the perfect system for their needs.', image: '👨‍💻' },
        { name: 'ABC', role: 'Permits & Compliance', bio: 'Navigates complex permitting processes to ensure fast approvals and full compliance.', image: '👩‍⚖️' }
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
.team-page { width: 100%; }
.team-hero { padding: 4rem 0 2rem; background: linear-gradient(180deg, var(--navy) 0%, var(--navy-light) 100%); text-align: center; }
.page-title { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem; }
.page-subtitle { font-size: 1.2rem; color: var(--gray); }
.team-intro { background: var(--navy); }
.intro-text { max-width: 800px; margin: 0 auto; text-align: center; }
.intro-text h2 { font-size: 2rem; margin-bottom: 1.5rem; }
.intro-text p { color: var(--gray); line-height: 1.8; margin-bottom: 1.25rem; font-size: 1.05rem; }
.team-grid-section { background: var(--navy-light); }
.team-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; }
.team-card { padding: 2rem; background: var(--navy); border: 1px solid var(--border); border-radius: var(--radius-lg); text-align: center; transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition); }
.team-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); border-color: rgba(232, 163, 23, 0.3); }
.member-image { margin-bottom: 1.5rem; }
.avatar { display: inline-block; width: 120px; height: 120px; line-height: 120px; font-size: 4rem; background: var(--navy-light); border: 2px solid var(--border); border-radius: 50%; }
.team-card h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }
.member-role { color: var(--sun); font-weight: 600; margin-bottom: 1rem; font-size: 1rem; }
.member-bio { color: var(--gray); line-height: 1.6; font-size: 0.95rem; }
.cta-section { background: var(--navy); text-align: center; }
</style>
