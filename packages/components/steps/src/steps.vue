<template>
  <div class="t-steps">
    <slot></slot>
  </div>
</template>
<script setup>
import { onMounted, provide, ref, getCurrentInstance, computed } from "vue";
import { StepsProps } from "./steps";

const props = defineProps(StepsProps);

defineOptions({
  name: "t-steps",
});

const stepsUids = ref([]);
const active = computed(() => props.active);

onMounted(() => {
  getStepUids();
});

const getStepUids = () => {
  const instance = getCurrentInstance();
  const defaultSlot = instance.subTree.children.find((t) => t.key === "_default");
  if (defaultSlot) {
    stepsUids.value = defaultSlot.children
      .filter((vnode) => vnode.type.name === "t-step")
      .map((v) => v.component.uid);
  }
};

provide("stepsUids", stepsUids);
provide("getStepUids", getStepUids);
provide("active", active);
provide("align", props.align);
</script>
