<script setup lang="ts">
export interface BaseButtonProps {
  /** Button label */
  label?: string;
  /** Button size */
  size?: "m" | "l";
}

withDefaults(defineProps<BaseButtonProps>(), {
  size: "m",
});
</script>

<template>
  <button
    :data-test-id="$attrs['data-test-id'] || 'button'"
    :class="[$style.root, $style[size], $attrs.disabled && $style.disabled]"
    type="button"
    :aria-label="label"
  >
    <slot>
      <span v-text="label" />
    </slot>
  </button>
</template>

<style module>
.root {
  display: inline-flex;
  max-width: 100%;
  width: 320px;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  color: var(--color-label);
  border: none;
  font-family: inherit;
  font-weight: var(--font-weight-bold);
  display: block;
    margin: 0 auto;

  &:not(.disabled) {
    cursor: pointer;
  }
}

.m {
  height: 32px;
  padding: 0 var(--spacing-s);
  font-size: var(--font-size-m);
  border-radius: var(--border-radius-s);
}

.l {
  height: 48px;
  padding: 0 var(--spacing-m);
  font-size: var(--font-size-l);
  border-radius: var(--border-radius-m);
}

.disabled {
  opacity: var(--opacity-disabled);
  cursor: not-allowed;
}

button:hover {
  background-color: var(--color-primary-dark);
}
</style>
