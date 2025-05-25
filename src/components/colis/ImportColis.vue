<script setup>
import { can } from '@layouts/plugins/casl'

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
  isShowItem: {
    type: Boolean,
    required: true,
  },
})


const emit = defineEmits([
  'update:isShowItem',
  'fetchItems',
])


let defaultItem = {
  frais_livreur: '',
  livreur_id: '',
}

const livreurs = await $api('/api/ramasseurs').then(response => response.data)

const itemData = ref(structuredClone(toRaw(defaultItem)))
const file = ref()

const loadingItem = ref(false)
const colis_ids = ref()


watch(
  () => props.items,
  newItems => {
    // Map the items to their IDs
    colis_ids.value = newItems.map(item => item.id)
  },
  { 
    immediate: true, // Run immediately on component mount
    deep: true,      // Not needed for array replacement, but good for deep changes
  },
)

const onReset = () => {
  emit('update:isShowItem', false)
  emit('fetchItems')
  itemData.value = structuredClone(toRaw(defaultItem))
}

const isActionGestionnaire = can('gestionnaire', 'action')


const loadingUpdate = ref(false)
const validationErrors = ref([])




const importColis = async () => {
  const formData = new FormData()

  formData.append('file', file.value)

  loadingUpdate.value = true

  validationErrors.value = []
  await $api({
    method: "POST",
    url: "/api/importColis",
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(async response => {
      if (response.status === 200) {
        toast.success(response.data.message)
        onReset()
      }
      loadingUpdate.value = false
    })
    .catch(error => {
      loadingUpdate.value = false
      if (error.response && error.response.status === 422) {
        toast.error(error.response.data.message)

        /*  for (let field in error.response.data.errors) {
          toast.error(` ${errors[field].join(', ')}`)       
        } */
        validationErrors.value =error.response.data.errors
    
      }else{
        toast.error("something wrong")
      }
    })
}





const fileRules =[
  fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'La taille de fichier doit être inférieure à 1 Mo !',
]
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 900"
   
    :model-value="props.isShowItem"
    @update:model-value="onReset"
  >
    <!-- 👉 Dialog close btn -->
    <DialogCloseBtn @click="onReset" />


    <!-- 👉 Billing Address -->
    <AppCardActions
      title="Affectation des Colis"
      style="overflow: scroll;max-height: 90vh;"
      :loading="loadingItem"
      no-actions
    >
      <VCard>
        <VCardText v-if="isActionGestionnaire">
          <VFileInput
            v-model="file"
            label="Excel File"
            accept=".xlsx,.xls"
            prepend-icon="mdi-file-excel"
            :rules="fileRules"
            required
            clearable
            class="mb-4"
          />

          <VRow>
            <!-- 👉 Form Actions -->
            <VCol
              cols="12"
              class="d-flex flex-wrap justify-center gap-4"
            >
              <VBtn
                :loading="loadingUpdate"
                @click="importColis"
              >
                Envoyer 
              </VBtn>
            </VCol>
          </VRow>

          <VRow>
            <!-- 👉 Form Actions -->
            <VCol
              v-for="error in validationErrors"
              :key="error"
              cols="12"
            >
              <VAlert color="error">
                {{ error[0].replace('There was an error on row', 'Il y a une erreur à la ligne') }}
              </VAlert>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </appcardactions>
  </VDialog>
</template>

<style scoped>
.parms-btn {
  z-index: 2;
}
</style>


