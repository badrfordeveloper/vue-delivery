<script setup>
import FormRamassage from '@/components/ramassage/FormRamassage.vue'

definePage({
  meta: {
    action: 'create',
    subject: 'ramassage',
  },
})
</script>

<template>
  <FormRamassage method="POST" />
</template>

