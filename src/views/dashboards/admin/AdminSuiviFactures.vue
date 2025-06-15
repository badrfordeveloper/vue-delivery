<script setup>
const listFacutres = ref()

listFacutres.value = await $api('/api/dashboard/admin/listFacutres').then(response => response.data)


const resolveStatus = {
  Verified: 'success',
  Rejected: 'error',
  Pending: 'secondary',
}

const headers = [
  {
    title: 'code',
    key: 'code',
    sortable: false,
  },
  {
    title: 'Statut',
    key: 'statut',
    sortable: false,
  },
  {
    title: 'Montant encaisse',
    key: 'montant_encaisse',
    sortable: false,
  },
  {
    title: 'Montant facturée',
    key: 'montant_facture',
    sortable: false,
  },
  {
    title: 'Frais Total',
    key: 'frais_total',
    sortable: false,
  },

]

const getPaddingStyle = index => index ? 'padding-block-end: 1.25rem;' : 'padding-block: 1.25rem;'
</script>

<template>
  <VCard title="Suivie de factures">
    <VDivider />
    <VTable class="text-no-wrap transaction-table">
      <thead>
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
          >
            {{ header.title }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(item, index) in listFacutres"
          :key="index"
        >
          <td>
            <p class="text-high-emphasis text-base mb-0">
              {{ item.code }}
            </p>
          </td>
          <td>
            <p class="text-high-emphasis text-base mb-0">
              {{ item.statut }}
            </p>
          </td>
          <td>
            <p class="text-high-emphasis text-base mb-0">
              {{ item.montant_encaisse }}
            </p>
          </td>
          <td>
            <p class="text-high-emphasis text-base mb-0">
              {{ item.montant_facture }}
            </p>
          </td>
          <td>
            <p class="text-high-emphasis text-base mb-0">
              {{ item.frais_total }}
            </p>
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>

<style lang="scss">
.transaction-table {
  &.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td,
  &.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
    border-block-end: none !important;
  }
}
</style>
