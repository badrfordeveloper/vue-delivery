<script setup>

const props = defineProps({
  currentStatut: {
    type: String,
    required: true,
  },
  id: {
    required: true,
  }
})

const statut = ref("");
const formActions = ref(false);
const refForm = ref()

const actionObject = ref({
  id:null,
  statut:"",
  nombre_colis_ramasseur:"",
  date:"",
  file:"",
})


watch(
  () => props.currentStatut, 
  newVal => {  statut.value =newVal }, { immediate: true }, // Trigger the watcher immediately
)
const loadingAction = ref("")

const showFormAction = (action) =>{
  formActions.value = true
  actionObject.value.statut = action
}

const validateSendAction = async () => {
  const { valid } = await refForm.value.validate()
  if (valid) {
    await updateAction(actionObject.value.statut)
  }
}
const updateAction = async (action) => {
  actionObject.value.statut = action
  actionObject.value.id = props.id

  loadingAction.value = action
    $api({
      method: "POST",
      url:"/api/updateStatutRamassage",
      data: actionObject.value,
    })
    .then(async response => {
      if (response.status === 200) {
        toast.success(response.data)
        statut.value = action
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

const actions = computed(() => {
  let result = [];
  if(statut.value == "EN_ATTENTE"){
    result.push({
      statut: "EN_COURS_RAMASSAGE",
      text: "Lancer Ramassage",
      color: "info",
      requiredAction:false
    })
  }
  else if( statut.value == "EN_COURS_RAMASSAGE"){

    result.push({
      statut: "RAMASSE",
      text: "Ramassée",
      color: "info",
      requiredAction:true
    })
    result.push({
      statut: "REPORTE",
      text: "Reporté",
      color: "error",
      requiredAction:true
    })
    result.push({
      statut: "ANNULE",
      text: "Annule",
      color: "error",
      requiredAction:false
    })

  }
  return result
})

</script>

<template>
  <div class="text-center" v-if="!formActions">
    <VBtn 
    
      v-for="action,index in actions" :key="index"
      :color="action.color"
      class="ma-1"
      @click="action.requiredAction == true ? showFormAction(action.statut) : updateAction(action.statut)"
      :loading="loadingAction==action.statut"
      >
      {{ action.text }}
      </VBtn>
  </div>

  <div v-else>
    <VForm
    ref="refForm"
    class="mt-3"
  >
    <div v-if=" actionObject.statut== 'RAMASSE'" >

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

    <VRow>
      <!-- 👉 Form Actions -->
      <VCol
        cols="12"
        class="d-flex flex-wrap justify-center gap-4"
      >
        <VBtn
          @click="formActions = false"
          color="secondary"
        >
          retour 
        </VBtn>
        <VBtn
          :loading="loadingAction==actionObject.statut"
          @click="validateSendAction()"
        >
          Envoyer 
        </VBtn>
      </VCol>
    </VRow>
  </VForm>

  </div>


   
</template>

<style lang="scss">
</style>
