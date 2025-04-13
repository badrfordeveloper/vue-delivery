<script setup>
import Index from './index.vue'

definePage({
  meta: {
    action: 'list',
    subject: 'retour',
  },
})

const route = useRoute()
</script>

<template>
  <Index :statut="route.params.statut" />
</template>

