<template>
  <div class="blog-page">
    <section class="blog-hero">
      <div class="container">
        <h1 class="page-title">Solar Energy Blog</h1>
        <p class="page-subtitle">Stay informed about solar energy, tips, news, and industry insights</p>
      </div>
    </section>

    <section class="blog-section section">
      <div class="container">
        <div class="blog-grid">
          <article v-for="post in blogPosts" :key="post.id" class="blog-card" @click="goToPost(post.id)">
            <div class="blog-image">
              <img :src="post.image" :alt="post.title" />
              <span class="blog-category">{{ post.category }}</span>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-date">{{ post.date }}</span>
                <span class="blog-read-time">{{ post.readTime }}</span>
              </div>
              <h3>{{ post.title }}</h3>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              <button class="read-more">Read More →</button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="newsletter-section section">
      <div class="container">
        <div class="newsletter-box">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest solar energy news, tips, and exclusive offers delivered to your inbox.</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      blogPosts: [
        { id: 1, title: 'How Solar Panels Work: A Complete Guide', excerpt: 'Understanding the science behind solar energy and how photovoltaic cells convert sunlight into electricity.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80', date: 'March 15, 2024', category: 'Education', readTime: '5 min read' },
        { id: 2, title: 'Top 5 Benefits of Going Solar in 2024', excerpt: 'Discover why more homeowners are switching to solar: cost savings, environmental impact, and energy independence.', image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=80', date: 'March 10, 2024', category: 'Benefits', readTime: '4 min read' },
        { id: 3, title: 'Solar Panel Maintenance: What You Need to Know', excerpt: 'Learn how to keep your solar system running at peak efficiency with proper maintenance and care.', image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80', date: 'March 5, 2024', category: 'Maintenance', readTime: '6 min read' },
        { id: 4, title: 'Net Metering Explained: Maximize Your Solar Savings', excerpt: 'How net metering works and how it can help you save money by selling excess energy back to the grid.', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80', date: 'February 28, 2024', category: 'Savings', readTime: '5 min read' },
        { id: 5, title: 'Battery Storage: The Future of Solar Energy', excerpt: 'Explore how battery storage systems are revolutionizing solar energy and providing 24/7 power independence.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80', date: 'February 20, 2024', category: 'Technology', readTime: '7 min read' },
        { id: 6, title: 'Commercial Solar: ROI and Business Benefits', excerpt: 'Why businesses are investing in solar: tax incentives, reduced operating costs, and sustainability goals.', image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=80', date: 'February 15, 2024', category: 'Commercial', readTime: '6 min read' }
      ]
    }
  },
  methods: {
    goToPost(id) {
      this.$router.push('/blog/' + id)
    }
  }
}
</script>

<style scoped>
.blog-page { width: 100%; }
.blog-hero { padding: 4rem 0 2rem; background: linear-gradient(180deg, var(--navy) 0%, var(--navy-light) 100%); text-align: center; }
.page-title { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1rem; }
.page-subtitle { font-size: 1.2rem; color: var(--gray); }
.blog-section { background: var(--navy); }
.blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 2rem; }
.blog-card { background: var(--navy-light); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; cursor: pointer; transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition); }
.blog-card:hover { transform: translateY(-4px); box-shadow: var(--shadow); border-color: rgba(232, 163, 23, 0.3); }
.blog-image { position: relative; width: 100%; aspect-ratio: 16/9; overflow: hidden; }
.blog-image img { width: 100%; height: 100%; object-fit: cover; transition: transform var(--transition); }
.blog-card:hover .blog-image img { transform: scale(1.05); }
.blog-category { position: absolute; top: 1rem; left: 1rem; padding: 0.5rem 1rem; background: var(--sun); color: var(--navy); font-weight: 600; font-size: 0.85rem; border-radius: var(--radius); }
.blog-content { padding: 1.5rem; }
.blog-meta { display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.85rem; color: var(--gray); }
.blog-content h3 { font-size: 1.5rem; margin-bottom: 0.75rem; line-height: 1.3; }
.blog-excerpt { color: var(--gray); line-height: 1.6; margin-bottom: 1rem; }
.read-more { color: var(--sun-light); font-weight: 600; background: none; border: none; cursor: pointer; padding: 0; transition: color var(--transition); }
.read-more:hover { color: var(--sun); }
.newsletter-section { background: var(--navy-light); }
.newsletter-box { max-width: 600px; margin: 0 auto; text-align: center; padding: 3rem 2rem; background: var(--navy); border: 1px solid var(--border); border-radius: var(--radius-lg); }
.newsletter-box h2 { font-size: 2rem; margin-bottom: 1rem; }
.newsletter-box p { color: var(--gray); margin-bottom: 2rem; }
.newsletter-form { display: flex; gap: 1rem; max-width: 400px; margin: 0 auto; }
.newsletter-form input { flex: 1; padding: 0.875rem; background: var(--navy-light); border: 1px solid var(--border); border-radius: var(--radius); color: var(--white); font-family: inherit; }
.newsletter-form input:focus { outline: none; border-color: var(--sun); }
@media (max-width: 768px) { .blog-grid { grid-template-columns: 1fr; } .newsletter-form { flex-direction: column; } }
</style>
