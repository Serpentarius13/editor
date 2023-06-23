<template>
  <ul>
    <li v-for="struct in structures" :key="struct.name">
      Name: {{ struct.name }} <br />
      Value: {{ struct.value }}
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

<style scoped lang="scss"></style>
