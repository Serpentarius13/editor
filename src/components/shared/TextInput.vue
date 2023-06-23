<template>
  <input type="text" class="text-input" v-model="model" />
</template>

<script setup lang="ts">
const model = defineModel<string>({ required: false });
</script>

<style scoped>
.text-input {
  padding: 1rem;
}
</style>
