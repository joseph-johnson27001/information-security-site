<template>
  <div class="info-page">
    <div class="heading">{{ title }}</div>

    <!-- Introduction -->
    <section class="intro-section">
      <div class="intro-card-container">
        <div class="card">
          <div class="card-content">
            <p>
              Proper classification, labelling, and handling of information is
              critical for safeguarding sensitive data within an organization.
              Understanding the different levels of sensitivity and ensuring
              that information is handled according to its classification helps
              protect against unauthorized access, misuse, and accidental
              exposure.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Practices Section -->
    <section class="best-practices-section">
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
          <!-- Add a photo for the story -->
          <img src="exam-results.jpg" alt="Story image" class="story-image" />
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
  name: "HandlingInformation",
  data() {
    return {
      title: "Handling Information",
      story: [
        "In 2010 a check by a department of a European government revealed that hundreds of documents containing sensitive personal information of thousands of citizens were missing.",
        "Although, the archives ‘lock-up cage’ contained the correct number of boxes of papers many incorrectly contained non-sensitive information that should have been disposed of months previously.",
        "The resultant investigation concluded that, as the boxes were not clearly marked, some containing sensitive information had been mistakenly sent for re-cycling.",
        "If you receive business information at work you are responsible for looking after it securely, up to and including its disposal.",
        "However, the level of security you must apply to information will vary depending on its sensitivity. For example, you would be more rigorous when looking after staff personnel records than with a list of sandwiches available for lunch.",
        "As the level of protection required is not always as obvious, the labelling of documents and other information assets to clearly show their sensitivity classification (often also referred to as protective marking) is mandated across the organisation so that those receiving information immediately understand how they should handle and protect it.",
        "For example, James Bond presumably handles information with a sensitivity classification of 'Top Secret'.",
        "Consequently, when creating information you must clearly label it to show its sensitivity classification and when receiving information you must handle it, including storing, sharing and disposing of it, as per the company’s Data Classification, Labelling and Handling Policy and associated guidelines.",
      ],
      practices: [
        {
          name: "Classifying Information",
          icon: "fas fa-tag",
          points: [
            "Label sensitive information according to its classification level.",
            "Ensure documents are marked clearly to reflect their sensitivity (e.g., Confidential, Top Secret).",
          ],
          bgLight: "#d9f0ff",
          bgDark: "#1e88e5",
        },
        {
          name: "Handling Information",
          icon: "fas fa-hand-holding",
          points: [
            "Ensure information is stored securely at all times.",
            "Use encrypted methods when sharing sensitive information.",
            "Dispose of sensitive information properly by shredding or securely deleting digital files.",
          ],
          bgLight: "#eafcd4",
          bgDark: "#28c76f",
        },
        {
          name: "Disposal of Information",
          icon: "fas fa-trash-alt",
          points: [
            "Do not dispose of confidential information in regular bins.",
            "Follow company procedures for the proper disposal of sensitive information.",
            "Always shred physical documents containing sensitive information.",
          ],
          bgLight: "#ffeedf",
          bgDark: "#ff9800",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.story-section .card {
  display: flex;
  flex-wrap: wrap;
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
}

@media (max-width: 1200px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 1100px) {
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
