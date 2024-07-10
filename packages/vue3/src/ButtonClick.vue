<template>
  <button @click="handleClick">Cliquez-moi -----------------------------------------------</button>
</template>

<script setup lang="ts">
const emit = defineEmits(["child-clicked"]);

function handleClick() {
  emit("child-clicked");
}
</script>
