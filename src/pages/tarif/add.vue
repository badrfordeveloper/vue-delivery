<script setup>
import FormTarif from '@/components/tarif/FormTarif.vue'

definePage({
  meta: {
    action: 'create',
    subject: 'tarif',
  },
})
</script>

<template>
  <FormTarif method="POST" />
</template>

