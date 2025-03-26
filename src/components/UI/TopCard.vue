<template>
  <div class="top-card">
    <!-- Left Section (Search) -->
    <div class="button-container">
      <button>Take Test</button>
    </div>

    <!-- Right Section (Icons & Profile) -->
    <div class="icon-area">
      <i class="far fa-calendar-check"></i>
      <i class="far fa-comment-alt"></i>
      <i class="far fa-bell notification-icon">
        <span class="notification-dot"></span>
      </i>

      <!-- Profile Image with Online Indicator -->
      <div class="profile">
        <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="User" />
        <span class="online-indicator"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopCard",
  methods: {
    openMobileNav() {
      this.$emit("toggle-mobile-nav");
    },
  },
};
</script>

<style scoped>
.top-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 8px 20px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.button-container button {
  font-family: "Exo 2", sans-serif;
  padding: 15px;
  background-color: #28c76f;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.button-container button:focus {
  outline: none;
}

.icon-area {
  display: flex;
  align-items: center;
  gap: 20px;
}

.icon-area i {
  font-size: 20px;
  cursor: pointer;
  color: #555;
  position: relative;
}

.notification-icon {
  position: relative;
}

.notification-dot {
  width: 8px;
  height: 8px;
  background: #ff4c51;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  right: 0px;
}

.profile {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.profile img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.online-indicator {
  width: 8px;
  height: 8px;
  background: #28c76f;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  right: 0px;
  border: 2px solid white;
}

.fa-bars {
  display: none;
  cursor: pointer;
  font-size: 18px;
}

@media (max-width: 700px) {
  input {
    display: none;
  }
  .fa-search {
    display: none;
  }
  .fa-bars {
    display: block;
  }
}
</style>
