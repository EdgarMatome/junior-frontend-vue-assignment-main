<template>
  <div v-if="visible" class="notification" :class="type">
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'success' // 'success' or 'error'
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    show():void {
      this.visible = true;
      setTimeout(() => {
        this.visible = false;
      }, 3000);
    }
  }
};
</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px;
  border-radius: 5px;
  color: var(--color-label);
  opacity: 0.9;
  z-index: 1000;
}

.success {
  background-color: var(--color-success-message)
}

.error {
  background-color: var(--color-label-error-message)
}
</style>
