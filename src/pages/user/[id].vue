<script setup>
import FormUser from '@/components/user/FormUser.vue'

definePage({
  meta: {
    action: 'update',
    subject: 'user',
  },
})

const route = useRoute()

const user = await $api('/api/users/'+route.params.id).then(response =>response.data )
</script>

<template>
  <FormUser
    :user="user"
    :identity="route.params.id"
    method="PUT"
  />
</template>

