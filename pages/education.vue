<template>
  <div class="education-page">
    <!-- Left: Scrollable Course List -->
    <div class="left-panel">
      <div class="courses-scroll">
        <h2 class="section-heading">Courses</h2>

        <div class="filters">
          <span
            v-for="filter in filters"
            :key="filter"
            :class="['filter', { active: selectedFilter === filter }]"
            @click="selectedFilter = filter"
          >
            {{ filter }}
          </span>
        </div>

        <div class="course-cards">
          <CourseCard
            v-for="course in filteredCourses"
            :key="course.id"
            :course="course"
          />
        </div>
      </div>
    </div>

    <!-- Right: Dynamic Content -->
    <div class="right-panel">
      <div class="content-scroll">
        <h2>Selected Course Content</h2>
        <p>
          This is where detailed content about the selected course will appear.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Aliquam luctus, velit sit amet aliquam facilisis, magna neque faucibus
          arcu.
        </p>
        <p v-for="i in 20" :key="i">More filler content line {{ i }}...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import CourseCard from "~/components/CourseCard.vue";

const filters = ["All", "Active", "Completed"];
const selectedFilter = ref("All");

const courses = ref([
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    description: "Fundamentals of cybersecurity principles and practices.",
    image: "https://picsum.photos/400/300?random=1",
    status: "Active",
  },
  {
    id: 2,
    title: "Network Security",
    description: "Protecting networks from attacks and vulnerabilities.",
    image: "https://picsum.photos/400/300?random=2",
    status: "Completed",
  },
  {
    id: 3,
    title: "Cryptography Basics",
    description: "Understanding encryption, hashing, and digital signatures.",
    image: "https://picsum.photos/400/300?random=3",
    status: "Active",
  },
  {
    id: 4,
    title: "Ethical Hacking",
    description: "Techniques to identify and fix security weaknesses.",
    image: "https://picsum.photos/400/300?random=4",
    status: "Completed",
  },
  {
    id: 5,
    title: "Incident Response",
    description: "How to respond effectively to security breaches.",
    image: "https://picsum.photos/400/300?random=5",
    status: "Active",
  },
  {
    id: 6,
    title: "Security Compliance & Auditing",
    description: "Ensuring systems meet regulatory and policy standards.",
    image: "https://picsum.photos/400/300?random=6",
    status: "Completed",
  },
  {
    id: 7,
    title: "Cloud Security",
    description: "Protecting data and applications in cloud environments.",
    image: "https://picsum.photos/400/300?random=7",
    status: "Active",
  },
  {
    id: 8,
    title: "Malware Analysis",
    description: "Detecting and analyzing malicious software threats.",
    image: "https://picsum.photos/400/300?random=8",
    status: "Completed",
  },
  {
    id: 9,
    title: "Identity and Access Management",
    description: "Controlling user access to systems and data securely.",
    image: "https://picsum.photos/400/300?random=9",
    status: "Active",
  },
  {
    id: 10,
    title: "Penetration Testing",
    description: "Simulated attacks to test system security robustness.",
    image: "https://picsum.photos/400/300?random=10",
    status: "Completed",
  },
]);

const filteredCourses = computed(() => {
  if (selectedFilter.value === "All") return courses.value;
  return courses.value.filter((c) => c.status === selectedFilter.value);
});
</script>

<style scoped>
.education-page {
  display: flex;
  height: 100vh;
  overflow: hidden;
  font-family: system-ui, sans-serif;
}

.left-panel {
  width: 500px;
  background-color: #f9f9f9;
  padding: 0px 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.courses-scroll {
  overflow-y: auto;
  flex-grow: 1;
}

.section-heading {
  font-size: 20px;
  margin-bottom: 12px;
}

.filters {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.filter {
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 4px;
  background: #e0e0e0;
  color: #333;
  font-size: 14px;
}

.filter.active {
  background-color: #c7c5c3;
  font-weight: bold;
}

/* Card container */
.course-cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.right-panel {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 20px;
}

.content-scroll {
  overflow-y: scroll;
  flex-grow: 1;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.content-scroll::-webkit-scrollbar {
  display: none;
}

.courses-scroll {
  overflow-y: auto;
  flex-grow: 1;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.courses-scroll::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
