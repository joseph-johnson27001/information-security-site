<template>
  <div class="info-page">
    <div class="heading">What is Information Security?</div>

    <!-- Introduction -->
    <section class="intro-section">
      <p>
        Information Security (InfoSec) is the practice of protecting sensitive
        data from unauthorized access, leaks, or attacks. It ensures that
        information remains **confidential, accurate, and available** when
        needed.
      </p>
    </section>

    <!-- Core InfoSec Principles -->
    <section class="principles-section">
      <div class="principles-container">
        <div
          class="principle-card"
          v-for="principle in principles"
          :key="principle.name"
        >
          <div
            class="icon-container"
            :style="{ backgroundColor: principle.bgLight }"
          >
            <i :class="principle.icon" :style="{ color: principle.bgDark }"></i>
          </div>
          <div class="principle-content">
            <strong>{{ principle.name }}</strong>
            <p>{{ principle.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Common Security Threats -->
    <section class="threats-section">
      <p>
        Every organization faces risks. Here are a few threats to be aware of:
      </p>
      <div class="threats-container">
        <div class="threat-card" v-for="threat in threats" :key="threat.name">
          <div
            class="icon-container"
            :style="{ backgroundColor: threat.bgLight }"
          >
            <i :class="threat.icon" :style="{ color: threat.bgDark }"></i>
          </div>
          <div class="threat-content">
            <strong>{{ threat.name }}</strong>
            <p>{{ threat.description }}</p>
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
      threats: [
        {
          name: "Phishing Attacks",
          icon: "fas fa-envelope-open-text",
          description:
            "Deceptive emails tricking users into revealing information.",
          bgLight: "#fde3cf",
          bgDark: "#ff5722",
        },
        {
          name: "Ransomware",
          icon: "fas fa-virus",
          description: "Malware that locks files and demands payment.",
          bgLight: "#cfe8fd",
          bgDark: "#007bff",
        },
        {
          name: "Insider Threats",
          icon: "fas fa-user-shield",
          description: "Employees or contractors misusing their access.",
          bgLight: "#d4f5d1",
          bgDark: "#28c76f",
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
}

/* Principles & Threats Layout */
.principles-container,
.threats-container {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.principle-card,
.threat-card {
  display: flex;
  align-items: center;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  flex: 1;
  min-width: 250px;
}

/* Icon Containers */
.icon-container {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.icon-container i {
  font-size: 24px;
}

/* Content */
.principle-content,
.threat-content {
  margin-left: 15px;
}

.principle-content strong,
.threat-content strong {
  font-size: 16px;
}

.principle-content p,
.threat-content p {
  font-size: 14px;
  color: #666;
  margin: 5px 0 0;
}

/* Quick Tips */
.tips-list,
.responsibilities-list {
  list-style: none;
  padding: 0;
}

.tips-list li,
.responsibilities-list li {
  margin: 8px 0;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.tips-list i,
.responsibilities-list i {
  margin-right: 10px;
  color: #28c76f;
}

/* Responsive */
@media (max-width: 768px) {
  .principles-container,
  .threats-container {
    flex-direction: column;
  }
}
</style>
