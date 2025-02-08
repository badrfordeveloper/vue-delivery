<script setup>
import FormColis from '@/components/colis/FormColis.vue'

definePage({
  meta: {
    action: 'update',
    subject: 'colis',
  },
})

const route = useRoute()

const item = await $api('/api/colis/'+route.params.id).then(response =>response.data )
</script>

<template>
  <FormColis
    :item="item"
    :identity="route.params.id"
    method="PUT"
  />
</template>

