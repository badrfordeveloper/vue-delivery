<script setup>

definePage({
  meta: {
    action: 'update',
    subject: 'retour',
  },
})

const route = useRoute()

const item = await $api('/api/retour/'+route.params.id).then(response =>response.data )
</script>

<template>
  <FormRetour
    :item="item"
    :identity="route.params.id"
    method="PUT"
  />
</template>

