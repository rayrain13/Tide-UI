<template>
  <button
    class="t-button"
    :class="[
      `${size && 't-button--' + size}`,
      `t-button__${type}`,
      { 't-button--icon': icon },
      { 'is-plain': plain },
      { 'is-disabled': disabled || loading },
      { 'is-round': round },
    ]"
    :disabled="disabled || loading"
  >
    <div class="t-button__inner">
      <i v-if="loading" class="t-icon icon-loading"></i>
      <i v-if="icon" :class="['t-icon', `icon-${icon}`]"></i>
      <span v-if="$slots.default">
        <slot />
      </span>
    </div>
  </button>
</template>

<script setup>
import { ButtonProps } from "./button";

defineOptions({
  name: "t-button",
});

defineProps(ButtonProps);
</script>
