<template>
  <div class="info-page">
    <div class="heading">{{ title }}</div>

    <!-- Introduction -->
    <section class="intro-section">
      <div class="intro-card-container">
        <div class="card">
          <div class="card-content">
            <p>{{ introduction }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Physical Security Principles -->
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
            <ul>
              <li v-for="point in principle.points" :key="point">
                - {{ point }}
              </li>
            </ul>
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
  name: "PhysicalSecurity",
  data() {
    return {
      title: "Physical Security Aspects",
      introduction:
        "Physical security is an essential aspect of protecting information and assets. Unauthorized access to buildings can lead to information security breaches.",
      principles: [
        {
          name: "Building Security Passes",
          icon: "fas fa-id-badge",
          points: [
            "Unauthorised physical access to our buildings also provides the potential for an information security breach.",
            "Everyone in the building, including visitors, must wear a clearly visible authorized security pass.",
            "Always wear yours when you’re in the office. Remove it when you aren’t.",
            "Notify security immediately if you lose or misplace yours.",
          ],
          bgLight: "#d9f0ff",
          bgDark: "#1e88e5",
        },
        {
          name: "Visitor Management",
          icon: "fas fa-user-check",
          points: [
            "Always notify reception staff about planned visitors and ask them to contact you when your guests arrive.",
            "Always meet your guests in reception.",
            "Never leave your visitors alone. They must not be unaccompanied in the building.",
            "Always accompany your guests to reception when they leave and make sure they have signed out and returned their visitor pass to reception staff.",
          ],
          bgLight: "#eafcd4",
          bgDark: "#28c76f",
        },
        {
          name: "Challenging Strangers",
          icon: "fas fa-exclamation-triangle",
          points: [
            "Stop anyone you see in the office who is not wearing a pass.",
            "If you don’t recognise them, politely ask that they accompany you to reception where their host will be contacted and asked to collect them.",
            "Don’t be confrontational and don’t do this if you’re on your own. Get assistance from security first.",
            "Never allow anyone to tailgate you through an entrance protected by a pass, key or combination.",
          ],
          bgLight: "#ffeedf",
          bgDark: "#ff9800",
        },
      ],
      scenarios: [
        {
          description:
            "In 2010, a journalist gained unauthorized access to a UK government agency by tailgating and was left unchallenged for over an hour. He was only confronted when he started taking photographs.",
          image: "security-pass.jpg",
        },
        {
          description:
            "Employees must ensure that visitor passes are always returned to reception and that guests are never left unattended.",
          image: "office.jpg",
        },
        {
          description:
            "Never allow unauthorized personnel to enter secured areas. Always check for proper identification.",
          image: "security-guard.jpg",
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

@media (max-width: 1200px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}
</style>
