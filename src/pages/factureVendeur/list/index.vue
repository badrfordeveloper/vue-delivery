<script setup>
import { statusFactureVendeur } from '@/utils/constants'
import { can } from '@layouts/plugins/casl'
import { addDays, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from 'date-fns'

const props = defineProps({
  statut: {
    type: String,
    required: true,
  },
})

definePage({
  meta: {
    action: 'list',
    subject: 'factureVendeur',
  },
})

const showCustomRange = ref(false)

const dateOptions = ref([
  {
    title: 'Aujourd\'hui',
    value: 'today',
  },
  {
    title: 'Hier',
    value: 'yesterday',
  },  
  {
    title: 'La semaine dernière',
    value: 'lastWeek',
  },
  {
    title: 'Ce mois',
    value: 'thisMonth',
  },
  {
    title: 'Le mois précédent',
    value: 'lastMonth',
  },
  {
    title: 'Personnalisé',
    value: 'custom',
  },
])

const isActionGestionnaire = can('gestionnaire', 'action')
const begin_date = ref()
const end_date = ref()


const selectedRange = ref('today')

const onRangeChange = () => {
  const today = new Date()

  showCustomRange.value = selectedRange.value === 'custom'
  switch (selectedRange.value) {
  case 'today':
    begin_date.value = today.toISOString().split('T')[0]
    end_date.value = today.toISOString().split('T')[0]
    break
  case 'yesterday':
    const yesterday = addDays(today, -1)

    begin_date.value = yesterday.toISOString().split('T')[0]
    end_date.value = yesterday.toISOString().split('T')[0]
    break

  case 'lastWeek':
    begin_date.value = startOfWeek(addDays(today, -7)).toISOString().split('T')[0]
    end_date.value = endOfWeek(addDays(today, -7)).toISOString().split('T')[0]
    break
  case 'thisMonth':
    begin_date.value = startOfMonth(today).toISOString().split('T')[0]
    end_date.value = endOfMonth(today).toISOString().split('T')[0]
    break
  case 'lastMonth':
    const lastMonth = addDays(startOfMonth(today), -1)

    begin_date.value = startOfMonth(lastMonth).toISOString().split('T')[0]
    end_date.value = endOfMonth(lastMonth).toISOString().split('T')[0]
    break
  }
}

onRangeChange()

const vendeur_id = ref()

const vendeurs = await $api('/api/vendeurs').then(response => response.data)

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
    title: 'Vendeur',
    key: 'vendeur',
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

const searchCode = ref()
const searchStatut = ref()






// Data table options
const itemsPerPage = ref(5)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()


watch(
  () => props.statut, 
  newVal => {
    searchStatut.value = newVal
  }, { immediate: true }, // Trigger the watcher immediately
)




const isGenertingFactures = ref(false)

const generateFactures = async () => {

  let url = "/api/generateVendeurFactures"

  isGenertingFactures.value = true
  $api({
    method: "POST",
    url,
  })
    .then(async response => {
      if (response.status === 200) {
        toast.success(response.data)   
        fetchItems()    
      }
      isGenertingFactures.value = false
    }).catch(error => {
      isGenertingFactures.value = false
    })
}

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const {
  data: itemsData, error, statusCode, isFetching,
  execute: fetchItems,
} = await useApi(createUrl('/api/factureVendeur', {
  query: {
    vendeur_id: vendeur_id,
    begin_date: begin_date,
    end_date: end_date,
    code: searchCode,
    statut: searchStatut,
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}),  
)

const router = useRouter()
const items = computed(() => itemsData.value.items)
const totalItems = computed(() => itemsData.value.total)
</script>

<template>
  <div>
    <!-- 👉 items -->
    <VCard
      title="Filtres"
      class="mb-6 d-print-none"
    >
      <VCardText>
        <VRow>
          <VCol
            v-if="isActionGestionnaire"
            cols="12"
            sm="3"
          >
            <AppAutocomplete
              v-model="vendeur_id"
              placeholder="Vendeurs"
              :items="vendeurs"
              clearable
              clear-icon="tabler-x"
              autocomplete="no-autocompeletse"
            />
          </VCol>  
          <VCol
            cols="12"
            sm="3"
          >
            <AppSelect
              v-model="searchStatut"
              placeholder="Statut"
              :items="statusFactureVendeur"
              clearable
              clear-icon="tabler-x"
            >
              <template #item="{ item, props }">
                <VListItem
                  v-bind="props"
                  :title="statutInfos(item.value).text"
                />
              </template>
              <template #selection="{ item }">
                {{ statutInfos(item.value).text }}
              </template>
            </AppSelect>
          </VCol>
          <VCol
            cols="12"
            sm="2"
          >
            <AppTextField
              v-model="searchCode"
              placeholder="Code"
            />
          </VCol>
        </VRow>
        <VRow>
          <VCol
            cols="12"
            sm="3"
          >
            <AppSelect
              v-model="selectedRange"
              placeholder="Plage de dates"
              :items="dateOptions"
              :label="begin_date +' - '+ end_date "
              @update:model-value="onRangeChange"
            />
          </VCol>


          <VCol
            v-if="showCustomRange"
           
            cols="12"
            sm="3"
          >
            <AppDateTimePicker
              v-model="begin_date"
              label="Début"
              placeholder="date"
            />
          </VCol>
          <VCol
            v-if="showCustomRange"
           
            cols="12"
            sm="3"
          >
            <AppDateTimePicker
              v-model="end_date"
              label="Fin"
              placeholder="date"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <div class="d-flex flex-wrap gap-4 ma-6">
        <VSpacer />
        <div class="d-flex gap-4 flex-wrap align-center">
          <AppSelect
            v-model="itemsPerPage"
            :items="[5, 10, 20, 25, 50]"
          />

          <VBtn
            v-if="can('create','factureVendeur')"
            color="primary"
            prepend-icon="tabler-plus"

            :loading="isGenertingFactures"
            @click="generateFactures"
          >
            Génerer les factures
          </VBtn>
        </div>
      </div>

      <VDivider class="mt-4" />

      <!-- 👉 Datatable  -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :loading="isFetching"
        :headers="headers"
        :items="items"
        :items-length="totalItems"
        class="text-no-wrap "
        locale="fr"
        @update:options="updateOptions"
      >
        <template #item.code="{ item }">
          <VBtn
            v-if="can('show','factureVendeur')"
            variant="text"
            @click="router.push('/factureVendeur/'+item.id)"
          >
            {{ item.code }}
          </VBtn> 
          <span v-else>{{ item.code }}</span>
        </template>
        <template #item.statut="{ item }">
          <VChip
            v-bind="statutInfos(item.statut)"
            density="default"
            label
            size="small"
          />
        </template>

        <!-- pagination -->
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="totalItems"
          />
        </template>
      </VDataTableServer>
    </VCard>
  </div>
</template>
