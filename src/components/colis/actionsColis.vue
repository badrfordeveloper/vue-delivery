<script setup>
import { can } from '@layouts/plugins/casl'

const props = defineProps({
  currentStatut: {
    type: String,
    required: true,
  },
  item: {
    type: Object,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits([
  'getItemData',
])

const itemData= ref({})
const statut = ref("")
const formActions = ref(false)
const refForm = ref()

const actionObject = ref({
  id: null,
  statut: "",
  commentaire: "",
  date: "",
  file: "",
})


watch(
  () => props.currentStatut, 
  newVal => {  statut.value =newVal }, { immediate: true }, // Trigger the watcher immediately
)

watch(
  () => props.item, 
  newVal => {  itemData.value = newVal }, { immediate: true }, // Trigger the watcher immediately
)

const loadingAction = ref("")

const showFormAction = action =>{
  formActions.value = true
  actionObject.value.statut = action
}

const validateSendAction = async () => {
  const { valid } = await refForm.value.validate()
  if (valid) {
    await updateAction(actionObject.value.statut)
  }
}

const updateAction = async action => {
  actionObject.value.statut = action
  actionObject.value.id = props.id

  loadingAction.value = action


  const formData = new FormData()

  formData.append('file', actionObject.value.file)
  formData.append('id', actionObject.value.id)
  formData.append('statut', actionObject.value.statut)
  formData.append('commentaire', actionObject.value.commentaire)
  formData.append('date', actionObject.value.date)

  $api({
    method: "POST",
    url: "/api/updateStatutColis",
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(async response => {
      if (response.status === 200) {
        toast.success(response.data)
        
        if(action != 'COMMENTAIRE'){
          statut.value = action
        }
        formActions.value = false

        emit('getItemData')
      }
      loadingAction.value = ""
    })
    .catch(error => {
      loadingAction.value = ""
      if (error.response && error.response.status === 422) {
        toast.error(error.response.data.message)
      }else{
        toast.error("something wrong")
      }
    })
}

const isActionLivreur = can('livreur', 'action')
const isActionAdmin = can('admin', 'action')
const isActionGestionnaire = can('gestionnaire', 'action')

const actions = computed(() => {
  let result = []
  if(isActionAdmin){
    result.push({
      ...statutInfos("EN_ATTENTE"),
      statut: "EN_ATTENTE",
    })
    result.push({
      ...statutInfos("ENTREPOT"),
      statut: "ENTREPOT",
    })
  }


  result.push({
    text: "Commentaire",
    color: "secondary",
    statut: "COMMENTAIRE",
  })



  if(["ENTREPOT", "REPORTE", "PAS_REPONSE"].includes(statut.value) && isActionLivreur){
    result.push({
      ...statutInfos("EN_COURS_LIVRAISON"),
      statut: "EN_COURS_LIVRAISON",
    })
  }

  if(["EN_COURS_LIVRAISON"].includes(statut.value) && isActionLivreur){
    result.push({
      ...statutInfos("LIVRE"),
      statut: "LIVRE",
    })
    result.push({
      ...statutInfos("LIVRE_PARTIELLEMENT"),
      statut: "LIVRE_PARTIELLEMENT",
    })
    result.push({
      ...statutInfos("PAS_REPONSE"),
      statut: "PAS_REPONSE",
    })
    result.push({
      ...statutInfos("REPORTE"),
      statut: "REPORTE",
    })
    result.push({
      ...statutInfos("ANNULE"),
      statut: "ANNULE",
    })
    result.push({
      ...statutInfos("REFUSE"),
      statut: "REFUSE",
    })
  }

  
 
 

  return result
})
</script>

<template>
  <VRow
    v-if="!formActions"
    class="text-center v-row m-0"
  >
    <VCol
      v-for="action,index in actions"
      :key="index"
      cols="6"
    >
      <VBtn 
        :color="action.color"
        :loading="loadingAction==action.statut"
        style="width: inherit;"
        @click="showFormAction(action.statut)"
      >
        {{ action.text }}
      </VBtn>
    </VCol>
    <div v-if="actions.length == 0">
      Aucune action requise
    </div>
  </VRow>

  <div v-else>
    <VForm

      ref="refForm"
      class="mt-3"
    >
      <p class="text-center">
        Statut à envoyer : {{ statutInfos(actionObject.statut).text }}
      </p>

      <div v-if=" ['LIVRE_PARTIELLEMENT','PAS_REPONSE','REPORTE','REFUSE','ANNULE'].includes(actionObject.statut) ">
        <VRow class="d-flex align-center justify-center">
          <VCol
            md="6"
            cols="12"
          >
            <VFileInput
              v-model="actionObject.file"
              :rules="[requiredValidator]"
              accept="image/*"
              label="File input"
            />
          </VCol>
        </VRow>
      </div>

      <div v-if=" actionObject.statut== 'REPORTE'">
        <VRow class="d-flex align-center justify-center">
          <VCol
            md="6"
            cols="12"
          >
            <AppDateTimePicker
              v-model="actionObject.date"
              :rules="[requiredValidator]"
              label="Date & TIme"
              placeholder="Select date and time"
              :config="{ enableTime: false, dateFormat: 'Y-m-d' }"
            />
          </VCol>
        </VRow>
      </div> 
      
      <div>
        <VRow class="d-flex align-center justify-center">
          <VCol
            md="6"
            cols="12"
          >
            <AppTextarea
              v-model="actionObject.commentaire"
              rows="2"
              row-height="20"
              label="Commentaire"
              :rules="['COMMENTAIRE'].includes(actionObject.statut) ? [requiredValidator] : []"
              placeholder="Commentaire"
            />
          </VCol>
        </VRow>
      </div>
      <VRow>
        <!-- 👉 Form Actions -->
        <VCol
          cols="12"
          class="d-flex flex-wrap justify-center gap-4"
        >
          <VBtn
            color="secondary"
            @click="formActions = false"
          >
            retour 
          </VBtn>
          <VBtn
            :loading="loadingAction==actionObject.statut"
            @click="validateSendAction"
          >
            Envoyer 
          </VBtn>
        </VCol>
      </VRow>
    </VForm>
  </div>
</template>


