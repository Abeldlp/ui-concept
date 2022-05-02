<script setup lang="ts">
import Avatar from '@/components/Avatar.vue'
import type { Enquiry, Column } from '@/entities'
import type { Ref } from 'vue'
import { ref } from 'vue'
import { useContactStore } from '@/stores/contacts'
import TableHeaderCell from '@/components/TableHeaderCell.vue'

const props = withDefaults(defineProps<{
    rows: Enquiry[];
    columns: Column[];
    advanced: boolean;
    rowSelection: any[];
    loading?: boolean;
}>(), {
    advanced: false,
    loading: false,
})

const contactStore = useContactStore()
const selectedFilters: Ref<string[]> = ref([])

const getSelectedString = (): string => {
    return contactStore.selectedContacts.length + ' contacts selected'
}

</script>

<template>
    <q-table
        :columns="props.columns"
        :filter="contactStore.filterText"
        :loading="contactStore.loading"
        :rows-per-page-options="[5, 10, 20, 50]"
        :rows="props.rows"
        @request="contactStore.handleTableChange"
        color="primary"
        no-data-label="No data found"
        rows-per-page-label="Per page"
        :selected-rows-label="getSelectedString"
        row-key="name"
        selection="multiple"
        title="Enquiries"
        v-model:pagination="contactStore.pagination"
        v-model:selected="contactStore.selectedContacts"
        separator="none"
    >
        <!--TABLE INPUT FIELD AND FILTERS-->
        <template v-if="props.advanced" v-slot:top-left>
            <div style="display: flex; align-items: center;">
                <q-input
                    borderless
                    dense
                    debounce="300"
                    outlined
                    v-model="contactStore.filterText"
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
                <q-btn
                    flat
                    style="margin-left: 15px;"
                    color="primary"
                    v-if="contactStore.selectedContacts.length > 0"
                    @click="contactStore.selectedContacts = []"
                >
                    <q-icon name="clear" size="15px" style="margin-right: 5px" />clear selection
                </q-btn>
            </div>
        </template>

        <!--TABLE HEADERS-->
        <template v-slot:header="props">
            <q-tr :props="props">
                <q-th style="width: 20px">
                    <q-checkbox v-model="props.selected" />
                </q-th>
                <q-th v-for="col in props.cols" :key="col.name" :props="props">
                    <TableHeaderCell :text="col.label" :column="col.name" />
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

<style lang="scss" scoped>
.q-table {
    tbody tr:nth-child(odd) {
        background: #fbfcfe;
    }
    .selected {
        background-color: #edf2fc !important;
    }
}
</style>
