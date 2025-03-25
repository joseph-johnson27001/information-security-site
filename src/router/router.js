import { createRouter, createWebHistory } from "vue-router";

import WhatIsInfoSec from "../views/WhatIsInfoSec.vue";
import PhysicalSecurity from "../views/PhysicalSecurity.vue";
import ConfidentialMeetings from "../views/ConfidentialMeetings.vue";
import HandlingInformation from "../views/HandlingInformation.vue";
import UsingEmail from "../views/UsingEmail.vue";
import UsingIT from "../views/UsingIT.vue";
import AwayFromOffice from "../views/AwayFromOffice.vue";
import ReportingIncidents from "../views/ReportingIncidents.vue";
import BuyEmailCertificate from "../views/BuyEmailCertificate.vue";

// Define routes
const routes = [
  {
    path: "/",
    name: "whatisinfosec",
    component: WhatIsInfoSec,
  },
  {
    path: "/physicalsecurity",
    name: "physicalsecurity",
    component: PhysicalSecurity,
  },
  {
    path: "/confidentialmeetings",
    name: "confidentialmeetings",
    component: ConfidentialMeetings,
  },
  {
    path: "/handlinginfo",
    name: "handlinginfo",
    component: HandlingInformation,
  },
  {
    path: "/usingemail",
    name: "usingemail",
    component: UsingEmail,
  },
  {
    path: "/usingit",
    name: "usingit",
    component: UsingIT,
  },
  {
    path: "/awayfromoffice",
    name: "awayfromoffice",
    component: AwayFromOffice,
  },
  {
    path: "/reportingincidents",
    name: "reportingincidents",
    component: ReportingIncidents,
  },
  {
    path: "/buyemailcertificate",
    name: "buyemailcertificate",
    component: BuyEmailCertificate,
  },
];

// Create and configure the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
