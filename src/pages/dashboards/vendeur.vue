<script setup>
import VendeurColisByZonePercent from '@/views/dashboards/crm/VendeurColisByZonePercent.vue'
import VendeurStasticsByDay from '@/views/dashboards/crm/VendeurStasticsByDay.vue'
import VendeurSuiviColis from '@/views/dashboards/crm/VendeurSuiviColis.vue'
import VendeurSuiviFactures from '@/views/dashboards/crm/VendeurSuiviFactures.vue'

definePage({
  meta: {
    action: 'dashboard',
    subject: 'vendeur',
  },
})

const headerStatistics = await $api('/api/dashboard/vendeur/headerStatistics').then(response => response.data)



const simpleStatisticsDemoCards = computed(() => {
  return  [
    {
      icon: 'tabler-credit-card',
      color: 'error',
      title: 'Volume',
      subTitle: 'Semaine dernière',
      stat: headerStatistics?.nombre_colis,
    },
    {
      icon: 'tabler-credit-card',
      color: 'error',
      title: 'Chiffre d\'affaire',
      subTitle: 'Semaine dernière',
      stat: headerStatistics?.total_montant_colis,
    },

    {
      icon: 'tabler-credit-card',
      color: 'error',
      title: 'Taux de livraison',
      subTitle: 'Semaine dernière',
      stat: headerStatistics?.taux_livraison +' %',
    },
    {
      icon: 'tabler-currency-dollar',
      color: 'success',
      title: 'Totale Ramassage/Retour',
      subTitle: 'Semaine dernière',
      stat: headerStatistics?.total_ramassage+headerStatistics?.total_retour,
    },
  ]
})
</script>

<template>
  <VRow class="match-height">
    <VCol
      v-for="demo in simpleStatisticsDemoCards"
      :key="demo.title"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <VCard>
        <VCardText>
          <VAvatar
            :color="demo.color"
            variant="tonal"
            rounded
            size="44"
          >
            <VIcon
              :icon="demo.icon"
              size="28"
            />
          </VAvatar>

          <h5 class="text-h5 mt-3">
            {{ demo.title }}
          </h5>
          <p class="my-1">
            {{ demo.subTitle }}
          </p>
          <h4 class="text-h4 ">
            {{ demo.stat }}
          </h4>
        </VCardText>
      </VCard>
    </VCol>

    <!-- 👉 Earning Reports -->
    <VCol
      cols="12"
      md="8"
    >
      <VendeurStasticsByDay />
    </VCol>

    <!-- 👉 Active Project -->
    <VCol
      cols="12"
      md="4"
    >
      <VendeurSuiviColis />
    </VCol>

    <!-- 👉 Browser States -->
    <VCol
      cols="12"
      md="4"
    >
      <VendeurColisByZonePercent />
    </VCol>

    <!-- 👉 Recent Transactions -->
    <VCol
      cols="12"
      md="8"
    >
      <VendeurSuiviFactures />
    </VCol>
  </VRow>
</template>
