<script setup lang="ts">
import { useEnquiriesStore } from '@/stores/enquiries'
import Table from '@/components/Table.vue'

const store = useEnquiriesStore()

store.setEnquiries()
</script>

<template>
    <div class="header">
        <h4>High Priority Enquiries</h4>
        <RouterLink to="/about">
            <q-btn color="secondary">Add Enquiry</q-btn>
        </RouterLink>
    </div>
    <main>
        <div class="q-pa-md">
            <Table :rows="store.enquiriesHigh" :columns="store.enquiriesColums" />
        </div>
        <pre>Selected: {{ store.selectedEnquiries }}</pre>
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
