<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
</script>

<template>
  <VAvatar
    class="cursor-pointer"
    color="primary"
    variant="tonal"
  >
    <VIcon
      icon="tabler-user"
      size="30"
    />
    <!-- SECTION Menu -->
    <VMenu
      activator="parent"
      width="230"
      location="bottom end"
      offset="14px"
    >
      <VList>
        <!-- 👉 Logout -->
        <VListItem to="/login">
          <template #prepend>
            <VIcon
              class="me-2"
              icon="tabler-logout"
              size="22"
            />
          </template>

          <VListItemTitle>Logout</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
    <!-- !SECTION -->
  </VAvatar>
</template>
