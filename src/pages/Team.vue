<template>
  <div class="team-page">

    <!-- ===== HERO / HEADER ===== -->
    <section class="team-hero">
      <div class="team-hero-bg" aria-hidden="true"></div>
      <div class="team-hero-overlay"></div>
      <div class="container team-hero-inner text-center position-relative z-10">
        <h1 class="animate-hero">Our <span class="text-accent">Team</span></h1>
        <p class="animate-hero" style="animation-delay: 0.3s">
          Meet the dedicated experts powering your clean energy future.
        </p>
      </div>
    </section>

    <!-- ===== SINGLE CLEAN BLOCK: TEAM GRID ===== -->
    <section class="team-section">
      <div class="container">
        <div class="team-grid">
          
          <div v-for="(member, i) in team" :key="i"
               class="team-card animate-on-scroll" 
               :class="'stagger-' + (i + 1)">
               
            <div class="avatar-wrapper">
              <i class="bi icon-avatar" :class="member.icon"></i>
            </div>
            
            <h3 class="member-name">{{ member.name }}</h3>
            <span class="member-role">{{ member.role }}</span>
            <p class="member-desc">{{ member.desc }}</p>
            
          </div>
          
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      team: [
        {
          name: 'Ronak Khristi',
          role: 'CEO & Founder',
          desc: 'Leading the company vision to make clean, sustainable solar energy accessible and affordable for every household.',
          icon: 'bi-person-workspace'
        },
        {
          name: 'Kalpesh Macwan',
          role: 'Lead Engineer',
          desc: 'Expert in solar system design and optimization, ensuring maximum energy efficiency and safety for all our projects.',
          icon: 'bi-person-gear'
        },
        {
          name: 'Alex Patel',
          role: 'Installation Specialist',
          desc: 'Certified field technician dedicated to executing precise, high-quality, and reliable solar panel installations on-site.',
          icon: 'bi-tools'
        },
        {
          name: 'Priya Sharma',
          role: 'Customer Service Representative',
          desc: 'Provides exceptional end-to-end support, guiding clients smoothly from initial consultation to final activation.',
          icon: 'bi-headset'
        }
      ]
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
    }
  }
}
</script>

<style scoped>
.team-page { width: 100%; }

/* UTILS */
.text-accent { color: var(--sun); }
.text-center { text-align: center; }
.position-relative { position: relative; }
.z-10 { z-index: 10; }

/* ===== HERO ===== */
.team-hero {
  position: relative;
  padding: 8rem 0 4rem;
  overflow: hidden;
}
.team-hero-bg {
  position: absolute; inset: 0;
  background-image: url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80');
  background-size: cover; 
  background-position: center;
}
.team-hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(15,42,74,0.95), rgba(15,42,74,0.88));
}
.team-hero-inner {
  max-width: 620px;
  margin: 0 auto;
}
.animate-hero {
  opacity: 0; 
  transform: translateY(25px);
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.team-hero h1 { 
  font-size: clamp(2rem, 5vw, 3rem); 
  color: var(--white); 
  margin-bottom: 1rem; 
}
.team-hero p { 
  font-size: 1.15rem; 
  color: rgba(255, 255, 255, 0.8); 
  line-height: 1.7; 
}

/* ===== TEAM SECTION (SINGLE BLOCK) ===== */
.team-section {
  padding: 6rem 0 8rem;
  background: var(--off-white);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

/* CARDS */
.team-card {
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(15, 42, 74, 0.03);
  border: 1px solid rgba(15, 42, 74, 0.05);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
  position: relative;
}
.team-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(15, 42, 74, 0.08);
}

/* AVATARS / ICONS */
.avatar-wrapper {
  width: 90px;
  height: 90px;
  margin: 0 auto 1.5rem auto;
  background: linear-gradient(135deg, rgba(37, 116, 181, 0.12), rgba(37, 116, 181, 0.03));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 2px 10px rgba(37, 116, 181, 0.05);
  transition: transform 0.4s ease;
}
.team-card:hover .avatar-wrapper {
  transform: scale(1.05);
  background: linear-gradient(135deg, rgba(247, 147, 30, 0.12), rgba(247, 147, 30, 0.03));
}
.icon-avatar {
  font-size: 2.5rem;
  color: var(--blue);
  transition: color 0.4s ease;
}
.team-card:hover .icon-avatar {
  color: var(--sun);
}

/* TYPOGRAPHY */
.member-name {
  font-size: 1.3rem;
  color: var(--navy);
  margin-bottom: 0.25rem;
  font-weight: 700;
  font-family: 'Fraunces', serif;
}

.member-role {
  display: block;
  font-size: 0.85rem;
  color: var(--blue);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1.25rem;
}

.member-desc {
  color: var(--gray-dark);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}
</style>
