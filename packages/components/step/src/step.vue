<template>
  <div
    class="t-step"
    :class="{
      is_complete: (currentIndex || 0) <= active - 1,
      is_begining: (currentIndex || 0) === active,
      't-step__center': align === 'center',
      is_last_step: currentIndex === stepsUids.length - 1,
    }"
  >
    <div class="t-step__head">
      <span class="t-step__icon t-icon" :class="`${icon ? 'icon-' + icon : ''}`">
        <template v-if="!slot.icon">{{ icon ? "" : currentIndex + 1 }}</template>
        <slot name="icon" v-else></slot>
      </span>
      <div class="t-step__line" v-if="currentIndex !== stepsUids.length - 1"></div>
    </div>
    <div class="t-step__content">
      <div class="t-step__title">{{ title }}</div>
      <div class="t-step__description">
        {{ description }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, inject, computed, getCurrentInstance, useSlots } from "vue";
import { StepProps } from "./step";

const props = defineProps(StepProps);

defineOptions({
  name: "t-step",
});
const instance = getCurrentInstance();
const stepsUids = inject("stepsUids");
const active = inject("active");
const align = inject("align");
const slot = useSlots();

const currentIndex = computed(() => {
  return stepsUids.value.findIndex((uid) => uid === instance.uid);
});
</script>
