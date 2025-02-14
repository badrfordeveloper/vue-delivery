<script setup>
const props = defineProps({
  method: {
    type: String,
    required: true,
  }, 
  item: {
    type: Object,
    required: false,

  },
  identity: {
    type: String,
    required: false,
  },
})

const router = useRouter()


const refForm = ref()
const tarifs = ref([])
const loadingSubmit = ref(false)

tarifs.value = await $api('/api/tarifs').then(response => response.data.items)

let defaultItem = {
  id: '',
  nom_vendeur: '',
  tel_vendeur: '',
  tarif_id: '',
  adresse: '',
  adresse: '',
  colis: [],
}


const itemData = ref(structuredClone(toRaw(defaultItem)))

watch(
  () => props.item, 
  newVal => {
    if(props.method == "PUT"){
      itemData.value = { ...newVal } 
    }
  }, { immediate: true }, // Trigger the watcher immediately
)

const onSubmit = async () => {

  const { valid } = await refForm.value.validate()
  if (valid) {
    let url = "/api/ramassage"

    if (props.method == "PUT") {
      url = "/api/ramassage/" + props.identity
    }
    loadingSubmit.value = true
    $api({
      method: props.method,
      url,
      data: itemData.value,
    })
      .then(async response => {
        if (response.status === 200) {
          toast.success(response.data)
          if (props.method == "POST") {
            refForm.value?.reset()
            itemData.value = structuredClone(toRaw(defaultItem))
          }else{
            router.push({ name: 'ramassage-list' })
          }
        }
        loadingSubmit.value = false
      }).catch(error => {
        loadingSubmit.value = false

        // Check if there are validation errors
        if (error.response && error.response.status === 422) {
          // Laravel validation errors are typically in the `data.errors` object
          const errors = error.response.data.errors

          // Loop through the errors and show each in a toast
          for (let field in errors) {
            toast.error(`${field}: ${errors[field].join(', ')}`)
          }
        }
      })
  

  }
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
    title: 'destination',
    key: 'destination',
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
]

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}

const itemsPerPage = ref(5)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const {
  data: itemsData, error, statusCode, isFetching,
  execute: fetchItems,
} = await useApi(createUrl('/api/colisForRamassage', {
  query: {
    statut: "EN_ATTENTE",
    ramassage_id: itemData.value.id,
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}),  
)

const items = computed(() => itemsData.value.items)
const totalItems = computed(() => itemsData.value.total)

const resolveStatus = statusMsg => {
  if (statusMsg === "EN_ATTENTE")
    return {
      text: 'En attente',
      color: 'warning',
    }
}

/* const handleRowClick = (event, { item }) => {
  const index = itemData.value.colis.findIndex((selectedItem, index) => selectedItem === item.id)
  if (index === -1) {
    // If the item is not selected, add it to the selected array
    itemData.value.colis.push(item.id)
  } else {
    // If the item is already selected, remove it from the selected array
    itemData.value.colis.splice(index, 1)
  }
} */
</script>

<template>
  <div class="d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6">
    <div class="d-flex flex-column justify-center">
      <h4 class="text-h4 font-weight-medium">
        {{ props.method == "POST" ? "Ajouter Ramassage":"Modifier Ramassage" }} 
      </h4>
    </div>
  </div>
  <VForm
    ref="refForm"
    class="mt-3"
  >
    <VRow>
      <VCol
        cols="12"
        class="pa-0"
      >
        <VCard title="Informations du client">
          <VCardText>
            <!-- 👉 Form -->
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="itemData.nom_vendeur"
                  :rules="[requiredValidator]"
                  placeholder="Nom"
                  label="Nom"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="itemData.tel_vendeur"
                  :rules="[requiredValidator,PhoneValidator]"
                  label="Telephone"
                  size="10"
                  placeholder="0655554747"
                />
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>

      <VCol
        cols="12"
        class="px-0"
      >
        <!-- 👉 Delete Account -->
        <VCard title="Informations d'adresse">
          <VCardText>
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppAutocomplete
                  v-model="itemData.tarif_id"
                  :rules="[requiredValidator]"
                  label="Destination"
                  :items="tarifs"
                  item-title="destination"
                  item-value="id"
                  placeholder="Select State"
                />
              </VCol>
            
              <VCol    
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="itemData.adresse"
                  prepend-inner-icon="tabler-map-pin"
                  :rules="[requiredValidator]"
                  label="Adresse"
                  placeholder="Adresse"
                />
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <div class="d-flex flex-wrap gap-4 ma-6">
          <VSpacer />
          <div class="d-flex gap-4 flex-wrap align-center">
            <AppSelect
              v-model="itemsPerPage"
              :items="[5, 10, 20, 25, 50]"
            />
          </div>
        </div>
        <VDataTableServer
          v-model:model-value="itemData.colis"
          v-model:items-per-page="itemsPerPage"
          v-model:page="page"
          show-select
          :item-value="item => item.id"
          :loading="isFetching"
          :headers="headers"
          :items="items"
          :items-length="totalItems"
          class="text-no-wrap "
          locale="fr"
          @update:options="updateOptions"
        >
          <!--  @click:row="handleRowClick" -->
          <template #item.statut="{ item }">
            <VChip
              v-bind="resolveStatus(item.statut)"
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
      </VCol>
    </VRow>

    <VRow>
      <!-- 👉 Form Actions -->
      <VCol
        cols="12"
        class="d-flex flex-wrap justify-center gap-4"
      >
        <VBtn
          :loading="loadingSubmit"
          @click="onSubmit"
        >
          Enregistrer 
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
