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
        @click="setActive(item.name)"
      >
        <i :class="item.icon"></i>
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
      activeItem: "whatisinfosec", // default active item
      collapsed: false,
      menuItems: [
        {
          name: "whatisinfosec",
          label: "What is InfoSec",
          icon: "fas fa-question-circle",
        },
        {
          name: "physicalsecurity",
          label: "Physical Security Aspects",
          icon: "fas fa-lock",
        },
        {
          name: "confidentialmeetings",
          label: "Confidential Meetings",
          icon: "fas fa-users",
        },
        {
          name: "handlinginfo",
          label: "Handling Information",
          icon: "fas fa-file-alt",
        },
        {
          name: "usingemail",
          label: "Using Company Email",
          icon: "fas fa-envelope",
        },
        { name: "usingit", label: "Using IT", icon: "fas fa-laptop" },
        {
          name: "awayfromoffice",
          label: "Away from the Office",
          icon: "fas fa-road",
        },
        {
          name: "reportingincidents",
          label: "Reporting Incidents",
          icon: "fas fa-exclamation-triangle",
        },
        {
          name: "buyemailcertificate",
          label: "Buy & Email a Certificate",
          icon: "fas fa-certificate",
        },
        { name: "logout", label: "Logout", icon: "fas fa-sign-out-alt" },
      ],
    };
  },
  methods: {
    setActive(item) {
      this.activeItem = item;
    },
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 260px;
  background-color: #25293c;
  color: #fff;
  min-height: 100%;
  max-height: 100vh;
  padding-top: 20px;
  position: relative;
  z-index: 10;
  font-size: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s ease;
  overflow-y: scroll;
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
}

.sidebar ul li {
  padding: 20px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin: 4px 7px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
  white-space: nowrap;
}

.sidebar ul li.logout-item {
  margin-top: auto;
  transition: color 0.3s ease;
}

.sidebar ul li.logout-item:hover i {
  color: #ff4d4f;
}

.sidebar ul li.active {
  background: linear-gradient(270deg, rgba(255, 140, 0, 0.7), rgb(255, 87, 34));
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

@media (max-width: 699px) {
  .sidebar,
  .sidebar.collapsed {
    display: none;
  }
}
</style>
