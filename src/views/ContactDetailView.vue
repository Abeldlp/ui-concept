<script setup lang="ts">
import { Api } from '@/api'
import { ref } from 'vue'
import router from '@/router'

const contactId = ref(router.currentRoute.value.params.id)
const contact = ref({})
const setContact = () => {
    Api.get('/api/contacts/' + contactId.value).then((res: any) => {
        contact.value = res.data
    })
}

setContact()

</script>

<template>
    Page for contact with id: {{ contactId }}
    <h4>{{ contact.givenName }} {{ contact.familyName }}</h4>
    <div style="display:flex; flex-wrap:wrap; width: 400px">
        <q-chip color="primary" text-color="white" v-for="tag in contact.tags">{{ tag }}</q-chip>
    </div>
    <q-btn @click="router.go(-1)">Back</q-btn>
</template>
