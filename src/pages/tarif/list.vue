<script setup>
import { can } from '@layouts/plugins/casl';
import { useLocale } from 'vuetify';

const { current } = useLocale();
current.value = 'fr';
definePage({
  meta: {
    action: 'list',
    subject: 'tarif',
  },
})

const headers = [
  {
    title: 'destination',
    key: 'destination',
    sortable: false,
  },
  {
    title: 'tarif',
    key: 'tarif',
    sortable: false,
  },
  {
    title: 'actions',
    key: 'actions',
    sortable: false,
  }
]

const searchName = ref()


// Data table options
const itemsPerPage = ref(5)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const updateOptions = options => {
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
}



const {
  data: itemsData, error, statusCode, isFetching,
  execute: fetchItems,
} = await useApi(createUrl('/api/tarifs', {
  query: {
    fullName: searchName,
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}),  
)
const router = useRouter()
const items = computed(() => itemsData.value.items)
const totalProduct = computed(() => itemsData.value.total)

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
          <!-- 👉 Select Status -->
          <VCol
            cols="12"
            sm="2"
          >
            <AppTextField
              v-model="searchName"
              placeholder="Destination"
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
            v-if="can('create','user')"
            color="primary"
            prepend-icon="tabler-plus"
            @click="router.push({name: 'tarif-add'})"
          >
            Ajouter Tarif
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
        :items-length="totalProduct"
        class="text-no-wrap"
        locale="fr"
        @update:options="updateOptions"
      >
        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn
            v-if="can('update','user')"
            @click="router.push('/tarif/'+item.id)"
          >
            <VIcon icon="tabler-edit" />
          </IconBtn>
        </template>


        <!-- pagination -->
        <template #bottom>
          <TablePagination
            v-model:page="page"
            :items-per-page="itemsPerPage"
            :total-items="totalProduct"
          />
        </template>
      </VDataTableServer>
    </VCard>
  </div>

</template>
