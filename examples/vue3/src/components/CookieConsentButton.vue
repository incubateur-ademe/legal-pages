<script setup lang="ts">
const emit = defineEmits(['childClicked'])

function handleClick () {
  emit('childClicked')
}
</script>

<template>
  <button @click="handleClick">
    CLICK
  </button>
</template>
