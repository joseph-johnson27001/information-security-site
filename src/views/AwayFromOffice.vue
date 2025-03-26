<template>
  <div class="info-page">
    <div class="heading">{{ title }}</div>

    <!-- Introduction -->
    <section class="intro-section">
      <div class="intro-card-container">
        <div class="card">
          <div class="card-content">
            <p>
              When working away from the office, whether at home or in public
              places, maintaining the security of company information is
              critical. You must follow specific guidelines to ensure that
              sensitive data remains protected at all times.
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

    <!-- Story Section with Image -->
    <section class="story-section">
      <div class="card">
        <!-- Image Placeholder -->
        <div class="story-image-container">
          <!-- Add a photo for the story -->
          <img src="teacher.jpg" alt="Story image" class="story-image" />
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
  name: "AwayFromOffice",
  data() {
    return {
      title: "Away from the Office",
      story: [
        "Emily worked for a government organisation within the education sector. She was struggling to meet a tight deadline for the completion of a confidential report for her bosses that would recommend sweeping changes to Teachers' employment terms and conditions. To make sure she met the deadline Emily worked on the report in her own time at home over the weekend.",
        "Emily’s young son Charlie also had some ‘homework’ to complete for school. So that she could keep an eye on him Emily made Charlie do his work next to her whilst she worked.",
        "On Monday morning Emily was running late and needed to hurry Charlie along or he would miss the school bus.",
        "Charlie grabbed his homework from the table and quickly headed off to school.",
        "Later that week Charlie’s teacher Theresa was also working at home, marking schoolwork. When she came to Charlie’s she was very interested to find a couple of pages of Emily’s report.",
        "Theresa was not only a teacher, but also the local union organiser and her husband a prominent anti-government journalist.",
      ],
      rules: [
        {
          title: "Working at Home",
          points: [
            "Under normal circumstances you should not work with sensitive company information at home. Check with your line manager if you believe you need to and make sure you are aware of the current company guidance and policies on keeping the information secure.",
            "Make sure you dispose of paper documents securely. Don’t just throw them in the trash. If necessary, take them back to the office and dispose of them there.",
            "Don’t leave information lying around for others, even family and friends, to see. If possible, lock it away when it’s not needed.",
            "If you’re talking on the phone about sensitive company matters, be aware of who may be able to hear you.",
          ],
          icon: "fas fa-home",
          bgLight: "#ffedc4",
          bgDark: "#ff9800",
        },
        {
          title: "Using Non-Company IT",
          points: [
            "Do not use personal or home computers to undertake company work unless you have permission from your line manager.",
            "Do not use non-company email accounts to transfer sensitive company information.",
            "Never access company email or computer systems from publicly available computers.",
            "Never use unencrypted Internet access points to send or receive company information. Always use the company VPN system.",
            "Never use hotel or conference centre telephones when discussing sensitive company business.",
          ],
          icon: "fas fa-laptop",
          bgLight: "#cce7ff",
          bgDark: "#1e88e5",
        },
        {
          title: "Working in Public Places",
          points: [
            "Make sure your laptop screen is not visible to others.",
            "Be equally cautious with your phone or other mobile devices.",
            "Ensure no hardcopy information is on display.",
            "Check you haven't left anything behind when you leave.",
            "Don’t dispose of any documents in public places. If necessary, keep the information until it can be securely disposed of at the office.",
          ],
          icon: "fas fa-train",
          bgLight: "#f0f9ff",
          bgDark: "#42a5f5",
        },
        {
          title: "Loose Talk",
          points: [
            "Be careful about what you say and where you say it. If someone who does not need to know overhears you they could repeat the information as gossip or pass it to others, including the media.",
            "It could discourage current or potential customers or cause harm to the organization's reputation.",
            "Avoid talking in public about business matters. If you have no other option, always be aware that you may be overheard.",
            "Take care when using your mobile phone.",
          ],
          icon: "fas fa-comments",
          bgLight: "#ffccff",
          bgDark: "#ab47bc",
        },
        {
          title: "Staying in Hotels on Business",
          points: [
            "Plan ahead and think about what information you will have with you and how you will need to protect it.",
            "Never leave unencrypted, sensitive company information in a hotel room if you go out. Lock it in the room safe.",
            "Never leave any sensitive company information, in whatever form, in any vehicle parked in a public car park. This includes hotels and conference centres.",
          ],
          icon: "fas fa-hotel",
          bgLight: "#e6f7ff",
          bgDark: "#039be5",
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

.story-text {
  flex: 1;
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

@media (max-width: 1250px) {
  .card-container {
    grid-template-columns: 1fr 1fr;
  }
  .story-section .card {
    flex-direction: column;
  }
}

@media (max-width: 1000px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}
</style>
