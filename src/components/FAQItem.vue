<template>
  <div class="faq-item" :class="{ open: isOpen }">
    <button class="faq-question" @click="$emit('toggle')" :aria-expanded="isOpen">
      <span>{{ question }}</span>
      <span class="icon" aria-hidden="true">▾</span>
    </button>
    <div class="faq-answer">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQItem',
  props: {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle']
}
</script>

<style scoped>
.faq-item {
  border-bottom: 1px solid var(--border);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 0;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--white);
  transition: color var(--transition);
}

.faq-question:hover {
  color: var(--sun-light);
}

.icon {
  flex-shrink: 0;
  color: var(--sun);
  font-size: 1.25rem;
  transition: transform var(--transition);
}

.faq-item.open .icon {
  transform: rotate(180deg);
}

.faq-answer {
  overflow: hidden;
  max-height: 0;
  transition: max-height var(--transition);
}

.faq-item.open .faq-answer {
  max-height: 200px;
}

.faq-answer p {
  padding-bottom: 1.25rem;
  color: var(--gray);
  font-size: 1rem;
  line-height: 1.7;
}
</style>
