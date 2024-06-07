<template>
  <div class="base-input">
    <input
      :type="type"
      :value="modelValue"
      @input="onInput"
      @blur="onBlur"
      :placeholder="placeholder"
      :required="required"
      :class="{ 'input-error': error }"
    />
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInput",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInput(event: Event): void {
      const target = event.target as HTMLInputElement;
      this.$emit("update:modelValue", target.value);
      if (this.type === "email") {
        this.validateEmail(target.value);
      }
    },
    onBlur(): void {
      if (this.type === "email") {
        this.validateEmail(this.modelValue);
      }
    },
    validateEmail(value: string): void {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailPattern.test(value)) {
        this.$emit("update:error", "Invalid email address");
      } else {
        this.$emit("update:error", "");
      }
    },
  },
});
</script>

<style scoped>
.base-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.base-input input {
  width: 500px;
  padding: 0.75rem;
  border: 1.53px solid var(--color-border);
  border-radius: var(--border-radius-m);
  font-size: var(--font-size-m);
}

.base-input .input-error {
  border-color: var(--color-label-error-message);
}

.base-input .error-message {
  color: var(--color-label-error-message);
  font-size: var(--font-size-m);
  margin-top: 8px;
}
</style>
