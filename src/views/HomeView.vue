<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import Avatar from '../components/Avatar.vue'
import TableHeader from '../components/TableHeader.vue'

interface Column {
    name: string;
    label: string;
    field: string | ((row: any) => any);
    required?: boolean;
    align?: "left" | "right" | "center";
    sortable?: boolean;
    sort?: (a: any, b: any, rowA: any, rowB: any) => number;
    sortOrder?: "ad" | "da";
    format?: (val: any, row: any) => any;
    style?: string | ((row: any) => string);
    classes?: string | ((row: any) => string);
    headerStyle?: string;
    headerClasses?: string;
}

const selectedRows: Ref<Column[]> = ref([])
const filter: Ref<string> = ref('')

const columns: Column[] = [
    {
        name: 'name',
        label: 'Name',
        field: 'name',
        required: true,
        align: 'left',
        sortable: true,
        sortOrder: 'ad'
    },
    {
        name: 'email',
        required: true,
        label: 'Email',
        align: 'left',
        field: 'email',
        sortable: true
    },
    {
        name: 'status',
        required: true,
        label: 'Status',
        align: 'left',
        field: 'status',
        sortable: true
    },
]

const rows = [
    {
        name: 'Abel DLP',
        email: 'a.delapaz@presspage.com',
        status: 'done',
        follow_up: true
    },
    {
        name: 'Aggelos Balatsoukas',
        email: 'a.balatsoukas@presspage.com',
        status: 'todo',
        follow_up: false
    },
    {
        name: 'Tim Tempel',
        email: 't.vantempel@presspage.com',
        status: 'done',
        follow_up: true
    },
    {
        name: 'Daan Schoone',
        email: 'd.schoone@presspage.com',
        status: 'todo',
        follow_up: false
    },
    {
        name: 'Vincent Breugel',
        email: 'v.breugel@presspage.com',
        status: 'todo',
        follow_up: false
    },
    {
        name: 'Vincent Breugel',
        email: 'v.breugel@presspage.com',
        status: 'todo',
        follow_up: false
    },
]
</script>

<template>
    <main>
        <div class="q-pa-md">
            <!--TABLE-->
            <q-table
                title="Enquiries"
                :rows="rows"
                :columns="columns"
                row-key="name"
                selection="multiple"
                v-model:selected="selectedRows"
            >
                <!--TABLE INPUT FIELD AND FILTERS-->
                <template v-slot:top-left>
                    <div style="display: flex; align-items: center;">
                        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                            <template v-slot:append>
                                <q-icon name="search" />
                            </template>
                        </q-input>
                        <span>Filters</span>
                    </div>
                </template>

                <!--TABLE HEADERS-->
                <template v-slot:header="props">
                    <q-tr :props="props">
                        <q-th v-for="col in props.cols" :key="col.name" :props="props">
                            <TableHeader :text="col.label" />
                        </q-th>
                    </q-tr>
                </template>

                <!--TABLE BODY-->
                <template v-slot:body="props">
                    <q-tr :props="props">
                        <q-td v-for="col in props.cols" :key="col.name">
                            <template v-if="col.name === 'name'">
                                <Avatar :text="col.value" />
                            </template>
                            <template v-else-if="col.name === 'status'">
                                <q-badge v-if="col.value === 'todo'" color="orange" outline>{{ col.value }}</q-badge>
                                <q-badge v-if="col.value === 'done'" color="primary" outline>{{ col.value }}</q-badge>
                            </template>
                            <template v-else>{{ col.value }}</template>
                        </q-td>
                    </q-tr>
                </template>

                <!--END TABLE-->
            </q-table>
        </div>
        <p>Selected: {{ JSON.stringify(selectedRows) }}</p>
    </main>
</template>
