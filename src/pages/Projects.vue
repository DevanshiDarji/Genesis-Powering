<template>
  <div class="projects-page">
    <!-- Hero Section -->
    <section class="projects-hero">
      <div class="container text-center">
        <h1 class="page-title">Our Solar Projects</h1>
        <p class="page-subtitle">
          Discover our completed solar installations across residential and commercial properties in Gujarat
        </p>
      </div>
    </section>

    <!-- Projects Grid Section -->
    <section class="projects-section section">
      <div class="container">
        <div class="projects-grid">
          <div
            v-for="project in projects"
            :key="project.id"
            class="project-card"
          >
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <span class="project-type">{{ project.type }}</span>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p class="project-location">📍 {{ project.location }}</p>
              <p class="project-desc">{{ project.description }}</p>
              <div class="project-stats">
                <div class="stat"><strong>System Size:</strong> {{ project.size }}</div>
                <div class="stat"><strong>Panels:</strong> {{ project.panels }}</div>
                <div class="stat"><strong>Annual Savings:</strong> {{ project.savings }}</div>
                <div class="stat"><strong>Completed:</strong> {{ project.completed }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section section">
      <div class="container text-center">
        <h2 class="section-title">Ready to Start Your Solar Project?</h2>
        <p class="section-subtitle">
          Join our satisfied customers in Nadiad, Vadodara, Ahmedabad, and other cities
        </p>
        <button @click="goToContact" class="btn btn-primary">Get a Free Quote</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Residential Rooftop Solar",
          type: "Residential",
          location: "Nadiad, Gujarat",
          size: "10 kW",
          image:
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
          description:
            "Modern home installation generating full household energy needs.",
          savings: "₹1,80,000/year",
          panels: 32,
          completed: "2024",
        },
        {
          id: 2,
          title: "Commercial Solar Roof",
          type: "Commercial",
          location: "Vadodara, Gujarat",
          size: "150 kW",
          image:
            "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80",
          description:
            "Large-scale commercial installation reducing electricity costs significantly.",
          savings: "₹18,00,000/year",
          panels: 450,
          completed: "2023",
        },
        {
          id: 3,
          title: "Suburban Family Home",
          type: "Residential",
          location: "Ahmedabad, Gujarat",
          size: "12 kW",
          image:
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
          description:
            "Family home with battery storage and smart monitoring for energy independence.",
          savings: "₹2,00,000/year",
          panels: 36,
          completed: "2024",
        },
        {
          id: 4,
          title: "Retail Store Solar",
          type: "Commercial",
          location: "Vadodara, Gujarat",
          size: "75 kW",
          image:
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
          description: "Multi-store retail complex with integrated solar energy.",
          savings: "₹9,50,000/year",
          panels: 225,
          completed: "2023",
        },
        {
          id: 5,
          title: "Luxury Home Solar",
          type: "Residential",
          location: "Ahmedabad, Gujarat",
          size: "25 kW",
          image:
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
          description:
            "Premium residential installation with top-quality panels and monitoring system.",
          savings: "₹6,20,000/year",
          panels: 80,
          completed: "2024",
        },
        {
          id: 6,
          title: "Factory Solar Plant",
          type: "Commercial",
          location: "Nadiad, Gujarat",
          size: "200 kW",
          image:
            "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80",
          description:
            "Industrial installation reducing operational electricity costs.",
          savings: "₹24,00,000/year",
          panels: 600,
          completed: "2023",
        },
      ],
    };
  },
  methods: {
    goToContact() {
      this.$router.push("/contact");
    },
  },
};
</script>

<style scoped>
.projects-page {
  width: 100%;
  font-family: "Poppins", sans-serif;
}

/* Hero Section */
.projects-hero {
  padding: 4rem 0 2rem;
  background: linear-gradient(180deg, #1f2937 0%, #374151 100%);
  color: #fff;
  text-align: center;
}
.page-title {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1rem;
  font-weight: 700;
}
.page-subtitle {
  font-size: 1.2rem;
  color: #d1d5db;
}

/* Projects Grid */
.projects-section {
  padding: 4rem 0;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: #111827;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #374151;
  transition: all 0.3s ease;
}
.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border-color: #f59e0b;
}

.project-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
}
.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-type {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f59e0b;
  color: #1f2937;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
}

.project-content {
  padding: 1.5rem;
}
.project-content h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #f9fafb;
}
.project-location {
  color: #fbbf24;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}
.project-desc {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  border-top: 1px solid #374151;
  padding-top: 1rem;
}
.stat {
  font-size: 0.9rem;
  color: #d1d5db;
}
.stat strong {
  display: block;
  color: #f9fafb;
  margin-bottom: 0.25rem;
}

/* CTA Section */
.cta-section {
  padding: 4rem 0;
  background: #1f2937;
  text-align: center;
  color: #fff;
}
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.section-subtitle {
  font-size: 1.2rem;
  color: #d1d5db;
  margin-bottom: 2rem;
}

.btn-primary {
  background: #f59e0b;
  color: #1f2937;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.btn-primary:hover {
  background: #fbbf24;
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .project-stats {
    grid-template-columns: 1fr;
  }
}
</style>
