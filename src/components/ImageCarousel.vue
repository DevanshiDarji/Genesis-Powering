<template>
  <div class="carousel" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
    <div class="carousel-container">
      <div 
        class="carousel-slide"
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: currentIndex === index }"
      >
        <img :src="image.url" :alt="image.alt || 'Slide ' + (index + 1)" />
        <div v-if="image.title || image.description" class="slide-content">
          <h3 v-if="image.title">{{ image.title }}</h3>
          <p v-if="image.description">{{ image.description }}</p>
        </div>
      </div>
    </div>
    
    <button class="carousel-btn prev" @click="prevSlide" aria-label="Previous slide">‹</button>
    <button class="carousel-btn next" @click="nextSlide" aria-label="Next slide">›</button>
    
    <div class="carousel-dots">
      <button
        v-for="(image, index) in images"
        :key="index"
        class="dot"
        :class="{ active: currentIndex === index }"
        @click="goToSlide(index)"
        :aria-label="'Go to slide ' + (index + 1)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCarousel',
  props: {
    images: {
      type: Array,
      required: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    }
  },
  data() {
    return {
      currentIndex: 0,
      autoplayTimer: null
    }
  },
  mounted() {
    this.startAutoplay()
  },
  beforeUnmount() {
    this.stopAutoplay()
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    goToSlide(index) {
      this.currentIndex = index
    },
    startAutoplay() {
      if (this.autoplay) {
        this.autoplayTimer = setInterval(this.nextSlide, this.interval)
      }
    },
    stopAutoplay() {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer)
        this.autoplayTimer = null
      }
    }
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 2rem;
  color: var(--white);
}

.slide-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.slide-content p {
  font-size: 1rem;
  opacity: 0.9;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: none;
  color: var(--white);
  font-size: 2.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  transition: background var(--transition), transform var(--transition);
  z-index: 10;
}

.carousel-btn:hover {
  background: rgba(232, 163, 23, 0.8);
  transform: translateY(-50%) scale(1.1);
}

.carousel-btn.prev {
  left: 1rem;
}

.carousel-btn.next {
  right: 1rem;
}

.carousel-dots {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
}

.dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: 2px solid var(--white);
  background: transparent;
  cursor: pointer;
  transition: background var(--transition), transform var(--transition);
}

.dot.active {
  background: var(--sun);
  border-color: var(--sun);
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .carousel {
    height: 350px;
  }
  
  .carousel-btn {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 2rem;
  }
  
  .slide-content {
    padding: 1.5rem;
  }
  
  .slide-content h3 {
    font-size: 1.25rem;
  }
}
</style>
