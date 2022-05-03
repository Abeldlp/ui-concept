<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    store: any
    filterKey: string;
    filterValues: string[]
}>()

const options = computed(() => {
    return props.filterValues.map((val: string) => ({
        label: val,
        value: val
    }))
})

!(props.filterKey in props.store.selectedFilters) &&
    (props.store.selectedFilters[props.filterKey] = [])

</script>

<template>
    <q-option-group
        v-model="props.store.selectedFilters[props.filterKey]"
        :options="options"
        color="primary"
        type="checkbox"
    />
</template>
