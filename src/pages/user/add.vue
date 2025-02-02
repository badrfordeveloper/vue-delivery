<script setup>
import FormUser from '@/components/user/FormUser.vue'

definePage({
  meta: {
    action: 'create',
    subject: 'user',
  },
})
</script>

<template>
  <FormUser method="POST" />
</template>

