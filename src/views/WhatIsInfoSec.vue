<template>
  <div class="info-page">
    <div class="heading">What is Information Security?</div>

    <!-- Introduction -->
    <section class="card">
      <div class="card-content">
        <p>
          Information Security (InfoSec) is the practice of protecting sensitive
          data from unauthorized access, leaks, or attacks. It ensures that
          information remains
          <strong>confidential, accurate, and available</strong> when needed.
        </p>
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
            <strong>{{ principle.name }}</strong>
            <p>{{ principle.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Example Scenarios -->
    <section class="scenarios-section">
      <div class="card-container">
        <div class="card" v-for="scenario in scenarios" :key="scenario.name">
          <p>{{ scenario.description }}</p>
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
        },
        {
          description:
            "In 2003, an Education Minister blamed a computer virus for incorrect student exam results, demonstrating how data integrity failures can impact institutions and individuals.",
        },
        {
          description:
            "Wolfgang was working on a critical project while traveling. When his laptop was stolen, his encrypted files remained confidential, but since he had no backup, crucial data was lost—causing costly delays and penalties.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  display: flex;
  font-family: "Inter";
  align-items: center;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #ddd;
  flex: 1;
  min-width: 280px;
  transition: all 0.3s ease;
  margin-bottom: 10px;
}

/* Icon Container */
.icon-container {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-right: 10px;
  transition: all 0.3s ease;
}

.icon-container:hover {
  background-color: #eaf1f7;
}

.icon-container i {
  font-size: 28px;
  transition: all 0.3s ease;
}

.scenarios-section .card p {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    align-items: stretch;
  }

  .card {
    min-width: 100%;
  }
}
</style>
