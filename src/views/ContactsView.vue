<script setup lang="ts">
import { useContactStore } from '@/stores/contacts'
import Table from '@/components/Table.vue'

const contactStore = useContactStore()
</script>

<template>
    <div class="header">
        <h4>Contacts</h4>
        <q-btn color="secondary">Add Enquiry</q-btn>
    </div>
    <main>
        <div class="q-pa-md">
            <Table
                :store="contactStore"
                searching
                filtering
                row-redirects-to="contact"
                selection-text="contacts selected"
            />
        </div>
        <q-expansion-item label="Store state" icon="storage">
            <pre>Selected: {{ contactStore.selectedRows }}</pre>
            <pre>Selected-filters: {{ contactStore.selectedFilters }}</pre>
        </q-expansion-item>
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
