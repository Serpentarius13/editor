<template>
  <section class="editor">
    <StructureList :structures="structuresRef" />
    <EditorForm
      :selected-structure="selectedStructure"
      :handle-save="saveUpdates"
      :handle-update="updateStructure"
      :handle-select="selectStructure"
      :structures="structuresRef"
    />
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { IStructure } from "../types/structure.types";
import { structures } from "../constants/structure.constants";
import { useToast } from "vue-toastification";
import EditorForm from "./EditorForm.vue";
import StructureList from "./StructureList.vue";
import { scrollToStructure } from "../utils/scrollToStructure";

const toast = useToast();

const structuresRef = ref<IStructure[]>(structures);

const selectedStructure = ref<IStructure | null>(null);

onMounted(() => {
  selectedStructure.value = structures[0];
});

function selectStructure(name: IStructure["name"]) {
  const structure = structuresRef.value.find((s) => s.name === name);

  if (!structure) return toast.warning("Structure not found");
  selectedStructure.value = structure;
}

function updateStructure(val: IStructure["value"]) {
  if (!selectedStructure.value) return toast.warning("Select structure");
  selectedStructure.value = { ...selectedStructure.value, value: val };
}

function saveUpdates() {
  const selectedNow = selectedStructure.value;
  if (!selectedNow) return toast.warning("Nothing to save");

  structuresRef.value = structuresRef.value.map((struct) => {
    if (struct.name === selectedNow.name) return selectedNow;
    else return struct;
  });

  scrollToStructure(selectedNow.name);
}
</script>

<style scoped>
.editor {
  display: flex;
  gap: 2rem;
  align-items: center;
}
</style>
