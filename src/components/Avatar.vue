<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
const props = defineProps<{
    text: string;
}>()

const nameInitials: ComputedRef<string> = computed(() => {
    return props.text.split(' ').map((word: string) => word[0].toUpperCase()).join('')
})
</script>

<template>
    <q-item>
        <q-item-section side>
            <q-avatar size="20px" color="primary" text-color="white">{{ nameInitials }}</q-avatar>
        </q-item-section>
        <q-item-section>
            <q-item-label>{{ props.text }}</q-item-label>
        </q-item-section>
    </q-item>
</template>
