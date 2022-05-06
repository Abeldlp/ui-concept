<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
    store: any;
    filterLabel: string;
    filterKey: string;
    filterValues: string[];
}>()

const optionsFilter = ref('')
const showOptions = ref(false)

const options = computed(() => {
    return props.filterValues
        .filter((val: any) => { return val.label.toLowerCase().includes(optionsFilter.value.toLowerCase()) })
        .map((val: any) => ({
            label: val.label,
            value: val.value
        }))
})

const removeFromSelected = (selection: string) => {
    props.store.selectedFilters[props.filterKey]
        .splice(props.store.selectedFilters[props.filterKey].indexOf(selection), 1)

}

!(props.filterKey in props.store.selectedFilters) &&
    (props.store.selectedFilters[props.filterKey] = [])

</script>

<template>
    <q-card class="no-shadow">
        <q-card-section class>
            <q-input
                use-chips
                :label="props.filterLabel"
                @focus="showOptions = true"
                v-model="optionsFilter"
                dense
                outlined
            />
            <q-chip
                removable
                dense
                v-for="selected in props.store.selectedFilters[props.filterKey]"
                @remove="removeFromSelected(selected)"
                :label="selected"
            />
        </q-card-section>
        <q-separator v-if="showOptions" />
        <q-card-actions v-if="showOptions" align="left">
            <q-option-group
                v-model="props.store.selectedFilters[props.filterKey]"
                :options="options"
                color="primary"
                type="checkbox"
            />
        </q-card-actions>
        <q-separator v-if="showOptions" />
    </q-card>
</template>
