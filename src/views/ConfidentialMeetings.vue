<template>
  <div class="info-page">
    <div class="heading">{{ title }}</div>

    <!-- Introduction -->
    <section class="intro-section">
      <div class="intro-card-container">
        <div class="card">
          <div class="card-content">
            <p>
              Confidential meetings are crucial for protecting sensitive
              information within an organization. Whether it's a strategic
              planning session or a sensitive negotiation, maintaining
              confidentiality ensures that business operations remain secure and
              that proprietary information stays protected from external
              threats.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Practices -->
    <section class="practices-section">
      <div class="card-container">
        <div class="card" v-for="practice in practices" :key="practice.name">
          <div
            class="icon-container"
            :style="{ backgroundColor: practice.bgLight }"
          >
            <i :class="practice.icon" :style="{ color: practice.bgDark }"></i>
          </div>
          <div class="card-content">
            <h3>{{ practice.name }}</h3>
            <ul>
              <li v-for="point in practice.points" :key="point">
                - {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Story Section -->
    <section class="story-section">
      <div class="card">
        <div class="story-image-container">
          <img
            src="conference.jpg"
            alt="Glass Meeting Room"
            class="story-image"
          />
        </div>
        <div class="story-text">
          <p v-for="paragraph in story" :key="paragraph">{{ paragraph }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ConfidentialMeetings",
  data() {
    return {
      title: "Confidential Meetings",
      story: [
        "Gary was sure the company was going to be taken over by its main rival.",
        "He’d asked about it at a staff council meeting, but the managers had denied any knowledge of such a move and had said staff would be notified at the right time if a take-over seemed likely.",
        "One afternoon when walking past one of the office meeting rooms, Gary noticed through the window that the presentation being projected onto the meeting room screen included the competitor’s logo.",
        "On returning to his desk, Gary checked his boss’s online calendar, which showed a meeting for all the Directors entitled ‘Take Over Planning’ with conference call details.",
        "Gary dialled the conference call and covertly recorded the meeting on his mobile phone.",
      ],
      practices: [
        {
          name: "Sending Invitations",
          icon: "fas fa-envelope-open-text",
          points: [
            "Mark sensitive meetings as private if possible.",
            "If not possible, don’t put meeting details in the title—advise invitees separately.",
            "Don’t include conference call details in the invite—send via email instead.",
          ],
          bgLight: "#d9f0ff",
          bgDark: "#1e88e5",
        },
        {
          name: "Before the Meeting",
          icon: "fas fa-door-closed",
          points: [
            "Turn off unneeded conference call equipment.",
            "Ensure visual aids like whiteboards and screens are not visible outside the room.",
          ],
          bgLight: "#eafcd4",
          bgDark: "#28c76f",
        },
        {
          name: "During the Meeting",
          icon: "fas fa-microphone-alt-slash",
          points: [
            "Be cautious of who is listening on a call—others may have joined unknowingly.",
            "Use mute instead of whispering—modern microphones adjust volume automatically.",
            "Be aware that mobile phones can easily record conversations.",
          ],
          bgLight: "#ffeedf",
          bgDark: "#ff9800",
        },
        {
          name: "Taking a Break",
          icon: "fas fa-coffee",
          points: [
            "Take all sensitive information with you—locking the room is not enough.",
            "Be mindful of what caterers or staff might see when entering the room.",
          ],
          bgLight: "#f5e0ff",
          bgDark: "#9c27b0",
        },
        {
          name: "Ending the Meeting",
          icon: "fas fa-trash-alt",
          points: [
            "Ensure the next meeting’s attendees don’t see confidential content.",
            "Erase presentations from shared devices and wipe whiteboards.",
            "Shred flipchart sheets—don’t just throw them in the bin.",
          ],
          bgLight: "#ffe0e0",
          bgDark: "#e53935",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-container {
  grid-template-columns: repeat(2, 1fr);
}

.story-section .card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.story-image-container {
  margin-right: 20px;
}

.story-image {
  width: 100%;
  max-height: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  float: left;
  margin-right: 20px;
}

.story-text {
  flex: 1;
  overflow: hidden;
}

@media (max-width: 1200px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .story-section .card {
    flex-direction: column;
    align-items: flex-start;
  }

  .story-image-container {
    width: 100%;
    margin-bottom: 10px;
  }

  .story-image {
    max-height: 400px;
  }
}
</style>
