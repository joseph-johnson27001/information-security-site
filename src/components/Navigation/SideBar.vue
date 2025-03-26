<template>
  <div :class="['sidebar', { collapsed }]">
    <div class="sidebar-title">
      <h1 v-if="!collapsed">InfoSec</h1>
      <i class="fas fa-bars" @click="toggleCollapse"></i>
    </div>
    <ul>
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        :class="{
          active: activeItem === item.name,
          'logout-item': item.name === 'logout',
        }"
        @click="navigateTo(item)"
      >
        <div class="sidebar-icon-container">
          <i :class="item.icon"></i>
        </div>
        <span v-if="!collapsed">{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      activeItem: "whatisinfosec",
      collapsed: false,
      menuItems: [
        {
          name: "whatisinfosec",
          label: "What is InfoSec",
          icon: "fas fa-question-circle",
          path: "/",
        },
        {
          name: "physicalsecurity",
          label: "Physical Security Aspects",
          icon: "fas fa-lock",
          path: "/physicalsecurity",
        },
        {
          name: "confidentialmeetings",
          label: "Confidential Meetings",
          icon: "fas fa-users",
          path: "/confidentialmeetings",
        },
        {
          name: "handlinginfo",
          label: "Handling Information",
          icon: "fas fa-file-alt",
          path: "/handlinginfo",
        },
        {
          name: "usingemail",
          label: "Using Company Email",
          icon: "fas fa-envelope",
          path: "/usingemail",
        },
        {
          name: "usingit",
          label: "Using IT",
          icon: "fas fa-laptop",
          path: "/usingit",
        },
        {
          name: "awayfromoffice",
          label: "Away from the Office",
          icon: "fas fa-road",
          path: "/awayfromoffice",
        },
        {
          name: "reportingincidents",
          label: "Reporting Incidents",
          icon: "fas fa-exclamation-triangle",
          path: "/reportingincidents",
        },
        {
          name: "buyemailcertificate",
          label: "Buy & Email Certificate",
          icon: "fas fa-certificate",
          path: "/buyemailcertificate",
        },
        {
          name: "logout",
          label: "Logout",
          icon: "fas fa-sign-out-alt",
          path: "/logout",
        },
      ],
    };
  },
  methods: {
    navigateTo(item) {
      this.activeItem = item.name;
      this.$router.push(item.path);
    },
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 300px;
  background-color: #25293c;
  color: #fff;
  min-height: 100%;
  max-height: 100vh;
  padding-top: 20px;
  z-index: 10;
  font-size: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 80px;
  padding-top: 30px;
}

.sidebar-title {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-title h1 {
  font-family: "Unica One", sans-serif;
  font-weight: 400;
  margin: 0;
}

.sidebar-title i {
  cursor: pointer;
  font-size: 22px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.sidebar ul li {
  padding: 15px 10px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin: 4px 7px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
  white-space: nowrap;
}

.sidebar ul li:hover {
  background-color: rgba(193, 191, 214, 0.2);
}

.sidebar ul li.logout-item {
  margin-top: auto;
  transition: color 0.3s ease;
}

.sidebar ul li.active {
  background: linear-gradient(270deg, rgba(255, 140, 0, 0.7), rgb(255, 87, 34));
  color: white;
}

.sidebar ul li i {
  margin-right: 10px;
  margin-left: 5px;
  font-size: 16px;
}

.sidebar ul li.active i {
  color: white;
}

.sidebar.collapsed ul li,
.sidebar.collapsed .sidebar-title {
  justify-content: center;
}

.sidebar.collapsed ul li i {
  margin: 0;
  padding: 10px;
  font-size: 18px;
}

.sidebar-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
}

.sidebar-icon-container i {
  font-size: 18px;
}

@media (max-width: 699px) {
  .sidebar,
  .sidebar.collapsed {
    display: none;
  }
}
</style>
