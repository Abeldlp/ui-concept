<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import Avatar from '../components/Avatar.vue'
import TableHeader from '../components/TableHeader.vue'
import type { Column } from '../mockData'
import { columns, rows } from '../mockData'

const selected: Ref<Column[]> = ref([])
const filter: Ref<string> = ref('')
const selectedFilters: Ref<string[]> = ref([])

</script>

<template>
    <div class="header">
        <h4>Enquiries</h4>
        <RouterLink to="/about">
            <q-btn color="secondary">Add Enquiry</q-btn>
        </RouterLink>
    </div>
    <main>
        <div class="q-pa-md">
            <!--TABLE-->
            <q-table
                title="Enquiries"
                :rows="rows"
                :columns="columns"
                :filter="filter"
                row-key="name"
                selection="multiple"
                v-model:selected="selected"
                no-data-label="No data found"
            >
                <!--TABLE INPUT FIELD AND FILTERS-->
                <template v-slot:top-left>
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
                            <template v-else>{{ col.value }}</template>
                        </q-td>
                        <q-td>
                            <q-icon color="red" size="18px" name="delete" />
                        </q-td>
                    </q-tr>
                </template>

                <!--END TABLE-->
            </q-table>
        </div>
        <pre>Selected: {{ selected }}</pre>
    </main>
</template>

<style scoped>
.header {
    margin: 2rem;
    display: flex;
    justify-content: space-between;
}
main {
    margin: 1rem;
}
</style>
