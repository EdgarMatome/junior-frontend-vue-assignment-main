<template>
  <div class="base-input">
    <input
      :type="type"
      :value="modelValue"
      @input="onInput"
      :placeholder="placeholder"
      :required="required"
      :class="{'input-error': error}"
    />
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseInput',
  props: {
    modelValue: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
  },
  methods: {
    onInput(event: Event) {
      const target = event.target as HTMLInputElement;
      this.$emit('update:modelValue', target.value);
    }
  }
});
</script>

<style scoped>
.base-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.base-input input {
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1.53px solid var(--color-border);
  border-radius: var(--border-radius-m);
  font-size: 15px;
}

.base-input .input-error {
  border-color: var(--color-label-error-message);
}

.base-input .error-message {
  color: var(--color-label-error-message);
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
</style>
