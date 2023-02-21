<template>
  <router-view />
</template>

<script setup>
import { onBeforeMount } from "vue";
import { fakeBackend } from "src/helpers";

onBeforeMount(() => {
  fakeBackend()
});
</script>
