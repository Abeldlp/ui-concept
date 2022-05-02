<script setup lang="ts">
import { useEnquiriesStore } from '@/stores/enquiries'
import { ref } from 'vue';
import Table from '@/components/Table.vue'
import AddEnquiry from '@/components/AddEnquiry.vue';

const showModal = ref(false);

const store = useEnquiriesStore()

store.setEnquiries()

const openModal = () => {
    showModal.value = true;
}

</script>

<template>
    <div class="header">
        <h4>All Enquiries</h4>
        <q-btn @click="openModal" color="secondary">Add Enquiry</q-btn>
        <q-dialog v-model="showModal" persistent>
            <add-enquiry></add-enquiry>
        </q-dialog>
    </div>
    <main>
        <div class="q-pa-md">
            <Table advanced :rows="store.enquiries" :columns="store.enquiriesColums" />
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
