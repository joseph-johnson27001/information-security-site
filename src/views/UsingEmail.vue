<template>
  <div class="info-page">
    <div class="heading">{{ title }}</div>

    <!-- Introduction -->
    <section class="intro-section">
      <div class="intro-card-container">
        <div class="card">
          <div class="card-content">
            <p>
              Email is a crucial tool for communication within an organization,
              but it also comes with its own set of risks and responsibilities
              when used improperly
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
          <img src="mistake.jpg" alt="Story image" class="story-image" />
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
  name: "UsingEmail",
  data() {
    return {
      title: "Using Company Email",
      story: [
        "Laurent worked in Customer Claims for a large insurance company.",
        "For a long time he’d been dealing with a very difficult customer who had a track record of complaining and making dubious claims.",
        "Following one particularly demanding email Laurent decided it was time to ask his boss for help and, thinking that he was forwarding the email, wrote……..",
        "“ Phillipe - I’ve been dealing with this ignorant fool for the past six months. He just doesn’t get that he’s not entitled to a pay out. I’m sure he is just trying to scam us. He’s a moron if he thinks we’re going to fall for this rubbish”",
        "Unfortunately for Laurent, in his anger, he’d clicked on ‘Reply’ instead of ‘Forward’",
      ],
      rules: [
        {
          title: "Using Company Email – Writing Emails",
          points: [
            "Never write anything inflammatory that may insult or upset another person.",
            "Messages sent from the company’s email systems are official communications.",
            "Do not assume that emails are private.",
            "If you have to write something sensitive consider putting it in an encrypted email attachment.",
          ],
          icon: "fas fa-envelope",
          bgLight: "#d9f0ff",
          bgDark: "#1e88e5",
        },
        {
          title: "Using Company Email – Addressing Emails",
          points: [
            "Be careful when selecting a recipient from the company’s Email Address Book.",
            "Double check who you’re sending an email containing sensitive information to.",
            "If you’re going to forward a long email trail, make sure there is nothing they shouldn’t see.",
          ],
          icon: "fas fa-users",
          bgLight: "#eafcd4",
          bgDark: "#28c76f",
        },
        {
          title: "Using Company Email – Sending Attachments",
          points: [
            "ALL sensitive information sent externally by email must be in an encrypted attachment.",
            "When encrypting attachments, always check that the recipients have compatible decryption software.",
            "Never provide the decrypting password by email.",
            "Never use a password more than once.",
          ],
          icon: "fas fa-paperclip",
          bgLight: "#ffeedf",
          bgDark: "#ff9800",
        },
        {
          title: "Using Company Email – Personal Use",
          points: [
            "Any personal use must not compromise the organization’s security.",
            "Personal use should not be for commercial purposes.",
            "Personal email is subject to the same monitoring as work-related email.",
            "Personal use of email is a privilege that may be revoked if abused.",
          ],
          icon: "fas fa-user",
          bgLight: "#f1f8ff",
          bgDark: "#42a5f5",
        },
        {
          title: "Using Company Email – Receiving Unsolicited Email",
          points: [
            "Be wary of scams that try to steal personal information or distribute viruses.",
            "Never follow links in spam emails or messages from unknown sources.",
            "Do not open attachments from junk emails.",
            "Contact the Help Desk if your computer displays a security warning.",
          ],
          icon: "fas fa-exclamation-circle",
          bgLight: "#ffd9d9",
          bgDark: "#f44336",
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

@media (max-width: 1300px) {
  .card-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 1100px) {
  .card-container {
    grid-template-columns: 1fr;
  }
  .story-section .card {
    flex-direction: column;
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
