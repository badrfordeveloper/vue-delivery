<script setup>
import PrintColis from '@/components/colis/printColis.vue'
import ShowColis from '@/components/colis/showColis.vue'
import { can } from '@layouts/plugins/casl'

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
const searchStatut = ref()
const searchNameClient = ref()
const searchTelClient = ref()

const loadingDelete = ref(false)
const isDeletingItem = ref(false)
const deleteObject = ref()

const isPrintColis = ref(false)
const printObject = ref()

// Data table options
const itemsPerPage = ref(5)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

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


const router = useRouter()
const items = computed(() => itemsData.value.items)
const totalItems = computed(() => itemsData.value.total)

const isShowItem = ref(false)
const dialogKey = ref(0)
const showId = ref(0)

const showItemDialog = object =>{
  showId.value = object.id
  dialogKey.value++
  isShowItem.value=true
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
            cols="12"
            sm="2"
          >
            <AppTextField
              v-model="searchStatut"
              placeholder="Statut"
            />
          </VCol><VCol
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
              v-if="can('update','colis') && item.statut == 'EN_ATTENTE'"
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
    <PrintColis
      v-if="isPrintColis"
      v-model:is-print-colis="isPrintColis"
      :item="printObject"
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
