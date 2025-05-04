<script setup>
import FormZone from '@/components/zone/FormZone.vue'

definePage({
  meta: {
    action: 'create',
    subject: 'zone',
  },
})
</script>

<template>
  <FormZone method="POST" />
</template>

