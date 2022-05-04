<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
    store: any
    filterKey: string;
    filterValues: string[]
}>()

const optionsFilter = ref('sub')

const options = computed(() => {
    return props.filterValues
        .filter((val: string) => { return val.toLowerCase().includes(optionsFilter.value.toLowerCase()) })
        .map((val: string) => ({
            label: val,
            value: val
        }))
})

!(props.filterKey in props.store.selectedFilters) &&
    (props.store.selectedFilters[props.filterKey] = [])

</script>

<template>
    <q-input v-model="optionsFilter" dense outlined />
    <q-option-group
        v-model="props.store.selectedFilters[props.filterKey]"
        :options="options"
        color="primary"
        type="checkbox"
    />
</template>
