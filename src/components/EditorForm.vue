<template>
  <form @submit.prevent="handleSave" class="editor__form">
    <select @input="handleSelectInput">
      <option
        v-for="struct in structures"
        :key="struct.name"
        :value="struct.name"
      >
        {{ struct.name }}
      </option>
    </select>

    <TextInput
      @input="handleTextInput"
      :disabled="!selectedStructure"
      :value="selectedStructure?.value"
    />

    <button :disabled="!selectedStructure">Save</button>
  </form>
</template>

<script setup lang="ts">
import { IStructure } from "../types/structure.types";
import TextInput from "./shared/TextInput.vue";

interface IEditorForm {
  structures: IStructure[];
  selectedStructure: IStructure | null;
  handleSelect: (struct: IStructure["name"]) => void;
  handleUpdate: (val: IStructure["value"]) => void;
  handleSave: () => void;
}

const props = defineProps<IEditorForm>();

function handleTextInput(e: Event) {
  const { value } = e.target as HTMLInputElement;

  props.handleUpdate(value);
}

function handleSelectInput(e: Event) {
  const { value } = e.target as HTMLSelectElement;

  props.handleSelect(value);
}
</script>

<style scoped>
.editor__form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.editor__form > select {
  padding: 1rem;
}
</style>
