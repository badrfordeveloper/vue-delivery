<script setup>
import FormZone from '@/components/zone/FormZone.vue'

definePage({
  meta: {
    action: 'update',
    subject: 'zone',
  },
})

const route = useRoute()

const item = await $api('/api/zones/'+route.params.id).then(response =>response.data )
</script>

<template>
  <FormZone
    :item="item"
    :identity="route.params.id"
    method="PUT"
  />
</template>

