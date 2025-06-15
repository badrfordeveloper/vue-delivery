<script setup>
import usFlag from '@images/icons/countries/us.png'

const colisByZonePercent = ref()

colisByZonePercent.value = await $api('/api/dashboard/admin/colisByZonePercent').then(response => response.data)

const salesByCountries = computed(() => {

  return Object.entries(colisByZonePercent.value).map(([statut, value]) => {
    console.log(value)
    
    return {
      avatarImg: usFlag,
      stats: value.zone,
      subtitle: "Nombre de colis : "+value.colis_count.toString(),
      profitLoss: value.percentage.toString(),
    }
  })

})
</script>

<template>
  <VCard title="Colis par zone">
    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="country in salesByCountries"
          :key="country.stats"
        >
          <template #prepend>
            <VAvatar
              size="34"
              color="secondary"
              variant="tonal"
              class="me-1"
              :image="country.avatarImg"
            />
          </template>

          <VListItemTitle class="font-weight-medium">
            {{ country.stats }}
          </VListItemTitle>
          <VListItemSubtitle>
            {{ country.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <div :class="`d-flex align-center font-weight-medium ${country.profitLoss > 0 ? 'text-success' : 'text-error'}`">
              <VIcon
                :icon="country.profitLoss > 0 ? 'tabler-chevron-up' : 'tabler-chevron-down'"
                size="20"
                class="me-1"
              />
              <div class="font-weight-medium">
                {{ Math.abs(country.profitLoss) }}%
              </div>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1rem;
}
</style>
