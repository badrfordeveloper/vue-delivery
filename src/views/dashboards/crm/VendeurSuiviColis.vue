<script setup>
import { statutInfos } from '@/composables/statutInfos'
import laravelLogo from '@images/icons/brands/laravel-logo.png'

const suiviColis = ref()

suiviColis.value = await $api('/api/dashboard/vendeur/suiviColis').then(response => response.data)



const percentStatutColis = computed(() => {

  return Object.entries(suiviColis.value).map(([statut, value]) => {
    // Special case for DELIVERY_SUCCESS
    const isDeliverySuccess = statut === 'DELIVERY_SUCCESS'
    
    return {
      avatarImg: laravelLogo,
      title: isDeliverySuccess ? 'Livrée/partiel' : statutInfos(statut).text,
      stats: value.toString(),
      progressColor: isDeliverySuccess ? 'livre' : statutInfos(statut).color,
    }
  })

})

const moreList = [
  {
    title: 'Refresh',
    value: 'refresh',
  },
  {
    title: 'Download',
    value: 'Download',
  },
  {
    title: 'View All',
    value: 'View All',
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Suivie de colis</VCardTitle>
    </VCardItem>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="project in percentStatutColis"
          :key="project.title"
        >
          <template #prepend>
            <VAvatar
              size="34"
              rounded
              class="me-1"
            >
              <img :src="project.avatarImg">
            </VAvatar>
          </template>

          <VListItemTitle class="font-weight-medium">
            {{ project.title }}
          </VListItemTitle>

          <template #append>
            <div class="d-flex align-center gap-x-4">
              <div style="inline-size: 4.875rem;">
                <VProgressLinear
                  :model-value="project.stats"
                  :color="project.progressColor"
                  height="8"
                  rounded-bar
                  rounded
                />
              </div>
              <span class="text-disabled">{{ project.stats }}%</span>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}
</style>
