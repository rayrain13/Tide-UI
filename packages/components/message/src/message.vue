<template>
    <div class="t-message">
      <i :class="t-icon icon-success-filling"></i>
      <span class="t-message__text">{{ message }}</span>
      <i class="t-icon icon-close-bold t-message_close_icon" @click="close"></i>
    </div>
  </template>
  
  <script setup>
  import { Props } from "./message";
  
  defineProps(Props);
  
  const close = () => {};
  </script>
  