<script setup>
import FormRamassage from '@/components/ramassage/FormRamassage.vue'

definePage({
  meta: {
    action: 'update',
    subject: 'ramassage',
  },
})

const route = useRoute()

const item = await $api('/api/ramassage/'+route.params.id).then(response =>response.data )
</script>

<template>
  <FormRamassage
    :item="item"
    :identity="route.params.id"
    method="PUT"
  />
</template>

