<script setup lang="ts">
import Avatar from '@/components/Avatar.vue'
import TableHeader from '@/components/TableHeader.vue'
import type { Enquiry, Column } from '@/entities'
import type { Ref } from 'vue'
import { ref } from 'vue'
import { useEnquiriesStore } from '@/stores/enquiries'
import { DateTime } from 'luxon'


const props = withDefaults(defineProps<{
    rows: Enquiry[];
    columns: Column[];
    advanced: boolean;
}>(), {
    advanced: false
})

const store = useEnquiriesStore()
const selectedFilters: Ref<string[]> = ref([])

const filter: Ref<string> = ref('')

const getDateTime = (dateString: string): string => {
    const dt = DateTime.fromFormat(dateString, 'dd/MM/yyyy')

    console.log(dt)
    if (dt.isValid) {
        return dt.toLocaleString(DateTime.DATETIME_MED);
    } else {
        return '-'
    }
}

</script>

<template>
    <q-table
        title="Enquiries"
        :rows="props.rows"
        :columns="props.columns"
        :filter="filter"
        row-key="name"
        selection="multiple"
        v-model:selected="store.selectedEnquiries"
        :rows-per-page-options="[5, 10, 20, 50, 0]"
        no-data-label="No data found"
    >
        <!--TABLE INPUT FIELD AND FILTERS-->
        <template v-if="props.advanced" v-slot:top-left>
            <div style="display: flex; align-items: center;">
                <q-input
                    borderless
                    dense
                    debounce="300"
                    outlined
                    v-model="filter"
                    placeholder="Filter by name, email..."
                >
                    <template v-slot:append>
                        <q-icon name="search" />
                    </template>
                </q-input>
                <q-select
                    borderless
                    transition-show="jump-up"
                    transition-hide="jump-down"
                    dense
                    fill-input
                    outlined
                    use-chips
                    auto-width
                    :stack-label="false"
                    v-model="selectedFilters"
                    multiple
                    :options="['test1', 'test2']"
                    :label="selectedFilters.length == 0 ? 'Filters' : void 0"
                    style="min-width: 100px; margin-left: 15px;"
                />
            </div>
        </template>

        <!--TABLE HEADERS-->
        <template v-slot:header="props">
            <q-tr :props="props">
                <q-th style="width: 20px">
                    <q-checkbox v-model="props.selected" />
                </q-th>
                <q-th v-for="col in props.cols" :key="col.name" :props="props">
                    <TableHeader :text="col.label" />
                </q-th>
                <q-th />
            </q-tr>
        </template>

        <!--TABLE BODY-->
        <template v-slot:body="props">
            <q-tr :props="props">
                <q-td>
                    <q-checkbox v-model="props.selected" />
                </q-td>
                <q-td v-for="col in props.cols" :key="col.name" :props="props">
                    <template v-if="col.name === 'name'">
                        <Avatar :text="col.value" />
                    </template>
                    <template v-else-if="col.name === 'status'">
                        <q-badge v-if="col.value === 'todo'" color="orange" outline>{{ col.value }}</q-badge>
                        <q-badge v-if="col.value === 'done'" color="primary" outline>{{ col.value }}</q-badge>
                    </template>
                    <template v-else-if="col.name === 'priority'">
                        <q-chip
                            v-if="col.value === 'High'"
                            dense
                            color="cyan"
                            icon="keyboard_double_arrow_up"
                            outline
                        >{{ col.value }}</q-chip>
                        <q-chip
                            v-if="col.value === 'Medium'"
                            dense
                            color="green"
                            outline
                            icon="drag_handle"
                        >{{ col.value }}</q-chip>
                        <q-chip
                            v-if="col.value === 'Low'"
                            dense
                            color="primary"
                            outline
                            icon="keyboard_double_arrow_down"
                        >{{ col.value }}</q-chip>
                    </template>
                    <template v-else-if="col.name === 'due_date'">{{ getDateTime(col.value) }}</template>
                    <template v-else>{{ col.value }}</template>
                </q-td>
                <q-td>
                    <q-icon color="red" size="18px" name="delete" />
                </q-td>
            </q-tr>
        </template>

        <!--END TABLE-->
    </q-table>
</template>
