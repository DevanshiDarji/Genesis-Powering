<template>
  <div class="about-page">

    <!-- HERO -->
    <section class="about-hero">
      <div class="container">
        <h1 class="page-title">Powering a Brighter Tomorrow</h1>
        <p class="page-subtitle">
          At Genesis Powering Tomorrow, we help homeowners and businesses
          take control of their energy future with reliable, high-performance solar solutions.
        </p>
      </div>
    </section>

    <!-- STORY -->
    <section class="about-intro section">
      <div class="container">
        <h2>Our Story</h2>

        <p>
          Genesis Powering Tomorrow was founded with one mission:
          to make clean energy simple, affordable, and accessible.
          What began as a passionate team of solar experts has grown into
          a trusted installation company serving hundreds of satisfied customers.
        </p>

        <p>
          We believe solar is more than panels on a roof —
          it's energy independence, financial savings, and protecting the planet for future generations.
        </p>

        <p>
          By keeping everything in-house — from consultation and engineering
          to permitting, installation, and support — we ensure quality control,
          faster timelines, and a seamless customer experience.
        </p>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats-section section">
      <div class="container">
        <div class="stats-grid">
          <div v-for="(stat, index) in stats" :key="index" class="stat-card">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- TRUST -->
    <section class="trust-section section">
      <div class="container">
        <h2 class="section-title">Why Homeowners Trust Genesis</h2>

        <div class="trust-grid">
          <div class="trust-card" v-for="(item, index) in trust" :key="index">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- VALUES -->
    <section class="values-section section">
      <div class="container">
        <h2 class="section-title">Our Mission, Vision & Values</h2>

        <div class="values-grid">
          <div v-for="(value, index) in values" :key="index" class="value-card">
            <span class="value-icon">{{ value.icon }}</span>
            <h3>{{ value.title }}</h3>
            <p>{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
   <!-- <section class="testimonial-section section">
      <div class="container">
        <h2 class="section-title">What Our Customers Say</h2>

        <div class="testimonial-grid">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
            <p>"{{ testimonial.text }}"</p>
            <span>- {{ testimonial.name }}</span>
          </div>
        </div>
      </div>
    </section>-->

    <!-- CTA -->
    <!--<section class="cta-section section">
      <div class="container">
        <h2 class="section-title">Ready to Power Your Future?</h2>
        <p class="section-subtitle">
          Take the first step toward energy independence and long-term savings.
        </p>

        <div class="cta-buttons">
          <button @click="goToContact" class="btn btn-primary">Get in Touch</button>
          <button @click="goToProjects" class="btn btn-outline">View Our Work</button>
        </div>
      </div>
    </section>-->

  </div>
</template>

<script>
export default {
  name: 'About',

  data() {
    return {

      stats: [
        { number: '500+', label: 'Successful Installations' },
        { number: '10+', label: 'Years of Industry Experience' },
        { number: '25', label: 'Year Performance Warranty' },
        { number: '98%', label: 'Customer Satisfaction Rate' }
      ],

      trust: [
        {
          title: 'Certified Professionals',
          desc: 'Our installers are fully trained, certified, and experienced in advanced solar systems.'
        },
        {
          title: 'Transparent Pricing',
          desc: 'No hidden fees. Clear quotes. Honest recommendations tailored to your energy needs.'
        },
        {
          title: 'End-to-End Service',
          desc: 'We manage everything — design, permits, installation, and post-installation support.'
        },
        {
          title: 'Long-Term Support',
          desc: 'Our relationship doesn’t end after installation. We are here for the life of your system.'
        }
      ],

      values: [
        {
          icon: '🌍',
          title: 'Our Mission',
          desc: 'To accelerate the transition to renewable energy by delivering high-performance solar solutions.'
        },
        {
          icon: '⚡',
          title: 'Our Vision',
          desc: 'A world powered by clean, sustainable energy where every property contributes to a greener planet.'
        },
        {
          icon: '🤝',
          title: 'Our Values',
          desc: 'Integrity, innovation, craftsmanship, and long-term customer relationships guide every project.'
        }
      ],

      testimonials: [
        {
          text: 'Genesis made the entire solar process simple and stress-free. Our energy bills dropped immediately!',
          name: 'Sarah M.'
        },
        {
          text: 'Professional team, fast installation, and incredible support. Highly recommended.',
          name: 'Michael T.'
        }
      ]
    }
  },

  methods: {
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
.about-page { width: 100%; }

.about-hero {
  padding: 4rem 0 2rem;
  background: linear-gradient(180deg, var(--navy) 0%, var(--navy-light) 100%);
  text-align: center;
}

.page-title {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: var(--gray);
  max-width: 700px;
  margin: 0 auto;
}

.section { padding: 4rem 0; }

.about-intro { background: var(--navy); }

.about-intro p {
  color: var(--gray);
  line-height: 1.8;
  margin-bottom: 1.25rem;
  font-size: 1.05rem;
}

.stats-section { background: var(--navy-light); }

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: var(--navy);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--sun);
}

.stat-label { color: var(--gray); }

.trust-section { background: var(--navy); }

.trust-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.trust-card {
  padding: 2rem;
  background: var(--navy-light);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

.trust-card h3 { margin-bottom: 1rem; }

.values-section { background: var(--navy-light); }

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.value-card {
  padding: 2rem;
  background: var(--navy);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  text-align: center;
}

.value-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

.testimonial-section { background: var(--navy); }

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.testimonial-card {
  padding: 2rem;
  background: var(--navy-light);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  font-style: italic;
}

.cta-section {
  background: var(--navy-light);
  text-align: center;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}
</style>