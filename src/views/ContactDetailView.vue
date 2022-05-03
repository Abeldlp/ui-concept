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
    <q-btn @click="router.go(-1)">Back</q-btn>
</template>
