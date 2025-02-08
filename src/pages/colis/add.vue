<script setup>
import FormColis from '@/components/colis/FormColis.vue'

definePage({
  meta: {
    action: 'create',
    subject: 'colis',
  },
})
</script>

<template>
  <FormColis method="POST" />
</template>

