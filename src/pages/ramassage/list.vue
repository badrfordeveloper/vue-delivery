<script setup>
import PrintRamassage from '@/components/ramassage/printRamassage.vue'
import { can } from '@layouts/plugins/casl'

definePage({
  meta: {
    action: 'list',
    subject: 'ramassage',
  },
})

const headers = [
  {
    title: 'code',
    key: 'code',
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
    title: 'Statut',
    key: 'statut',
    sortable: false,
  },  
  {
    title: 'Montant',
    key: 'montant',
    sortable: false,
  }, 
  {
    title: 'adresse',
    key: 'adresse',
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

const isPrintRamassage = ref(false)
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
  isPrintRamassage.value=true
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
</script>

<template>
  <div>
    <!-- 👉 items -->
    <VCard
      title="Filtres"
      class="mb-6"
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
            v-if="can('create','ramassage')"
            color="primary"
            prepend-icon="tabler-plus"
            @click="router.push({name: 'ramassage-add'})"
          >
            Ajouter Ramassage
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
        class="text-no-wrap"
        locale="fr"
        @update:options="updateOptions"
      >
        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn
            v-if="can('update','ramassage')"
            @click="router.push('/ramassage/'+item.id)"
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
                  value="delete"
                  prepend-icon="tabler-trash"
                  @click="dialogDelete(item)"
                >
                  Delete
                </VListItem>
              </VList>
            </VMenu>
          </IconBtn>
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
        <VCard :title="'Êtes-vous sûr de vouloir supprimer le ramassage '+deleteObject.code+' ?'">
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

      <PrintRamassage
        v-model:is-print-ramassage="isPrintRamassage"
        :item="printObject"
      />
    </VCard>
  </div>
</template>
