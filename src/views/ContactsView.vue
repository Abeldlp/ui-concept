<script setup lang="ts">
import { useContactStore } from '@/stores/contacts'

const store = useContactStore()

store.setContacts()
</script>

