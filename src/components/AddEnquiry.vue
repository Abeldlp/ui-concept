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
const isOpen = ref(true);

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
    <q-card>
      <q-card-section class="row items-center">
        <h4 class="q-ml-sm">Add Enquiry</h4>
      </q-card-section>
      <q-card-section>
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
          <br />
          <q-badge v-if="success" color="green" outline>Saved successfully</q-badge>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn class="input button" :loading="loading" @click="simulateProgress" color="primary">Save Enquiry</q-btn>
      </q-card-actions>
    </q-card>
</template>
