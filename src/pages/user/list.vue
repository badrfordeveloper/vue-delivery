<script setup>
import { can } from '@layouts/plugins/casl'

definePage({
  meta: {
    action: 'list',
    subject: 'user',
  },
})

const headers = [
  {
    title: 'Nom',
    key: 'lastName',
    sortable: false,
  },
  {
    title: 'Prenom',
    key: 'firstName',
    sortable: false,
  },
  {
    title: 'role',
    key: 'role',
    sortable: false,
    align: can('show', 'role') ? ' start' : ' d-none',
  },
  {
    title: 'statut',
    key: 'active',
    sortable: false,
  },
  {
    title: 'actions',
    key: 'actions',
    sortable: false,
  },
]

const filterRole = ref()
const selectedStatus = ref()
const searchName = ref()

const selectedRows = ref([])
const isAddRoleDialogVisible = ref(false)
const isEditRoleDialogVisible = ref(false)
const roleLoading = ref(false)

const rolePermissions = ref({
  name: '',
  permissions: [],
})

const editPermission = value => {

  rolePermissions.value = { ...value }
  isEditRoleDialogVisible.value = true

}

const status = ref([
  {
    title: 'Active',
    value: '1',
  },
  {
    title: 'Inactive',
    value: '0',
  },
])


const roles = await $api('/api/rolesList').then(response => response.data)

console.log(roles)


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
  data: productsData, error, statusCode, isFetching,
  execute: fetchRoles,
} = await useApi(createUrl('/api/users', {
  query: {
    active: selectedStatus,
    role: filterRole,
    fullName: searchName,
    page,
    itemsPerPage,
    sortBy,
    orderBy,
  },
}),  
)

const router = useRouter()


const products = computed(() => productsData.value.items)
const totalProduct = computed(() => productsData.value.total)

const resolveStatus = statusMsg => {
  console.log(statusMsg)
  if (statusMsg === 1)
    return {
      text: 'active',
      color: 'success',
    }
  if (statusMsg === 0)
    return {
      text: 'inactive',
      color: 'warning',
    }

}
</script>

<template>
  <div>
    <!-- 👉 products -->
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
              placeholder="Nom ou prenom"
            />
          </VCol>
          <VCol
            cols="12"
            sm="2"
          >
            <AppSelect
              v-model="filterRole"
              placeholder="Roles"
              :items="roles"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
        
          <VCol
            cols="12"
            sm="2"
          >
            <AppSelect
              v-model="selectedStatus"
              placeholder="Status"
              :items="status"
              clearable
              clear-icon="tabler-x"
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
            @click="router.push({name: 'user-add'})"
          >
            Ajouter Utilisateur
          </VBtn>
        </div>
      </div>

      <VDivider class="mt-4" />

      <!-- 👉 Datatable  -->
      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        v-model:model-value="selectedRows"
        v-model:page="page"
        :loading="isFetching"
        :headers="headers"
        :items="products"
        :items-length="totalProduct"
        class="text-no-wrap"
        @update:options="updateOptions"
      >
        <template #item.lastName="{ item }">
          <VBtn variant="text">
            {{ item.lastName }}
          </VBtn> 
        </template>

        <template #item.role="{ item }">
          <span
            v-for="myrole in item.roles"
            :key="myrole.id"
          >
            {{ myrole.name +' ' }}
          </span>
        </template>
      

        <template #item.active="{ item }">
          <VChip
            v-bind="resolveStatus(item.active)"
            density="default"
            label
            size="small"
          />
        </template>


        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn
            v-if="can('update','user')"
            @click="router.push('/user/'+item.id)"
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
  <AddEditRoleDialog
    v-model:is-dialog-visible="isAddRoleDialogVisible"
    @fetch-roles="fetchRoles"
  />

  <AddEditRoleDialog
    v-model:is-dialog-visible="isEditRoleDialogVisible"
    v-model:role-permissions="rolePermissions"
    @fetch-roles="fetchRoles"
  />
</template>
