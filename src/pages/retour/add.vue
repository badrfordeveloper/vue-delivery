<script setup>
import FormRetour from '@/components/retour/FormRetour.vue';

definePage({
  meta: {
    action: 'create',
    subject: 'retour',
  },
})
</script>

<template>
  <FormRetour method="POST" />
</template>

