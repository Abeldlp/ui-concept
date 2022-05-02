<script setup lang="ts">
import { useContactStore } from '@/stores/contacts'
import Table from '@/components/Table.vue'

const store = useContactStore()

store.setContacts()
</script>

<template>
    <div class="header">
        <h4>Contacts</h4>
        <q-btn color="secondary">Add Enquiry</q-btn>
    </div>
    <main>
        <div class="q-pa-md">
            <Table advanced :rows="store.formattedContacts" :columns="store.contactColumns" />
        </div>
        <pre>Selected: {{ store.selectedContacts }}</pre>
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
