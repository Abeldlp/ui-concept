<script setup lang="ts">
const props = defineProps<{
    text?: string;
}>()
</script>

<template>
    <p>{{ props.text }}</p>
</template>
