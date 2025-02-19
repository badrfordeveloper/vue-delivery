<script setup>
import { can } from '@layouts/plugins/casl'

const props = defineProps({
  currentStatut: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
})

const statut = ref("")
const formActions = ref(false)
const refForm = ref()

const actionObject = ref({
  id: null,
  statut: "",
  nombre_colis_ramasseur: "",
  commentaire: "",
  date: "",
  file: "",
})


watch(
  () => props.currentStatut, 
  newVal => {  statut.value =newVal }, { immediate: true }, // Trigger the watcher immediately
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
  $api({
    method: "POST",
    url: "/api/updateStatutRamassage",
    data: actionObject.value,
  })
    .then(async response => {
      if (response.status === 200) {
        toast.success(response.data)
        if(action != 'COMMENTAIRE'){
          statut.value = action
        }
        
        formActions.value = false
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
const isActionGestionnaire = can('gestionnaire', 'action')

const actions = computed(() => {
  let result = []
  result.push({
    text: "Commentaire",
    color: "secondary",
    statut: "COMMENTAIRE",
  })
  if(isActionGestionnaire){
    result.push({
      ...statutInfos("ENTREPOT"),
      statut: "ENTREPOT",
  })
  }
  if(statut.value == "EN_ATTENTE"){
    if(isActionLivreur){
      result.push({
        ...statutInfos("EN_COURS_RAMASSAGE"),
        statut: "EN_COURS_RAMASSAGE",
      })
    }
      
  }
  else if( statut.value == "EN_COURS_RAMASSAGE" || statut.value == "REPORTE"){
    
    if(isActionLivreur){
      result.push({
        statut: "RAMASSE",
        ...statutInfos("RAMASSE"),
      })
      result.push({
        statut: "REPORTE",
        ...statutInfos("REPORTE"),
      })
    }

    if(isActionGestionnaire){
      result.push({
        statut: "ANNULE",
        ...statutInfos("ANNULE"),
      })
    }

  }
  
  return result
})
</script>

<template>
    <VForm
      ref="refForm"
      class="mt-3"
    >
      <p class="text-center">
        Statut à envoyer : {{ statutInfos(actionObject.statut).text }}
      </p>
      <div v-if=" actionObject.statut== 'RAMASSE'">
        <VRow class="d-flex align-center justify-center">
          <VCol
            md="6"
            cols="12"
          >
            <AppTextField
              v-model="actionObject.nombre_colis_ramasseur"
              :rules="[requiredValidator]"
              placeholder="Nombre de colis"
              label="Nombre de colis"
              type="number"
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
              :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
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
              :rules="['COMMENTAIRE','REPORTE','ANNULE'].includes(actionObject.statut) ? [requiredValidator] : []"
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
</template>


