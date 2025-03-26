<template>
  <div class="info-page">
    <div class="heading">What is Information Security?</div>

    <!-- Introduction -->
    <section class="intro-section">
      <div class="intro-card-container">
        <div class="card">
          <div class="card-content">
            <p>
              Information Security (InfoSec) is the practice of protecting
              sensitive data from unauthorized access, leaks, or attacks. It
              ensures that information remains
              <strong>confidential, accurate, and available</strong> when
              needed.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core InfoSec Principles -->
    <section class="principles-section">
      <div class="card-container">
        <div class="card" v-for="principle in principles" :key="principle.name">
          <div
            class="icon-container"
            :style="{ backgroundColor: principle.bgLight }"
          >
            <i :class="principle.icon" :style="{ color: principle.bgDark }"></i>
          </div>
          <div class="card-content">
            <h3>{{ principle.name }}</h3>
            <p>{{ principle.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Example Scenarios -->
    <section class="scenarios-section">
      <div class="card-container">
        <div
          class="card scenario-card"
          v-for="scenario in scenarios"
          :key="scenario.description"
        >
          <div class="scenario-image-container">
            <img :src="scenario.image" alt="Image" class="scenario-image" />
          </div>

          <div class="card-content">
            <p>{{ scenario.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "WhatIsInfoSec",
  data() {
    return {
      principles: [
        {
          name: "Confidentiality",
          icon: "fas fa-lock",
          description: "Only authorized users should access sensitive data.",
          bgLight: "#d9f0ff",
          bgDark: "#1e88e5",
        },
        {
          name: "Integrity",
          icon: "fas fa-check-circle",
          description:
            "Ensure information is accurate and hasn't been altered.",
          bgLight: "#eafcd4",
          bgDark: "#28c76f",
        },
        {
          name: "Availability",
          icon: "fas fa-clock",
          description: "Data should be accessible when needed.",
          bgLight: "#ffeedf",
          bgDark: "#ff9800",
        },
      ],
      scenarios: [
        {
          description:
            "Sally confided in her manager about her mother's health condition, expecting it to remain private. However, due to mishandling of sensitive information, the details became widely known at work, violating confidentiality principles.",
          image: "woman-talking.avif",
        },
        {
          description:
            "In 2003, an Education Minister blamed a computer virus for incorrect student exam results, demonstrating how data integrity failures can impact institutions and individuals.",
          image: "exam-results.jpg",
        },
        {
          description:
            "Wolfgang was working on a critical project while traveling. When his laptop was stolen, his encrypted files remained confidential, but since he had no backup, crucial data was lost—causing costly delays and penalties.",
          image: "laptop-train.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-container {
  grid-template-columns: repeat(3, 1fr);
}

.scenario-card {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #ddd;
  flex: 1;
  transition: all 0.3s ease;
}

.scenario-image-container {
  width: 100%;
  margin-bottom: 15px;
}

.scenario-image {
  width: 100%;
  height: 250px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

.image-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}
</style>
