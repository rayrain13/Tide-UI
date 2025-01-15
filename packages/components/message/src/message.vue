<template>
  <div class="t-message" :class="`t-message__${type}`">
    <i :class="`t-icon icon-${MESSAGE_ICON_NAME[type]}`"></i>
    <span class="t-message__text">{{ message }}</span>
    <i class="t-icon icon-close-bold t-message_close_icon" v-if="showClose" @click="close"></i>
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue";
import { Props } from "./message";

defineProps(Props);

const emit = defineEmits(["close"]);

const MESSAGE_ICON_NAME = {
  success: "success-filling",
  info: "prompt-filling",
  warning: "warning-filling",
  error: "delete-filling",
};

const instance = getCurrentInstance();

const close = () => {
  emit("close", instance.vnode.el.parentElement);
};
</script>
