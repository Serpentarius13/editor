<template>
  <ul class="list">
    <li
      v-for="struct in structures"
      :key="struct.name"
      :data-name="struct.name"
    >
      <span> Name:</span> {{ struct.name }} <br />
      <span>Value:</span> {{ struct.value }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { IStructure } from "../types/structure.types";

interface IStructureList {
  structures: IStructure[];
}

defineProps<IStructureList>();
</script>

<style scoped>
.list {
  max-height: 600px;
  max-width: 300px;
  overflow-y: auto;
  padding: 3rem;

  direction: rtl;

  scroll-behavior: smooth;

  transition: 1s all ease;
}

.list li {
  direction: ltr;
  word-break: break-all;
  border-bottom: 1px solid white;
  padding: 1rem 0;
  list-style: none;
}

.list li:last-child {
  border-bottom: none;
}

.list li span {
  font-style: bold;
  font-size: 1.2rem;
  color: cyan;
}
</style>
