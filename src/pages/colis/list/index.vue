<script setup>
import ImportColis from '@/components/colis/ImportColis.vue'
import ShowColis from '@/components/colis/showColis.vue'
import { statutInfos } from '@/composables/statutInfos'
import { statusColis } from '@/utils/constants'
import { can } from '@layouts/plugins/casl'
import { addDays, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from 'date-fns'

const props = defineProps({
  statut: {
    type: String,
    required: true,
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
const isActionLivreur = can('livreur', 'action')
const isActionVendeur = can('vendeur', 'action')
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

definePage({
  meta: {
    action: 'list',
    subject: 'colis',
  },
})

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
    title: 'destination',
    key: 'destination',
    sortable: false,
  },
  {
    title: 'Montant',
    key: 'montant',
    sortable: false,
  }, 
  {
    title: 'Nom du client',
    key: 'nom_client',
    sortable: false,
  },
  {
    title: 'Tel du client',
    key: 'tel_client',
    sortable: false,
  },
  {
    title: 'Vendeur',
    key: 'vendeur',
    sortable: false,
  },
  {
    title: 'actions',
    key: 'actions',
    sortable: false,
  },
]

const searchCode = ref()
const selected_colis = ref([])
const searchStatut = ref()
const searchNameClient = ref()
const searchTelClient = ref()
const livreur_id = ref()
const vendeur_id = ref()

const livreurs = await $api('/api/ramasseurs').then(response => response.data)
const vendeurs = await $api('/api/vendeurs').then(response => response.data)

const loadingDelete = ref(false)
const isDeletingItem = ref(false)
const deleteObject = ref()

const isPrintColis = ref(false)
const isPrintGroupColis = ref(false)
const printObject = ref()

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

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const dialogPrint = object =>{
  isPrintColis.value=true
  printObject.value = object
}

const dialogDelete = object =>{
  isDeletingItem.value=true
  deleteObject.value = object
}



const deleteItem = async () => {

  let url = "/api/colis/"+deleteObject.value.id

  loadingDelete.value = true
  $api({
    method: "DELETE",
    url,
  })
    .then(async response => {
      if (response.status === 200) {
        isDeletingItem.value=false
        toast.success(response.data)   
        fetchItems()    
      }
      loadingDelete.value = false
    }).catch(error => {
      loadingDelete.value = false
    })
}

const {
  data: itemsData, error, statusCode, isFetching,
  execute: fetchItems,
} = await useApi(createUrl('/api/colis', {
  query: {
    livreur_id: livreur_id,
    vendeur_id: vendeur_id,
    begin_date: begin_date,
    end_date: end_date,
    code: searchCode,
    statut: searchStatut,
    nom_client: searchNameClient,
    tel_client: searchTelClient,
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}),  
)



const resetSelectedRows = () =>{
  selected_colis.value=[]
}

const printGroup = object =>{
  isPrintGroupColis.value=true
}

const router = useRouter()
const items = computed(() => itemsData.value.items)
const totalItems = computed(() => itemsData.value.total)

const isShowItem = ref(false)
const isShowGroupActions = ref(false)
const isShowImportColis = ref(false)
const dialogKey = ref(0)
const showId = ref(0)

const showItemDialog = object =>{
  showId.value = object.id
  dialogKey.value++
  isShowItem.value=true
}

const ShowGroupActions = object =>{
  isShowGroupActions.value=true
}

const ShowImportColis = object =>{
  isShowImportColis.value=true
}
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
            v-if="isActionGestionnaire"
            cols="12"
            sm="3"
          >
            <AppAutocomplete
              v-model="livreur_id"
              placeholder="Livreurs"
              :items="livreurs"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>  
          <VCol
            cols="12"
            sm="3"
          >
            <AppSelect
              v-model="searchStatut"
              placeholder="Statut"
              :items="statusColis"
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
          <VCol
            cols="12"
            sm="2"
          >
            <AppTextField
              v-model="searchNameClient"
              placeholder="Nom du client"
            />
          </VCol>
          <VCol
            cols="12"
            sm="2"
          >
            <AppTextField
              v-model="searchTelClient"
              placeholder="Telephone du client"
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
          <VMenu v-if="isActionVendeur || isActionGestionnaire">
            <template #activator="{ props }">
              <VBtn
                color="secondary"
                v-bind="props"
              >
                Group actions 
              </VBtn>
            </template>
            <VList>
              <VListItem
                value="print"
                prepend-icon="tabler-text-scan-2"
                @click="printGroup"
              >
                Print
              </VListItem>
              <VListItem
                v-if=" isActionGestionnaire"
                value="print"
                prepend-icon="tabler-text-scan-2"
                @click="ShowGroupActions"
              >
                Affectation
              </VListItem>
              <DataTableExport
              
                :items="items"
                :headers="headers"
                file-name="colis-export"
              />

              <VListItem
                v-if=" isActionGestionnaire"
                value="print"
                prepend-icon="tabler-text-scan-2"
                @click="ShowImportColis"
              >
                Importer
              </VListItem>
            </VList>
          </VMenu>
          <AppSelect
            v-model="itemsPerPage"
            :items="[5, 10, 20, 25, 50]"
          />

          <VBtn
            v-if="can('create','colis')"
            color="primary"
            prepend-icon="tabler-plus"
            @click="router.push({name: 'colis-add'})"
          >
            Ajouter Colis
          </VBtn>
        </div>
      </div>

      <VDivider class="mt-4" />

   

      <!-- 👉 Datatable  -->
      <VDataTableServer
        v-model:model-value="selected_colis"
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        show-select
        :item-value="item => item"
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
            v-if="can('show','colis')"
            variant="text"
            @click="showItemDialog(item)"
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
          <span v-if="item.statut_retour"> -
            <VChip
              v-bind="statutInfos(item.statut_retour)"
              density="default"
              label
              size="small"
            />
          </span>
        </template>
        <template #item.actions="{ item }">
          <div>
            <IconBtn
              v-if=" can('update','colis') && (item.statut == 'EN_ATTENTE' || (item.statut == 'EN_COURS_LIVRAISON' && isActionGestionnaire))"
              @click="router.push('/colis/'+item.id)"
            >
              <VIcon icon="tabler-edit" />
            </IconBtn>
            <IconBtn>
              <VIcon icon="tabler-dots-vertical" />
              <VMenu activator="parent">
                <VList>
                  <VListItem
                    value="print"
                    prepend-icon="tabler-text-scan-2"
                    @click="dialogPrint(item)"
                  >
                    Print
                  </VListItem>

                  <VListItem 
                    v-if="can('delete','colis') && item.statut == 'EN_ATTENTE'"
                    value="delete"
                    prepend-icon="tabler-trash"
                    @click="dialogDelete(item)"
                  >
                    Delete
                  </VListItem>
                </VList>
              </VMenu>
            </IconBtn>
          </div>
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

      <VDialog
        v-model="isDeletingItem"
        persistent
        class="v-dialog-sm"
      >
        <!-- Dialog close btn -->
        <DialogCloseBtn @click="isDeletingItem = !isDeletingItem" />
        <!-- Dialog Content -->
        <VCard :title="'Êtes-vous sûr de vouloir supprimer le colis '+deleteObject.code+' ?'">
          <VCardText class="d-flex justify-end gap-3 flex-wrap">
            <VBtn
              color="secondary"
              variant="tonal"
              @click="isDeletingItem = false"
            >
              Non
            </VBtn>
            <VBtn
              :loading="loadingDelete"
              @click="deleteItem"
            >
              Oui
            </VBtn>
          </VCardText>
        </VCard>
      </VDialog>
    </VCard>
    <!-- for one colis -->
    <PrintGroupColis
      v-if="isPrintColis"
      v-model:is-print-group-colis="isPrintColis"
      :items="[printObject]"
    />

    <!-- for multiple colis -->
    <PrintGroupColis
      v-if="isPrintGroupColis"
      v-model:is-print-group-colis="isPrintGroupColis"
      :items="selected_colis"
    />

    <GroupActions
      v-if="isShowGroupActions"
      v-model:is-show-item="isShowGroupActions"
      :items="selected_colis"
      @reset-selected-rows="resetSelectedRows"
    />
    <ImportColis
      v-if="isShowImportColis"
      v-model:is-show-item="isShowImportColis"
      :items="selected_colis"
      @fetch-items="fetchItems"
    />
   
    <ShowColis
      v-if="isShowItem"
      :id="showId"
      :key="dialogKey"
      v-model:is-show-item="isShowItem"
      @fetch-items="fetchItems"
    />
  </div>
</template>
