<template>
  <div class="info-page">
    <div class="heading">{{ title }}</div>

    <!-- Introduction -->
    <section class="intro-section">
      <div class="intro-card-container">
        <div class="card">
          <div class="card-content">
            <p>
              Technology is essential for business operations, but using company
              devices and systems comes with responsibilities to protect
              information and ensure security against threats like viruses and
              misuse.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Rules Section -->
    <section class="rules-section">
      <div class="card-container">
        <div class="card" v-for="rule in rules" :key="rule.title">
          <div
            class="icon-container"
            :style="{ backgroundColor: rule.bgLight }"
          >
            <i :class="rule.icon" :style="{ color: rule.bgDark }"></i>
          </div>
          <div class="card-content">
            <h3>{{ rule.title }}</h3>
            <ul>
              <li v-for="point in rule.points" :key="point">- {{ point }}</li>
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
          <img src="resigned.jpg" alt="Story image" class="story-image" />
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
  name: "UsingIT",
  data() {
    return {
      title: "Using Company Technology",
      story: [
        "In 2007 the head of the UK’s Tax ministry resigned after it was revealed that two CDs containing the personal details of 25 million Britons had been 'lost in the post'.",
        "The disks, which were password protected but not encrypted, contained names, addresses, dates of birth, National Insurance numbers, and bank account details.",
        "A junior employee apparently posted the discs following a request from another government department.",
        "This event highlighted the importance of protecting sensitive information and ensuring that data is properly encrypted and securely handled, especially when using removable media.",
      ],
      rules: [
        {
          title: "Using Company Technology – Viruses and Malware",
          points: [
            "Do not disable any malicious software detection application running on company devices.",
            "Do not knowingly introduce a virus or other malicious software to the company's infrastructure.",
            "Report any abnormal behavior of company ICT equipment to the Help Desk.",
            "Ensure your devices are connected to the corporate network for regular updates of anti-virus software.",
          ],
          icon: "fas fa-virus",
          bgLight: "#d9f0ff",
          bgDark: "#1e88e5",
        },
        {
          title: "Using Company Technology – Acceptable Use of the Internet",
          points: [
            "Internet access is for business purposes; personal use should not interfere with work performance.",
            "You may not use the Internet for illegal activities, harassment, financial gain, or accessing inappropriate content.",
            "Do not use the Internet to communicate political views or access unauthorized data or systems.",
          ],
          icon: "fas fa-network-wired",
          bgLight: "#eafcd4",
          bgDark: "#28c76f",
        },
        {
          title: "Using Company Technology – Removable Media",
          points: [
            "Do not send sensitive data through removable media without encryption.",
            "Always use encrypted disks or drives when transferring sensitive information.",
            "Ensure that sensitive data on removable media is handled with the same care as in any other medium.",
          ],
          icon: "fas fa-hdd",
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
