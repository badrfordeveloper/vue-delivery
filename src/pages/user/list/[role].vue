<script setup>
import Index from './index.vue'

definePage({
  meta: {
    action: 'list',
    subject: 'user',
  },
})

const route = useRoute()
</script>

<template>
  <Index :role="route.params.role" />
</template>
