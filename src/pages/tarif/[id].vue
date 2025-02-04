<script setup>
import FormTarif from '@/components/tarif/FormTarif.vue';

definePage({
  meta: {
    action: 'update',
    subject: 'tarif',
  },
})

const route = useRoute()

const item = await $api('/api/tarifs/'+route.params.id).then(response =>response.data )
</script>

<template>
  <FormTarif
    :item="item"
    :identity="route.params.id"
    method="PUT"
  />
</template>

