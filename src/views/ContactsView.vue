<script setup lang="ts">
import { useContactStore } from '@/stores/contacts'
import Table from '@/components/Table.vue'

const contactStore = useContactStore()
contactStore.setRows()

</script>

<template>
    <div class="header">
        <h4>Contacts</h4>
        <q-btn color="secondary">Add Enquiry</q-btn>
    </div>
    <main>
        <div class="q-pa-md">
            <Table :store="contactStore" searching filtering selection-text="contacts selected" />
        </div>
        <pre>Selected: {{ contactStore.selectedRows }}</pre>
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
