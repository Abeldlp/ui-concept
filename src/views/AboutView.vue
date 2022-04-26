<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { Ref } from 'vue'
import { useEnquiriesStore } from '@/stores/enquiries'

const store = useEnquiriesStore()
const form = reactive({
    name: '',
    email: '',
    priority: '',
    assigned_to: '',
    status: '',
    follow_up: false,
    due_date: ''
})
const loading: Ref<boolean> = ref(false)
const success: Ref<boolean> = ref(false)

const simulateProgress = () => {
    loading.value = true

    setTimeout(() => {
        store.saveEnquiry({
            name: form.name,
            email: form.email,
            priority: form.priority,
            assigned_to: form.assigned_to,
            status: form.status,
            follow_up: false,
            due_date: '-'
        })
        store.enquiries.push({
            name: form.name,
            email: form.email,
            priority: form.priority,
            assigned_to: form.assigned_to,
            status: form.status,
            follow_up: false,
            due_date: '-'
        })
        loading.value = false
        success.value = true
        form.name = ''
        form.email = ''
        form.priority = ''
        form.assigned_to = ''
        form.status = ''
    }, 1500)
}

</script>
<template>
    <div class="about">
        <h4>Add enquiries</h4>
        <div class="form">
            <q-input class="input" v-model="form.name" label="Name" outlined dense />
            <q-input class="input" v-model="form.email" label="Email" outlined dense />
            <q-select
                class="input"
                v-model="form.priority"
                label="Priority"
                :options="['High', 'Medium', 'Low']"
                outlined
                dense
            />
            <q-input class="input" v-model="form.assigned_to" label="Assigned to" outlined dense />
            <q-select class="input" v-model="form.status" label="Status" :options="['todo', 'done']" outlined dense />
            <q-btn class="input button" :loading="loading" @click="simulateProgress" color="primary">Save Enquiry</q-btn>
            <br />
            <q-badge v-if="success" color="green" outline>Saved successfully</q-badge>
        </div>
    </div>
</template>

<style>
</style>

<style scoped>
h4 {
    margin: 2rem;
}
.form {
    width: 500px;
    margin: 2rem;
}

.input,
.button {
    margin-top: 1rem;
}
</style>
