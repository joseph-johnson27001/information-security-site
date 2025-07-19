<template>
  <div class="course-card">
    <img :src="course.image" alt="Course" class="course-image" />

    <div class="card-content">
      <h3 class="course-title">{{ course.title }}</h3>
      <p class="course-description">{{ course.description }}</p>
      <p class="course-status">
        Status:
        <span :class="{ completed: course.status === 'Completed' }">
          {{ course.status }}
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  course: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.course-card {
  display: flex;
  background-color: white;
  border-radius: 8px;
  padding: 10px 5px;
  gap: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.course-image {
  width: 150px;
  height: auto;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
  padding: 5px;
  border-radius: 10px;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.course-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 5px;
}

.course-description {
  font-size: 14px;
  color: #555;
  margin-bottom: 0px;
}

.course-status {
  font-size: 13px;
  font-weight: 500;
  color: #333;
}

.course-status .completed {
  color: green;
}
</style>
