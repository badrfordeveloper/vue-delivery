<script setup>
import Index from './index.vue'

definePage({
  meta: {
    action: 'list',
    subject: 'factureVendeur',
  },
})

const route = useRoute()
</script>

<template>
  <Index :statut="route.params.statut" />
</template>

